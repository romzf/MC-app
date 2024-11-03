// pages/Logout.js
import { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import UserContext from '../UserContext';

export default function Logout() {

    const {setUser, unsetUser} = useContext(UserContext);


    unsetUser();

    useEffect(() => {
        setUser({
            id: null,
            email: null,
            isAdmin: null
        })
    })

    return (
        <Navigate to='/login' />
    )

}