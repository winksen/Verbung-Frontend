import React from 'react'
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp , FiCheck } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

const PricingTable = () => {
    return (
        <div className='active-dark'>
            <PageHelmet pageTitle='Pricing Table' />

            {/* Start Header Area  */}
            <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
            {/* End Header Area  */}
            
            {/* Start Breadcrump Area */}
            {/* <Breadcrumb title={'Pricing Table'}   /> */}
            {/* End Breadcrump Area */}

            {/* Start Page Wrapper  */}
            <br /><br /><br /><br />
            <main className="page-wrapper active-darkless">
                {/* Start Pricing Tbale Area  */}
                <div className="rn-pricing-table-area ptb--120 bg_color--5">
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
                                            <h4 className="title">Digital Marketing</h4>
                                            <div className="pricing">
                                                <span className="subtitle">•</span>
                                                <span className="subtitle">Starting from</span>
                                                <span className="price">22,000</span>
                                                <span className="subtitle">MAD/TTC</span>
                                            </div>
                                        </div>
                                        <div className="pricing-body">
                                            <ul className="list-style--1">
                                                <li><FiCheck />Community Management</li>
                                                <li><FiCheck />SEO &amp; SEA</li>
                                                <li><FiCheck />Email Marketing</li>
                                                <li><FiCheck />Influencers Campaign</li>
                                                <li><FiCheck />Marketing Strategic Advice</li>
                                                <li><FiCheck />Marketing Plan</li>
                                            </ul>
                                        </div>
                                        <div className="pricing-footer">
                                            <a className="rn-btn" href="#pricing">Purchase Now</a>
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
                                            <h4 className="title">Visual Identity</h4>
                                            <div className="pricing">
                                                <span className="subtitle">•</span>
                                                <span className="subtitle">Starting from</span>
                                                <span className="price">*** ***</span>
                                                <span className="subtitle">MAD/TTC</span>
                                            </div>
                                        </div>
                                        <div className="pricing-body">
                                            <ul className="list-style--1">
                                                <li><FiCheck />Logo Design</li>
                                                <li><FiCheck />Graphic Charter Setup</li>
                                                <li><FiCheck />Typography &amp; Colors</li>
                                                <li><FiCheck />Stationairy</li>
                                                <li><FiCheck />Social Media Assets</li>
                                                <li><FiCheck />Email Signature</li>
                                            </ul>
                                        </div>
                                        <div className="pricing-footer">
                                            <a className="rn-btn" href="#pricing">Purchase Now</a>
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
                                            <h4 className="title">Web &amp; Mobile</h4>
                                            <div className="pricing">
                                                <span className="subtitle">•</span>
                                                <span className="subtitle">Starting from</span>
                                                <span className="price">125,000</span>
                                                <span className="subtitle">MAD/TTC</span>
                                            </div>
                                        </div>
                                        <div className="pricing-body">
                                            <ul className="list-style--1">
                                                <li><FiCheck />Custom UI Design</li>
                                                <li><FiCheck />UX Enhancement</li>
                                                <li><FiCheck />Development &amp; Coding</li>
                                                <li><FiCheck />Administration Console</li>
                                                <li><FiCheck />Publishing/Deployment</li>
                                                <li><FiCheck />Domain Name Reservation</li>
                                            </ul>
                                        </div>
                                        <div className="pricing-footer">
                                            <a className="rn-btn" href="#pricing">Purchase Now</a>
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
                                            <h4 className="title">Press Relation</h4>
                                            <div className="pricing">
                                                <span className="subtitle">•</span>
                                                <span className="subtitle">starting from</span>
                                                <span className="price">35,000</span>
                                                <span className="subtitle">MAD/TTC</span>
                                            </div>
                                        </div>
                                        <div className="pricing-body">
                                            <ul className="list-style--1">
                                                <li><FiCheck />PR Strategic Advice</li>
                                                <li><FiCheck />PR Action Plans</li>
                                                <li><FiCheck />Press Releases &amp; Books</li>
                                                <li><FiCheck />Contact with Media</li>
                                                <li><FiCheck />Conferences, Interviews</li>
                                                <li><FiCheck /> UI/UX designs</li>
                                            </ul>
                                        </div>
                                        <div className="pricing-footer">
                                            <a className="rn-btn" href="#pricing">Purchase Now</a>
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
            </main>
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