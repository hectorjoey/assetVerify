
import React, { Component } from "react";
import AssetService from "../services/AssetService";
import { Link } from 'react-router-dom';
import { Visibility, Delete, Edit, Add } from '@material-ui/icons'
import '../App.css'

class AssetList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: JSON.parse(localStorage.getItem('user'))?.state,
      assets: [],
    };

    this.createAsset = this.createAsset.bind(this);
    this.editAsset = this.editAsset.bind(this);
    this.deleteAsset = this.deleteAsset.bind(this);
    this.viewAsset = this.viewAsset.bind(this);
  }

  componentDidMount() {
    AssetService.getAssets().then((res) => {
      this.setState({ assets: res.data });
    });

  }

  deleteAsset(id) {
    AssetService.deleteAsset(id).then((res) => {
      this.setState({
        assets: this.state.assets.filter((asset) => asset.id !== id),
      });
    });
  }

  editAsset(id) {
    this.props.history.push(`/update-asset/${id}`);
  }

  viewAsset(id) {
    this.props.history.push(`/view-asset/${id}`);
  }

  createAsset() {
    this.props.history.push("/create-asset");

  }
  cancel() {
    this.props.history.push("/dashboard");
  }
  

  render() {
    const user = JSON.parse(localStorage.getItem('user'));
    const userType = user?.userType;
    const userLocation = user?.result?.states
    const userAssets = this.state.assets.map((x) => x).filter((x) => x.location === userLocation)
    const data = userType !== 'User' ? this.state.assets : userAssets

    return (
      <div className="asset-list">
        <div className="row">
          <div className="row">
            <div className="col-lg-12">
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
                  <td className="text-center"><i onClick={() => this.deleteAsset(asset?.id)} className="fa fa-trash" style={{ color: "red" }} ><Delete /> </i></td>
                  <td className="text-center"><Link to={`/view-asset/${asset?.id}`} className="view" style={{ alignItem: "center", color: "green" }}> <Visibility /></Link> </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ margin: "22px" }}>Cancel</button>
      </div>
    );
  }
}

export default AssetList;