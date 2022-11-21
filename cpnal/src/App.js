import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Login from './components/auth/login';
import Reset from './components/auth/reset';
import Dashboard from './components/dashboard/dashboard';
import NewPassword from './components/auth/newpassword';
import Register from './components/auth/register';
import Routes from './routes';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    withRouter
  } from "react-router-dom";
  
const App =()=>
{

return(         
    <div>
        {/* <Router>
        <div className="App">
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/reset" component={Reset} />
                <Route exact path="/confirm/:token" component={NewPassword} />
                <Route path="*" component={() => "404 NOT FOUND"} />
            </Switch>
            </div>
        </Router>     */}
     <Routes/>
    </div>
);
}
export default App;
