import React, { Component } from 'react';
// import Chart from '../../components/chart/Chart';
import FeatureInfo from '../../components/featuredInfo/FeatureInfo';
import './home.css';
// import { userData } from '../../dummydata';
import WidgetSm from '../../components/widgetSm/WidgetSm'
import WidgetLg from '../../components/widgetLg/WidgetLg'

class Home extends Component {
    render() {
        return (
            <div className="home">
                <FeatureInfo />
                {/* <Chart data={userData} title="User Analytics" grid dataKey="Active User" /> */}
                <WidgetLg />
                <WidgetSm />
            </div>
        );
    }
}

export default Home;