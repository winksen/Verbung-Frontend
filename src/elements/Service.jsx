import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import { FiCast , FiLayers , FiUsers , FiMonitor ,FiChevronUp } from "react-icons/fi";
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
        icon: <FiLayers />,
        title: 'Remarketing',
        description: 'Remarketing drives consumer awareness. By targeting existing users and converting those who have engaged with your website before and encouraging further interaction. Not only do we set-up and manage the campaign, but we also design the ads too.'
    },
    {
        icon: <FiUsers />,
        title: 'Pay Per Click (PPC)',
        description: 'PPC advertising gives you the opportunity to pay for top positions on search engines and appear on relevant partner websites. Pay-per-click delivers instant traffic and offers ways to compliment existing SEO strategies and allows you to develop an overall online strategy armed with facts, not assumptions.'
    },
    {
        icon: <FiMonitor />,
        title: 'Search Engine Optimization (SEO)',
        description: 'Having a website that can be easily found by potential customers is crucial. When searching for what you offer, your site needs to be up there in rankings. We optimize your website both onsite and offsite with the proper information that will achieve this.'
    },
    {
        icon: <FiCast />,
        title: 'Infographics',
        description: 'Whether you’re looking for content aimed at link acquisition, visuals to support editorial or traditional marketing content, infographics can tell your story in a more engaging, memorable and effective way. As experts in visual storytelling, we can help you tell your brand story, no matter what your end goal may be.'
    },
    {
        icon: <FiMonitor />,
        title: 'Videos',
        description: 'Video marketing has taken the social media world by storm with 100 million hours of video on the internet per day. We combine the talents of a video production company, with the knowledge and expertise of scriptwriters and storyboard creators to develop branded video content that engage and entertain your audiences.'
    },
    {
        icon: <FiMonitor />,
        title: 'Email Marketing',
        description: 'Research shows that no marketing channel consistently returns a better ROI than a properly implemented email marketing campaign. Repeat customers are the most valuable. They convert at the highest rates (20%), spend the most time on your website (7.69 seconds on average), look at 16.83 page views per session, and spend the most.'
    },
    {
        icon: <FiMonitor />,
        title: 'Marketing Consultancy',
        description: 'The biggest marketing expense is employing skilled people. Partners rather than suppliers we provide consultancy services giving you access to our expert team for a fraction of the price. This frees up your time and can reduce your overheads and headcount.'
    },
    {
        icon: <FiMonitor />,
        title: 'Marketing Strategy',
        description: 'Marketing is complicated. Multiple channels, competitors and audiences. We work with you to understand your market, challenge you and work out what you are trying to achieve. We’ll then develop the best fit strategy with audiences, messages and media.'
    },
    {
        icon: <FiMonitor />,
        title: 'Marketing Planning',
        description: 'Not sure where to start? We can help you create and deliver your marketing plan. We understand what needs to be included and how to present it in the most successful way.'
    },
    {
        icon: <FiMonitor />,
        title: 'Market Research',
        description: 'We work closely with you to understand your target market and customers. We use a mix of quantitative and qualitative methodologies to deliver best results. We ‘go the extra mile’ in terms of analysis and recommendations.'
    },
];

const ServiceListVI = [
    {
        icon: <FiCast />,
        title: 'Brochures & Catalogues',
        description: 'Brochures are a very important part of your marketing materials and can contribute significantly towards projecting your brand’s image, as well as displaying your company’s products or services with style, accuracy and creativity. Our in-house team of writers, designers & illustrators are skilled at graphic concept development, copywriting, electronic and print production.'
    },
    {
        icon: <FiLayers />,
        title: 'Exhibitions',
        description: 'Exhibitions offer a direct opportunity for you to engage with your prospective clients face-to-face. We understand the importance of this opportunity and investment so that not only do we deliver a unique and innovative custom built stand design, we also offer a full project management service to make the experience as stress-free as possible.'
    },
    {
        icon: <FiUsers />,
        title: 'Posters & Flyers',
        description: 'Posters are a great way to attract attention, whether used in your marketing campaign to your customers or internally to your employees. Our attention grabbing poster design will help your business stand out. We understand the power of putting the right words with creative design to produce stunning, eye-catching and effective results!'
    },
    {
        icon: <FiMonitor />,
        title: 'Brand Consultancy',
        description: 'It is imperative to understand where, when and how to use your marketing resources. As brand consultants we scrutinise, analyse and evaluate the brand identity, performance and strategy to deliver a more effective brand approach.'
    },
    {
        icon: <FiCast />,
        title: 'Brand Development & Strategy',
        description: 'Your brand strategy defines what your brand stands for, the promise it makes, and the personality it projects. We develop a brand blueprint that will help clients discover and define their brand. We create powerful and authentic brand narratives that will inspire and engage your customers. To achieve this, our strategy documents include: mission, vision, values and core brand expressions.'
    },
    {
        icon: <FiMonitor />,
        title: 'Website design and development',
        description: 'We design and develop high quality, bespoke websites. Coded for technical strength and designed for front end users – our websites deliver strong results. We work to the latest standards and use a number of popular Content Management platforms.'
    },
    {
        icon: <FiMonitor />,
        title: 'Microsites',
        description: 'Already have a well-built core website but need something that’s related to a specific campaign, audience or promotion? Our microsites are built using the same standards as our core websites and offer a great way to support marketing activities.'
    },
    {
        icon: <FiMonitor />,
        title: 'Brand Repositioning',
        description: 'Our brand repositioning service will maximize customer relevancy and competitive distinctiveness to be owned in the mind of your target audience. This usually entails a change in the brand’s promise and personality communicating these new messages.'
    },
    {
        icon: <FiMonitor />,
        title: 'Logo Creation',
        description: 'Your logo is the visual cornerstone of a company’s brand. We work with you to develop the ‘face’ of your company – it’s identity is visually expressed through its logo and is one of the main things that makes your business memorable.'
    },
    {
        icon: <FiMonitor />,
        title: 'Brand Guidelines',
        description: 'VI has a long history in developing guidelines to present your brand in a consistent and coherent way. This information typically includes: logo usage, colour palette, type specification image style, language approach and a range of marketing collateral applications.'
    },
    {
        icon: <FiMonitor />,
        title: 'Illustration',
        description: 'Illustration plays an important role in the design process. We offer a variety of illustration styles including caricatures, cartoons, collage and line drawings. We work in many forms of media, everything from traditional hand painted watercolours, to photoshop effects.'
    },
    {
        icon: <FiMonitor />,
        title: 'Brand Launch Programmes',
        description: 'Successfully launching a new brand is one of the toughest challenges in marketing. We help to plan expenditure, mission objectives and implementation benchmarks. In this way, your business will launch its new brand and reach the target audience in the most impactful, effective way possible.'
    },
    {
        icon: <FiMonitor />,
        title: 'Social Media',
        description: 'Love it or hate it, social media is here to stay. We work across all social platforms and can offer one off set ups, ongoing management or support you in how to best engage customers. We work with content scheduling platforms and offer content planning.'
    },
];

