import React, { Component } from "react";
import AssetService from "../services/AssetService";

class ViewAsset extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            asset: {
            },
        };
    }

    componentDidMount() {
        AssetService.getAssetById(this.state.id).then((res) => {
            this.setState({ asset: res.data });
        });
    }
    cancel() {
        this.props.history.push("/dashboard");
    }
    render() {
        return (
            <div>
                <div className="card col-md-6 offset-md-3" style={{ marginTop: "22px" }}>
                    <h3 className="text-center" style={{ marginTop: "22px" }}>View Asset Details</h3>
                    <div className="card-body">
                        <div className="container">
                            <div className="row">
                                <label>Description: </label>
                                <div>{this.state.asset.description}</div>
                            </div>
                        </div>
                         <div className="card-body">
                            <div className="row">
                                <label>Date: </label>
                                <div>{this.state.date}</div>
                            </div>
                        </div>

                        <div className="card-body">
                            <div className="row">
                                <label>Asset Tag: </label>
                                <div>{this.state.assetTag}</div>
                            </div>
                        </div>

                        <div className="card-body">
                            <div className="row">
                                <label>Model: </label>
                                <div>{this.state.asset.model}</div>
                            </div>
                        </div>

                        <div className="card-body">
                            <div className="row">
                                <label>Location: </label>
                                <div>{this.state.asset.location}</div>
                            </div>
                        </div>

                        <div className="card-body">
                            <div className="row">
                                <label>Type: </label>
                                <div>{this.state.asset.type}</div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <label>Assignee: </label>
                                <div>{this.state.asset.assignee}</div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <label>Assignee Email: </label>
                                <div>{this.state.asset.assigneeEmail}</div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <label>Serial Number: </label>
                                <div>{this.state.asset.serialnumber}</div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <label>Manufacturer: </label>
                                <div>{this.state.asset.manufacturer}</div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <label>Project: </label>
                                <div>{this.state.asset.project}</div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <label>Asset Status: </label>
                                <div>{this.state.asset.assetStatus}</div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <label>Checked Asset: </label>
                                <div>{this.state.asset.checkedAsset}</div>
                            </div>
                        </div>
                        <div className="text-center">
                            <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ margin: "22px", alignSelf:"center" }}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewAsset;
