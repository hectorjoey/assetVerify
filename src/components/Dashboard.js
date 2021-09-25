import React, { Component } from 'react'
import Sidebar from './sidebar/Sidebar';
import '../app.css'
import Home from '../pages/home/Home'

class Dashboard extends Component {
    render() {
        return (
            <>
                {/* <Topbar /> */}
                <div className="container1">
                    <Sidebar />
                    <Home />

                </div>
            </>
        )
    }
}

export default Dashboard;