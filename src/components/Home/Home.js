import React, { useEffect, useState } from 'react'

import Spinner from '../Spinner/Spinner'
import './home.css'
import SelctionContainer from './sectionContainer/selctionContainer'

export default function Home() {
   const [serviceInfo, setserviceInfo] = useState([])
   const [TestimonyInfo, setTestimonyInfo] = useState([])
   const [gallaryInfo, setgallaryInfo] = useState([])
   const [spinner, setSpinner] = useState(true)
   useEffect(() => {
      try {
         fetch('https://immense-journey-76103.herokuapp.com/services')
            .then((res) => res.json())
            .then((data) => setserviceInfo(data))
         fetch('https://immense-journey-76103.herokuapp.com/testimony')
            .then((res) => res.json())
            .then((data) => setTestimonyInfo(data))
         fetch('https://immense-journey-76103.herokuapp.com/gallary')
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
               <p className="text-capitalize text-center">Your sun shade solution</p>
            </div>
         </div>
         <SelctionContainer
            sectionTitle="Our Destinations"
            data={serviceInfo}
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
