import React, { Component } from 'react';
import Header from "../component/header/Header";
import PageHelmet from "../component/common/Helmet";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Footer from "../component/footer/FooterTwo";

 class error404 extends Component {
    
    render() {
        return (
            <>
                <div className="active-dark">
                    <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
                    <PageHelmet pageTitle="VERBUNG | 404" />
                    {/* Start Page Error  */}
                    <div className="active-darkless error-page-inner bg_color--4">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="inner">
                                        <h1 className="title theme-gradient">404!</h1>
                                        <h3 className="sub-title textUpper">Page not found</h3>
                                        <span>The page you were looking for could not be found.</span>
                                        <div className="error-button">
                                            <a className="rn-button-style--2 btn-solid" href="/">Back To Homepage</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Page Error  */}

                    {/* Start Back To Top */}
                    <div className="backto-top">
                        <ScrollToTop showUnder={160}>
                            <FiChevronUp />
                        </ScrollToTop>
                    </div>
                    {/* End Back To Top */}
                    
                    <Footer /> 
                </div>
            </>
        )
    }
}
export default error404;
