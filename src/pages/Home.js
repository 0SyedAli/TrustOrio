import React, {useEffect} from 'react'
import Slider from '../component/Slider'
import Count from '../component/Count'
import Footer from '../component/Footer'
import Practice from '../component/Practice'
import Welcome from '../component/Welcome'
import CardsSection from '../component/CardsSection'

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
        <CardsSection />
        {/* <ClientArea /> */}
        <Footer />
    </>
  )
}

export default Home