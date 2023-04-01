import React from 'react';
import { Link } from 'react-router-dom';
// import '../asset/css/'
import '../asset/css/main.css'
import logo from '../asset/images/gallery/horse.png'


const Header = () => {
    return (
        <>
            {/* <header className="header-area navbar-fixed-top">
                <div className="container custom-header">
                    <div className="row">
                        <div id="menuzord" className="menuzord menuzord-responsive">
                        <a href="javascript:void(0)" className="showhide" style={{display: 'none'}}><em /><em /><em /></a>

                            <a href="home.html" className="menuzord-brand">
                                <img src={logo} width="35" height="51" alt="" />Trust <span>We provide legal solutions <br />for you !</span></a>
                            <div className="header-contact">
                                <ul>
                                    <li><span> Phone :</span> + 2 0106 5370701</li>
                                    <li><span>Email :</span> 7oroof@7oroof.com</li>
                                    <li>Free Consultation</li>
                                </ul>
                            </div>
                            <div className="header-search">
                                <ul>
                                    <li className="filter-search"><i className="fa fa-search"></i></li>
                                    <li><a href="#">0</a></li>
                                </ul>
                                <div className="add-to-cart-content">
                                    <div className="recent-post shop-right-thumb add-cart-thumb">
                                        <h3><a href="#">Criminal Law</a></h3>
                                        <p> 1 x $ 65.00</p>
                                        <img src="images/shop-right-thumb.png" alt="" />
                                        <span><a href="#"><img src="images/shop-cart-cross.png" alt="" /></a></span>
                                    </div>
                                    <div className="recent-post shop-right-thumb add-cart-thumb">
                                        <h3><a href="#">Detention and Arrest</a></h3>
                                        <p>1 x $ 65.00</p>
                                        <img src="images/shop-right-thumb.png" alt="" />
                                        <span><a href="#"><img src="images/shop-cart-cross.png" alt="" /></a></span>
                                    </div>
                                    <p>Subtotal:<span>$145.00</span></p>
                                    <button type="button" className="btn btn-dm">View Cart</button>
                                    <button type="button" className="btn btn-dm">Checkout</button>
                                </div>
                            </div>
                            <ul className="menuzord-menu menuzord-menu-bg">
                                <li className="active"><Link to="/">HOME</Link>

                                </li>
                                <li><Link to="/about">ABOUT</Link>

                                </li>

                                <li><Link to="/lawyer">LAWYERS</Link>

                                </li>
                                <li><Link to="/contact">CONTACT</Link>

                                </li>
                                <li><Link to="/profile">PROFILE</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header> */}
            {/* <header className="header-area navbar-fixed-top">
                <div className="container custom-header">
                    <div className="row">
                        <div id="menuzord" className="menuzord">
                            <a href="home.html" className="menuzord-brand"><img src={logo} width={35} height={51} alt />Trust <span>We provide legal solutions <br />for you !</span></a>
                            <div className="header-contact">
                                <ul>
                                    <li><span>Phone :</span> + 2 0106 5370701</li>
                                    <li><span>Email :</span> 7oroof@7oroof.com</li>
                                    <li><a href="/">Free Consultation</a></li>
                                </ul>
                            </div>
                            <div className="header-search">
                                <ul>
                                    <li className="filter-search"><i className="fa fa-search" /></li>
                                    <li className="add-to-cart"><a href="#"><i className="fa fa-shopping-cart" /></a></li>
                                    <li><a href="#">0</a></li>
                                </ul>
                                <div className="add-to-cart-content">
                                    <div className="recent-post shop-right-thumb add-cart-thumb">
                                        <h3><a href="#">Criminal Law</a></h3>
                                        <p> 1 x $ 65.00</p>
                                        <img src="images/shop-right-thumb.png" alt />
                                        <span><a href="#"><img src="images/shop-cart-cross.png" alt /></a></span>
                                    </div>
                                    <div className="recent-post shop-right-thumb add-cart-thumb">
                                        <h3><a href="#">Detention and Arrest</a></h3>
                                        <p>1 x $ 65.00</p>
                                        <img src="images/shop-right-thumb.png" alt />
                                        <span><a href="#"><img src="images/shop-cart-cross.png" alt /></a></span>
                                    </div>
                                    <p>Subtotal:<span>$145.00</span></p>
                                    <button type="button" className="btn btn-dm">View Cart</button>
                                    <button type="button" className="btn btn-dm">Checkout</button>
                                </div>
                            </div>
                            <ul className="menuzord-menu menuzord-menu-bg">
                                <li className="active"><Link to="/">HOME</Link>

                                </li>
                                <li><Link to="/about">ABOUT</Link>

                                </li>

                                <li><Link to="/lawyer">LAWYERS</Link>

                                </li>
                                <li><Link to="/contact">CONTACT</Link>

                                </li>
                                <li><Link to="/profile">PROFILE</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header> */}
            {/* <header className="header-area navbar-fixed-top">
                <div className="container custom-header">
                    <div className="row">
                        <div id="menuzord" className="menuzord menuzord-responsive"><a href="javascript:void(0)" className="showhide" style={{ display: 'inline' }}><em /><em /><em /></a>
                            <a href="home.html" className="menuzord-brand"><img src="images/horse.png" width={35} height={51} alt />Trust <span>We provide legal solutions <br />for you !</span></a>
                            <div className="header-contact">
                                <ul>
                                    <li><span>Phone :</span> + 2 0106 5370701</li>
                                    <li><span>Email :</span> 7oroof@7oroof.com</li>
                                    <li><a href="#">Free Consultation</a></li>
                                </ul>
                            </div>
                            <div className="header-search">
                                <ul>
                                    <li className="filter-search"><i className="fa fa-search" /></li>
                                    <li className="add-to-cart"><a href="#"><i className="fa fa-shopping-cart" /></a></li>
                                    <li><a href="#">0</a></li>
                                </ul>
                                <div className="add-to-cart-content">
                                    <div className="recent-post shop-right-thumb add-cart-thumb">
                                        <h3><a href="#">Criminal Law</a></h3>
                                        <p> 1 x $ 65.00</p>
                                        <img src="images/shop-right-thumb.png" alt />
                                        <span><a href="#"><img src="images/shop-cart-cross.png" alt /></a></span>
                                    </div>
                                    <div className="recent-post shop-right-thumb add-cart-thumb">
                                        <h3><a href="#">Detention and Arrest</a></h3>
                                        <p>1 x $ 65.00</p>
                                        <img src="images/shop-right-thumb.png" alt />
                                        <span><a href="#"><img src="images/shop-cart-cross.png" alt /></a></span>
                                    </div>
                                    <p>Subtotal:<span>$145.00</span></p>
                                    <button type="button" className="btn btn-dm">View Cart</button>
                                    <button type="button" className="btn btn-dm">Checkout</button>
                                </div>
                            </div>
                            <ul className="menuzord-menu menuzord-menu-bg menuzord-indented scrollable" style={{ display: 'none' }}>
                                <li className="active"><a href="home.html">HOME<span className="indicator"><i className="fa fa-angle-right" /></span></a>
                                    <div className="megamenu megamenu-half-width megamenu-bg" style={{ right: 'auto' }}>
                                        <div className="megamenu-row">
                                            <div className="mega-item col4">
                                                <ul>
                                                    <li><a href="home.html">Homepage 1</a></li>
                                                    <li><a href="home-2.html">Homepage 2</a></li>
                                                    <li><a href="home-3.html">Homepage 3</a></li>
                                                    <li><a href="home-4.html">Homepage 4</a></li>
                                                    <li><a href="home-5.html">Homepage 5</a></li>
                                                </ul>
                                            </div>
                                            <div className="mega-item col4">
                                                <ul>
                                                    <li><a href="home-6.html">Homepage 6</a></li>
                                                    <li><a href="home-7.html">Homepage 7</a></li>
                                                    <li><a href="home-8.html">Homepage 8</a></li>
                                                    <li><a href="home-9.html">Homepage 9</a></li>
                                                    <li><a href="home-10.html">Homepage 10</a></li>
                                                </ul>
                                            </div>
                                            <div className="mega-item col4">
                                                <ul>
                                                    <li><a href="home-11.html">Homepage 11</a></li>
                                                    <li><a href="home-12.html">Homepage 12</a></li>
                                                    <li><a href="home-13.html">Homepage 13</a></li>
                                                    <li><a href="home-14.html">Homepage 14</a></li>
                                                    <li><a href="home-15.html">Homepage 15</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li><a href="about-us1.html">ABOUT<span className="indicator"><i className="fa fa-angle-right" /></span></a>
                                    <ul className="dropdown" style={{ right: 'auto' }}>
                                        <li><a href="header-v-1.html">Headers<span className="indicator"><i className="fa fa-angle-right" /></span></a>
                                            <ul className="dropdown" style={{}}>
                                                <li><a href="header-v-1.html">Header Basic<span className="indicator"><i className="fa fa-angle-right" /></span></a>
                                                    <ul className="dropdown" style={{}}>
                                                        <li><a href="header-v-1.html">Header v1</a></li>
                                                        <li><a href="header-v-2.html">Header v2</a></li>
                                                        <li><a href="header-v-3.html">Header v3</a></li>
                                                        <li><a href="header-v-4.html">Header v4</a></li>
                                                        <li><a href="header-v-5.html">Header v5</a></li>
                                                        <li><a href="header-v-6.html">Header v6</a></li>
                                                        <li><a href="header-v-7.html">Header v7</a></li>
                                                        <li><a href="header-v-8.html">Header v8</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="header-v-9.html">Header Transparent<span className="indicator"><i className="fa fa-angle-right" /></span></a>
                                                    <ul className="dropdown" style={{}}>
                                                        <li><a href="header-v-9.html">Header v9</a></li>
                                                        <li><a href="header-v-10.html">Header v10</a></li>
                                                        <li><a href="header-v-11.html">Header v11</a></li>
                                                        <li><a href="header-v-12.html">Header v12</a></li>
                                                        <li><a href="header-v-13.html">Header v13</a></li>
                                                        <li><a href="header-v-14.html">Header v14</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><a href="page-title-1.html">Page titles<span className="indicator"><i className="fa fa-angle-right" /></span></a>
                                            <ul className="dropdown" style={{}}>
                                                <li><a href="page-title-1.html">Page Title v1</a></li>
                                                <li><a href="page-title-2.html">Page Title v2</a></li>
                                                <li><a href="page-title-3.html">Page Title v3</a></li>
                                                <li><a href="page-title-4.html">Page Title v4</a></li>
                                                <li><a href="page-title-5.html">Page Title v5</a></li>
                                                <li><a href="page-title-6.html">Page Title v6</a></li>
                                                <li><a href="page-title-7.html">Page Title v7</a></li>
                                                <li><a href="page-title-8.html">Page Title v8</a></li>
                                                <li><a href="page-title-9.html">Page Title v9</a></li>
                                                <li><a href="page-title-10.html">Page Title v10</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="footer-v-1.html">Footers<span className="indicator"><i className="fa fa-angle-right" /></span></a>
                                            <ul className="dropdown" style={{}}>
                                                <li><a href="footer-v-1.html">Footer v1</a></li>
                                                <li><a href="footer-v-2.html">Footer v2</a></li>
                                                <li><a href="footer-v-3.html">Footer v3</a></li>
                                                <li><a href="footer-v-4.html">Footer v4</a></li>
                                                <li><a href="footer-v-5.html">Footer v5</a></li>
                                                <li><a href="footer-v-6.html">Footer v6</a></li>
                                                <li><a href="footer-v-7.html">Footer v7</a></li>
                                                <li><a href="footer-v-8.html">Footer v8</a></li>
                                                <li><a href="footer-v-9.html">Footer v9</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="about-us1.html">About Us 1</a></li>
                                        <li><a href="about-us2.html">About Us 2</a></li>
                                        <li><a href="testimonials.html">Testimonials</a></li>
                                        <li><a href="clients.html">Clients</a></li>
                                        <li><a href="faqs.html">FAQs</a></li>
                                        <li><a href="gallery-2.html">Our Gallery<span className="indicator"><i className="fa fa-angle-right" /></span></a>
                                            <ul className="dropdown" style={{}}>
                                                <li><a href="gallery-2.html">Gallery 2 Column</a></li>
                                                <li><a href="gallery-3.html">Gallery 3 Column</a></li>
                                                <li><a href="gallery-4.html">Gallery 4 Column</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li><a href="practice-area-1.html">PRACTICE AREAS<span className="indicator"><i className="fa fa-angle-right" /></span></a>
                                    <ul className="dropdown" style={{ right: 'auto' }}>
                                        <li><a href="practice-area-1.html">Practice Areas 1</a></li>
                                        <li><a href="practice-area-2.html">Practice Areas 2</a></li>
                                        <li><a href="practice-area-block.html">Practice Areas Blocks</a></li>
                                        <li><a href="practice-area-single.html">Single Practice Area</a></li>
                                    </ul>
                                </li>
                                <li><a href="attorneys1.html">ATTORNEYS<span className="indicator"><i className="fa fa-angle-right" /></span></a>
                                    <ul className="dropdown" style={{ right: 'auto' }}>
                                        <li><a href="attorneys1.html">Attorneys 1</a></li>
                                        <li><a href="attorneys2.html">Attorneys 2</a></li>
                                        <li><a href="attorneys3.html">Attorneys 3</a></li>
                                        <li><a href="attorney-single.html">Single Attorney</a></li>
                                    </ul>
                                </li>
                                <li><a href="blog-standard.html">BLOG<span className="indicator"><i className="fa fa-angle-right" /></span></a>
                                    <ul className="dropdown" style={{ right: 'auto' }}>
                                        <li><a href="blog-grid.html">Blog Grid<span className="indicator"><i className="fa fa-angle-right" /></span></a>
                                            <ul className="dropdown" style={{}}>
                                                <li><a href="blog-grid2.html">Blog Grid 2 Column</a></li>
                                                <li><a href="blog-grid3.html">Blog Grid 3 Column</a></li>
                                                <li><a href="blog-grid.html">Blog Grid 4 Column</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="blog-standard.html">Blog Standard<span className="indicator"><i className="fa fa-angle-right" /></span></a>
                                            <ul className="dropdown" style={{}}>
                                                <li><a href="blog-standard-full.html">Full Width</a></li>
                                                <li><a href="blog-standard.html">Right Sidebar</a></li>
                                                <li><a href="blog-standard-left-sidebar.html">Left Sidebar</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="blog-single.html">Single Post<span className="indicator"><i className="fa fa-angle-right" /></span></a>
                                            <ul className="dropdown" style={{}}>
                                                <li><a href="blog-single-full-width.html">Full Width</a></li>
                                                <li><a href="blog-single.html">Right Sidebar</a></li>
                                                <li><a href="blog-single-left-sidebar.html">Left Sidebar</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li><a href="features-typography.html">FEATURES<span className="indicator"><i className="fa fa-angle-right" /></span></a>
                                    <div className="megamenu megamenu-full-width megamenu-bg" style={{ right: 0 }}>
                                        <div className="megamenu-row">
                                            <div className="mega-item col3">
                                                <ul>
                                                    <li><a href="features-typography.html">Typography</a></li>
                                                    <li><a href="features-Soon.html">Coming Soon Page</a></li>
                                                    <li><a href="features-maintenance.html">Maintenance</a></li>
                                                </ul>
                                            </div>
                                            <div className="mega-item col3">
                                                <ul>
                                                    <li><a href="features-404.html">404 Page</a></li>
                                                    <li><a href="heading-seperator.html">Headings</a></li>
                                                    <li><a href="tabs.html">Tabs</a></li>
                                                </ul>
                                            </div>
                                            <div className="mega-item col3">
                                                <ul>
                                                    <li><a href="accordions.html">Accordions</a></li>
                                                    <li><a href="features-Pricing-Tables.html">Pricing Tables</a></li>
                                                    <li><a href="progress-bar.html">Progress Bars</a></li>
                                                </ul>
                                            </div>
                                            <div className="mega-item col3">
                                                <ul>
                                                    <li><a href="google-maps.html">Google Maps</a></li>
                                                    <li><a href="left-sidebar-layout.html">Left Sidebar Layout</a></li>
                                                    <li><a href="right-sidebar-layout.html">Right Sidebar Layout</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li><a href="#">SHOP<span className="indicator"><i className="fa fa-angle-right" /></span></a>
                                    <ul className="dropdown" style={{ right: 0 }}>
                                        <li><a href="shop-category-right-sidebar.html">category right sidebar</a></li>
                                        <li><a href="shop-category-left-sidebar.html">category left sidebar</a></li>
                                        <li><a href="shop-category-full-width.html">category full width</a></li>
                                        <li><a href="shop-product-right-sidebar.html">product right sidebar</a></li>
                                        <li><a href="shop-product-left-sidebar.html">product left sidebar</a></li>
                                        <li><a href="shop-product-full-width.html">product full width</a></li>
                                        <li><a href="shop-single-product-right-sidebar.html">single product right sidebar</a></li>
                                        <li><a href="shop-single-product-left-sidebar.html">single product left sidebar</a></li>
                                        <li><a href="shop-single-product-full-width.html">single product full width</a></li>
                                        <li><a href="shop-cart.html">cart</a></li>
                                    </ul>
                                </li>
                                <li><a href="contact1.html">CONTACT<span className="indicator"><i className="fa fa-angle-right" /></span></a>
                                    <ul className="dropdown" style={{ right: 0 }}>
                                        <li><a href="contact1.html">Contact 1</a></li>
                                        <li><a href="contact2.html">Contact 2</a></li>
                                    </ul>
                                </li>
                                <li className="scrollable-fix" /></ul>
                        </div>
                    </div>
                </div>
            </header> */}

            {/* <headerr>
         
            </headerr> */}




        </>
    )
}

export default Header
