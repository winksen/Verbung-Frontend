import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import { FiCast , FiUsers , FiMonitor ,FiChevronUp } from "react-icons/fi";
import ScrollToTop from 'react-scroll-up';
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import ServicesVI from "./services/ServicesVI";

class ServiceVI extends Component{
    render(){
        return(
            <div className="active-dark">
                <React.Fragment>
                <PageHelmet pageTitle="VERBUNG // Services" />
                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

                {/* Start Service Area */}
                <br /><br /><br /><br />
                <div className="service-area pt--120 pb--60 bg_color--5" id="VI">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    <h2 className="textUpper">Visual Identity</h2>
                                    <p>Good graphic design can make the difference to any business, as it has the ability to connect with your audience and reach your business goals.</p>
                                    <p>Services Details Below</p>
                                    <h3 className="title theme-gradient">•</h3>
                                </div>
                            </div>
                        </div>
                        <div className="rn-testimonial-area bg_color--5">
                            <div className="container">
                                <ServicesVI />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Service Area */}

                {/* Start Other Service Area */}
                <div className="service-area ptb--60 bg_color--1" id="VI">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center mb--30">
                                    <h2 className="textUpper">Other Services</h2>
                                    <p>Check out our other services</p>
                                </div>
                            </div>
                        </div>
                        <div className="row service-one-wrapper">
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                <a className="text-center" href="/digitalmarketing">
                                    <div className="service service__style--2">
                                        <div className="icon">
                                            <FiCast />
                                        </div>
                                        <div className="content">
                                            <h3 className="title textUpper">Digital Marketing</h3>
                                            <p>We build ROI centric campaigns that will take your business to the next level.</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                <a className="text-center" href="/webmobile">
                                    <div className="service service__style--2">
                                        <div className="icon">
                                            <FiMonitor />
                                        </div>
                                        <div className="content">
                                            <h3 className="title textUpper">Web &amp; Mobile</h3>
                                            <p>Your website is the first place your customers will look. It is, in essence, your first impression and your sales tool.</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                <a className="text-center" href="/pressrelation">
                                    <div className="service service__style--2">
                                        <div className="icon">
                                            <FiUsers />
                                        </div>
                                        <div className="content">
                                            <h3 className="title textUpper">Press Relation</h3>
                                            <p>The best way to get your news in front of the journalists who matter.</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Other Service Area */}

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
export default ServiceVI;