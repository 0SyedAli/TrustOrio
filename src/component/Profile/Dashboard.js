import React from 'react'
import '../../asset/css/Profiles.css'
import { Link } from 'react-router-dom'
// import { FaClipboardList } from 'react-icons/fa';
// import userImg from '../../'

const Dashboard = () => {
    return (
        <div>
            <div className="row dashboard-main" style={{ height: "auto !important", marginLeft: "0", marginRight: "0", }}>
                <div className="col-md-3">

                    <div className="flex-column mb-4 nav nav-pills nav-pills-custom c myCol3" id="v-pills-tab" role="tablist"
                        aria-orientation="vertical">
                        <div className='dashb '>
                            <Link className='dashbb ' to={"/dashboard"}><h1 className='active'>Dashboard</h1></Link>
                        </div>
                        <div className='dashb'>
                            <Link className='dashbb' to={"/lawyerDash"}><h1>Lawyer</h1></Link>
                        </div>
                        <div className='dashb'>
                            <Link className='dashbb' to={"/profileUpdate"}><h1>Profile</h1></Link>
                        </div>
                        <div className='dashb'>
                            <Link className='dashbb' to={"paymentHistory"}><h1>Payment History</h1></Link>
                        </div>
                        <div className='dashb'>
                            <Link className='dashbb' to={"lagout"}><h1>Layout</h1></Link>
                        </div>
                    </div>
                </div>

                <div className="col-md-9 myDisplay">
                    <div className="profile myProf">
                        <div className="profile-img">
                            <img src={'/'} alt="" />
                        </div>
                        <div className="profile-content">
                            <h1>Welcome To Your Dashtboard</h1>
                            <h4>Luis Andorra</h4>
                            <p>[luis@gmail.com]</p>
                            <i className="fa-solid fa-phone phone"></i>
                            <p><i className="fa-solid fa-earth earth"></i> Pakistan</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Dashboard