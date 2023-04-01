import React from 'react'
import footerImg from '../asset/images/img/horse.png'

const Footer = () => {
  return (
    <div>
        <footer className="footer-area">
            <div className="footer-head">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3 col-md-3">
                            <div className="f-h-content">
                                <h3>Call Us Now !</h3>
                                <h2>002 0106 5370701</h2>
                                <p><a href="#">24/7 Available</a></p>
                            </div>
                        </div>
                        <div className="col-sm-3 col-md-3">
                            <div className="f-h-content">
                                <h3>Send Us Message !</h3>
                                <h2>7oroof@7oroof.com</h2>
                                <p><a href="#">24/7 Available</a></p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6">
                            <div className="f-h-content">
                                <h3>Visit Our Office !</h3>
                                <h2>Alnahas Building, 2 AlBahr St, Tanta AlGharbia, Egypt.</h2>
                                <p><a href="#">View Map</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-content">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-4">
                            <div className="f-first-content f-all-h2">
                                <div className="f-content-img">
                                    <a href="#"><img className='footer-img' src={footerImg} alt="f-image"/></a>
                                </div>
                                <p>Trust is a business theme perfectly suited legal advisers and offices, lawyers,
                                    attorneys, counsels, advocates and other legal and law related services.Trust
                                    started as a sole practitioner providing services to the area community.</p>
                                <p><a href="#">Buy This Theme <i className="fa fa-long-arrow-right"></i></a></p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <div className="f-second-content f-all-h2">
                                <h2>Business Hours</h2>
                                <ul>
                                    <li><a href="#">Opining Days :</a></li>
                                    <li><a href="#">Monday – Friday : 9am to 20 pm</a></li>
                                    <li><a href="#">Saturday : 9am to 17 pm</a></li>
                                </ul>
                                <ul>
                                    <li><a href="#">Vacations :</a></li>
                                    <li><a href="#">All Sunday Days</a></li>
                                    <li><a href="#">All Official Holidays</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-2">
                            <div className="f-third-content f-all-h2">
                                <h2>Practice Areas</h2>
                                <ul>
                                    <li><a href="#"><i className="fa fa-long-arrow-right"></i>Family Law</a></li>
                                    <li><a href="#"><i className="fa fa-long-arrow-right"></i>Fire Accident</a></li>
                                    <li><a href="#"><i className="fa fa-long-arrow-right"></i>Sexual Offences</a></li>
                                    <li><a href="#"><i className="fa fa-long-arrow-right"></i>Drug Offences</a></li>
                                    <li><a href="#"><i className="fa fa-long-arrow-right"></i>Financial Law</a></li>
                                    <li><a href="#"><i className="fa fa-long-arrow-right"></i>Shoplifting</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <div className="f-fourth-content f-all-h2">
                                <h2>Newsletter</h2>
                                <p>Don’t miss to subscribe to our news feeds, kindly fill the form below.</p>
                                <form>
                                    <div className="form-group footer-subscribe">
                                        <input type="email" className="form-control" id="Email1"
                                            placeholder="Subscribe In Our Newsletter"/>
                                        <button type="submit" className="btn btn-default">Join</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="footer-bottom clearfix">
                        <div className="col-md-6 col-sm-6 no-padding-left">
                            <div className="f-bottom-left-text">
                                <p>Trust © All Rights Reserved. With Love by <span><a href="#">7oroof.com</a></span>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 no-padding-right">
                            <div className="f-bottom-right-text">
                                <ul>
                                    <li><a href="#">News</a></li>
                                    <li><a href="#">FAQs</a></li>
                                    <li><a href="#">Careers</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Terms of Use</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer