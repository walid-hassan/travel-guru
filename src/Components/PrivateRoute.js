import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { travelContext } from '../App';

const PrivateRoute = ({ children, ...rest }) => {
    const {signInUser} = useContext(travelContext);
    const [user] = signInUser;
    return (
        <Route
          {...rest}
          render={({ location }) =>
            user.email ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { from: location }
                }}
              />
            )
          }
        />
      );
};

export default PrivateRoute;