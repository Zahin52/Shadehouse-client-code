import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import './style.css'
import { useHistory } from 'react-router-dom'

export default function App() {
   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm()
   const history = useHistory()
   const onSubmit = (data) => {
      console.log(data)
      axios
         .post('https://immense-journey-76103.herokuapp.com/services', data)
         .then((res) => {
            alert('Succesfully Added destination')
            reset()
            history.push('/#services')
         })
         .catch((err) => console.log(err))
   }
   console.log(errors)

   return (
      <div
         className="text-secondary container col-12 col-md-8 addDestination py-5"
         style={{ 'min-height': 'calc(100vh - 292px)' }}
      >
         <div className="text-center">
            <h3>Add New Destination</h3>
         </div>
         <form onSubmit={handleSubmit(onSubmit)}>
            <input
               type="text"
               className="w-100"
               placeholder="Destination"
               {...register('title', { required: true, maxLength: 100 })}
            />
            <textarea
               className="w-100"
               placeholder="Details"
               {...register('details', { required: true })}
            />
            <input
               type="text"
               className="w-100"
               placeholder="Price (per person)"
               {...register('fee', { required: true })}
            />
            <input
               type="text"
               className="w-100"
               placeholder="Image URL"
               {...register('image', { required: true })}
            />

            <input
               className="text-white p-3"
               value="Add Destination"
               type="submit"
            />
         </form>
      </div>
   )
}
