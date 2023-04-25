import React, { useEffect } from 'react';
import { loadLanguageFromLocalStorage } from '../dark/LanguageHelper';
import { useTranslation, initReactI18next, Trans } from "react-i18next";
import PageHelmet from "../component/common/Helmet";
// import Breadcrumb from "../elements/common/Breadcrumb";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp , FiCheck } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

const PricingTable = () => {
    const { t } = useTranslation();
    useEffect(() => {
        loadLanguageFromLocalStorage();
    }, []);
    
    return (
        <div className='active-dark'>
            <PageHelmet pageTitle="VERBUNG // Packs" />

            {/* Start Header Area  */}
            <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
            {/* End Header Area  */}
            
            {/* Start Breadcrump Area */}
            <div className="rn-page-title-area pt--120 pb--190 active-darkless"  data-black-overlay="6">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="rn-page-title text-center pt--100">
                                        <h2 className="title theme-gradient textUpper">{t("home")} Our Packs</h2><br />
                                        {/* <img src="/assets/images/illustrations/cart.png" alt="" /> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Breadcrump Area */}

            {/* Start Page Wrapper  */}
            <div className="page-wrapper active-darkless">
                {/* Start Pricing Tbale Area  */}
                <div className="rn-pricing-table-area">
                    <div className="container">
                        <div className="row">

                            {/* Start PRicing Table Area  */}
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="rn-pricing">
                                    <div className="pricing-table-inner">
                                        <div className="pricing-header">
                                            <div className="pricing">
                                                <span className="subtitle">PACK</span>
                                            </div>
                                            <h4 className="title textUpper">Digital Marketing</h4>
                                            <div className="pricing">
                                                <span className="subtitle">•</span>
                                                {/* <span className="subtitle">Starting from</span>
                                                <span className="price">22,000</span>
                                                <span className="subtitle">MAD/TTC</span> */}
                                            </div>
                                        </div>
                                        <div className="pricing-body">
                                            <ul className="list-style--1">
                                                <li><FiCheck />Social Media Management</li>
                                                <li><FiCheck />SEO &amp; SEA</li>
                                                <li><FiCheck />Email Marketing</li>
                                                <li><FiCheck />Influencers Campaign</li>
                                                <li><FiCheck />Marketing Strategic Advice</li>
                                                <li><FiCheck />Online Market Research</li>
                                            </ul>
                                        </div>
                                        <div className="pricing-footer">
                                            <a className="rn-btn" href="/contact">Request a Quotation</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End PRicing Table Area  */}

                            {/* Start PRicing Table Area  */}
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="rn-pricing">
                                    <div className="pricing-table-inner">
                                        <div className="pricing-header">
                                            <div className="pricing">
                                                <span className="subtitle">PACK</span>
                                            </div>
                                            <h4 className="title textUpper">Visual Identity</h4>
                                            <div className="pricing">
                                                <span className="subtitle">•</span>
                                                {/* <span className="subtitle">Starting from</span>
                                                <span className="price">50,000</span>
                                                <span className="subtitle">MAD/TTC</span> */}
                                            </div>
                                        </div>
                                        <div className="pricing-body">
                                            <ul className="list-style--1">
                                                <li><FiCheck />Logo Design</li>
                                                <li><FiCheck />Graphic Charter</li>
                                                <li><FiCheck />Stationairy Design</li>
                                                <li><FiCheck />Social Media Design</li>
                                                <li><FiCheck />Email Signature Design</li>
                                                <li><FiCheck />Motion Design</li>
                                            </ul>
                                        </div>
                                        <div className="pricing-footer">
                                            <a className="rn-btn" href="/contact">Request a Quotation</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End PRicing Table Area  */}

                            {/* Start PRicing Table Area  */}
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="rn-pricing">
                                    <div className="pricing-table-inner">
                                        <div className="pricing-header">
                                            <div className="pricing">
                                                <span className="subtitle">PACK</span>
                                            </div>
                                            <h4 className="title textUpper">Web &amp; Mobile</h4>
                                            <div className="pricing">
                                                <span className="subtitle">•</span>
                                                {/* <span className="subtitle">Starting from</span>
                                                <span className="price">125,000</span>
                                                <span className="subtitle">MAD/TTC</span> */}
                                            </div>
                                        </div>
                                        <div className="pricing-body">
                                            <ul className="list-style--1">
                                                <li><FiCheck />UI Design</li>
                                                <li><FiCheck />UX Enhancement</li>
                                                <li><FiCheck />Development &amp; Coding</li>
                                                <li><FiCheck />SEO optimization</li>
                                                <li><FiCheck />Publishing &amp; Deployment</li>
                                                <li><FiCheck />Professional Email</li>
                                            </ul>
                                        </div>
                                        <div className="pricing-footer">
                                            <a className="rn-btn" href="/contact">Request a Quotation</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End PRicing Table Area  */}

                            {/* Start PRicing Table Area  */}
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="rn-pricing">
                                    <div className="pricing-table-inner">
                                        <div className="pricing-header">
                                            <div className="pricing">
                                                <span className="subtitle">PACK</span>
                                            </div>
                                            <h4 className="title textUpper">Press Relation</h4>
                                            <div className="pricing">
                                                <span className="subtitle">•</span>
                                                {/* <span className="subtitle">starting from</span>
                                                <span className="price">35,000</span>
                                                <span className="subtitle">MAD/TTC</span> */}
                                            </div>
                                        </div>
                                        <div className="pricing-body">
                                            <ul className="list-style--1">
                                                <li><FiCheck />PR Action Plans</li>
                                                <li><FiCheck />Writing Press Releases</li>
                                                <li><FiCheck />Event Planning</li>
                                                <li><FiCheck />Scripting &amp; Filming</li>
                                                <li><FiCheck />Video Editing</li>
                                                <li><FiCheck />Narration, Dubbing &amp; Voice-over</li>
                                            </ul>
                                        </div>
                                        <div className="pricing-footer">
                                            <a className="rn-btn" href="/contact">Request a Quotation</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End PRicing Table Area  */}
                            
                            {/* Start PRicing Table Area  */}
                            {/* <div className="col-lg-4 col-md-6 col-12">
                                <div className="rn-pricing active">
                                    <div className="pricing-table-inner">
                                        <div className="pricing-header">
                                            <h4 className="title">Business</h4>
                                            <div className="pricing">
                                                <span className="price">29</span>
                                                <span className="subtitle">USD Per Month</span>
                                            </div>
                                        </div>
                                        <div className="pricing-body">
                                            <ul className="list-style--1">
                                                <li><FiCheck /> 5 PPC Campaigns</li>
                                                <li><FiCheck /> Digital Marketing</li>
                                                <li><FiCheck /> Marketing Agency</li>
                                                <li><FiCheck /> Seo Friendly</li>
                                                <li><FiCheck /> UI/UX designs</li>
                                            </ul>
                                        </div>
                                        <div className="pricing-footer">
                                            <a className="rn-btn" href="#pricing">Purchase Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            {/* End PRicing Table Area  */}
                        </div>
                    </div>
                </div>
                {/* End Pricing Tbale Area  */}
                <br /><br />
            </div>
            {/* End Page Wrapper  */}

            {/* Start Back To Top */}
            <div className="backto-top">
                <ScrollToTop showUnder={160}>
                    <FiChevronUp />
                </ScrollToTop>
            </div>
            {/* End Back To Top */}
            
            {/* Start Footer Area  */}
            <Footer />
            {/* End Footer Area  */}
        </div>
        
    )
}
export default PricingTable;