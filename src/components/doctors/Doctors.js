import React, { useEffect, useState } from 'react'
import Card from '../card/card'

export default function Services() {
   const [courses, setCourses] = useState([])
   useEffect(() => {
      fetch('data.json')
         .then((res) => res.json())
         .then((data) => setCourses(data))
   }, [])
   return (
      <div className="container">
         <div>
            <h1 className="fw-bold text-capitalize mt-5 mb-4 text-center text-white opacity-75 bg-secondary px-4 py-2 rounded-pill border">
               All courses
            </h1>
         </div>
         <div className=" " style={{ 'min-height': '100vh' }}>
            <div className="row row-cols-1 row-cols-lg-3  mx-auto justify-content-center my-4 text-capitalize">
               {courses.map((data, i) => (
                  <Card key={i} info={data} />
               ))}
            </div>
         </div>
      </div>
   )
}
