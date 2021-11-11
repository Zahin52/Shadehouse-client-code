import React, { useEffect, useState } from 'react'

import Spinner from '../Spinner/Spinner'
import './home.css'
import SelctionContainer from './sectionContainer/selctionContainer'

export default function Home() {
   const [productsInfo, setproductsInfo] = useState([])
   const [TestimonyInfo, setTestimonyInfo] = useState([])
   const [gallaryInfo, setgallaryInfo] = useState([])
   const [spinner, setSpinner] = useState(true)
   useEffect(() => {
      try {
         fetch('http://localhost:5000/products')
            .then((res) => res.json())
            .then((data) => setproductsInfo(data))
         fetch('http://localhost:5000/reviews')
            .then((res) => res.json())
            .then((data) => setTestimonyInfo(data))
         fetch('http://localhost:5000/gallary')
            .then((res) => res.json())
            .then((data) => setgallaryInfo(data))
      } catch (error) {
         console.log(error)
      } finally {
         setSpinner(false)
      }
   }, [])
   if (spinner) {
     return <Spinner />
   }
   return (
      <div>
         <div className="banner ">
            <div className="heading d-flex justify-content-center align-items-center flex-column">
               <h1 className="text-capitalize text-center">
                  Welcome to Shadehouse
               </h1>
               <p className="text-capitalize text-center">
                  Your sun shade solution
               </p>
            </div>
         </div>
         <SelctionContainer
            sectionTitle="Our Products"
            data={productsInfo.slice(0,6)}
            cardType="1"
         ></SelctionContainer>
         <SelctionContainer
            sectionTitle="Gallary"
            data={gallaryInfo}
            cardType="3"
         ></SelctionContainer>
         <SelctionContainer
            sectionTitle="Testimony"
            data={TestimonyInfo}
            cardType="2"
         ></SelctionContainer>
      </div>
   )
}
