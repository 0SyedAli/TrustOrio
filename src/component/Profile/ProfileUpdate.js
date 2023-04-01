import React from 'react'
import { Link } from 'react-router-dom'
import '../../asset/css/profileUpdate.css'
const ProfileUpdate = () => {
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
                            <Link className='dashbb' to={"/lawyer"}><h1>Lawyer</h1></Link>
                        </div>
                        <div className='dashb'>
                            <Link className='dashbb' to={"/profile"}><h1>Profile</h1></Link>
                        </div>
                        <div className='dashb'>
                            <Link className='dashbb' to={"paymentHistory"}><h1>Payment History</h1></Link>
                        </div>
                        <div className='dashb'>
                            <Link className='dashbb' to={"layout"}><h1>Layout</h1></Link>
                        </div>
                    </div>
                </div>

                <div className="col-md-9 myDisplay">
                    <div className="profile myProf">
                        <div className="update-profile">
                            <div className="name1 update-">
                                <div className="first edit-">
                                    <h2 for="firstname">First Name:</h2>
                                    <input type="text" name="name" className="firstname inp" placeholder="Enter Your First Name" />
                                </div>

                                <div className="email edit-">
                                    <h2 for="email">Email:</h2>
                                    <input type="email" name="email" className="firstname inp" placeholder="Enter Your Email Address" />
                                </div>
                            </div>
                            <div className="name2 update-">
                                <div className="last edit-">
                                    <h2 for="firstname">Last Name:</h2>
                                    <input type="text" name="name" className="lastname inp" placeholder="Enter Your Last Name" />
                                </div>
                                <div className="password edit-">
                                    <h2 for="firstname">Password:</h2>
                                    <input type="password" name="password" className="lastname inp" placeholder="Enter Your Password" />
                                    <p>If You Want To Change Password Then Type Here</p>
                                </div>
                            </div>
                        </div>
                        <div className="update-profile">
                            <div className="name1 update-">
                                <div className="first edit-">
                                    <h2 for="firstname">Gender:</h2>
                                    <input type="radio" name="gender" className="firstname" value="Male" />
                                    <label for="html">Male</label>
                                    <input type="radio" name="gender" className="firstname" value="Fe-Male" />
                                    <label for="html">Fe-Male</label>
                                </div>

                                <div className="email edit-">
                                    <h2 for="firstname">Phone Number:</h2>
                                    <input type="text" name="name" className="firstname inp" placeholder="Enter Your Email Address" />
                                </div>
                            </div>
                            <div className="name2 update-">
                                <div className="last edit-">
                                    <h2 for="firstname">Profile Photo:</h2>
                                    <input type="text" name="name" className="lastname inp" placeholder="Enter Your Last Name" />
                                </div>
                                <div className="password edit-">
                                    <h2 for="firstname">Address:</h2>
                                    <input type="text" name="name" className="lastname inp" placeholder="Enter Your Password" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default ProfileUpdate