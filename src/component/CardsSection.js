import React from 'react'
import '../asset/css/cardSection.css'
import Button from 'react-bootstrap/Button';
import imgCause1 from '../asset/images/lawyer-card1.svg'
import imgCause2 from '../asset/images/lawyer-card1.svg'
import imgCause3 from '../asset/images/lawyer-card1.svg'
import imgCause4 from '../asset/images/lawyer-card1.svg'
import imgCause5 from '../asset/images/lawyer-card1.svg'
import imgCause6 from '../asset/images/lawyer-card1.svg'
import { FaStar } from 'react-icons/fa';
import ProgressBar from 'react-bootstrap/ProgressBar';

const CardsSection = () => {
    return (
        <div>
            <div className="container Popular" style={{ marginTop: '5rem', marginBottom: '5rem' }}>
                <div className="row align-items-center">
                    <div className="col-xl-12">
                        <div className="section-title text-center mb-60">
                            <div className="p-line">
                                <div className="line-p"></div>
                                <p>POPULAR CAUSES</p>
                            </div>
                            <h1>Back Before The Time Expires</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6 abCard">
                        <div className="causes white-bg mb-30">
                            <div className="causes__img">
                                <img src={imgCause1} alt='/' />
                                <div className="causes-heart">
                                    <a href="#"><i className="far fa-heart" /></a>
                                </div>
                            </div>
                            <div className="causes__caption">

                                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h4>
                                <div className="causes-progress mb-25">
                                    <div className="progress">
                                        <div className="progress-bar w-75" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
                                    </div>
                                    <div className="causes-count mt-15 fix">
                                        <div className="count-number f-left text-left">
                                            <h2>$32,678</h2>
                                            <h2>$33,467</h2>
                                        </div>
                                        <div className="count-number f-right text-right">
                                            <span>Pledged</span>
                                            <span>Target</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="line-card"></div>
                                <div className="causes-meta fix ">
                                    <span>BY ROMADA D</span>
                                    <span>AT LONDON</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 abCard">
                        <div className="causes white-bg mb-30">
                            <div className="causes__img">
                                <img src={imgCause2} alt='/' />
                                <div className="causes-heart">
                                    <a href="#"><i className="far fa-heart" /></a>
                                </div>
                            </div>
                            <div className="causes__caption">


                                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
                                <div className="causes-progress mb-25">
                                    <div className="progress">
                                        <div className="progress-bar w-75" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
                                    </div>
                                    <div className="causes-count mt-15 fix">
                                        <div className="count-number f-left text-left">
                                            <h2>$32,678</h2>
                                            <h2>$33,467</h2>
                                        </div>
                                        <div className="count-number f-right text-right">
                                            <span>Pledged</span>
                                            <span>Target</span>
                                        </div>
                                    </div>

                                </div>
                                <div className="line-card"></div>
                                <div className="causes-meta fix">
                                    <span>BY ROMADA D</span>
                                    <span>AT LONDON</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 abCard">
                        <div className="causes white-bg mb-30">
                            <div className="causes__img abCard1">
                                <img src={imgCause1} alt="/" />
                                <button className='btn-card'>ARNOLD HEBIT</button>
                            </div>
                            <div className="causes__caption">


                                <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>
                                {/* <div className="causes-progress mb-25">
                                    <div className="progress">
                                        <div className="progress-bar w-75" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
                                    </div>
                                    <div className="causes-count mt-15 fix">
                                        <div className="count-number f-left text-left">
                                            <h2>$32,678</h2>
                                            <h2>$33,467</h2>
                                        </div>
                                        <div className="count-number f-right text-right">
                                            <span>Pledged</span>
                                            <span>Target</span>
                                        </div>
                                    </div>
                                </div> */}
                                <div className="rating">
                                    <div className="rt-Div1">
                                        <div className="rt-Div1-top">
                                            <h1>4.6 <span>/5</span></h1>
                                            <p>Based on 120 Reviews</p>
                                        </div>
                                        <div className="rt-Div1-bottom">
                                            <h3><FaStar color="#d5aa6d" fontSize="1em" /></h3>
                                            <h3><FaStar color="#d5aa6d" fontSize="1em" /></h3>
                                            <h3><FaStar color="#d5aa6d" fontSize="1em" /></h3>
                                            <h3><FaStar color="#d5aa6d" fontSize="1em" /></h3>
                                            <h3><FaStar color="#d5aa6d" fontSize="1em" /></h3>
                                        </div>
                                    </div>
                                    <div className="rt-Div2">
                                        <div className="Progress-Div1">
                                            <div className="prog">
                                                <p>5 Stars </p>
                                                <ProgressBar now={100} />
                                            </div>
                                            <div className="prog">
                                                <p>4 Stars </p>
                                                <ProgressBar now={80} />
                                            </div>
                                            <div className="prog">
                                                <p>3 Stars </p>
                                                <ProgressBar now={60} />
                                            </div>
                                            <div className="prog">
                                                <p>2 Stars </p>
                                                <ProgressBar now={45} />
                                            </div>
                                            <div className="prog">
                                                <p>1 Stars </p>
                                                <ProgressBar now={30} />
                                            </div>
                                        </div>
                                        {/* <div className="progress-Div2">
                                            <h1><ProgressBar now={100} /></h1>
                                            <h1><ProgressBar now={80} /></h1>
                                            <h1><ProgressBar now={60} /></h1>
                                            <h1><ProgressBar now={45} /></h1>
                                            <h1><ProgressBar now={30} /></h1>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="line-card"></div>
                                <div className="causes-meta fix">
                                    <span>BY ROMADA D</span>
                                    <span>AT LONDON</span>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
                <div className="row mt-30">
                    <div className="col-xl-12">
                        <div className="section-link text-center">
                            <Button variant="primary" className="btn-product">MORE PRODUCT</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardsSection