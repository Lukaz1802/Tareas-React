import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export const ProtectedRoute = ({component: Component, ...resto}) => {
    const isAuthenticated = localStorage.getItem("usuario_registrado") || null;

    return (
        <Route
        {...resto}
        render={(props) => {
          if (isAuthenticated) {
            return <Component {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
    );
  };
  export default ProtectedRoute;
