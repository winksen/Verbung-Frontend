// USED IMPORTS
import React, { Component } from "react";
import ScrollToTop from 'react-scroll-up';

import { FiChevronUp } from "react-icons/fi";

import PageHelmet from "../component/common/Helmet";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import Calendly from "../component/Calendly";

// UNUSED IMPORTS
// import Breadcrumb from "../elements/common/Breadcrumb";
// import CounterOne from "../elements/counters/CounterOne";
// import Testimonial from "../elements/Testimonial";
// import BrandTwo from "../elements/BrandTwo";
// import { FaFacebookF , FaLinkedinIn , FaTwitter } from "react-icons/fa";

class About extends Component{
    render(){
        return(
            <div className="active-dark">
            <React.Fragment>
                <PageHelmet pageTitle='VERBUNG | Booking' />

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

                {/* Start About Area  */}
                <div className="rn-about-area ptb--120 bg_color--1">
                    <Calendly/>
                </div>
                {/* End About Area  */}

                 {/* Start CounterUp Area */}
                 {/* <div className="rn-counterup-area pb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    <h3 className="title textUpper">Our Facts</h3>
                                </div>
                            </div>
                        </div>
                        <CounterOne />
                    </div>
                </div> */}
                {/* End CounterUp Area */}
                
                <Footer />

            </React.Fragment>
            </div>
        )
    }
}
export default About