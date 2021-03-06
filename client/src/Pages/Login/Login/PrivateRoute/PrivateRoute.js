import { CircularProgress } from '@mui/material';
import React from 'react';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

const PrivateRoute = (props) => {
    const { children, ...rest } = props;
    const { allContext } = useAuth();
    const { user, isLoading } = allContext;
    if (isLoading) { return <CircularProgress /> }
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