import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ currentUser, children }) => {
    return (
        currentUser ? children : <Navigate to={'/'} />
    )
}

export default PrivateRoute