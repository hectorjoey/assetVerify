import React, { Component } from "react";
// import AssetService from "../services/AssetService"
import { CreateAssets } from "../services/AssetService"
// import Topbar from "../components/topbar/Topbar"

class CreateAsset extends Component {
  constructor(props) {
    super(props);

    this.state = {
      description: "",
      assetTag: "",
      model: "",
      location: "",
      assignee: "",
      assigneeEmail: "",
      serialnumber: "",
      manufacturer: "",
      project: "",
      assetStatus: "",
      checkedAsset: "",
      loading: false,
    };


    this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
    this.changeAssetTagHandler = this.changeAssetTagHandler.bind(this);
    this.changeModelHandler = this.changeModelHandler.bind(this);
    this.changeAssigneeHandler = this.changeAssigneeHandler.bind(this);
    this.changeAssigneeEmailHandler = this.changeAssigneeEmailHandler.bind(this);
    this.handleSelectCheckedAsset = this.handleSelectCheckedAsset.bind(this);
    this.handleSelectUserStates = this.handleSelectUserStates.bind(this);
    this.changeSerialnumberHandler = this.changeSerialnumberHandler.bind(this);
    this.changeManufacturerHandler = this.changeManufacturerHandler.bind(this);
    this.changeProjectHandler = this.changeProjectHandler.bind(this);
    this.changeAssetStatusHandler = this.changeAssetStatusHandler.bind(this);


    this.addAsset = this.addAsset.bind(this);
  }
  addAsset = (e) => {
    e.preventDefault();
    this.setState({ loading: true })
    let asset = {
      userId: JSON.parse(localStorage.getItem('user'))?.id,
      description: this.state.description,
      assetTag: this.state.assetTag,
      model: this.state.model,
      assignee: '',
      assigneeEmail: '',
      checkedAsset: this.state.checkedAsset,
      location: this.state.location,
      serialnumber: this.state.serialnumber,
      manufacturer: this.state.manufacturer,
      project: this.state.project,
      assetStatus: this.state.assetStatus,

    };
    if (this.state.description) {
      if (this.state.assetTag) {
        if (this.state.model) {
          // if (this.state.assignee) {
          //   if (this.state.assigneeEmail) {
          // if (this.state.checkedAsset) {
          if (this.state.location) {
            if (this.state.serialnumber) {
              if (this.state.manufacturer) {
                // if (this.state.type) {
                if (this.state.project) {
                  if (this.state.assetStatus) {
                    CreateAssets(asset).then((res) => {
                      if (res === 'Request failed with status code 500') {
                        alert('Network error')
                        this.setState({ loading: false })
                      } else {
                        this.setState({ loading: false })
                        this.props.history.push("/dashboard");
                      }
                      console.log({ res });
                    });
                  } else {
                    alert("Please enter an Asset Status!")
                    this.setState({ loading: false })
                  }
                } else {
                  alert("Please enter a Project!")
                  this.setState({ loading: false })
                }
                // }
              } else {
                alert("Please enter a Manufacturer!")
                this.setState({ loading: false })
              }
            } else {
              alert("Please enter a Serial Number!")
              this.setState({ loading: false })
            }
          } else {
            alert("Please enter a Location!")
            this.setState({ loading: false })
          }
          // } else {
          //   alert("Please enter a Checked Asset!")
          //   this.setState({ loading: false })
          // }
          //   } else {
          //     alert("Please enter an Assignee Email!")
          //     this.setState({ loading: false })
          //   }
          // } else {
          //   alert("Please enter an Assignee")
          //   this.setState({ loading: false })
          // }
        } else {
          alert("please enter a model!")
          this.setState({ loading: false })
        }
      } else {
        alert("Please enter an Asset Tag!")
        this.setState({ loading: false })
      }
    } else {
      alert("Please enter description!")
      this.setState({ loading: false })
    }
  };

  changeDescriptionHandler = (event) => {
    this.setState({ description: event.target.value });
  };

  changeAssetTagHandler = (event) => {
    this.setState({ assetTag: event.target.value });
  };

  changeModelHandler = (event) => {
    this.setState({ model: event.target.value });
  };
  changeAssigneeHandler = (event) => {
    this.setState({ assignee: event.target.value });
  };

  changeAssigneeEmailHandler = (event) => {
    this.setState({ assigneeEmail: event.target.value });
  };

  handleSelectCheckedAsset = (event) => {
    this.setState({ checkedAsset: event.target.value });
  };

