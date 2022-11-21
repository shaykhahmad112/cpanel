import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Login from './components/auth/login';
import Reset from './components/auth/reset';
import Dashboard from './components/dashboard/dashboard';
import NewPassword from './components/auth/newpassword';
import Register from './components/auth/register';
import { history } from './services/History';
import ProtectedRoute from './services/protectedroute';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    withRouter,
    Redirect
  } from "react-router-dom";
  
const Routes =()=>
{

return(         
    <div>
        <Router history={history}>
        <div className="App">
            <Switch>
                {/* <Route exact path="/" component={Dashboard} /> */}
                <Route exact path="/" component={Login} />
                <ProtectedRoute path="/dashboard" component={Dashboard}></ProtectedRoute>
                <Route exact path="/register" component={Register} />
                <Route exact path="/reset" component={Reset} />
                <Route exact path="/newpassword/:token" component={NewPassword} />
                <Route path="*" component={() => "404 NOT FOUND"} />
            
            </Switch>
            {/* <Redirect to={'/'}/> */}
            </div>
        </Router>    
    </div>
);
}
export default Routes;
