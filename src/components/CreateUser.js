import React, { Component } from "react";
import UserService from "../services/UserService";

class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      userType: "",
      states: "",
    };

    this.changeFirstnameHandler = this.changeFirstnameHandler.bind(this);
    this.changeLastnameHandler = this.changeLastnameHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changePasswordlHandler = this.changePasswordlHandler.bind(this);
    this.handleSelectUserType = this.handleSelectUserType.bind(this);
    this.handleSelectUserStates = this.handleSelectUserStates.bind(this);

    this.addUser = this.addUser.bind(this);
  }
  addUser = (e) => {
    e.preventDefault();
    let user = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      password: this.state.password,
      userType: this.state.userType,
      states: this.state.states,
    };
    console.log("user => " + JSON.stringify(user));

    UserService.createUser(user).then((res) => {
      this.props.history.push("/dashboard");
    });
  };

  changeFirstnameHandler = (event) => {
    this.setState({ firstname: event.target.value });
  };

  changeLastnameHandler = (event) => {
    this.setState({ lastname: event.target.value });
  };

  changeEmailHandler = (event) => {
    this.setState({ email: event.target.value });
  };
  changePasswordlHandler = (event) => {
    this.setState({ password: event.target.value });
  };

  handleSelectUserType = (event) => {
    this.setState({ userType: event.target.value });
    console.log("usertype");
  };

  handleSelectUserStates = (event) => {
    this.setState({ states: event.target.value });
    console.log("states");
  };
  cancel() {
    this.props.history.push("/dashboard");
  }

  render() {
    return (
      <React.Fragment>
        <div
          className="container"
          style={{ marginTop: "15px", padding: "50px" }}>
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center" style={{ margin: "15px" }}> Create New User</h3>
              <div className="card-body">
                <form>
                  <div className="container">
                    <div className="form-group">
                      <label style={{ marginTop: "10px" }}> First Name </label>
                      <div className="col-sm-12">
                        <input placeholder=" " name="firstname" className="form-control" value={this.state.firstname} onChange={this.changeFirstnameHandler} />
                      </div>

                      <label style={{ marginTop: "10px" }}> Last Name </label>
                      <div className="col-sm-12">
                        <input placeholder=" " name="lastname" className="form-control" value={this.state.lastname} onChange={this.changeLastnameHandler} />
                      </div>

                      <label style={{ marginTop: "10px" }}> Email </label>
                      <div className="col-sm-12">
                        <input type="email" name="email" className="form-control" value={this.state.email} onChange={this.changeEmailHandler} />
                      </div>

                      <label style={{ marginTop: "10px" }}> Password </label>
                      <div className="col-sm-12">
                        <input type="password" name="password" className="form-control" value={this.state.password} onChange={this.changePasswordlHandler} />
                      </div>

                      <div className="col-12" style={{ marginTop: "10px" }}>
                        <label className="visible">Role</label>

                        <select className="form-select" onChange={this.handleSelectUserType}>
                          <option defaultValue>Select Role</option>
                          <option userType="1">Admin</option>
                          <option userType="2">User</option>
                        </select>
                      </div>

                      <div className="col-12" style={{ marginTop: "15px", marginBottom: "15px" }} >
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
                        <button className="btn btn-success" onClick={this.addUser}>Create User</button>

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

export default CreateUser