  handleSelectUserStates = (event) => {
    this.setState({ location: event.target.value });
  };
  changeSerialnumberHandler = (event) => {
    this.setState({ serialnumber: event.target.value });
  };

  changeManufacturerHandler = (event) => {
    this.setState({ manufacturer: event.target.value });
  };

  changeProjectHandler = (event) => {
    this.setState({ project: event.target.value });
  };

  changeAssetStatusHandler = (event) => {
    this.setState({ assetStatus: event.target.value });
  };


  cancel() {
    this.props.history.push("/dashboard");
  }

  render() {
    // const userId = JSON.parse(localStorage.getItem('user')).id

    return (
      <React.Fragment>
        <div className="col-lg-12" style={{ marginTop: "15px", }}>
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center" style={{ margin: "10px" }}> Create New Asset</h3>
              <div className="card-body">
                <form>
                  <div className="container">
                    <div className="form-group">
                      <label style={{ marginTop: "10px" }}> Description </label>
                      <div className="col-sm-12">
                        <input placeholder=" " name="description" className="form-control" value={this.state.description} onChange={this.changeDescriptionHandler} />
                      </div>

                      <label style={{ marginTop: "10px" }}> Asset Tag </label>
                      <div className="col-sm-12">
                        <input placeholder=" " name="assetTag" className="form-control" value={this.state.assetTag} onChange={this.changeAssetTagHandler} />
                      </div>

                      <label style={{ marginTop: "10px" }}> Model </label>
                      <div className="col-sm-12">
                        <input name="model" className="form-control" value={this.state.model} onChange={this.changeModelHandler} />
                      </div>

                      {/* <label style={{ marginTop: "10px" }}> Assignee </label>
                      <div className="col-sm-12">
                        <input name="assignee" className="form-control" value={this.state.assignee} onChange={this.changeAssigneeHandler} />
                      </div>

                      <label style={{ marginTop: "10px" }}>Assignee Email </label>
                      <div className="col-sm-12">
                        <input type="email" name="assigneeEmail" className="form-control" value={this.state.assigneeEmail} onChange={this.changeAssigneeEmailHandler} />
                      </div> */}

                      <label style={{ marginTop: "10px" }}> Serial Number </label>
                      <div className="col-sm-12">
                        <input name="serialnumber" className="form-control" value={this.state.serialnumber} onChange={this.changeSerialnumberHandler} />
                      </div>
                      <label style={{ marginTop: "10px" }}> Manufacturer </label>
                      <div className="col-sm-12">
                        <input name="manufacturer" className="form-control" value={this.state.manufacturer} onChange={this.changeManufacturerHandler} />
                      </div>
                      <label style={{ marginTop: "10px" }}> Project </label>
                      <div className="col-sm-12">
                        <input name="project" className="form-control" value={this.state.project} onChange={this.changeProjectHandler} />
                      </div>
                      <label style={{ marginTop: "10px" }}> Asset Status </label>
                      <div className="col-sm-12">
                        <input name="assetStatus" className="form-control" value={this.state.assetStatus} onChange={this.changeAssetStatusHandler} />
                      </div>

                      <div className="col-12" style={{ marginTop: "15px" }}>
                        <label className="visible">Checked Type</label>

                        <select className="form-select" onChange={this.handleSelectCheckedAsset}>
                          <option defaultValue>Select Checked Type</option>
                          <option checkedAsset="1">Checked In</option>
                          <option checkedAsset="2">Checked Out</option>
                        </select>
                      </div>

                      <div className="col-12" style={{ marginTop: "15px" }} >
                        <label className="visible">Location</label>
                        <select className="form-select" onChange={this.handleSelectUserStates}>
                          <option defaultValue> Select Location</option>
                          <option states="1">Country Office</option>
                          <option states="2">Anambra</option>
                          <option states="3">Akwa Ibom</option>
                          <option states="4">Bayelsa</option>
                          <option states="5">Borno</option>
                          <option states="6">Cross-River</option>
                          <option states="7">Edo</option>
                          <option states="8">Lagos</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-row text-center" style={{ marginTop: "12px" }}>
                      <div className="col-12">
                        {/* <button className="btn btn-success" onClick={this.addAsset}>
                          <div class="spinner-border text-light" role="status"></div>
                          Create Asset</button> */}
                        <button className="btn btn-success" onClick={this.addAsset}>
                          {this.state.loading && <div class="spinner-border text-light" role="status"></div>}
                          Add Asset</button>

                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ margin: "22px" }}>Cancel</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CreateAsset;