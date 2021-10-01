import React from 'react'
import './featuredInfo.css'
import { PeopleOutline} from '@material-ui/icons'

export default function FeatureInfo({isLoading, assets}) {
    const user = JSON.parse(localStorage.getItem('user'))?.userType;
    const checkout =  assets?.map((x) => x.checkedAsset)?.filter((x) => x === 'Checked Out')

    

    return (
        <>
            {   
                user !== 'User' &&
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

                    <div className={isLoading ? "featuredLoading featuredItem" : "featuredItem"}> 
                        {
                            isLoading ? (<div class="spinner-border text-primary dashboard-spinner" role="status"></div>)
                            : 
                            (<>
                                <span className="featuredTitle"> Total Assets</span>
                                <div className="text-right" style={{ textAlign: "right", marginTop: "45px" }}>
                                    <span className="featuredMoney">{assets?.length}</span>
                                </div>
                            </>)
                        }
                    </div>
                    <div className={isLoading ? "featuredLoading featuredItem" : "featuredItem"}>
                        {
                            isLoading ? (<div class="spinner-border text-primary dashboard-spinner" role="status"></div>)
                            : (
                                <>
                                    <span className="featuredTitle"> Total Checked-Out Assets</span>
                                    <div className="text-right" style={{ textAlign: "right", marginTop: "45px" }}>
                                        <span className="featuredMoney">{checkout?.length}</span>
                                    </div>
                                </>
                            )
                        }

                    </div>
                </div>
            }
        </>
    )
}
