import React, { useEffect } from "react";
import { loadLanguageFromLocalStorage } from '../dark/LanguageHelper';
import { useTranslation } from "react-i18next";
import PageHelmet from "../component/common/Helmet";
import { FiCast , FiUsers , FiChevronUp , FiMaximize } from "react-icons/fi";
import ScrollToTop from 'react-scroll-up';
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import ServicesWM from "./services/ServicesWM";

const ServiceWM = () => {
    const { t } = useTranslation();
    useEffect(() => {
        loadLanguageFromLocalStorage();
    }, []);
        return(
            <div className="active-dark">
                <React.Fragment>
                <PageHelmet pageTitle="VERBUNG // Services" />
                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

                {/* Start Service Area */}
                <br /><br /><br /><br />
                <div className="service-area pt--120 pb--60 bg_color--5" id="WM">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    <h2 className="textUpper">{t("webmobile")}</h2>
                                    <p>{t("webmobile_description")}</p>
                                    <p>{t("service_below")}</p>
                                    <h3 className="title theme-gradient">•</h3>
                                </div>
                            </div>
                        </div>
                        <div className="rn-testimonial-area bg_color--5">
                            <div className="container">
                                <ServicesWM />
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
                                    <h2 className="textUpper">{t("service_other")}</h2>
                                    <p>{t("service_other_check")}</p>
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
                                            <h3 className="title textUpper">{t("digitalmarketing")}</h3>
                                            <p>{t("digitalmarketing_description")}</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                <a className="text-center" href="/visualidentity">
                                    <div className="service service__style--2">
                                        <div className="icon">
                                            <FiMaximize />
                                        </div>
                                        <div className="content">
                                            <h3 className="title textUpper">{t("visualidentity")}</h3>
                                            <p>{t("visualidentity_description")}</p>
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
                                            <h3 className="title textUpper">{t("pressrelation")}</h3>
                                            <p>{t("pressrelation_description")}</p>
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
export default ServiceWM;