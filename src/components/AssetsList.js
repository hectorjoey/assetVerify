import React, { Component } from 'react'
// import { DataGrid } from '@material-ui/data-grid';
import { Add } from "@material-ui/icons"
import { Link, } from 'react-router-dom';
import '../app.css'
import MaterialTable from 'material-table'
import AssetService from '../services/AssetService'

const columns = [
    { title: "ID", field: "id" },
    { title: "Date", field: 'date' },
    { title: "Description", field: "description" },
    // { title: "Manufacturer", field: 'manufacturer' },
    // { title: "Model", field: 'model' },
    // { title: "Type", field: 'type' },
    { title: "Asset Tag", field: "assetTag" },
    { title: "Location", field: 'location' },
    { title: "Serial Number", field: 'serialnumber' },
    { title: "Project", field: "project" },
    { title: "Checked Asset", field: 'checkedAsset' },
    { title: "Asset Status", field: 'assetStatus' },
    { title: "Assignee", field: "assignee" },
    { title: "Assignee Email", field: "assigneeEmail" },
]

const AssetTitle = "All Assets";
class AssetsLIst extends Component {

    constructor(props) {
        super(props);
        this.state = {
            assets: [],
        }

    }
    componentDidMount() {
        console.log("properties: " + this.props);
        AssetService.getAssets().then((res) => {
            this.setState({ assets: res.data });
        });
    }

    render() {
        return (
             <>
                <div className="col-lg-12">
                    <Link to={"/create-asset"} style={{ marginBottom: "10px", marginRight:"12px"}} className="btn btn-primary float-lg-end">
                        <Add />
                        Create Asset
                    </Link>
                </div>
            <div style={{ marginTop: "30px", padding: "10px" }}>
                <MaterialTable title={AssetTitle} data={this.state.assets} columns={columns}/>
            </div >
            </>

        );
    }
}
export default AssetsLIst