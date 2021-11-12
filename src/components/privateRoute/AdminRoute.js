import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import useAuth from '../../context/useAuth';
import Spinner from '../Spinner/Spinner';


export default function AdminRoute({ children, ...rest }) {
   const { users, isLoading ,isAdmin} = useAuth()
   if (isLoading) {
      return <Spinner />
   }
   return (
      <Route
         {...rest}
         render={({ location }) =>
            users?.email && isAdmin ? (
               children
            ) : (
               <Redirect
                  to={{
                     pathname: '/',
                     state: { from: location },
                  }}
               />
            )
         }
      />
   )
}
