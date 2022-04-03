import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import { FiCast , FiLayers , FiUsers , FiMonitor ,FiChevronUp } from "react-icons/fi";
import ScrollToTop from 'react-scroll-up';
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";


const ServiceListDM = [
    {
        icon: <FiCast />,
        title: 'DM1',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    {
        icon: <FiLayers />,
        title: 'DM2',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    {
        icon: <FiUsers />,
        title: 'DM3',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    {
        icon: <FiMonitor />,
        title: 'DM4',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    {
        icon: <FiCast />,
        title: 'DM5',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    {
        icon: <FiMonitor />,
        title: 'DM6',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
];

const ServiceListVI = [
    {
        icon: <FiCast />,
        title: 'VI1',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    {
        icon: <FiLayers />,
        title: 'VI2',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    {
        icon: <FiUsers />,
        title: 'VI3',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    {
        icon: <FiMonitor />,
        title: 'VI4',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    {
        icon: <FiCast />,
        title: 'VI5',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    {
        icon: <FiMonitor />,
        title: 'VI6',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
];

const ServiceListWM = [
    {
        icon: <FiCast />,
        title: 'WM1',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    {
        icon: <FiLayers />,
        title: 'WM2',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    {
        icon: <FiUsers />,
        title: 'WM3',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    {
        icon: <FiMonitor />,
        title: 'WM4',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    {
        icon: <FiCast />,
        title: 'WM5',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    {
        icon: <FiMonitor />,
        title: 'WM6',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
];

const ServiceListPR = [
    {
        icon: <FiCast />,
        title: 'PR1',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    {
        icon: <FiLayers />,
        title: 'PR2',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    {
        icon: <FiUsers />,
        title: 'PR3',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    {
        icon: <FiMonitor />,
        title: 'PR4',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    {
        icon: <FiCast />,
        title: 'PR5',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    {
        icon: <FiMonitor />,
        title: 'PR6',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
];

class Service extends Component{
    render(){
        return(
            <div className="active-dark">
                <React.Fragment>
                <PageHelmet pageTitle='Services' />
                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

                {/* Start Breadcrump Area */}
                {/* <Breadcrumb title={'Service'}   /> */}
                {/* End Breadcrump Area */}

                {/* Start Service Area */}
                <br /><br /><br /><br />
                <div className="service-area ptb--120 bg_color--5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center mb--30">
                                    <h2>Digital Marketing</h2>
                                    <p>There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row service-one-wrapper">
                            {ServiceListDM.map( (val , i) => (
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                                    <a href="/service-details">
                                        <div className="service service__style--2">
                                            <div className="icon">
                                                {val.icon}
                                            </div>
                                            <div className="content">
                                                <h3 className="title">{val.title}</h3>
                                                <p>{val.description}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* End Service Area */}

                {/* Start Service Area */}
                <div className="service-area ptb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center mb--30">
                                    <h2>Visual Identity</h2>
                                    <p>There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row service-one-wrapper">
                            {ServiceListVI.map( (val , i) => (
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                                    <a className="text-center" href="/service-details">
                                        <div className="service service__style--2">
                                            <div className="icon">
                                                {val.icon}
                                            </div>
                                            <div className="content">
                                                <h3 className="title">{val.title}</h3>
                                                <p>{val.description}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* End Service Area */}

                {/* Start Service Area */}
                <div className="service-area ptb--120 bg_color--5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center mb--30">
                                    <h2>Web &amp; Mobile</h2>
                                    <p>There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row service-one-wrapper">
                            {ServiceListWM.map( (val , i) => (
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                                    <a href="/service-details">
                                        <div className="service service__style--2">
                                            <div className="icon">
                                                {val.icon}
                                            </div>
                                            <div className="content">
                                                <h3 className="title">{val.title}</h3>
                                                <p>{val.description}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* End Service Area */}

                {/* Start Service Area */}
                <div className="service-area ptb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center mb--30">
                                    <h2>Press Relation</h2>
                                    <p>There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row service-one-wrapper">
                            {ServiceListPR.map( (val , i) => (
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                                    <a className="text-center" href="/service-details">
                                        <div className="service service__style--2">
                                            <div className="icon">
                                                {val.icon}
                                            </div>
                                            <div className="content">
                                                <h3 className="title">{val.title}</h3>
                                                <p>{val.description}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* End Service Area */}

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
export default Service;