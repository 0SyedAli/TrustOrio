import React from 'react'

const ContactUs1 = () => {
  return (
    <div>
        <section className="contact-us-1">
        <div className="welcome-title-area">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-6">
                        <div className="Title-area">
                            <h3>Get In Toutch</h3>
                            <h2>Contact Us</h2>
                            <p>Feel free to get in touch with any enquiries and one of our friendly members of staff will get back to you as soon as possible, we are here to help !</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="contact-us-1-area">
            <div className="container">
                <div className="row">
                    <div className="show_result"></div>
                    <div className="result_message"></div>                 
                    <div className="col-sm-6 col-md-8 no-padding">
                        <div className="contact-us-1-form clearfix">                       
                            <form>
                                <div className="col-sm-6 no-padding contact-us-custom-padding" >
                                    <input type="email" className="form-control" id="Email" placeholder="EMAIL"/> 
                                </div>
                                <div className="col-sm-6 no-padding-right">
                                    <input type="email" className="form-control" id="Password" placeholder="PASSWORD"/> 
                                </div>
                                <div className="col-sm-12 no-padding contact-us-custom-padding">
                                    <input type="text" className="form-control" id="Subject" placeholder="SUBJECT"/> 
                                </div>
                                <div className="col-sm-12 no-padding contact-us-custom-padding">
                                    <textarea className="form-control" rows="8" id="Message" placeholder="MESSAGE"></textarea>
                                </div>
                                <div className="col-sm-12 no-padding contact-us-custom-padding">
                                    <button type="button" id="contact_submit" className="btn btn-dm">SEND YOUR REQUEST</button>
                                </div>
                            </form>                        
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 no-padding-right">
                        <div className="address-area">
                            <div className="Title-area home-8-title-area contact-1-title-area">
                                <p>Trust is a business theme perfectly suited legal advisers and offices, lawyers, attorneys, and other legal and law related services. </p>
                            </div>                        
                        </div>
                        <div className="col-md-6">
                            <div className="address-details">
                                <span>Phone :</span>
                                <span><i className="fa  fa-phone"></i> + 2 01065370701</span>
                                <span><i className="fa  fa-fax"></i> + 2 01065370701</span>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="address-details">
                                <span>Email :</span>
                                <span><i className="fa   fa-envelope"></i>7oroof@7oroof.com</span>
                            </div>
                        </div>
                        <div className="view-location">
                            <span>Address :</span>
                            <span><i className="fa fa-map-marker"></i> 2 AlBahr St, Tanta , AlGharbia, Egypt.</span>
                            <a href="#">View Location On Map</a>
                        </div>
                    </div>
                </div>                
            </div>
        </div>

    </section>
    </div>
  )
}

export default ContactUs1