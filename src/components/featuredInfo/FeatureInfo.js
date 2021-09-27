import React from 'react'
import './featuredInfo.css'
import { PeopleOutline} from '@material-ui/icons'

export default function FeatureInfo() {
    return (
        <div className='featured'>
            <div className="featuredItem">
                <span className="featuredTitle"><PeopleOutline/> Users</span>
                {/* <div className="featuredMoneyContainer">
                    <span className=""></span>
                </div> */}
                <div className="text-right" style={{textAlign: "right", marginTop:"45px"}}>
                <span className="featuredMoney">000</span>
                </div>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle"> Assets</span>
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
    )
}
