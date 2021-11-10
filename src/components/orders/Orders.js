import React, { useEffect, useState } from 'react'
import axios from 'axios'
import useAuth from '../../context/useAuth'

export default function Orders() {
   const [order, setOrder] = useState([])
   const { users } = useAuth()

   useEffect(() => {
      //    console.log(users.email)
      axios
         .get(`http://localhost:5000/orders?email=${users?.email}`, {
            headers: {
               authorization: `Bearer ${localStorage.getItem('idToken')}`,
            },
         })
         .catch((err) => {
            return <p>{err}</p>
         })
   }, [])
   return <div>my Orders</div>
}
