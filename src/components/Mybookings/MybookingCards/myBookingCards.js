import axios from 'axios'
import React from 'react'

export default function myBookingCards({ info, Dataset }) {
   const {
      _id,
      name,
      destination,
      email,
      JourneyDate,
      ReturnDate,
      status,
      address,
      adultNo,
      childrenNo,
      roomNo,
   } = info
   console.log(
      _id,
      name,
      destination,
      email,
      JourneyDate,
      ReturnDate,
      status,
      address,
   )
   const CancleBooking = (id) => {
      const confirm = window.confirm('Do you want to cancel the Booking?')
      if (confirm) {
         axios
            .delete(
               `https://immense-journey-76103.herokuapp.com/bookings/${_id}`,
            )
            .then((res) => {
               console.log(res)
            })
      } else {
      }
   }
   return (
      <div className="col">
         <div className="card shadow  border-success mb-3 p-0">
            <div
               className={`card-header ${
                  status === 'pending' ? 'bg-danger' : 'bg-success'
               } text-white`}
            >
               Status : {status}
            </div>
            <div className="card-body text-success">
               <h5 className="card-title">Place : {destination}</h5>
               <p className="card-text">
                  <span>Email :</span> <span>{email}</span>
               </p>
               <p className="card-text">
                  <span>Name :</span> <span>{name}</span>
               </p>
               <p className="card-text">
                  <span>Address :</span> <span>{address}</span>
               </p>

               <p className="card-text">
                  <span>Journey Date :</span> <span>{JourneyDate}</span>
               </p>
               <p className="card-text">
                  <span>Return Date :</span> <span>{ReturnDate}</span>
               </p>
               <p className="card-text d-flex justify-content-between">
                  <div className="me-2">
                     <span>Room :</span> <span>{roomNo}</span>
                  </div>
                  <div className="me-2">
                     <span>Adult :</span> <span>{adultNo}</span>
                  </div>
                  <div className="me-2">
                     <span>Children :</span> <span>{childrenNo}</span>
                  </div>
               </p>
            </div>
            <div className="card-footer bg-transparent border-success">
               <button
                  onClick={() => CancleBooking(_id)}
                  className="btn btn-outline-danger w-100"
               >
                  Cancle
               </button>
            </div>
         </div>
      </div>
   )
}
