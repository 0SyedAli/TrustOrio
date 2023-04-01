import React, {useEffect} from 'react'
import Slider from '../component/Slider'
import ClientArea from '../component/ClientArea'
import Count from '../component/Count'
import Footer from '../component/Footer'
import Header from '../component/Header'
import Practice from '../component/Practice'
import Welcome from '../component/Welcome'
import OurHistory from '../component/About/OurHistory'
import PracticeAbout from '../component/About/PracticeAbout'
import FunArea from '../component/About/FunArea'
import Heads from '../component/Heads'

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <>
            {/* <Heads /> */}
            <Slider pHome="Our History" h2Home="ABOUT US" a1Home="home" a2Home="About Us" />
            <OurHistory />
            <FunArea />
            <PracticeAbout />   
            {/* <ClientArea /> */}
            <Footer />
        </>
    )
}

export default About