import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Spinner from '../Spinner/Spinner'
import MyBookingCards from './AllbookingCards/AllBookingCards'
import useAuth from '../../context/useAuth'

export default function MyBookings() {
   const [data, setData] = useState([])
   const [Spinners, setSpinner] = useState(true)
   const { users } = useAuth()
   useEffect(() => {
      axios
         .get('https://immense-journey-76103.herokuapp.com/myBookings')
         .then((res) => {
            setData(res.data)
            setSpinner(false)
         })
   }, [data])
   if (Spinners) {
      return <Spinner />
   }
   return (
      <div className="">
         <div
            className="row row-cols-1 row-cols-sm-2 row-cols-md-3  p-3 mx-auto justify-content-center align-items-center"
            style={{ 'min-height': 'calc(100vh - 292px)' }}
         >
            {data.length < 1 ? (
               <span className="fs-2 text-center"> Sorry ! NO Bookings </span>
            ) : (
               data.map((item) => <MyBookingCards key={item._id} info={item} />)
            )}
         </div>
      </div>
   )
}
