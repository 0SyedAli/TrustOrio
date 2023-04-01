import React from 'react'
import client1 from '../../asset/images/img/client-1.jpg'
import client2 from '../../asset/images/img/client-2.jpg'
import client3 from '../../asset/images/img/client-3.jpg'
import client4 from '../../asset/images/img/client-4.jpg'
import client5 from '../../asset/images/img/client-5.png'
import client6 from '../../asset/images/img/client-6.jpg'


const FutureTypo = () => {
  return (
    <div>
         <section className="feature-typo h-f-typo">
        <div className="container">
            <div className="row">                
                <div className="col-sm-9 col-md-9 no-padding">
                    <div className="shop-main-content-heading clearfix">
                        <div className="shop-m-h-left">
                            <p>Showing 1 : 16 of  <span>245</span> product</p>
                        </div>
                        <div className="shop-m-h-right">
                            <div className="dropdown shop-m-h-right-content">
                                <button className="btn dropdown-toggle" type="button" data-toggle="dropdown">Default Sorting
                                <span><i className="fa fa-angle-down"></i></span></button>
                                <ul className="dropdown-menu">
                                    <li><a href="#">sort by populerity</a></li>
                                    <li><a href="#">sort by rating</a></li>
                                    <li><a href="#">sort by low to high</a></li>
                                    <li><a href="#">sort by high to low</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>  
                    <div className="shop-main-content">
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <div className="shop-content-inner">
                                <div className="shop-content-img">
                                    <a href="#"><img src={client1} className="img-responsive" alt=""/></a>
                                    <div className="shop-content-img-hover">
                                        <div className="shop-content-img-hover-text">
                                            <a href="attorney-single.html">Book lawyer</a>
                                            <a href="#">Add To Wishlist</a>
                                        </div> 
                                    </div> 
                                </div>
                                <div className="shop-content-text">
                                    <p><a href="#">Financial Law</a></p>
                                    <h2><a href="#">Bank and Customer Law</a></h2>
                                    <h3>$ 70.00</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <div className="shop-content-inner">
                                <div className="shop-content-img">
                                    <a href="#"><img src={client2} className="img-responsive" alt=""/></a>
                                    <div className="shop-content-img-hover">
                                        <div className="shop-content-img-hover-text">
                                            <a href="attorney-single.html">Book lawyer</a>
                                        </div> 
                                    </div> 
                                </div>
                                <div className="shop-content-text">
                                    <p><a href="#">Civil Law</a></p>
                                    <h2><a href="#">Conscience and Religion</a></h2>
                                    <h3>$ 75.00</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <div className="shop-content-inner">
                                <div className="shop-content-img">
                                    <a href="#"><img src={client3} className="img-responsive" alt=""/></a> 
                                    <div className="shop-content-img-hover">
                                        <div className="shop-content-img-hover-text">
                                            <a href="attorney-single.html">Book lawyer</a>
                                        </div> 
                                    </div>                                     
                                </div>
                                <div className="shop-content-text">
                                    <p><a href="#">Family Law</a></p>
                                    <h2><a href="#">Conflict of Laws</a></h2>
                                    <h3>$ 70.00</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <div className="shop-content-inner">
                                <div className="shop-content-img">
                                    <a href="#"><img src={client4} className="img-responsive" alt=""/></a>
                                    <div className="shop-content-img-hover">
                                        <div className="shop-content-img-hover-text">
                                            <a href="attorney-single.html">Book lawyer</a>
                                        </div> 
                                    </div> 
                                </div>
                                <div className="shop-content-text">
                                    <p><a href="#">Financial Law</a></p>
                                    <h2><a href="#">Constitutional Law</a></h2>
                                    <h3>$ 70.00</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <div className="shop-content-inner">
                                <div className="shop-content-img">
                                    <a href="#"><img src={client5} className="img-responsive" alt=""/></a>
                                    <div className="shop-content-img-hover">
                                        <div className="shop-content-img-hover-text">
                                            <a href="attorney-single.html">Book lawyer</a>
                                        </div> 
                                    </div> 
                                </div>
                                <div className="shop-content-text">
                                    <p><a href="#">Civil Law</a></p>
                                    <h2><a href="#">Criminal Law</a></h2>
                                    <h3>$ 75.00</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <div className="shop-content-inner">
                                <div className="shop-content-img">
                                    <a href="#"><img src={client6} className="img-responsive" alt=""/></a>
                                    <div className="shop-content-img-hover">
                                        <div className="shop-content-img-hover-text">
                                            <a href="attorney-single.html">Book lawyer</a>
                                        </div> 
                                    </div> 
                                </div>
                                <div className="shop-content-text">
                                    <p><a href="#">Family Law</a></p>
                                    <h2><a href="#">Detention and Arrest</a></h2>
                                    <h3>$ 70.00</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 blog-pagination shop-pagination text-center clearfix">
                            <nav>
                                <ul className="pagination">
                                    <li><a href="#">1</a></li>
                                    <li><a href="#">2</a></li>
                                    <li>
                                      <a href="#" aria-label="Next">
                                        <i className="fa fa-long-arrow-right"></i>
                                      </a>
                                    </li>
                                </ul>
                            </nav>                                    
                        </div>
                    </div>                                                               
                </div>
                <div className="col-md-3 col-sm-3 l-s-r-l-out">
                    <div className="right-sidebar">
                        <div className="search-bar">
                            <form action="#">
                                <input type="text" value="" className="sidebar-input-text" placeholder="Type and hit enter ..."/>
                                <input type="submit" className="sidebar-input-submit"  value=""/>
                                <i className="fa fa-search"></i>
                            </form>
                        </div>
                        {/* <div className="sidebar-inner">
                            <h2>Filter By Price</h2>
                            <div className="shop-price-slider">                                
                                <div id="slider-range" className="shop-price-slider-content"></div>
                                    <p>
                                        <label for="amount">Price</label>
                                        <input type="text" id="amount" readonly style={{ border:"0", color:"#f6931f", fontWeight:"bold", }}/>
                                    </p>
                                    <a href="#">Filter Now</a>
                            </div>
                        </div> */}
                        <div className="sidebar-inner">
                            <h2>Tag Cloud</h2>
                            <div className="tag-cloud">
                                <a href="#">Responsive</a>
                                <a href="#">Modern</a>
                                <a href="#">Corporate</a>
                                <a href="#">Business</a>
                                <a href="#">Fresh</a>
                                <a href="#">Awesome</a>
                                <a href="#">Mount</a>
                                <a href="#">Fresh</a>
                                <a href="#">Responsive</a>
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

export default FutureTypo