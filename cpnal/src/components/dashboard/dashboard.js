import React from 'react';
import Navbar from '../navbar/navbar';
import Sidebar from '../navbar/sidebar';
import Content from '../dashboard/content';
import AccountPreferences from '../pages/user menu/accountpreferences';
import ChangeLanguage from '../pages/user menu/changelanguage';
import ContactInformation from '../pages/user menu/contactinformation';
import PasswordAndSecurity from '../pages/user menu/passwordAndsecurity';
import ResetPage from '../pages/user menu/resetpage';
import {
   BrowserRouter as Router,
   Route,
   Switch,
   withRouter
 } from "react-router-dom";
 

const Dashboard =()=>
{

return(         
   //   <div class="sb-nav-fixed">
   //          <Navbar/>
   //       <div id="layoutSidenav">
   //          <Sidebar/>
   //          <Content/>
   //               </div>
   //    </div>

      <div class="sb-nav-fixed">
          <Router>
               <Navbar/>
      <div id="layoutSidenav">
               <Sidebar/>
            <Switch>
               <Route exact path="/dashboard" component={Content} />
               <Route exact path="/accountpref" component={AccountPreferences} />
               <Route exact path="/changelang" component={ChangeLanguage} />
               <Route exact path="/passandsec" component={PasswordAndSecurity} />
               <Route exact path="/contactinfo" component={ContactInformation} />
               <Route exact path="/resetpage" component={ResetPage} />
            </Switch>
         </div>
         </Router>    
      </div>
);
}
export default Dashboard;



 