const ServiceListWM = [
    {
        icon: <FiCast />,
        title: 'Website Strategy',
        description: 'When visitors hit your site there is only a matter of seconds to engage them. A web strategy is about crafting a solution that is usable and accessible and exudes the right look and feel. The strategy will contain the scope of work, direct the content creation process and provide tactical direction for the developers.'
    },
    {
        icon: <FiLayers />,
        title: 'UI Design',
        description: 'The purpose of any interface is to help the user accomplish their goal. Our UI designers put themselves in the user’s mindset, predict what they will expect and then make the design that reflects these insights. They design each screen to ensure that the UI visually communicates the path that a UX designer has developed.'
    },
    {
        icon: <FiUsers />,
        title: 'UX Design',
        description: 'UX design is about having a complete understanding of the user. Our UX designers will conduct user research, review user types and conduct performance and usability testing to design the most effective journey. We ensure that the navigation of your website is completely intuitive so the user can get to their end destination easily.'
    },
    {
        icon: <FiMonitor />,
        title: 'Mobile-first Design',
        description: 'Mobile-first or responsive design means that a website responds to the user’s device or platform by reformatting itself fluidly. This makes the website usable and accessible on the device that’s accessing it. Everything VI develops online is built with mobile-use in mind.'
    },
    {
        icon: <FiCast />,
        title: 'Tracking & Analysis',
        description: 'Our web analytics help you to measure, collect, analyze and report your web data for purposes of understanding and optimizing your website. Web analytics can be used as a tool for business and market research, and to assess and improve the effectiveness of a website.'
    },
    {
        icon: <FiMonitor />,
        title: 'Search Engine Optimisation (SEO)',
        description: 'A beautiful and functional website is a great tool, but if your potential customers are not able to find you with their search terms, you’ll be left behind. Vi uses industry recognised tools and processes to review, optimize and ultimately improve or maintain rankings.'
    },
];

const ServiceListPR = [
    {
        icon: <FiCast />,
        title: 'Technical Direction',
        description: 'The technical director is responsible for the technical and logistical feasibility during the preparation, assembly and dismantling phases of the operations. He directs and coordinates the management teams as well as all the subcontractors during the various phases of production.'
    },
    {
        icon: <FiLayers />,
        title: 'Institutional Communication',
        description: 'The daily life of the company requires support in order to inform, convince, know the feelings and build customer loyalty. In this perspective, institutional communication aims to promote the image of the company and show consumers the values that the company defends, its commitment and to make people like and understand the brand.'
    },
    {
        icon: <FiUsers />,
        title: 'Photography',
        description: 'Events are above all an appointment that contains a communication action. The photo coverage fixes the date and place of the event, translates the atmosphere and enhances the participation and the interventions of the participants in images. Guests will be photographed on the spot during conferences, breaks, cocktails and professional events.'
    },
    {
        icon: <FiMonitor />,
        title: 'Conferences, Seminars, Festivals',
        description: 'You are organizing a seminar or a congress, audiovisual recording is now a major asset to take into account to increase the impact of your event. Because your events matter a lot, their coverage should be planned carefully. This is why we put at your service a team of production of the video of your event, adapted to your needs of distribution.'
    },
    {
        icon: <FiCast />,
        title: 'Institutional Film',
        description: 'Originality is what sets your company apart. Promoting the image of your company, its mission, its objectives, the team and the services through an institutional film improves its visibility. In the corporate video, you can include statements from directors, testimonials from your clients, images of your company’s facilities and subtitle the video in different languages.'
    },
    {
        icon: <FiMonitor />,
        title: 'Commercial Film',
        description: 'Announcing the release of a new product and highlighting the image of a brand means finding the right promotion that will ensure the best visibility. The video support helps the viewer to visualize the use of the product for future acquisition and promotes your company in the international market. We also offer a translation and subtitling service for better distribution of the video.'
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
                <div className="service-area ptb--120 bg_color--1" id="VI">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center mb--30">
                                    <h2>Visual Identity</h2>
                                    <p>Good graphic design can make the difference to any business, as it has the ability to connect with your audience and reach your business goals.</p>
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