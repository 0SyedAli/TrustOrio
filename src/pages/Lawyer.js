import React , { useEffect } from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'
import FutureTypo from '../component/Lawyer/FutureTypo'
// import RowDashboard from '../component/Profile/RowDashboard'
import Slider from '../component/Slider'

const Lawyer = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
        {/* <Header /> */}
        <Slider pHome="Law Books" h2Home="OUR LAWYER" a1Home="home" a2Home="Lawyer" />
        <FutureTypo />
        <Footer />
    </div>
  )
}

export default Lawyer