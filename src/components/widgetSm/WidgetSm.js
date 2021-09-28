// import { Dashboard } from '@material-ui/icons';
import React, { Component } from 'react';
import UsersLIst from '../UsersList';
import './widgetSm.css'

class WidgetSm extends Component {
    render() {
        return (
            <div className="widgetSm">
                <UsersLIst/>
            </div>
        );
    }
}

export default WidgetSm;