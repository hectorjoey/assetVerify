import React, { Component } from 'react'
import './sidebar.css'
import { LineStyle, Timeline, People, VerifiedUser, Report, ExitToApp } from '@material-ui/icons'
import { Link } from 'react-router-dom';
class Sidebar extends Component {
    cancel() {
        this.props.history.push("/");
    }
    render() {
        return (
            <div className="sidebar">
                <div className="sidbarWrapper">
                    <div className="sidebarMenu">
                        <h3 className="sidebarTitle">Dashboard</h3>
                        <ul className="sidebarList">
                            <Link to={"/dashboard"} className="sidebarListItem">
                                <LineStyle className="sidebarIcon" />
                                Home
                            </Link>
                            <li className="sidebarListItem">
                                <Timeline className="sidebarIcon" />
                                Analytics
                            </li>
                            <Link to={"/users"} className="sidebarListItem">
                                <People  />
                                Users
                            </Link>
                            <Link to={"/assets"} className="sidebarListItem">
                                <VerifiedUser className="sidebarIcon" />
                                Assets
                            </Link>
                            <li className="sidebarListItem">
                                <Report className="sidebarIcon" />
                                Report
                            </li>

                        </ul>

                        <Link to={"/"} style={{ margin: "10px" }} className="btn btn-primary float-lg-start">
                            <ExitToApp />
                             Logout
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sidebar