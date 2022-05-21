import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import { FiCast , FiLayers , FiUsers , FiMonitor ,FiChevronUp, FiMaximize } from "react-icons/fi";
import ScrollToTop from 'react-scroll-up';
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";


const ServiceListVI = [
    {
        icon: <FiMaximize />,
        title: 'Brochures & Catalogues',
        description: 'Brochures are a very important part of your marketing materials and can contribute significantly towards projecting your brand’s image, as well as displaying your company’s products or services with style, accuracy and creativity. Our in-house team of writers, designers & illustrators are skilled at graphic concept development, copywriting, electronic and print production.'
    },
    {
        icon: <FiMaximize />,
        title: 'Exhibitions',
        description: 'Exhibitions offer a direct opportunity for you to engage with your prospective clients face-to-face. We understand the importance of this opportunity and investment so that not only do we deliver a unique and innovative custom built stand design, we also offer a full project management service to make the experience as stress-free as possible.'
    },
    {
        icon: <FiMaximize />,
        title: 'Posters & Flyers',
        description: 'Posters are a great way to attract attention, whether used in your marketing campaign to your customers or internally to your employees. Our attention grabbing poster design will help your business stand out. We understand the power of putting the right words with creative design to produce stunning, eye-catching and effective results!'
    },
    {
        icon: <FiMaximize />,
        title: 'Brand Consultancy',
        description: 'It is imperative to understand where, when and how to use your marketing resources. As brand consultants we scrutinise, analyse and evaluate the brand identity, performance and strategy to deliver a more effective brand approach.'
    },
    {
        icon: <FiMaximize />,
        title: 'Brand Development & Strategy',
        description: 'Your brand strategy defines what your brand stands for, the promise it makes, and the personality it projects. We develop a brand blueprint that will help clients discover and define their brand. We create powerful and authentic brand narratives that will inspire and engage your customers. To achieve this, our strategy documents include: mission, vision, values and core brand expressions.'
    },
    {
        icon: <FiMaximize />,
        title: 'Website design and development',
        description: 'We design and develop high quality, bespoke websites. Coded for technical strength and designed for front end users – our websites deliver strong results. We work to the latest standards and use a number of popular Content Management platforms.'
    },
    {
        icon: <FiMaximize />,
        title: 'Microsites',
        description: 'Already have a well-built core website but need something that’s related to a specific campaign, audience or promotion? Our microsites are built using the same standards as our core websites and offer a great way to support marketing activities.'
    },
    {
        icon: <FiMaximize />,
        title: 'Brand Repositioning',
        description: 'Our brand repositioning service will maximize customer relevancy and competitive distinctiveness to be owned in the mind of your target audience. This usually entails a change in the brand’s promise and personality communicating these new messages.'
    },
    {
        icon: <FiMaximize />,
        title: 'Logo Creation',
        description: 'Your logo is the visual cornerstone of a company’s brand. We work with you to develop the ‘face’ of your company – it’s identity is visually expressed through its logo and is one of the main things that makes your business memorable.'
    },
    {
        icon: <FiMaximize />,
        title: 'Brand Guidelines',
        description: 'VI has a long history in developing guidelines to present your brand in a consistent and coherent way. This information typically includes: logo usage, colour palette, type specification image style, language approach and a range of marketing collateral applications.'
    },
    {
        icon: <FiMaximize />,
        title: 'Illustration',
        description: 'Illustration plays an important role in the design process. We offer a variety of illustration styles including caricatures, cartoons, collage and line drawings. We work in many forms of media, everything from traditional hand painted watercolours, to photoshop effects.'
    },
    {
        icon: <FiMaximize />,
        title: 'Brand Launch Programmes',
        description: 'Successfully launching a new brand is one of the toughest challenges in marketing. We help to plan expenditure, mission objectives and implementation benchmarks. In this way, your business will launch its new brand and reach the target audience in the most impactful, effective way possible.'
    },
    {
        icon: <FiMaximize />,
        title: 'Social Media',
        description: 'Love it or hate it, social media is here to stay. We work across all social platforms and can offer one off set ups, ongoing management or support you in how to best engage customers. We work with content scheduling platforms and offer content planning.'
    },
    {
        icon: <FiMaximize />,
        title: 'Motion Graphics',
        description: 'Our motion graphics services make it easy for you to create immersive visual experiences embedded in captivating storytelling videos.'
    },
];

class ServiceVI extends Component{
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
export default ServiceVI;