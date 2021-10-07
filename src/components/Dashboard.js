import React, {useEffect, useState} from 'react'
import Sidebar from './sidebar/Sidebar';
import '../App.css'
import Home from '../pages/home/Home'

import {GetAssets} from '../services/AssetService'

const Dashboard = (props) => {
    const [assets, setAsset] = useState([])
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        GetAssets().then((res) => {
            setAsset(res)
            setLoading(false)
        });
    }, [])

    return (
        <>
            <div className="container1">
                <Sidebar id={props?.location?.state?.id} />
                <Home isLoading={isLoading} assets={assets} />
            </div>
        </>
    )
}


export default Dashboard;