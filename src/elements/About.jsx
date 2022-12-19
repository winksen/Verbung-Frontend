import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import CounterOne from "../elements/counters/CounterOne";
import Testimonial from "../elements/Testimonial";
import BrandTwo from "../elements/BrandTwo";
import { FaFacebookF , FaLinkedinIn , FaTwitter } from "react-icons/fa";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";


class About extends Component{
    render(){
        let title = 'About',
        description = 'At Verbung, we work hard to understand your business and digital goals, so we can develop creative, results-driven strategies to help you achieve them at all times. You know your brand better than anyone, so our experts listen carefully to your needs and take a tailored approach to better understand what convinces your target audience.';
        return(
            <div className="active-dark">
            <React.Fragment>
                <PageHelmet pageTitle='About' />

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

                {/* Start About Area  */}
                <div className="rn-about-area ptb--120 bg_color--1">
                    <div className="rn-about-wrapper pt--100">
                        <div className="container">
                            <div className="row row--35 ">
                                {/* <div className="col-lg-5 col-md-12">
                                    <div className="thumbnail image-about">
                                        <img className="w-100" alt="About Images"/>
                                    </div>
                                </div> */}
                                <div className="col-lg-6">
                                    <div className="about-inner inner">
                                        <div className="section-title">
                                            <h2 className="title textUpper">{title}</h2>
                                            <p className="description">{description}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="about-inner inner">
                                        <div className="section-title">
                                            <h2 className="title textUpper">Who are we</h2>
                                            <p className="description">We are more than a typical communications agency; we are an agency of creative and strategic thinkers with brilliant minds working hand in hand with each client to achieve their digital business goals.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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

                {/* Start Finding Us Area  */}
                <div className="rn-finding-us-area pb--100 rn-finding-us bg_color--1">
                    <div className="inner">
                        <div className="content-wrapper">
                            <div className="content">
                                <h4 className="theme-gradient textUpper">Find Our Work Now</h4>
                                <p>We offer services from across the full marketing mix to a range of clients in both B2C and B2B environments.</p>
                                <a className="rn-btn btn-white" href="/pricing">See Pricing</a>
                            </div>
                        </div>
                        <div className="thumbnail">
                            <div className="image">
                                <img src="/assets/images/about/finding-us-01.png" alt="Finding Images"/>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Finding Us Area  */}

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
                
                <Footer />

            </React.Fragment>
            </div>
        )
    }
}
export default About