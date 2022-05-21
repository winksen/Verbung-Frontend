import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import { FiCast , FiLayers , FiUsers , FiMonitor ,FiChevronUp, FiMaximize } from "react-icons/fi";
import ScrollToTop from 'react-scroll-up';
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";


const ServiceListPR = [
    {
        icon: <FiUsers />,
        title: 'Technical Direction',
        description: 'The technical director is responsible for the technical and logistical feasibility during the preparation, assembly and dismantling phases of the operations. He directs and coordinates the management teams as well as all the subcontractors during the various phases of production.'
    },
    {
        icon: <FiUsers />,
        title: 'Institutional Communication',
        description: 'The daily life of the company requires support in order to inform, convince, know the feelings and build customer loyalty. In this perspective, institutional communication aims to promote the image of the company and show consumers the values that the company defends, its commitment and to make people like and understand the brand.'
    },
    {
        icon: <FiUsers />,
        title: 'Photography',
        description: 'Events are above all an appointment that contains a communication action. The photo coverage fixes the date and place of the event, translates the atmosphere and enhances the participation and the interventions of the participants in images. Guests will be photographed on the spot during conferences, breaks, cocktails and professional events.'
    },
    {
        icon: <FiUsers />,
        title: 'Conferences, Seminars, Festivals',
        description: 'You are organizing a seminar or a congress, audiovisual recording is now a major asset to take into account to increase the impact of your event. Because your events matter a lot, their coverage should be planned carefully. This is why we put at your service a team of production of the video of your event, adapted to your needs of distribution.'
    },
    {
        icon: <FiUsers />,
        title: 'Institutional Film',
        description: 'Originality is what sets your company apart. Promoting the image of your company, its mission, its objectives, the team and the services through an institutional film improves its visibility. In the corporate video, you can include statements from directors, testimonials from your clients, images of your company’s facilities and subtitle the video in different languages.'
    },
    {
        icon: <FiUsers />,
        title: 'Commercial Film',
        description: 'Announcing the release of a new product and highlighting the image of a brand means finding the right promotion that will ensure the best visibility. The video support helps the viewer to visualize the use of the product for future acquisition and promotes your company in the international market. We also offer a translation and subtitling service for better distribution of the video.'
    },
];

class ServicePR extends Component{
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
                <div className="service-area ptb--120 bg_color--1" id="PR">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center mb--30">
                                    <h2>Press Relation</h2>
                                    <p>The best way to get your news in front of the journalists who matter.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row service-one-wrapper">
                            {ServiceListPR.map( (val , i) => (
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
export default ServicePR;