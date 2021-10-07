import React, { useState } from "react";
import axios from "axios";
import UserService from "../services/UserService";
import Dashboard from "../components/Dashboard";

const App = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState()

    // const submitForm = () => {
    //     if (email === "" || password === "") {
    //         setError("Fields are required");
    //         return;
    //     }

    //     props.login({ email, password });
    // }
    const handleSubmit = async e => {
        e.preventDefault();
    
        const user = { email, password };
        // send the username and password to the server
        const response = await axios.post(
            "http://localhost:8080/api/v1/login",
            user

        );
        // set the state of the user
        setUser(response.data)
        // store the user in localStorage
        localStorage.setItem('user', response.data)
        console.log(response.data)

    };
    const handleChange = (e) => {
        setUser({ ...user, [e.target.id]: e.target.value })
    }

    // if there's a user show the message below
    if (user) {
        // return <div>{user.id} is loggged in</div>;
        <Dashboard />
        console.log("user Id:: " + user.id)
        UserService.loginUser(user).then((res) => {
            this.props.history.push(`/dashboard`)
        });

    }

    // if there's no user, show the login form
    return (
        // <form onSubmit={handleSubmit}>
        //     <label htmlFor="username">Username: </label>
        //     <input
        //         type="text"
        //         value={email}
        //         placeholder="enter a username"
        //         onChange={({ target }) => setEmail(target.value)}
        //     />
        //     <div>
        //         <label htmlFor="password">password: </label>
        //         <input
        //             type="password"
        //             value={password}
        //             placeholder="enter a password"
        //             onChange={({ target }) => setPassword(target.value)}
        //         />
        //     </div>
        //     <button type="submit">Login</button>
        // </form>

        <div className="container" style={{ marginTop: "15px", padding: "50px" }}>

            <div className="row">
                {/* <img className="text-center" src={Imgs} alt="logo" /> */}
                <div className="card col-md-6 offset-md-3 offset-md-3">

                    <h3 className="text-center" style={{ margin: "15px" }}> Enter Login Details </h3>
                    <div className="card-body">
                        <form onChange={handleChange} onSubmit={handleSubmit}>
                            <div className="container">
                                <div className="form-group">
                                    <label style={{ marginTop: "10px" }}> Email </label>
                                    <div className="col-sm-12">
                                        <input type="email" name="email" className="form-control" value={email} onChange={({ target }) => setEmail(target.value)} />
                                    </div>

                                    <label style={{ marginTop: "10px" }}> Password </label>
                                    <div className="col-sm-12">
                                        <input type="password" name="password" className="form-control" value={password} onChange={({ target }) => setPassword(target.value)} />
                                    </div>
                                </div>

                                <div className="form-row text-center" style={{ marginTop: "12px" }}>
                                    <div className="col-12">
                                        <button className="btn btn-success">Login</button>

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

};

export default App;
