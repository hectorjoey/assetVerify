import React, { Component } from 'react'
import AssetsLIst from '../AssetsList';
import './widgetLg.css'

class WidgetLg extends Component {
    render() {
        return (
            <div className="widgetLg">
                <AssetsLIst />
            </div>
        );

    }
}

export default WidgetLg;