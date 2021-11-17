
import React, { useEffect, useState, useCallback} from "react";
import AssetService from "../services/AssetService";
import { Link, useHistory } from 'react-router-dom';
import { Visibility, Delete, Edit, Add } from '@material-ui/icons'
import '../App.css'

const initialDate = { startdate: '', endDate: ''}
const  AssetList = () => {
  const history = useHistory();
  const [assets, setAssets] = useState([])
  const [filterassets, setFilterAssets] = useState([])
  const [date, setDate] = useState(initialDate);
  const user = JSON.parse(localStorage.getItem('user'));
  const userType = user?.userType;
  const userLocation = user?.result?.states
  const userAssets = assets.map((x) => x).filter((x) => x.location === userLocation)
  const data = userType !== 'User' ? assets : userAssets




  const searchData = () => {
    AssetService.getAssets().then((res) => {
      setAssets(res.data.filter((dates) => dates.checkedDate.startsWith(date.startdate) || dates.checkedDate.endsWith(date.endDate)))
    });
  }
  
  useEffect(() => {
    AssetService.getAssets().then((res) => {
      setAssets(res.data);
    });

  }, [])

  useEffect(() => {
    if(date.startdate !== '' && date.endDate !== '') {
    searchData()
    console.log('render')
    }
  }, [date.endDate, date.startdate])

  const deleteAsset = (id) => {
    AssetService.deleteAsset(id).then((res) => {
      setAssets(assets.filter((asset) => asset.id !== id),
      )})
  }

  // const editAsset = (id) => {
  //   this.props.history.push(`/update-asset/${id}`);
  // }

  // const viewAsset = (id) => {
  //   this.props.history.push(`/view-asset/${id}`);
  // }

  // const createAsset = () => {
  //   this.props.history.push("/create-asset");

  // }
  const cancel = () => {
    history.push("/dashboard");
  }
  

  console.log(assets)
    return (
      <div className="asset-list">
        <div className="row">
          <div className="row">
            <div className="col-lg-12">
              <form onSubmit={searchData}>
                <div>
                  <label for="start">Start date:</label>
                  <input 
                      type="date" id="start" 
                      name="startDate"
                      value={date.startdate}
                      onChange={(e) => setDate({...date, startdate: e.target.value})} 
                  />
                  <input 
                      type="date" id="end" 
                      name="endDate"
                      value={date.endDate}
                      onChange={(e) => setDate({...date, endDate: e.target.value})} 
                  />
                  </div>
              </form>
              
              <Link to={"/create-asset"} style={{ marginBottom: "10px", marginTop: "22px" }} className="btn btn-primary float-lg-end">
                <Add />
                Add New Asset
              </Link>
            </div>

          </div>
          <table className="table table-striped table-bordered">
            <thead style={{ textAlign: "center" }}>
              <tr>
                <th>Id</th>
                <th>Date</th>
                <th>Description</th>
                <th>Asset Tag</th>
                <th>Model</th>
                <th>Location</th>
                <th>Assignee</th>
                <th>Assignee Email</th>
                <th>Serial Number</th>
                <th>Project</th>
                <th>Checked Asset</th>
                <th>Checked Date</th>
                <th colSpan="3">Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((asset) => (
                <tr key={asset?.id}>
                  <td>{asset?.id}</td>
                  <td>{asset?.date}</td>
                  <td>{asset?.description}</td>
                  <td>{asset?.assetTag}</td>
                  <td>{asset.model}</td>
                  <td>{asset?.location}</td>
                  <td>{asset?.assignee}</td>
                  <td>{asset.assigneeEmail}</td>
                  <td>{asset?.serialnumber}</td>
                  <td>{asset?.project}</td>
                  <td>{asset?.checkedAsset}</td>
                  <td>{asset?.checkedDate}</td>
                  <td className="text-center"><Link to={`/update-asset/${asset?.id}`} className="edit"><Edit /></Link></td>
                  <td className="text-center"><i onClick={() => deleteAsset(asset?.id)} className="fa fa-trash" style={{ color: "red" }} ><Delete /> </i></td>
                  <td className="text-center"><Link to={`/view-asset/${asset?.id}`} className="view" style={{ alignItem: "center", color: "green" }}> <Visibility /></Link> </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button className="btn btn-danger" onClick={cancel} style={{ margin: "22px" }}>Cancel</button>
      </div>
    );
  }


export default AssetList;