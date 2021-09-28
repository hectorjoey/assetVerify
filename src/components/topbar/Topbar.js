import React, { Component } from 'react'
import "./topbar.css"
// import { NotificationsNone, Language, Settings } from '@material-ui/icons';
import imgs from '../topbar/fhi.png'

class Topbar extends Component {

    cancel() {
        this.props.history.push("/");
    }
    render() {
        return (
            <div className="topbar">
                <div className="topbarWrapper">
                    <div className="topLeft">
                        <img src={imgs} alt="img-logo" className="topAvatar" />
                        <span className="logo" style={{ margin: "22px" }}>VerifyAsset</span>
                    </div>
                    
                    <div className="topRight">
                     
                    </div>
                </div>

            </div>
        )
    }
}
export default Topbar