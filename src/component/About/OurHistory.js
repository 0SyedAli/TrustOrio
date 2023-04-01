import React from 'react'
import suitcaseImg from '../../asset/images/img/progress-left-img.png'

const OurHistory = () => {
  return (
    <div>
        <section className="our-history-area">
        <div className="welcome-title-area">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-6">
                        <div className="Title-area">
                            <h3>Our History</h3>
                            <h2>All About Trust</h2>
                            <p>Trust is a business theme perfectly suited legal advisers and offices, lawyers, attorneys, counsels, advocates and other legal and law related services.</p>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6">
                        <div className="asset-button btn-text-left text-right top-margin">
                            <button type="button" className="btn btn-default">Find Out More About Trust</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="history-content-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 no-padding">
                        <div className="history-right-content">
                            <div className="col-sm-6 col-md-6"> 
                                <div className="progress-left-img">
                                    <img src={suitcaseImg} className="img-responsive" alt=""/>
                                    <span><i className="fa fa-shield"></i></span>                                
                                </div>  
                            </div> 
                            <div className="col-sm-6 col-md-6">
                                <div className="history-right-content-text">
                                    <p>Trust is a business theme perfectly suited legal advisers and offices, lawyers, attorneys, and other legal and law related services. We have started as a sole practitioner providing services to the area community. Aiming to provide high quality legal consultancy, support and results for your legal issues. Using their expertise and experience, Trust law firm documents and builds their clients' cases to obtain the best results they could achieve.</p>
                                    <img src="images/history-right-sign.png" alt=""/>
                                </div>
                            </div>
                        </div>                        
                    </div>
                    <div className="col-md-4">
                        <div className="progressbar">
                            <div className="progress_cont">
                                <div className="skill">Criminal Law<span className="pull-right"></span> </div>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: '75%', backgroundImage:'linear-gradient(to bottom,#d5aa6d 0,#d5aa6d 100%)'}}> <span className="sr-only">75% Complete (success)</span> </div>
                                </div>
                            </div>
                            <div className="progress_cont">
                                <div className="skill">Indurance <span className="pull-right"></span> </div>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ width: '50%', backgroundImage:'linear-gradient(to bottom,#d5aa6d 0,#d5aa6d 100%)'}}> <span className="sr-only">50% Complete (success)</span> </div>
                                </div>
                            </div>
                            <div className="progress_cont">
                                <div className="skill">Financial Law <span className="pull-right"></span> </div>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ width: '90%', backgroundImage:'linear-gradient(to bottom,#d5aa6d 0,#d5aa6d 100%)'}}> <span className="sr-only">90% Complete (success)</span> </div>
                                </div>
                            </div>
                            <div className="progress_cont">
                                <div className="skill">Civil Litigation <span className="pull-right"></span> </div>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: '60%', backgroundImage:'linear-gradient(to bottom,#d5aa6d 0,#d5aa6d 100%)'}}> <span className="sr-only">60% Complete (success)</span> </div>
                                </div>
                            </div>
                            <div className="progress_cont">
                                <div className="skill">Other Areas <span className="pull-right"></span> </div>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{ width: '94%', backgroundImage:'linear-gradient(to bottom,#d5aa6d 0,#d5aa6d 100%)'}}> <span className="sr-only">94% Complete (success)</span> </div>
                                </div>
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

export default OurHistory