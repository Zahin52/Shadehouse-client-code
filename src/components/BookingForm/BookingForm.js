import React, { useEffect, useState, useRef } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import useAuth from '../../context/useAuth'
import './BookingForm.css'
import Spinner from '../Spinner/Spinner'
import axios from 'axios'

export default function BookingForm() {
   const { users } = useAuth()
   const [email, setEmail] = useState('')
   const [name, setName] = useState('')
   const Address = useRef('')
   const adults = useRef('')
   const rooms = useRef('')
   const children = useRef('')
   const journyStart = useRef('')
   const journyEnd = useRef('')
   const [details, setdetails] = useState([])
   const [spinner, setSpinner] = useState(true)
   const history = useHistory()
   useEffect(() => {
      fetch('https://immense-journey-76103.herokuapp.com/services')
         .then((res) => res.json())
         .then((data) => {
            setdetails(data)
            setEmail(users.email)
            setName(users.displayName)
            setSpinner(false)
         })
   }, [])
   const confirmBooking = (e) => {
      e.preventDefault()

      const bookingInfo = {
         email,
         name,
         destination: info['title'],
         address: Address.current.value,
         JourneyDate: journyStart.current.value,
         ReturnDate: journyEnd.current.value,
         roomNo: rooms.current.value,
         adultNo: adults.current.value,
         childrenNo: children.current.value,
         status: 'pending',
      }
      if (
         !bookingInfo.roomNo.length ||
         !bookingInfo.JourneyDate.length ||
         !bookingInfo.ReturnDate.length ||
         !bookingInfo.address.length ||
         !bookingInfo.adultNo.length ||
         !bookingInfo.childrenNo.length
      ) {
         alert('please Fill all the fields')
         return
      }
      console.log(bookingInfo)
      axios
         .post(
            'https://immense-journey-76103.herokuapp.com/bookings',
            bookingInfo,
         )
         .then((response) => {
            console.log(response)
            if (response.status === 200) {
               alert('Booking Done')
               history.push('/myBookings')
            } else {
               alert('Something went wrong while Booking. Try again')
            }
         })
         .catch((error) => {
            console.log(error)
         })
   }
   const { id } = useParams()
   //    console.log('id id ', id)
   let detail = details.filter((item) => item._id === id)
   const info = detail[0]
   if (spinner) {
      return <Spinner />
   }
   return (
      <div id="booking" className="section p-4">
         <div className="section-center">
            <div className="container">
               <div className="row row-cols-1 row-cols-sm-2 ">
                  <div className="col text-center   h-auto my-2">
                     <div className="border px-3 h-100">
                        <div className="w-50 mx-auto my-3">
                           <img
                              alt=""
                              className="img-fluid"
                              src={detail.length && info['image']}
                           />
                        </div>
                        <h3 className="text-secondary">
                           {detail.length && info['title']}
                        </h3>
                        <p className="px-4 ">
                           {detail.length && info['details']}
                        </p>
                        <div>
                           <div>
                              <span className="fs-5 text-info">
                                 Includes :{' '}
                              </span>
                              <span className="fs-5 text-info">
                                 Air tickets,hotel costs,food costs
                              </span>
                           </div>
                        </div>
                        <p className="fs-3 text-info">
                           Price : ${detail.length && info['fee']} (per person)
                        </p>
                     </div>
                  </div>
                  <div className="col booking-form text-center my-2">
                     <div className="form-header">
                        <h1>Make your reservation</h1>
                     </div>
                     <form>
                        <div className="row">
                           <div className="col-md-6">
                              <div className="form-group">
                                 <input
                                    className="form-control w-100"
                                    type="email"
                                    value={email}
                                    placeholder="Enter your Email"
                                    readonly
                                 />
                                 <span className="form-label">Email</span>
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div className="form-group">
                                 <input
                                    className="form-control w-100"
                                    type="text"
                                    value={name}
                                    placeholder="Enter you Name"
                                    readonly
                                 />
                                 <span className="form-label">Name</span>
                              </div>
                           </div>
                        </div>
                        <div className="form-group">
                           <input
                              className="form-control w-100"
                              type="text"
                              value={detail.length && info['title']}
                              placeholder="Destination..."
                              readonly
                           />
                           <span className="form-label">Destination</span>
                        </div>
                        <div className="form-group">
                           <input
                              className="form-control w-100"
                              type="text"
                              ref={Address}
                              placeholder="Your address..."
                           />
                           <span className="form-label">Address</span>
                        </div>
                        <div className="row">
                           <div className="col-md-4">
                              <div className="form-group">
                                 <select
                                    ref={rooms}
                                    className="form-control"
                                    required
                                 >
                                    <option value="" selected hidden>
                                       rooms
                                    </option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                 </select>
                                 <span className="select-arrow"></span>
                                 <span className="form-label">Rooms</span>
                              </div>
                           </div>
                           <div className="col-md-4">
                              <div className="form-group">
                                 <select
                                    ref={adults}
                                    className="form-control"
                                    required
                                 >
                                    <option value="" selected hidden>
                                       adults
                                    </option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                 </select>
                                 <span className="select-arrow"></span>
                                 <span className="form-label">Adults</span>
                              </div>
                           </div>
                           <div className="col-md-4">
                              <div className="form-group">
                                 <select
                                    ref={children}
                                    className="form-control"
                                    required
                                 >
                                    <option value="" selected hidden>
                                       children
                                    </option>
                                    <option>0</option>
                                    <option>1</option>
                                    <option>2</option>
                                 </select>
                                 <span className="select-arrow"></span>
                                 <span className="form-label">Children</span>
                              </div>
                           </div>
                        </div>
                        <div className="row">
                           <div className="col-md-6">
                              <div className="form-group">
                                 <input
                                    ref={journyStart}
                                    className="form-control w-100"
                                    type="date"
                                    required
                                 />
                                 <span className="form-label">Check In</span>
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div className="form-group">
                                 <input
                                    ref={journyEnd}
                                    className="form-control w-100"
                                    type="date"
                                    required
                                 />
                                 <span className="form-label">Check out</span>
                              </div>
                           </div>
                        </div>

                        <div className="form-btn">
                           <button
                              onClick={(e) => confirmBooking(e)}
                              className="submit-btn"
                           >
                              Book Now
                           </button>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
