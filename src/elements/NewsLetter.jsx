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
import NewsLetterOne from "./contact/NewsLetterOne";

// UNUSED IMPORTS
// import GoogleMapReact from 'google-map-react';
// import BrandTwo from "../elements/BrandTwo";
// import { HiOutlineMail } from "react-icons/hi";

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

function NewsLetter(props){
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
                    {/* <PageHelmet pageTitle="VERBUNG | NewsLetter" /> */}

                    {/* <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" /> */}

                    {/* Start Contact Page Area  */}
                    <div className="rn-contact-page ptb--120 active-dark">
                        <NewsLetterOne />
                    </div>
                    {/* End Contact Page Area  */}

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
                    
                </React.Fragment>
            </div>
        )
}
export default NewsLetter