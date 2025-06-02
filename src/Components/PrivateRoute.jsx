import React, { use } from 'react';

import { Navigate, useLocation } from 'react-router';import Loading from './Loading';
import { AuthContext } from './AuthContext';

const PrivateRoute = ({children}) => {
    let {user,loading}=use(AuthContext);
    //console.log(user);
    let {pathname} = useLocation();
   // console.log(location)
    if(loading){
        return <Loading></Loading>

    }

    if(user && user?.email){
            return children;

    } else{
        return <Navigate state={pathname} to='/login'></Navigate>
    }
};

export default PrivateRoute;