import React, { useState } from 'react'
import './featuredInfo.css'
import { PeopleOutline } from '@material-ui/icons'

export default function FeatureInfo() {
    const user = JSON.parse(localStorage.getItem('user'))?.userType
    console.log("FeatureInfo " + user)
    return (
        <>
            {user !== 'User' &&
                <div className='featured'>
                    <div className="featuredItem">
                        <span className="featuredTitle"><PeopleOutline /> Users</span>
                        {/* <div className="featuredMoneyContainer">
                            <span className=""></span>
                        </div> */}
                        <div className="text-right" style={{ textAlign: "right", marginTop: "45px" }}>
                            <span className="featuredMoney">000</span>
                        </div>
                    </div>

                    <div className="featuredItem">
                        <span className="featuredTitle">Total Assets</span>
                        <div className="text-right" style={{ textAlign: "right", marginTop: "45px" }}>
                            <span className="featuredMoney">000</span>
                        </div>
                    </div>

                    <div className="featuredItem">
                        <span className="featuredTitle">Total Assets Checked Out</span>
                        <div className="text-right" style={{ textAlign: "right", marginTop: "45px" }}>
                            <span className="featuredMoney">000</span>
                        </div>
                    </div>

                    {/* <div className="featuredItem">
                        <span className="featuredTitle"> Asset Checked Out</span>
                        <div className="featuredMoneyContainer">
                            <span className="featuredMoney">$232,222</span>
                            <span className="featuredMoneyRate">-11.4<ArrowDownward className="featuredIcon" /></span>
                        </div>
                        <span className="featuredSub">Compared to Last month</span>
                    </div> */}

                    {/* <div className="featuredItem">
                        <span className="featuredTitle"> Asset Checked In</span>
                        <div className="featuredMoneyContainer">
                            <span className="featuredMoney">$232,222</span>
                            <span className="featuredMoneyRate">-11.4<ArrowDownward /></span>
                        </div>
                        <span className="featuredSub">Compared to Last month</span>
                    </div> */}
                </div>
            }
        </>
    )
}
