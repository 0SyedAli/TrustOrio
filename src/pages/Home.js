import React, {useEffect} from 'react'
import Slider from '../component/Slider'
import ClientArea from '../component/ClientArea'
import Count from '../component/Count'
import Footer from '../component/Footer'
import Header from '../component/Header'
import Practice from '../component/Practice'
import Welcome from '../component/Welcome'

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
    
        {/* <Header /> */}
        <Slider pHome="Your Legal Solution Starts Here!" h2Home="The Greatest &amp; Strongest Firm YOU CAN TRUST" a1Home="home" a2Home="Home"/>
        <Count />
        <Welcome />
        <Practice />
        {/* <ClientArea /> */}
        <Footer />
    </>
  )
}

export default Home