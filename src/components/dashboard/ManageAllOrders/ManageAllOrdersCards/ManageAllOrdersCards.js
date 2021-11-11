import axios from 'axios'
import React from 'react'

export default function ManageAllOrdersCard({ info }) {
   const { _id, name, item, email, status, address, quantity, phone } = info

   const CancleOrder = (id) => {
      const confirm = window.confirm('Do you want to cancle the Order?')
      if (confirm) {
         axios.delete(`http://localhost:5000/purchase/${_id}`).then((res) => {
            console.log(res)
         })
      } else {
      }
   }
   const AcceptBooking = (id) => {
      const confirm = window.confirm('Do you want to Accept the Booking?')
      if (confirm) {
         axios
            .put(`http://localhost:5000/purchase/${_id}`, {
               status: 'Shipped',
            })
            .then((res) => {
               console.log(res)
            })
      } else {
      }
   }
   return (
      <div className="col ">
         <div className="">
            <div className="card shadow  border-success mb-3 p-0 ">
               <div
                  className={`card-header ${
                     status === 'pending' ? 'bg-danger' : 'bg-success'
                  } text-white`}
               >
                  Status : {status}
               </div>
               <div className="card-body text-success">
                  <h5 className="card-title">Model : {item}</h5>
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
                     <span>Phone :</span> <span>{phone}</span>
                  </p>
                  <p className="card-text">
                     <span>Quantity :</span> <span>{quantity}</span>
                  </p>
               </div>
               <div className="card-footer bg-transparent border-success d-flex justify-content-center">
                  <button
                     onClick={() => CancleOrder(_id)}
                     className="btn btn-outline-danger col me-2"
                  >
                     Cancel
                  </button>
                  {status === 'pending' ? (
                     <button
                        onClick={() => AcceptBooking(_id)}
                        className="btn btn-outline-success col "
                     >
                        Accept
                     </button>
                  ) : (
                     ''
                  )}
               </div>
            </div>
         </div>
      </div>
   )
}
