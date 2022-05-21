import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import { FiCast , FiLayers , FiUsers , FiMonitor ,FiChevronUp, FiMaximize } from "react-icons/fi";
import ScrollToTop from 'react-scroll-up';
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";


const ServiceListDM = [
    {
        icon: <FiCast />,
        title: 'Online Display Advertising',
        description: 'VI carefully design strategies to meet your business and marketing goals, from a single project to retainer for an online marketing package. Always ‘data-informed’ and using powerful digital analytics, we help your business thrive.'
    },
    {
        icon: <FiCast />,
        title: 'Remarketing',
        description: 'Remarketing drives consumer awareness. By targeting existing users and converting those who have engaged with your website before and encouraging further interaction. Not only do we set-up and manage the campaign, but we also design the ads too.'
    },
    {
        icon: <FiCast />,
        title: 'Pay Per Click (PPC)',
        description: 'PPC advertising gives you the opportunity to pay for top positions on search engines and appear on relevant partner websites. Pay-per-click delivers instant traffic and offers ways to compliment existing SEO strategies and allows you to develop an overall online strategy armed with facts, not assumptions.'
    },
    {
        icon: <FiCast />,
        title: 'Search Engine Optimization (SEO)',
        description: 'Having a website that can be easily found by potential customers is crucial. When searching for what you offer, your site needs to be up there in rankings. We optimize your website both onsite and offsite with the proper information that will achieve this.'
    },
    {
        icon: <FiCast />,
        title: 'Infographics',
        description: 'Whether you’re looking for content aimed at link acquisition, visuals to support editorial or traditional marketing content, infographics can tell your story in a more engaging, memorable and effective way. As experts in visual storytelling, we can help you tell your brand story, no matter what your end goal may be.'
    },
    {
        icon: <FiCast />,
        title: 'Videos',
        description: 'Video marketing has taken the social media world by storm with 100 million hours of video on the internet per day. We combine the talents of a video production company, with the knowledge and expertise of scriptwriters and storyboard creators to develop branded video content that engage and entertain your audiences.'
    },
    {
        icon: <FiCast />,
        title: 'Email Marketing',
        description: 'Research shows that no marketing channel consistently returns a better ROI than a properly implemented email marketing campaign. Repeat customers are the most valuable. They convert at the highest rates (20%), spend the most time on your website (7.69 seconds on average), look at 16.83 page views per session, and spend the most.'
    },
    {
        icon: <FiCast />,
        title: 'Marketing Consultancy',
        description: 'The biggest marketing expense is employing skilled people. Partners rather than suppliers we provide consultancy services giving you access to our expert team for a fraction of the price. This frees up your time and can reduce your overheads and headcount.'
    },
    {
        icon: <FiCast />,
        title: 'Marketing Strategy',
        description: 'Marketing is complicated. Multiple channels, competitors and audiences. We work with you to understand your market, challenge you and work out what you are trying to achieve. We’ll then develop the best fit strategy with audiences, messages and media.'
    },
    {
        icon: <FiCast />,
        title: 'Marketing Planning',
        description: 'Not sure where to start? We can help you create and deliver your marketing plan. We understand what needs to be included and how to present it in the most successful way.'
    },
    {
        icon: <FiCast />,
        title: 'Market Research',
        description: 'We work closely with you to understand your target market and customers. We use a mix of quantitative and qualitative methodologies to deliver best results. We ‘go the extra mile’ in terms of analysis and recommendations.'
    },
];

class ServiceDM extends Component{
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
                <div className="service-area ptb--120 bg_color--5" id="DM">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center mb--30">
                                    <FiCast/>
                                    <h2>Digital Marketing</h2>
                                    <p>We partner with clients to build ROI centric campaigns through a variety of digital marketing services that will take your business to the next level.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row service-one-wrapper">
                            {ServiceListDM.map( (val , i) => (
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12" key={i}>
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
export default ServiceDM;