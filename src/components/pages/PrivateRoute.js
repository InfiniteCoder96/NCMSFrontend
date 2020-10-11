import React,{useState} from 'react';
import {
    Route,
    Redirect
  } from "react-router-dom";
import authService from "../../services/AuthService"
const PrivateRoute = ({ component: Component, ...rest }) => (
 
    <Route
      {...rest}
      render={props =>
        authService.isAuthenticated() ? (
          <Component {...rest} {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: props.location }
            }}
          />
        )
      }
    />
    
);
  
export default PrivateRoute;