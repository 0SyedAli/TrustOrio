import React from 'react'
import horse from '../asset/images/img/horse.png'

const Welcome = () => {
  return (
    <div>
        <section className="welcome-area">
    <div className="welcome-title-area">
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-6">
                    <div className="Title-area">
                        <h3>Hello Dear</h3>
                        <h2>Welcome To Trust</h2>
                        <p>Trust is a business theme perfectly suited legal advisers and offices, lawyers,
                            attorneys, counsels, advocates and other legal and law related services.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="wellcome-asset welcome-assets-padding40">
        <div className="container">
            <div className="row">
                <div className="col-md-4 col-sm-4">
                    <div className="asset-content">
                        <h2>Story <br/>& History <span>01.</span></h2>
                        <p>Trust started as a sole practitioner providing services to the area community. Our
                            Office has now grown to five lawyers and provides expert legal representation.</p>
                        <a href="#">More <span><i className="fa fa-long-arrow-right"></i></span></a>
                    </div>
                </div>
                <div className="col-md-4 col-sm-4">
                    <div className="asset-content">
                        <h2>Values<br/>& Philosophy <span>02.</span></h2>
                        <p>Trust Law Offices founded on the principles of truth, justice, accountability, and
                            equal access. Our success has been the result of each attorney and staff members.
                        </p>
                        <a href="#">More <span><i className="fa fa-long-arrow-right"></i></span></a>
                    </div>
                </div>
                <div className="col-md-4 col-sm-4">
                    <div className="asset-content">
                        <h2>Mission<br/>& Services <span>03.</span></h2>
                        <p>Trust founded the firm with a desire to tackle the most challenging legal issues in
                            the northwest and to advocate entirely on behalf of plaintiffs.</p>
                        <a href="#">More <span><i className="fa fa-long-arrow-right"></i></span></a>
                    </div>
                </div>
            </div>
            {/* <div className="row">
                <div className="asset-button text-center">
                    <button type="button" className="btn btn-default">Find Out More About Trust</button>
                </div>
            </div> */}
        </div>
    </div>

    {/* <div className="help-area">
        <div className="left-half"></div>
        <div className="container">
            <div className="row">
                <div className="col-sm-6 col-md-6">
                    <div className="help-img">
                        <img src={horse} alt=""/>
                    </div>
                </div>

                <div className=" col-md-6 help-custom-padding">
                    <div className="help-text-heading">
                        <h2>WE ARE HERE TO PROVIDE LEGAL HELP</h2>
                        <p>In Trust, we are aiming to provide high quality legal consultancy, support and
                            results for your legal issues.</p>
                    </div>

                    <div className="row">
                        <div className="col-sm-6 col-md-6">
                            <div className="help-content">
                                <i className="fa fa-gavel"></i>
                                <h2>Get Your Legal Advice</h2>
                                <p>Post your question and get free legal advice directly from our experienced
                                    lawyers, We are here to help you.</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6">
                            <div className="help-content">
                                <i className="fa fa-users"></i>
                                <h2>Work With Expert Lawyers</h2>
                                <p>Our lawyers are expertise and experts in all law fields, They will obtain the
                                    best results they could achieve.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-md-6">
                            <div className="help-content">
                                <i className="fa fa-money"></i>
                                <h2>Have Great Discounted Rates</h2>
                                <p>If Trust accept your case, we'll never require you to pay huge fees or
                                    expenses as we work with alow cost.</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6">
                            <div className="help-content">
                                <i className="fa fa-university"></i>
                                <h2>Review Your Case Documents</h2>
                                <p>Get a thorough review of your legal documents by an expert attorney for as
                                    little as $0 per document.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> */}
</section>
</div>
  )
}

export default Welcome