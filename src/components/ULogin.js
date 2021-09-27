import React, { useState } from "react";
import axios from "axios";
import Dashboard from "../components/Dashboard";
import { useHistory } from 'react-router-dom';


const App = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState();

    const history = useHistory();

    const handleSubmit = async e => {
        e.preventDefault();

        const user = { email, password };

        try {
            const { data } = await axios.post("https://asset-verify.herokuapp.com/api/v1/login",
                user)
            console.log(data)
            if (data.status === 200) {
                props.updateUser(data)
                localStorage.setItem('user', JSON.stringify(data))
                history.push({
                    pathname:"/dashboard", 
                    state:{
                        id:data.id
                    }
                })

            }
        } catch (Error) {
            console.log(Error.message);
        }
        // send the username and password to the server
        // const response = await axios.post(
        //     "http://localhost:8080/api/v1/login",
        //     user
        // );
        // set the state of the user
        // setUser(response.data)
        // // store the user in localStorage
        // localStorage.setItem('user', response.data)
        // console.log("Response :::" + response)
        // console.log("Response :::" + JSON.stringify(response.data))

    };

    // if there's a user show the message below
    // if (user) {
    //     console.log("id: " + user.id)
    //     console.log("user Role::: " + user.userType)
    //     return <div>
    //         <Dashboard />
    //     </div>
    // }

    // if there's no user, show the login form
    return (
        <div className="container" style={{ marginTop: "15px", padding: "50px" }}>
            <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">

                    <h3 className="text-center" style={{ margin: "15px" }}> Enter Login Details </h3>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <label style={{ marginTop: "10px" }} htmlFor="email">Enter Email: </label>
                            <div className="col-sm-12">
                                <input className="form-control" type="text" value={email} placeholder=" " onChange={({ target }) => setEmail(target.value)} />
                            </div>
                            <div>
                                <label style={{ marginTop: "10px" }} htmlFor="password">Enter Password: </label>
                                <div className="col-sm-12">
                                    <input className="form-control" type="password" value={password} placeholder=" " onChange={({ target }) => setPassword(target.value)} />
                                </div>
                            </div>
                            <div className="form-row text-center" style={{ marginTop: "12px", }}>
                                <div className="col-sm-12">
                                    <button className="btn btn-success" type="submit">Login</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default App;
