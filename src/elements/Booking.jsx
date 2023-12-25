// USED IMPORTS
import React, { useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { loadLanguageFromLocalStorage } from '../dark/LanguageHelper';
import ScrollToTop from 'react-scroll-up';

import { FiChevronUp } from "react-icons/fi";
import { FiHeadphones , FiMail , FiMapPin } from "react-icons/fi";

import PageHelmet from "../component/common/Helmet";
import Header from "../component/header/Header";
import Footer from "../component/footer/FooterTwo";
import BookingOne from "../elements/contact/BookingOne";

// UNUSED IMPORTS
// import GoogleMapReact from 'google-map-react';
// import BrandTwo from "../elements/BrandTwo";
// import { HiOutlineMail } from "react-icons/hi";

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

function Contact(props){
    // static defaultProps = {
    //     center: {
    //         lat: 59.95,
    //         lng: 30.33
    //     },
    //     zoom: 11
    // };
    const { t } = useTranslation();
    useEffect(() => {
        loadLanguageFromLocalStorage();
    }, []);
        return(
            <div className="active-dark"> 
                <React.Fragment>
                    <PageHelmet pageTitle="VERBUNG | Contact" />

                    <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

                    {/* Start Breadcrump Area */}
                    <div className="rn-page-title-area pt--120"  data-black-overlay="6">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="rn-page-title text-center pt--100">
                                        <h2 className="title theme-gradient textUpper">{t("contact_reach_out")}</h2>
                                        <p>{t("contact_description")}</p>
                                        <br/><br/>
                                        {/* <p><HiOutlineMail /> contact@verbung.net </p> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Breadcrump Area */}


                    

                    {/* Start Contact Page Area  */}
                    <div className="rn-contact-page ptb--120 active-darkless">
                        <BookingOne />
                    </div>
                    {/* End Contact Page Area  */}

                    {/* Start Contact Top Area  */}
                    <div className="rn-contact-top-area ptb--60 bg_color--5">
                        <div className="container">
                        
                            <div className="row">
                                {/* Start Single Address  */}
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="rn-address">
                                        <div className="icon">
                                            <FiHeadphones />
                                        </div>
                                        <div className="inner">
                                            <h4 className="title textUpper">{t("phone")}</h4>
                                            <p><a href="tel:+212705339633">+212 7 05 33 96 33</a></p>
                                            {/* <p><a href="tel:+856 325 652 984">+856 325 652 984</a></p> */}
                                        </div>
                                    </div>
                                </div>
                                {/* End Single Address  */}

                                {/* Start Single Address  */}
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt_mobile--50">
                                    <div className="rn-address">
                                        <div className="icon">
                                            <FiMail />
                                        </div>
                                        <div className="inner">
                                            <h4 className="title textUpper">{t("email")}</h4>
                                            <p><a href="mailto:contact@verbung.net">contact@verbung.net</a></p>
                                            {/* <p><a href="mailto:example@gmail.com">example@gmail.com</a></p> */}
                                        </div>
                                    </div>
                                </div>
                                {/* End Single Address  */}

                                {/* Start Single Address  */}
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt_md--50 mt_sm--50">
                                    <div className="rn-address">
                                        <div className="icon">
                                            <FiMapPin />
                                        </div>
                                        <div className="inner">
                                            <h4 className="title textUpper">{t("location")}</h4>
                                            <p>{t("offices_soon")}</p>
                                        </div>
                                    </div>
                                </div>
                                {/* End Single Address  */}

                            </div>
                        </div>
                    </div>
                    {/* End Contact Top Area  */}

                    {/* Start Contact Map  */}
                    {/* <div className="rn-contact-map-area position-relative">
                        <div style={{ height: '650px', width: '100%' }}>
                            <GoogleMapReact
                            defaultCenter={this.props.center}
                            defaultZoom={this.props.zoom}
                            >
                            <AnyReactComponent
                                lat={59.955413}
                                lng={30.337844}
                                text="My Marker"
                            />
                            </GoogleMapReact>
                        </div>
                    </div> */}
                    {/* End Contact Map  */}

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
export default Contact