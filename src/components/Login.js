import React, { Component } from "react";
import UserService from "../services/UserService";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
     

    }
    this.handleChange = this.handleChange.bind(this)
    this.loginClicked = this.loginClicked.bind(this)
  
  
  }

  handleChange(event) {
    this.setState(
      {
        [event.target.name]
          : event.target.value
      }
    )
  }

  loginClicked(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      password: this.state.password,
      loading: true

    };
    console.log("User login details => " + JSON.stringify(user));

    UserService.loginUser(user).then((res) => {
      this.props.history.push(`/dashboard`)
      console.log("Id:: "+ this.props.loading)
    });
    // console.log("Id ::" +  user.id)

  }

  render() {
  
    return (
    
      <div className="container" style={{ marginTop: "15px", padding: "50px" }}>
      
        <div className="row">
          {/* <img className="text-center" src={Imgs} alt="logo" /> */}
          <div className="card col-md-6 offset-md-3 offset-md-3">
           
            <h3 className="text-center" style={{ margin: "15px" }}> Enter Login Details </h3>
            <div className="card-body">
              <form>
                <div className="container">
                  <div className="form-group">
                    <label style={{ marginTop: "10px" }}> Email </label>
                    <div className="col-sm-12">
                      <input type="email" name="email" className="form-control" value={this.state.email} onChange={this.handleChange}/>
                    </div>

                    <label style={{ marginTop: "10px" }}> Password </label>
                    <div className="col-sm-12">
                      <input type="password" name="password" className="form-control" value={this.state.password} onChange={this.handleChange} />
                    </div>
                  </div>

                  <div className="form-row text-center" style={{ marginTop: "12px" }}>
                    <div className="col-12">
                      <button className="btn btn-success" onClick={this.loginClicked}>Login</button>

                      <button className="btn btn-danger" style={{ margin: "22px" }}> Cancel</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login