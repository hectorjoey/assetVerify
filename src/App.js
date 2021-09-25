import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Router, Route, Switch } from "react-router-dom";

import Login from "./components/Login";
import CreateUser from "./components/CreateUser";
import UserList from "./components/UserList";
import UpdateUser from "./components/UpdateUser";
import ViewUser from "./components/ViewUser";
import CreateAsset from "./components/CreateAsset";
import AssetList from "./components/AssetList";
import Dashboard from './components/Dashboard';
import { history } from '../src/history'
import UpdateAsset from "./components/UpdateAsset";
import ViewAsset from "./components/ViewAsset";
import Topbar from "./components/topbar/Topbar";
import UsersList from "./components/UsersList"
import AssetsLIst from "./components/AssetsList";
import UserLogin from "./components/UserLogin"
import BarChart from './components/barChart/BarChart'


function App() {
  return (
    <div>
      <Topbar/>
      <Router history={history}>
        <div style={{marginLeft: "12px"}}>
          <Switch>
            <Route exact path="/" component={Login}></Route>
            <Route  path="/all-users" component={UsersList}></Route>
            <Route path="/all-assets" component={AssetsLIst}></Route>
            <Route path="/dashboard" component={Dashboard}></Route>
            <Route path="/users" component={UserList}></Route>
            <Route path="/create-user" component={CreateUser}></Route>
            <Route path="/update-user/:id" component={UpdateUser}></Route>
            <Route path='/view-user/:id' component={ViewUser}></Route>
            <Route path="/assets" component={AssetList}></Route>
            <Route path="/create-asset" component={CreateAsset}></Route>
            <Route path="/update-asset/:id" component={UpdateAsset}></Route>
            <Route path='/view-asset/:id' component={ViewAsset}></Route>
            <Route path='/userLogin' component={UserLogin}></Route>
            <Route path='/chart' component={BarChart}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
