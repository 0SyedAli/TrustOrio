import React from 'react'

const ClientArea = () => {
  return (
    <div>
        <section className="our-client-area">
            <div className="welcome-title-area">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-6">
                            <div className="Title-area">
                                <h3>They Trust Us</h3>
                                <h2>Our Clients</h2>
                                <p>Results recommend Trust Law Firm as a good lawyers office, a trusted partners of his
                                    customers’ business and a honest adviser and consultant for legal situation.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="client-slider">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="client-content">
                                <div id="client-demo" className="owl-carousel owl-theme home-client-content">
                                    <div className="item client-item">
                                        <a href="#"><img src="images/client-1.png" alt=""/></a>
                                    </div>
                                    <div className="item client-item">
                                        <a href="#"><img src="images/client-2.png" alt=""/></a>
                                    </div>
                                    <div className="item client-item">
                                        <a href="#"><img src="images/client-3.png" alt=""/></a>
                                    </div>
                                    <div className="item client-item">
                                        <a href="#"><img src="images/client-4.png" alt=""/></a>
                                    </div>
                                    <div className="item client-item">
                                        <a href="#"><img src="images/client-5.png" alt=""/></a>
                                    </div>
                                    <div className="item client-item">
                                        <a href="#"><img src="images/client-6.png" alt=""/></a>
                                    </div>
                                    <div className="item client-item">
                                        <a href="#"><img src="images/client-1.png" alt=""/></a>
                                    </div>
                                    <div className="item client-item">
                                        <a href="#"><img src="images/client-2.png" alt=""/></a>
                                    </div>
                                </div>
                                <div className="testimonial-customNavigation client-customNavigation">
                                    <a className="btn client_prev"><i className="fa fa-long-arrow-left"></i></a>
                                    <a className="btn client_next"><i className="fa fa-long-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default ClientArea