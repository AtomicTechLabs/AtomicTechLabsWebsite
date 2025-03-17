import React from 'react'
import Logo from '../assets/img/logo/AtomicLogo.png';
import BannerImage from '../assets/img/logo/BannerImage.png';
import ShapeOne from '../assets/img/hero/shape-1.png';
import ShapeTwo from '../assets/img/hero/shape-2.png';
import Learning from '../assets/img/service/learning.png';
import Industrial from '../assets/img/service/Industrail.png';
import Corporate from '../assets/img/service/Corporate.png';
import Iotproduct from '../assets/img/service/Iotproduct.png';
import STEAM from '../assets/img/service/STEAM.png';
import Research from '../assets/img/service/Research.png';
import serviceOne from '../assets/img/service/service-1.png';
import serviceTwo from '../assets/img/service/service-2.png';
import serviceThree from '../assets/img/service/service-3.png';
import bpchoseone from '../assets/img/chose/bp-chose-5.1.png';
import choseoneTwo from '../assets/img/chose/bp-chose-5.2.png';
import choseoneThree from '../assets/img/chose/bp-chose-5.3.png';
import Feat from '../assets/img/feature/fea-2.png';
import ServiceShape from '../assets/img/service/service-shape.png';

const Home = () => {
   return (
      <div>
         <header className="d-none d-lg-block">
            <div id="header-sticky" className="tp-header-area header-transparent pl-165 pr-165 pt-35">
               <div className="container-fluid">
                  <div className="row align-items-center">
                     <div className="col-xl-3 col-lg-3">
                        <div className="tp-logo">
                           <a href="/"><img src={Logo} alt="" /></a>
                        </div>
                     </div>
                     {/* <div className="col-xl-7 col-lg-7">
                        <div className="tp-main-menu">
                           <nav id="mobile-menu">
                              <ul>
                                 <li className="has-dropdown"><a href="index.html">Home</a>
                                    <ul className="submenu text-start">
                                       <li><a href="index.html">Creative Agency</a></li>
                                       <li><a href="index-2.html">Personal Portfolio</a></li>
                                       <li><a href="index-3.html">Startup Business</a></li>
                                       <li><a href="index-4.html">Digital Agency</a></li>
                                       <li><a href="index-5.html">Business Advisor</a></li>
                                       <li><a href="index-6.html">IT Service Agency</a></li>
                                       <li><a href="index-7.html">Corporate Agency</a></li>
                                       <li><a href="index-8.html">Fashion Blog 01</a></li>
                                       <li><a href="index-9.html">Fashion Blog 02</a></li>
                                    </ul>
                                 </li>
                                 <li className="has-dropdown "><a href="portfolio.html">Portfolio</a>
                                    <ul className="submenu text-start">
                                       <li><a href="portfolio.html">Portfolio Full Width</a></li>
                                       <li><a href="portfolio-2.html">Portfolio Filter 01</a></li>
                                       <li><a href="portfolio-3.html">Portfolio Filter 02</a></li>
                                       <li><a href="portfolio-mesonary.html">Portfolio Masonry</a></li>
                                       <li><a href="portfolio-details.html">Portfolio Details</a></li>
                                    </ul>
                                 </li>
                                 <li className="has-dropdown has-mega-menu"><a href="#">Pages</a>
                                    <ul className="submenu text-start">
                                       <li><a href="about.html">About</a></li>
                                       <li><a href="about-me.html">About Me</a></li>
                                       <li><a href="job.html">Job</a></li>
                                       <li><a href="job-details.html">Job Details</a></li>
                                       <li><a href="product.html">Product</a></li>
                                       <li><a href="product-details.html">Product Details</a></li>
                                       <li><a href="service-1.html">Service 01</a></li>
                                       <li><a href="service-2.html">Service 02</a></li>
                                       <li><a href="service-3.html">Service 03</a></li>
                                       <li><a href="service-4.html">Service 04</a></li>
                                       <li><a href="service-details.html">Service Details</a></li>
                                       <li><a href="testimonial.html">Testimonial</a></li>
                                       <li><a href="price.html">Price</a></li>
                                       <li><a href="faq.html">Faq</a></li>
                                       <li><a href="login.html">Login</a></li>
                                       <li><a href="registration.html">Register</a></li>
                                       <li><a href="404.html">404</a></li>
                                    </ul>
                                 </li>
                                 <li className="has-dropdown "><a href="blog.html">Blog</a>
                                    <ul className="submenu text-start">
                                       <li><a href="blog.html">Blog Sidebar</a></li>
                                       <li><a href="blog-details.html">Blog Details</a></li>
                                       <li><a href="blog-grid-1.html">Post Style 01</a></li>
                                       <li><a href="blog-grid-2.html">Post Style 02</a></li>
                                       <li><a href="blog-grid-3.html">Post Style 03</a></li>
                                    </ul>
                                 </li>
                                 <li><a href="contact.html">Contact</a></li>
                              </ul>
                           </nav>
                        </div>
                     </div>
                     <div className="col-xl-2 col-lg-2">
                        <div className="tp-menu-bar text-end">
                           <button><i className="fal fa-bars"></i></button>
                        </div>
                     </div> */}
                  </div>
               </div>
            </div>
         </header>

         <div id="header-sticky-mobile" className="tp-md-menu header-transparent d-lg-none pt-40 pb-40">
            <div className="container-fluid">
               <div className="row align-items-center">
                  <div className="col-6">
                     <div className="tp-logo">
                        <a href="/"><img src={Logo} alt="" /></a>
                     </div>
                  </div>
                  
               </div>
            </div>
         </div>

         <div className="tp-offcanvas-area">
            <div className="tpoffcanvas">
               <div className="tpoffcanvas__logo">
                  <a href="/">
                     <img src="assets/img/logo/logo-white.png" alt="" />
                  </a>
               </div>
               <div className="tpoffcanvas__close-btn">
                  <a className="close-btn" href="/"><i className="fal fa-times-hexagon"></i></a>
               </div>
               <div className="tpoffcanvas__content d-none d-sm-block">
                  <p>We deploy world-class Creative <br /> on demand.</p>
               </div>
               <div className="mobile-menu">

               </div>
               <div className="tpoffcanvas__contact">
                  <span>Contact us</span>
                  <ul>
                     <li><i className="fas fa-star"></i> <a href="/" target="_blank">Melbone
                        st, Australia, Ny 12099</a></li>
                     <li><i className="fas fa-star"></i> <a href="/">+81 800 123 456 78</a></li>
                     <li><i className="fas fa-star"></i> <a href="/">Collaxmail@gmail.com</a></li>
                  </ul>
               </div>
               <div className="tpoffcanvas__input d-none d-sm-block">
                  <p>Get UPdate</p>
                  <form className="p-relative" action="#">
                     <input type="text" placeholder="Enter mail" />
                     <button type="submit"><i className="fas fa-paper-plane"></i></button>
                  </form>
               </div>
               <div className="tpoffcanvas__instagram d-none d-sm-block">
                  <p>Check Instagram POst</p>
                  <div className="tp-insta">
                     <div className="row">
                        <div className="col-3 col-sm-3"><a href="/"><img src="assets/img/offcanvas/insta-1.jpg" alt="" /></a></div>
                        <div className="col-3 col-sm-3"><a href="/"><img src="assets/img/offcanvas/insta-2.jpg" alt="" /></a></div>
                        <div className="col-3 col-sm-3"><a href="/"><img src="assets/img/offcanvas/insta-4.jpg" alt="" /></a></div>
                        <div className="col-3 col-sm-3"><a href="/"><img src="assets/img/offcanvas/insta-4.jpg" alt="" /></a></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className="body-overlay"></div>

         <main>
            <div className="tp-hero-area tp-hero-space p-relative z-index-1 fix">
               <div className="tp-hero-shape">
                  <div className="shape-circle-yellow d-none"></div>
                  <div className="shape-circle-blue"></div>
                  <div className="shape-one"><img src={ShapeOne} alt="" /></div>
               </div>
               <div className="tp-hero-wapper">
                  <div className="container">
                     <div className="row align-items-center">
                        <div className="col-xl-7 col-lg-7">
                           <div className="tp-hero-content">
                              <div className="tp-hero-text">
                                 <h2 className="tp-hero-title wow tpfadeUp" data-wow-duration=".3s" data-wow-delay=".6s">Redefining Learning Through Robotics, IoT & AI</h2>
                                 <p className="wow tpfadeUp" data-wow-duration=".5s" data-wow-delay=".8s"> Adopting Technology and Optimizing Minds for Ideas and Creation</p>
                                 {/* <div className="tp-hero-button mb-140 wow tpfadeUp" data-wow-duration=".7s" data-wow-delay="1s">
                                    <a className="tp-btn mr-30" href="portfolio-details.html">Visit Case Studies</a>
                                    <a className="tp-btn-grey" href="about-me.html">About Collax <i className="far fa-arrow-right"></i></a>
                                 </div> */}
                                 {/* <div className="tp-hero-social pb-30 wow tpfadeIn" data-wow-duration=".7s" data-wow-delay="1.2s">
                                    <div className="tp-hero-social bp-hero-social">
                                       <a className="social-icon-1" href="#">
                                          <i className="fab fa-facebook-f social-icon-1"></i><span>Facebook</span>
                                       </a>
                                       <a className="social-icon-3" href="#"><i
                                          className="fab fa-youtube social-icon-3"></i><span>youtube</span></a>
                                       <a className="social-icon-2" href="#"><i
                                          className="fab fa-twitter social-icon-2"></i><span>twitter</span></a>
                                       <a className="social-icon-4" href="#"><i
                                          className="fab fa-behance social-icon-4"></i><span>behance</span></a>
                                    </div>
                                 </div> */}
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-5 col-lg-5">
                           <div className="tp-hero-big-img wow fadeInRight" data-wow-duration=".7s" data-wow-delay="1.2s">
                              <img src={BannerImage} alt="" />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="p-relative pt-10">
               <div className="shape-two z-index-1">
                  <img src={ShapeTwo} alt="" />
               </div>
               <div className="ac-about-content-area pt-100">
                  <div className="container">
                     <div className="">
                        <div className="row">
                           <div className="col-xl-6 col-lg-6 wow tpfadeLeft" data-wow-duration=".3s" data-wow-delay=".5s">
                              <div className="ac-about-left">
                                 <h3 className="ac-ab-title"><a href="/">Innovating Through Education & Technology</a></h3>
                              </div>
                           </div>
                           <div className="col-xl- col-lg-6 wow tpfadeRight" data-wow-duration=".5s" data-wow-delay=".7s">
                              <div className="ac-about-right">
                              <h5 className="tp-subtitle">About Us</h5>
                                 <p className="pb-25">Atomic Tech Labs provides hands-on training in Robotics, IoT, AI, and Embedded Systems for students, fostering future-ready skills for children's growth. We also specialize in innovative product development, solving real-world challenges with cutting-edge technology.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>


            {/* <div className="p-relative">
               <div className="shape-two z-index-1">
                  <img src="assets/img/hero/shape-2.png" alt="" />
               </div>
               <div className="tp-creative-area p-relative black-bg pt-140 pb-135 fix">
                  <div className="circle-animation testimonial">
                     <span className="tp-circle-1"></span>
                     <span className="tp-circle-2"></span>
                  </div>
                  <div className="creative-shape-img">
                     <img src="assets/img/creative/creative-hand.png" alt="" />
                  </div>
                  <div className="creative-shape-img-2">
                     <img src="assets/img/creative/creative-circle-img.png" alt="" />
                  </div>
                  <div className="container creative-z-index ">
                     <div className="row">
                        <div className="col-lg-12">
                           <div className="tp-creative-box text-center">
                              <div className="tp-creative-content mb-110">
                                 <h4 className="tp-creative-title">We deploy world-class <b>Creative Design team</b> on demand.
                                    that can design, build, ship and
                                    scale your vision in the most efficient way.</h4>
                              </div>
                              <div className="tp-play-button mb-150">
                                 <a className="popup-video" href="https://www.youtube.com/watch?v=PO_fBTkoznc"><i
                                    className="fal fa-play"></i></a>
                                 <span>Play Take a look behind the scenes</span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="creative-box pl-40 pr-40">
                        <div className="row gx-5">
                           <div className="col-lg-4 col-md-12 col-xs-12 mb-30">
                              <div className="tp-creative-item wow tpfadeUp" data-wow-duration=".3s" data-wow-delay=".6s">
                                 <div className="tp-creative-yellow d-flex align-items-center">
                                    <div className="tp-creative-icon mr-35">
                                       <i className="flaticon-satisfaction"></i>
                                    </div>
                                    <div className="counter-text">
                                       <span>100%</span>
                                       <p className="m-0">Client Setisfaction</p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-lg-4 col-md-12 col-xs-12 mb-30">
                              <div className="tp-creative-item tp-creative-blue wow tpfadeUp" data-wow-duration=".5s" data-wow-delay=".8s">
                                 <div className="tp-creative-yellow d-flex align-items-center">
                                    <div className="tp-creative-icon mr-35">
                                       <i className="flaticon-clipboard"></i>
                                    </div>
                                    <div className="counter-text">
                                       <span>1200+</span>
                                       <p className="m-0">Complete Project</p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-lg-4 col-md-12 col-xs-12 mb-30">
                              <div className="tp-creative-item tp-creative-pink wow tpfadeUp" data-wow-duration=".7s" data-wow-delay="1s">
                                 <div className="tp-creative-yellow d-flex align-items-center">
                                    <div className="tp-creative-icon mr-35">
                                       <i className="flaticon-setting"></i>
                                    </div>
                                    <div className="counter-text">
                                       <span>1800+</span>
                                       <p className="m-0">Design Resource</p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div> */}
            {/* 
            <div className="tp-brand-area pt-135 grey-bg">
               <div className="container">
                  <div className="row">
                     <div className="col-12">
                        <div className="tp-brand-section text-center pb-60">
                           <h4 className="tp-brand-title">We are Already Build Solution for...</h4>
                        </div>
                     </div>
                  </div>
                  <div className="tp-brand-slider-section">
                     <div className="swiper-container brand-slider-active">
                        <div className="swiper-wrapper d-flex align-items-center">
                           <div className="swiper-slide">
                              <div className="tp-brand-icon text-center">
                                 <img src="assets/img/brand/brand-1.png" alt="" />
                              </div>
                           </div>
                           <div className="swiper-slide">
                              <div className="tp-brand-icon text-center">
                                 <img src="assets/img/brand/brand-2.png" alt="" />
                              </div>
                           </div>
                           <div className="swiper-slide">
                              <div className="tp-brand-icon text-center">
                                 <img src="assets/img/brand/brand-3.png" alt="" />
                              </div>
                           </div>
                           <div className="swiper-slide">
                              <div className="tp-brand-icon text-center">
                                 <img src="assets/img/brand/brand-4.png" alt="" />
                              </div>
                           </div>
                           <div className="swiper-slide">
                              <div className="tp-brand-icon text-center">
                                 <img src="assets/img/brand/brand-5.png" alt="" />
                              </div>
                           </div>
                           <div className="swiper-slide">
                              <div className="tp-brand-icon text-center">
                                 <img src="assets/img/brand/brand-6.png" alt="" />
                              </div>
                           </div>
                           <div className="swiper-slide">
                              <div className="tp-brand-icon text-center">
                                 <img src="assets/img/brand/brand-6.png" alt="" />
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div> */}


            <div className="tp-service-area pt-55 pb-50">
               <div className="container">
                  <div className="row">
                     <div className="col-xl-12">
                        <div className="tp-service-section-box text-center pb-35">
                           <h5 className="tp-subtitle">Core Services</h5>
                           <h2 className="tp-title">Innovate, Learn, and 
                              <span className="tp-section-highlight ps-1">
                               Build the Future
                                 <svg className="wow" width="290" height="11" viewBox="0 0 290 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0L290 11H0V0Z" fill="#FFDC60" />
                                 </svg>
                              </span>
                           </h2>
                        </div>
                     </div>
                  </div>
                  <div className="row gx-17">
                     <div className="col-xl-4 col-md-6">
                        <div className="tp-services-item text-center service-color-1 mb-30  wow tpfadeUp" data-wow-duration="1s" data-wow-delay=".3s">
                           <div className="tp-services-item__icon mb-35">
                              <img src={Learning} alt="" />
                           </div>
                           <div className="tp-services-item__content">
                              <h3 className="tp-sv-title"><a href="/">IoT Training & Certification </a></h3>
                              <p>Advance your career with hands-on IoT courses in Embedded Systems, AI, and Automation. Ideal for students, engineers, and IT professionals.</p>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-4 col-md-6 " >
                        <div className="tp-services-item text-center service-color-2 mb-30 wow tpfadeUp" data-wow-duration="1s" data-wow-delay=".5s">
                           <div className="tp-services-item__icon mb-35">
                              <img src={Industrial} alt=""/>
                           </div>
                           <div className="tp-services-item__content">
                              <h3 className="tp-sv-title"><a href="/">Industrial IoT Solutions </a></h3>
                              <p>Transform your business with smart IoT solutions for manufacturing, healthcare, and smart cities. Enhance efficiency, automation, and analytics.</p>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-4 col-md-6 " >
                        <div className="tp-services-item text-center service-color-3 mb-30 wow tpfadeUp" data-wow-duration="1s" data-wow-delay=".7s">
                           <div className="tp-services-item__icon mb-35">
                              <img src={Corporate} alt="" />
                           </div>
                           <div className="tp-services-item__content">
                              <h3 className="tp-sv-title"><a href="/">Corporate IoT Workshops</a></h3>
                              <p> Upskill your team with expert-led IoT workshops covering Edge Computing, AIoT, and Cloud Integration for tech enterprises and startups.</p>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-4 col-md-6 " >
                        <div className="tp-services-item text-center service-color-3 mb-30 wow tpfadeUp" data-wow-duration="1s" data-wow-delay=".7s">
                           <div className="tp-services-item__icon mb-35">
                              <img src={Iotproduct} alt="" />
                           </div>
                           <div className="tp-services-item__content">
                              <h3 className="tp-sv-title"><a href="/">Custom IoT Product Development</a></h3>
                              <p> We design and develop IoT-enabled smart devices, automation systems, and AI-integrated platforms for enterprises, startups, and innovators.</p>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-4 col-md-6 " >
                        <div className="tp-services-item text-center service-color-3 mb-30 wow tpfadeUp" data-wow-duration="1s" data-wow-delay=".7s">
                           <div className="tp-services-item__icon mb-35">
                              <img src={STEAM} alt="" />
                           </div>
                           <div className="tp-services-item__content">
                              <h3 className="tp-sv-title"><a href="/">STEM & Academic IoT Programs –</a></h3>
                              <p>Future-proof education with IoT & Robotics training for universities, schools, and technical institutes, bridging the gap between theory and industry.</p>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-4 col-md-6 " >
                        <div className="tp-services-item text-center service-color-2 mb-30 wow tpfadeUp" data-wow-duration="1s" data-wow-delay=".5s">
                           <div className="tp-services-item__icon mb-35">
                              <img src={Research} alt=""/>
                           </div>
                           <div className="tp-services-item__content">
                              <h3 className="tp-sv-title"><a href="/">IoT Research & Project Development</a></h3>
                              <p>Advance research with hands-on IoT project guidance, prototyping, and industry collaboration for students, researchers, and universities, bridging academia and real-world innovation.</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="tp-service-area pt-60 pb-40 grey-bg p-relative fix">
               <div className="tp-sv-shape-img z-index-1">
                  <img src={ServiceShape} alt="" />
               </div>
               <div className="circle-animation service">
                  <span className="tp-circle-1"></span>
                  <span className="tp-circle-2"></span>
               </div>
               <div className="circle-animation service-two">
                  <span className="tp-circle-skye"></span>
               </div>
               <div className="container">
                  <div className="row">
                     <div className="col-lg-6 col-md-12 col-12">
                        <div className="tp-service-section-box mb-30 wow tpfadeUp" data-wow-duration=".3s" data-wow-delay=".6s">
                           <h5 className="tp-subtitle pb-10">Why Choose Us?</h5>
                           <h2 className="tp-title">Experts in every aspect lifecycle </h2>
                        </div>
                     </div>
                     <div className="col-lg-6 col-md-12 col-12">
                        <div className="tp-sv-box  wow tpfadeUp" data-wow-duration=".5s" data-wow-delay=".8s">
                           <div className="tp-service-item d-flex mb-30">
                              <div className="tp-sv-img">
                                 <img src={serviceOne} alt="" />
                              </div>
                              <div className="tp-sv-content pl-60">
                                 <h3 className=" tp-sv-title mb-35"><a href="service-details.html">Expert-Led IoT Training</a></h3>
                                 <p className="mb-30">Learn from industry professionals with real-world IoT, AI, and robotics experience, ensuring hands-on, practical learning.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-6 col-md-12 col-12">
                        <div className="tp-sv-box wow tpfadeUp" data-wow-duration=".7s" data-wow-delay="1s">
                           <div className="tp-service-item d-flex mb-30">
                              <div className="tp-sv-img">
                                 <img src={serviceTwo} alt="" />
                              </div>
                              <div className="tp-sv-content pl-60">
                                 <h3 className="tp-sv-title mb-35"><a href="service-details.html">Customized IoT & AI Solutions</a></h3>
                                 <p className="mb-30">We develop tailored IoT solutions for businesses, startups, and educational institutions, enabling smart automation and innovation.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-6 col-md-12 col-12">
                        <div className="tp-sv-box wow tpfadeUp" data-wow-duration=".9s" data-wow-delay="1.2s">
                           <div className="tp-service-item d-flex mb-30">
                              <div className="tp-sv-img">
                                 <img src={serviceThree} alt="" />
                              </div>
                              <div className="tp-sv-content pl-60">
                                 <h3 className=" tp-sv-title mb-35"><a href="service-details.html">Industry-Aligned Curriculum</a></h3>
                                 <p className="mb-30">Our courses focus on Embedded Systems, AIoT, Edge Computing, and Smart Automation, preparing students and professionals for IoT careers.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="tp-chose-area pt-10 pb-10 p-relative">
         <div className="bp-chose-1 d-none d-lg-block">
            <img src={bpchoseone} alt=""/>
         </div>
         <div className="bp-chose-2 d-none d-lg-block">
            <img src={choseoneTwo} alt=""/>
         </div>
         <div className="bp-chose-3 d-none d-lg-block">
            <img src={choseoneThree} alt=""/>
         </div>
         <div className="container">
            <div className="row">
               <div className="col-xl-6 col-lg-7 col-md-12">
                  <div className="tpchosebox-main p-relative">
                     <div className="tp-chose-bg">
                        <img src={Feat} alt=""/>
                     </div>
                     <div className="row gx-40 align-items-center tp-chose-space">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-12 wow tpfadeLeft"  data-wow-duration=".3s" data-wow-delay=".5s">
                           <div className="tp-chose-item mb-40">
                              <div className="tpchosebox">
                                 <div className="tpchosebox__icon mb-30">
                                    <a href="/"><i className="flaticon-group"></i></a>
                                 </div>
                                 <div className="tpchosebox__content">
                                    <h4><a href="/">Professional <br/> Team</a></h4>
                                    <p>10+ Team Member</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                           <div className="tp-chose-item">
                              <div className="tpchosebox tpchosebox-two mb-40 wow tpfadeIn"  data-wow-duration=".5s" data-wow-delay=".7s">
                                 <div className="tpchosebox__icon fea-color-4 mb-30">
                                    <a href="/"><i className="flaticon-web"></i></a>
                                 </div>
                                 <div className="tpchosebox__content">
                                    <h4><a href="/">Cretified <br/>
                                       Experience</a></h4>
                                    <p>1k Reach</p>
                                 </div>
                              </div>
                              <div className="tpchosebox tpchosebox-three wow tpfadeUp"  data-wow-duration=".5s" data-wow-delay=".7s">
                                 <div className="tpchosebox__icon fea-color-5 mb-30">
                                    <a href="/"><i className="fas fa-star"></i></a>
                                 </div>
                                 <div className="tpchosebox__content">
                                    <h4><a href="/">Competitive <br/>
                                       Rate</a></h4>
                                    <p>100% Client Satisfied</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-xl-6 col-lg-5 col-md-10 col-12 wow tpfadeRight d-flex align-items-center"  data-wow-duration=".5s" data-wow-delay=".9s">
                  <div className="tp-feature-section-title-box">
                     {/* <h5 className="tp-subtitle pb-10">Why Choose us</h5> */}
                     <h2 className="tp-title tp-title-sm">Transform 
                        <span className="tp-section-highlight">
                        Your Business
                           <svg width="247" height="12" viewBox="0 0 247 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M-0.000488281 0L247 12H-0.000488281V0Z" fill="#FFDC60"/>
                           </svg>
                        </span>
                        with Smart IoT Solutions</h2>
                     <p className="pb-25">We help businesses harness the power of IoT, AI, and automation to improve efficiency, connectivity, and innovation. Our custom IoT solutions optimize operations, enabling smart manufacturing, industrial automation, and real-time data analytics.</p>
                     <p className="pb-20">From design to deployment, we create scalable, future-ready IoT ecosystems that drive digital transformation.</p>
                    
                  </div>
               </div>
            </div>
         </div>
      </div>
            </div>

        

            {/* <div className="tp-testimonial-area black-bg pt-130 pb-130 fix">
               <div className="container-fluid">
                  <div className="row">
                     <div className="col-xl-12">
                        <div className="tp-testimonial-section-box text-center pb-25">
                           <h5 className="tp-subtitle">Client Testimonial</h5>
                           <h2 className="tp-title tp-white-text">Customer feedback</h2>
                        </div>
                     </div>
                  </div>
                  <div className="tp-testimonial-slider-section d-flex justify-content-center mb-50">
                     <div className="swiper-container testimonial-slider-active">
                        <div className="swiper-wrapper">
                           <div className="swiper-slide">
                              <div className="tp-testimonial-item">
                                 <div className="tp-testi-meta d-flex justify-content-between mb-40">
                                    <div className="tp-testi-icon-box d-flex align-items-center">
                                       <div className="tp-testi-img mr-20"><img src="assets/img/testimonial/testi-1.png" alt="" />
                                       </div>
                                       <div className="tp-testi-client-position">
                                          <h3>Darrell Steward</h3>
                                          <h6>Founder of (Rirax)</h6>
                                       </div>
                                    </div>
                                    <div className="tp-testi-ratting">
                                       <i className="fas fa-star"></i>
                                       <i className="fas fa-star"></i>
                                       <i className="fas fa-star"></i>
                                       <i className="fas fa-star"></i>
                                       <i className="fas fa-star"></i>
                                    </div>
                                 </div>
                                 <div className="tp-testi-p-text">
                                    <p>Collax was very diligent, polite and extremely customer oriented. I think Monika will
                                       go
                                       far with that attitude and ...he is such a honest, decent and reliable.</p>
                                 </div>
                              </div>
                           </div>
                           <div className="swiper-slide">
                              <div className="tp-testimonial-item">
                                 <div className="tp-testi-meta d-flex justify-content-between mb-40">
                                    <div className="tp-testi-icon-box d-flex align-items-center">
                                       <div className="tp-testi-img mr-20"><img src="assets/img/testimonial/testi-2.jpg" alt="" />
                                       </div>
                                       <div className="tp-testi-client-position">
                                          <h3>Floyd Miles</h3>
                                          <h6>CEO of (Orix)</h6>
                                       </div>
                                    </div>
                                    <div className="tp-testi-ratting">
                                       <i className="fas fa-star"></i>
                                       <i className="fas fa-star"></i>
                                       <i className="fas fa-star"></i>
                                       <i className="fas fa-star"></i>
                                       <i className="fas fa-star"></i>
                                    </div>
                                 </div>
                                 <div className="tp-testi-p-text">
                                    <p>Collax was very diligent, polite and extremely customer oriented. I think Monika will
                                       go
                                       far with that attitude and ...he is such a honest, decent and reliable.</p>
                                 </div>
                              </div>
                           </div>
                           <div className="swiper-slide">
                              <div className="tp-testimonial-item">
                                 <div className="tp-testi-meta d-flex justify-content-between mb-40">
                                    <div className="tp-testi-icon-box d-flex align-items-center">
                                       <div className=" tp-testi-img mr-20"><img src="assets/img/testimonial/testi-3.png" alt="" />
                                       </div>
                                       <div className="tp-testi-client-position">
                                          <h3>Albert Flores</h3>
                                          <h6>Founder of (Rirax)</h6>
                                       </div>
                                    </div>
                                    <div className="tp-testi-ratting">
                                       <i className="fas fa-star"></i>
                                       <i className="fas fa-star"></i>
                                       <i className="fas fa-star"></i>
                                       <i className="fas fa-star"></i>
                                       <i className="fas fa-star"></i>
                                    </div>
                                 </div>
                                 <div className="tp-testi-p-text">
                                    <p>Collax was very diligent, polite and extremely customer oriented. I think Monika will
                                       go
                                       far with that attitude and ...he is such a honest, decent and reliable.</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="tp-testimonial-slider-section-2 d-flex justify-content-center">
                     <div className="swiper-container testimonial-slider-active-2">
                        <div className="swiper-wrapper">
                           <div className="swiper-slide">
                              <div className="tp-testimonial-item">
                                 <div className="tp-testi-meta d-flex justify-content-between mb-40">
                                    <div className="tp-testi-icon-box d-flex align-items-center">
                                       <div className="tp-testi-img mr-20"><img src="assets/img/testimonial/testi-4.jpg" alt="" />
                                       </div>
                                       <div className="tp-testi-client-position">
                                          <h3>Dianne Russell</h3>
                                          <h6>CEO of (Orix)</h6>
                                       </div>
                                    </div>
                                    <div className="tp-testi-ratting">
                                       <i className="fas fa-star"></i>
                                       <i className="fas fa-star"></i>
                                       <i className="fas fa-star"></i>
                                       <i className="fas fa-star"></i>
                                       <i className="fas fa-star"></i>
                                    </div>
                                 </div>
                                 <div className="tp-testi-p-text">
                                    <p>Absolutely amazing. we can't believe how incredible this turned out. Yetta Thomas is a
                                       true professional. he is such a honest, decent and reliable. He always provide good
                                       service</p>
                                 </div>
                              </div>
                           </div>
                           <div className="swiper-slide">
                              <div className="tp-testimonial-item">
                                 <div className="tp-testi-meta d-flex justify-content-between mb-40">
                                    <div className="tp-testi-icon-box d-flex align-items-center">
                                       <div className="tp-testi-img mr-20"><img src="assets/img/testimonial/testi-5.jpg" alt="" />
                                       </div>
                                       <div className="tp-testi-client-position">
                                          <h3>Jerome Bell</h3>
                                          <h6>CEO of (Orix)</h6>
                                       </div>
                                    </div>
                                    <div className="tp-testi-ratting">
                                       <i className="fas fa-star"></i>
                                       <i className="fas fa-star"></i>
                                       <i className="fas fa-star"></i>
                                       <i className="fas fa-star"></i>
                                       <i className="fas fa-star"></i>
                                    </div>
                                 </div>
                                 <div className="tp-testi-p-text">
                                    <p>Collax is a very talented designer and his most valuable role is to teach design in a
                                       professional way. He trained design courses under my company Chartered Professional</p>
                                 </div>
                              </div>
                           </div>
                           <div className="swiper-slide">
                              <div className="tp-testimonial-item">
                                 <div className="tp-testi-meta d-flex justify-content-between mb-40">
                                    <div className="tp-testi-icon-box d-flex align-items-center">
                                       <div className=" tp-testi-img mr-20"><img src="assets/img/testimonial/testi-6.jpg" alt="" />
                                       </div>
                                       <div className="tp-testi-client-position">
                                          <h3>Floyd Miles</h3>
                                          <h6>CEO of (Orix)</h6>
                                       </div>
                                    </div>
                                    <div className="tp-testi-ratting">
                                       <i className="fas fa-star"></i>
                                       <i className="fas fa-star"></i>
                                       <i className="fas fa-star"></i>
                                       <i className="fas fa-star"></i>
                                       <i className="fas fa-star"></i>
                                    </div>
                                 </div>
                                 <div className="tp-testi-p-text">
                                    <p>Absolutely amazing. we can't believe how incredible this turned out. Yetta Thomas is a
                                       true professional. he is such a honest, decent and reliable. He always provide good
                                       service</p>
                                 </div>
                              </div>
                           </div>
                           <div className="swiper-slide">
                              <div className="tp-testimonial-item">
                                 <div className="tp-testi-meta d-flex justify-content-between mb-40">
                                    <div className="tp-testi-icon-box d-flex align-items-center">
                                       <div className=" tp-testi-img mr-20"><img src="assets/img/testimonial/testi-4.jpg" alt="" />
                                       </div>
                                       <div className="tp-testi-client-position">
                                          <h3>Robert Fox</h3>
                                          <h6>CEO of (Orix)</h6>
                                       </div>
                                    </div>
                                    <div className="tp-testi-ratting">
                                       <i className="fas fa-star"></i>
                                       <i className="fas fa-star"></i>
                                       <i className="fas fa-star"></i>
                                       <i className="fas fa-star"></i>
                                       <i className="fas fa-star"></i>
                                    </div>
                                 </div>
                                 <div className="tp-testi-p-text">
                                    <p>Absolutely amazing. we can't believe how incredible this turned out. Yetta Thomas is a
                                       true professional. he is such a honest, decent and reliable. He always provide good
                                       service</p>
                                 </div>
                              </div>
                           </div>
                           <div className="swiper-slide">
                              <div className="tp-testimonial-item">
                                 <div className="tp-testi-meta d-flex justify-content-between mb-40">
                                    <div className="tp-testi-icon-box d-flex align-items-center">
                                       <div className=" tp-testi-img mr-20"><img src="assets/img/testimonial/testi-5.jpg" alt="" />
                                       </div>
                                       <div className="tp-testi-client-position">
                                          <h3>Floyd Miles</h3>
                                          <h6>CEO of (Orix)</h6>
                                       </div>
                                    </div>
                                    <div className="tp-testi-ratting">
                                       <i className="fas fa-star"></i>
                                       <i className="fas fa-star"></i>
                                       <i className="fas fa-star"></i>
                                       <i className="fas fa-star"></i>
                                       <i className="fas fa-star"></i>
                                    </div>
                                 </div>
                                 <div className="tp-testi-p-text">
                                    <p>Absolutely amazing. we can't believe how incredible this turned out. Yetta Thomas is a
                                       true professional. he is such a honest, decent and reliable. He always provide good
                                       service</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div> */}


            <div className="sd-accordio-area pt-130 pb-130">
         <div className="container">
            <div className="row">
               <h2 className="tp-title text-center">Frequently Asked Question </h2>
               <div className='row'>
               <div className="col-xl-6">
                  <div className="tp-custom-accordio faq-accordio-border">
                     <div className="accordion" id="accordionExample">
                        <div className="accordion-items">
                           <h2 className="accordion-header" id="headingOne">
                              <button className="accordion-buttons" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                              Who can join your training programs?
                              </button>
                           </h2>
                           <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                              <div className="accordion-body">
                              Our courses are designed for school students, college learners, and professionals.
                              </div>
                           </div>
                        </div>
                        <div className="accordion-items">
                           <h2 className="accordion-header" id="headingTwo">
                              <button className="accordion-buttons collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                              Do you collaborate with schools for long-term programs?
                              </button>
                           </h2>
                           <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                              <div className="accordion-body">
                              Yes, we provide year-long curriculum programs tailored for schools to integrate technology education effectively.
                              </div>
                           </div>
                        </div>
                        <div className="accordion-items">
                           <h2 className="accordion-header" id="headingThree">
                              <button className="accordion-buttons collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                              Do you manage Atal Tinkering Labs (ATL)?
                              </button>
                           </h2>
                           <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                              <div className="accordion-body">
                              Yes, we set up, manage, and conduct hands-on training for ATL to foster innovation and STEM learning.
                              </div>
                           </div>
                        </div>
                        <div className="accordion-items">
                           <h2 className="accordion-header" id="headingfour">
                              <button className="accordion-buttons collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
                              Do you provide online training?
                              </button>
                           </h2>
                           <div id="collapsefour" className="accordion-collapse collapse" aria-labelledby="headingfour" data-bs-parent="#accordionExample">
                              <div className="accordion-body">
                              Yes, we offer both online and offline training sessions.

                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-xl-6">
                  <div className="tp-custom-accordio faq-accordio-border">
                     <div className="accordion" id="accordionExample">
                        <div className="accordion-items">
                           <h2 className="accordion-header" id="headingfive">
                              <button className="accordion-buttons" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive" aria-expanded="true" aria-controls="collapsefive">
                              Can businesses collaborate with you for product development?
                              </button>
                           </h2>
                           <div id="collapsefive" className="accordion-collapse collapse" aria-labelledby="headingfive" data-bs-parent="#accordionExample">
                              <div className="accordion-body">
                              Absolutely! We develop custom IoT and AI solutions for startups and enterprises.
                              </div>
                           </div>
                        </div>
                        <div className="accordion-items">
                           <h2 className="accordion-header" id="headingsix">
                              <button className="accordion-buttons collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsesix" aria-expanded="false" aria-controls="collapsesix">
                              Do you offer customized training programs for institutions?
                              </button>
                           </h2>
                           <div id="collapsesix" className="accordion-collapse collapse" aria-labelledby="headingsix" data-bs-parent="#accordionExample">
                              <div className="accordion-body">
                              Yes, we design customized training modules for schools, colleges, and corporate teams.A dedicated product design team can help you achieve your business goals. Whether you need to craft an idea for a completely new product or elevate the quality of an existing solution, we’ll help you to create a product that is laser targeted to your users’ needs and delivers business results.
                              </div>
                           </div>
                        </div>
                        <div className="accordion-items">
                           <h2 className="accordion-header" id="headingseven">
                              <button className="accordion-buttons collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseseven" aria-expanded="false" aria-controls="collapseseven">
                              What technologies do you specialize in ?
                              </button>
                           </h2>
                           <div id="collapseseven" className="accordion-collapse collapse" aria-labelledby="headingseven" data-bs-parent="#accordionExample">
                              <div className="accordion-body">
                              We focus on Robotics, IoT, AI, Embedded Systems, and STEM education.
                              </div>
                           </div>
                        </div>
                        <div className="accordion-items">
                           <h2 className="accordion-header" id="headingeight">
                              <button className="accordion-buttons collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseight" aria-expanded="false" aria-controls="collapseight">
                              How can we partner with Atomic Tech Labs?
                              </button>
                           </h2>
                           <div id="collapseight" className="accordion-collapse collapse" aria-labelledby="headingeight" data-bs-parent="#accordionExample">
                              <div className="accordion-body">
                              You can collaborate for training programs, curriculum development, or product innovation. Contact us for more details.
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               </div>
            </div>
         </div>
      </div>


            <div className="tp-news-letter-area pb-140 wow tpfadeUp" data-wow-duration=".7s" data-wow-delay=".4s">
               <div className="container">
                  <div className="tp-news-letter-box p-relative" data-background="assets/img/news/news-shape.png">
                     <div className="row">
                        <div className="col-xl-10 col-lg-6 col-md-8 col-12  ">
                           <div className="tp-news-wrapper pl-90 z-index-1">
                              <div className="tp-news-letter-section-box">
                                 <h2 className="tp-title tp-white-text mb-2">Get latest updates and deals</h2>
                                 <h5 className="subtitle-secondary-color text-start text-sm">Stay informed about cutting-edge IoT solutions, AI automation trends, and smart technology innovations. Subscribe now for exclusive insights, industry news, and special offers on IoT training & solutions!</h5>
                              </div>
                              <div className="tp-news-button p-relative w-50">
                                 <form action="#">
                                    <input type="text" placeholder="Enter your mail" />
                                    <button className="tp-submit-button tp-btn-yellow-semilar" type="submit">Subscribe <i
                                       className="far fa-arrow-right"></i></button>
                                 </form>
                              </div>
                           </div>
                        </div>
                        
                        <div className="col-xl-6 col-lg-6 text-lg-end col-md-4  ">
                           <div className="tp-news-letter-img">
                              {/* <img src="assets/img/news/news-1.png" alt="" /> */}
                           </div>
                        </div>
                     </div>
                     <div className="tp-news-shape-img">
                        {/* <img src="assets/img/news/news-shape-2.png" alt="" /> */}
                     </div>
                  </div>
               </div>
            </div>

         </main>

         <footer className="p-relative">
            <button className="scrollTop d-none d-md-block" data-target="html">
               <div className="tp-backto-top">
                  <svg width="16" height="58" viewBox="0 0 16 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path
                        d="M8.70711 0.292892C8.31659 -0.0976295 7.68342 -0.0976296 7.2929 0.292892L0.928934 6.65685C0.53841 7.04738 0.53841 7.68054 0.928934 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41422L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292892ZM9 58L9 1L7 1L7 58L9 58Z"
                        fill="#292930" />
                  </svg>
               </div>
            </button>
            <div className="footer-clip-shape">
               <svg width="1918" height="98" viewBox="0 0 1918 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                     d="M435.5 54L0 1V0L1917.5 1L1309 75.5C1263 82 1178.75 88.6471 1176.5 89C1116 98.5 958.667 98.3333 885.5 97C874.167 96.5 856.5 95.5 850.5 95.5C793.5 95.5 554.667 69.3333 435.5 54Z"
                     fill="white" />
               </svg>
            </div>
            <div className="tp-clip-height-one"></div>
            <div className="tp-clip-height-two"></div>
            <div className="tp-footer-area tp-footer-space black-bg p-relative fix pt-0">
               <div className="tp-footer-border-shape d-none"></div>
               <div className="tp-footer-border-shape-two"></div>
               <div className="circle-animation footer-animation d-none d-md-block">
                  <span className="tp-circle-3"></span>
               </div>
               <div className="container">
                  <div className="tp-footer-widget wow tpfadeUp" data-wow-duration=".5s" data-wow-delay=".5s">
                     <div className="row align-items-center">
                        <div className="col-xl-7 col-lg-7 col-md-7 col-12">
                           <div className="tp-footer-top">
                              <h5 className="tp-footer-title">More than 3 years in the game and we're <br /> just getting started.
                                 🤝</h5>
                           </div>
                        </div>
                        <div className="col-xl-5 col-lg-5 col-md-5 col-12">
                           <div className="tp-footer-button text-start text-md-end">
                              <a className="tp-btn" href="contact.html">Available for new Project<i className="far fa-arrow-right"></i> </a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="tp-footer-widget wow tpfadeUp" data-wow-duration=".5s" data-wow-delay=".5s">
                     <div className="tp-copyright-text z-index-1">
                        <p className="m-0">Contact Us : +91 9943690987 / 9443922588</p>
                        <p className="m-0">Email: contact@atomictechlabs.com</p>
                     </div>
                  </div>
               </div>
               <div className="tp-copyright-area pb-90 wow tpfadeUp" data-wow-duration=".5s" data-wow-delay=".7s">
                  <div className="container">
                     <div className="tp-copyright-box align-items-center">
                        <div className="row align-items-center">
                           <div className="col-xl-5 col-lg-5 col-md-5 col-12">
                              <div className="tp-copyright-text z-index-1">
                                 <p className="m-0">© 2025 AtomicTechLabs, All Right Receved.</p>
                              </div>
                           </div>
                           <div className="col-xl-7 col-lg-7 col-md-7 col-12">
                              <div className="tp-copyright-right text-md-end text-start">
                                 <a href="/">Support</a>
                                 <a href="/">Privacy policy</a>
                                 <a href="/">Tterms and conditions</a>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="tp-copyright-logo-box">
                        <div className="row align-items-center">
                           <div className="col-xl-4 col-lg-4 col-md-4 col-12">
                              <div className="tp-copyright-logo mt-35">
                                 {/* <a href="index.html">

                                 </a> */}
                              </div>
                           </div>
                           <div className="col-xl-8 col-lg-8 col-md-8 col-12">
                              <div className="tp-copyright-social text-md-end mt-25">
                                 <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                 <a href="#"><i className="fab fa-facebook-f"></i></a>
                                 <a href="#"><i className="fab fa-instagram"></i></a>
                                 <a href="#"><i className="fab fa-youtube"></i></a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </footer>

         <button className="scroll-top scroll-to-target d-md-none" data-target="html">
            <i className="far fa-angle-double-up"></i>
         </button>
      </div>
   )
}

export default Home
