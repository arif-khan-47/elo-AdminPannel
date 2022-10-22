import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function ProtectedRoute({isAuthenticated, children, adminRoute, isAdmin, redirect="/login"}) {
    // const {isAuthenticated} = useSelector((state)=>state.root);
    if(!isAuthenticated){
        return <Navigate to={redirect}/>
    }
    if(adminRoute && !isAdmin){
      return <Navigate to={'/dashboard'}/>
  }
  return children ? children : <Outlet/>;
}

export default ProtectedRoute
