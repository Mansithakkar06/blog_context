import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { Navigate } from 'react-router-dom'

function ProtectedRoute({children}) {
    const {currentUser}=useContext(UserContext)
    if(!currentUser){
       return <Navigate to='/login' replace />
    }
        return children;
}

export default ProtectedRoute
