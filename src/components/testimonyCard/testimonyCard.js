import React from 'react'
import 'font-awesome/css/font-awesome.min.css'
import './qoute.css'

export default function TestimonyCard({ info }) {
   //    console.log(info)
   const { name, testimony } = info
   return (
      <div className="col-lg-4 py-3 mx-auto">
         <blockquote className="blockquote blockquote-custom bg-white p-5 shadow rounded  h-100 d-flex flex-column">
            <div className="blockquote-custom-icon bg-info shadow-sm">
               <i className="fa fa-quote-left text-white"></i>
            </div>
            <p className="mb-0 mt-2 font-italic">
               
               {testimony}
        
            </p>
            <footer className="blockquote-footer pt-4 mt-4 border-top mt-auto">
               {name}
            </footer>
         </blockquote>
      </div>
   )
}
