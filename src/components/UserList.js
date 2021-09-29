import React, { Component } from "react";
import UserService from "../services/UserService";
import { Link } from 'react-router-dom';
import { Visibility, Delete, Edit, Add } from '@material-ui/icons'
import '../app.css'



class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
  
    };

    this.createUser = this.createUser.bind(this);
    this.editUser = this.editUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.viewUser = this.viewUser.bind(this);
  }

  componentDidMount() {
    console.log("properties: " + this.props);
    UserService.getUsers().then((res) => {
      this.setState({ users: res.data });
    });

  }

  deleteUser(id) {
    UserService.deleteUser(id).then((res) => {
      this.setState({
        users: this.state.users.filter((user) => user.id !== id),
      });
    });
  }

  editUser(id) {
    this.props.history.push(`/update-user/${id}`);
  }

  viewUser(id) {
    this.props.history.push(`/view-user/${id}`);
  }

  createUser() {
    this.props.history.push("/create-user");

  }

  cancel() {
    this.props.history.push("/dashboard");
  }

  render() {
    return (
      <>
        <div className="list">
          <div className="row">
            <div className="row">
              <div className="col-lg-12">
                <Link to={"/create-user"} style={{ marginBottom: "10px", marginTop: "22px" }} className="btn btn-primary float-lg-end">
                  <Add />
                  Create New User
                </Link>
              </div>
              <div>
                {/* <UserSearch searchTerm={this.state.searchTerm} handleSearchItemChange={this.handleSearchTermChange}/> */}
                {/* {this.state.users.filter(this.filterUsers).map(user =>)} */}
              </div>
            </div>
            <table className="table table-striped table-bordered">
              <thead style={{ textAlign: "center" }}>
                <tr >
                  <th>Id</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Location</th>
                  <th>Role</th>
                  <th colSpan="3">Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.firstname}</td>
                    <td>{user.lastname}</td>
                    <td>{user.email}</td>
                    <td>{user.states}</td>
                    <td>{user.userType}</td>
                    <td className="text-center"><Link to={`/update-user/${user.id}`}  className="fas fa-edit"><Edit /></Link></td>
                      <td className="text-center"><i onClick={() => this.deleteUser(user.id)} className="fa fa-trash"style={{color:"red"}} ><Delete /> </i></td>
                      <td className="text-center"><Link to={`/view-user/${user.id}`} className="view" style={{alignItem:"center", color:"green"}}> <Visibility /></Link> </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ margin: "22px" }}>Cancel</button>
        </div>
      </>
    );
  }
}

export default UserList;
