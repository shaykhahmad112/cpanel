import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from './AuthHeader';
 
const ProtectedRoute = ({ component: Component, ...rest }) => {
 
   return (
       <Route {...rest}
           render={props => (
               isLogin() ?
                   <Component {...props} />
                   :
                   <Redirect to={{ pathname: '/' }} />
           )}
       />
   );
};
 
export default ProtectedRoute;