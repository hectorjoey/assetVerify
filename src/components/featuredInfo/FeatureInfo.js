import './featuredInfo.css'
// import { PeopleOutline } from '@material-ui/icons'

export default function FeatureInfo({ isLoading, assets }) {
    const user = JSON.parse(localStorage.getItem('user'));
    const userType = user?.userType;
    const userLocation = user?.result?.states
    const checkout = assets?.map((x) => x.checkedAsset)?.filter((x) => x === 'Checked Out')
    const userAssets = assets.map((x) => x.location).filter((x) => x === userLocation)    
    const userCheckedOutAsset = assets.filter(x => x.location === userLocation && x.checkedAsset === 'Checked Out')

    return (
        <>
            {/* {
                userType !== 'User' && */}
                <div className='featured'>
                    {/* <div className="featuredItem">
                        <span className="featuredTitle"><PeopleOutline /> Users</span>
                        <div className="text-right" style={{ textAlign: "right", marginTop: "45px" }}>
                            <span className="featuredMoney">000</span>
                        </div>
                    </div> */}

                    <div className={isLoading ? "featuredLoading featuredItem" : "featuredItem"}>
                        {
                            isLoading ? (<div class="spinner-border text-primary dashboard-spinner" role="status"></div>)
                                :
                                (<>
                                    <span className="featuredTitle"> Total Assets</span>
                                    <div className="text-right" style={{ textAlign: "right", marginTop: "45px" }}>
                                        <span className="featuredMoney"> {userType !== 'User' ? assets?.length : userAssets?.length}</span>
                                    </div>
                                    {userType === 'User' && <span>In {userLocation}</span>}
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
                                            <span className="featuredMoney">{ userType !== 'User' ? checkout?.length : userCheckedOutAsset?.length}</span>
                                            {userType === 'User' && <span>In {userLocation}</span>}
                                        </div>
                                    </>
                                )
                        }

                    </div>
                </div>
            {/* } */}
        </>
    )
}
