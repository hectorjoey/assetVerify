import React, { useState } from "react";
import axios from "axios";

const App = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState()

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

    // if there's a user show the message below
    if (user) {
        return <div>{user.id} is loggged in</div>;
    }

    // if there's no user, show the login form
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username: </label>
            <input
                type="text"
                value={email}
                placeholder="enter a username"
                onChange={({ target }) => setEmail(target.value)}
            />
            <div>
                <label htmlFor="password">password: </label>
                <input
                    type="password"
                    value={password}
                    placeholder="enter a password"
                    onChange={({ target }) => setPassword(target.value)}
                />
            </div>
            <button type="submit">Login</button>
        </form>
    );
};

export default App;
