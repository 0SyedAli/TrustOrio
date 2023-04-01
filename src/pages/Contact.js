import React , {useEffect} from 'react'
import ContactUs1 from '../component/Contact/ContactUs1'
import Footer from '../component/Footer'
import Header from '../component/Header'
import Slider from '../component/Slider'

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div>
            {/* <Header /> */}
            <Slider pHome="We Wanna Here From You" h2Home="CONTACT US" a1Home="home" a2Home="Contact Us"/>
            <ContactUs1  />
            <Footer />
        </div>
    )
}

export default Contact