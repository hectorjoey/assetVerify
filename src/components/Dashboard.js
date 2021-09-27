import React from 'react'
import Sidebar from './sidebar/Sidebar';
import '../app.css'
import Home from '../pages/home/Home'

const Dashboard = (props) => {

    return (
        <>
            <div className="container1">
                <Sidebar id={props?.location?.state?.id} />
                <Home />

            </div>
        </>
    )
}


export default Dashboard;