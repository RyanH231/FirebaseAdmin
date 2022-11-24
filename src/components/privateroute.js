import React, { Component } from 'react'
import { UseAuth } from '../contexts/authcontext';
import {Route} from 'react-router-dom';
import Dashboard from './dashboard';
import Login from './login';

export default function PrivateRoute({component:Component, ...rest}) {
    const {currentUser} = UseAuth();
    if(currentUser)
    {
        return <Dashboard/>
    }
    else
    {
        return <Login/>
    }
}
