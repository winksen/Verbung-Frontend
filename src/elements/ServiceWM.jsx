import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import { FiCast , FiLayers , FiUsers , FiMonitor ,FiChevronUp, FiMaximize } from "react-icons/fi";
import ScrollToTop from 'react-scroll-up';
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";


const ServiceListWM = [
    {
        icon: <FiMonitor />,
        title: 'Website Strategy',
        description: 'When visitors hit your site there is only a matter of seconds to engage them. A web strategy is about crafting a solution that is usable and accessible and exudes the right look and feel. The strategy will contain the scope of work, direct the content creation process and provide tactical direction for the developers.'
    },
    {
        icon: <FiMonitor />,
        title: 'UI Design',
        description: 'The purpose of any interface is to help the user accomplish their goal. Our UI designers put themselves in the user’s mindset, predict what they will expect and then make the design that reflects these insights. They design each screen to ensure that the UI visually communicates the path that a UX designer has developed.'
    },
    {
        icon: <FiMonitor />,
        title: 'UX Design',
        description: 'UX design is about having a complete understanding of the user. Our UX designers will conduct user research, review user types and conduct performance and usability testing to design the most effective journey. We ensure that the navigation of your website is completely intuitive so the user can get to their end destination easily.'
    },
    {
        icon: <FiMonitor />,
        title: 'Mobile-first Design',
        description: 'Mobile-first or responsive design means that a website responds to the user’s device or platform by reformatting itself fluidly. This makes the website usable and accessible on the device that’s accessing it. Everything VI develops online is built with mobile-use in mind.'
    },
    {
        icon: <FiMonitor />,
        title: 'Tracking & Analysis',
        description: 'Our web analytics help you to measure, collect, analyze and report your web data for purposes of understanding and optimizing your website. Web analytics can be used as a tool for business and market research, and to assess and improve the effectiveness of a website.'
    },
    {
        icon: <FiMonitor />,
        title: 'Search Engine Optimisation (SEO)',
        description: 'A beautiful and functional website is a great tool, but if your potential customers are not able to find you with their search terms, you’ll be left behind. Vi uses industry recognised tools and processes to review, optimize and ultimately improve or maintain rankings.'
    },
];

class ServiceWM extends Component{
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
                <div></div>
                <div className="service-area ptb--120 bg_color--5" id="WM">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center mb--30">
                                    <h2>Web &amp; Mobile</h2>
                                    <p>Your website is the first place that your customers will look to find out about your business and the services or products you provide. It is, in essence, your first impression and your sales tool.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row service-one-wrapper">
                            {ServiceListWM.map( (val , i) => (
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                                    <a className="text-center">
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
export default ServiceWM;