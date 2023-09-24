// React Required
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Create Import File
import './index.scss';
import PageScrollTop from './component/PageScrollTop';

// ACTIVE COMPONENTS
import DarkMainDemo from './dark/MainDemo';
import ServiceDM from "./elements/ServiceDM";
import ServiceVI from "./elements/ServiceVI";
import ServiceWM from "./elements/ServiceWM";
import ServicePR from "./elements/ServicePR";
import Contact from "./elements/Contact";
import Blog from "./elements/Blog";
import BlogCategory from "./elements/BlogCategory";
import BlogDetails from "./elements/BlogDetails";
import error404 from "./elements/error404";
import About from "./elements/About";

import PricingTable from "./blocks/PricingTable";
import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

// DEACTIVATED COMPONENTS
    // import Demo from './page-demo/Demo';
    // import MainDemo from './home/MainDemo';
    // import Startup from './home/Startup';
    // import Paralax from './home/Paralax';
    // import HomePortfolio from './home/HomePortfolio';
    // import DigitalAgency from './home/DigitalAgency';
    // import CreativeAgency from './home/CreativeAgency';
    // import PersonalPortfolio from './home/PersonalPortfolio';
    // import Business from './home/Business';
    // import StudioAgency from './home/StudioAgency';
    // import PortfolioLanding from './home/PortfolioLanding';
    // import CreativeLanding from './home/CreativeLanding';
    // import HomeParticles from './home/HomeParticles';
    // import CreativePortfolio from './home/CreativePortfolio';
    // import DesignerPortfolio from './home/DesignerPortfolio';
    // import InteriorLanding from './home/Interior';
    // import CorporateBusiness from './home/CorporateBusiness';
    // import InteractiveAgency from './home/InteractiveAgency';
    // import LightMainDemo from './dark/LightMainDemo';
    // import DarkMainDemoOld from './dark/MainDemoOld';
    // import DarkPortfolioLanding from './dark/PortfolioLanding';
    // import Service from "./elements/Service";
    // import ServiceDetails from "./elements/ServiceDetails";
    import PortfolioDetails from "./elements/PortfolioDetails";
    // import Team from "./blocks/Team";
    // import Counters from "./blocks/Counters";
    // import Testimonial from "./blocks/Testimonial";
    // import Portfolio from "./blocks/Portfolio";
    // import VideoPopup from "./blocks/VideoPopup";
    // import Gallery from "./blocks/Gallery";
    // import Brand from "./blocks/Brand";
    // import ProgressBar from "./blocks/ProgressBar";
    // import ContactForm from "./blocks/ContactForm";
    // import GoogleMap from "./blocks/GoogleMap";
    // import Columns from "./blocks/Columns";

class Root extends Component{
    render(){
        return(
            <BrowserRouter basename={'/'}>
                <PageScrollTop>
                    <Switch>

                        {/* ACTIVE PAGES */}
                        <Route exact path={`${process.env.PUBLIC_URL}/`} component={DarkMainDemo}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/contact`} component={Contact}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/about`} component={About}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/packs`} component={PricingTable}/>

                        <Route exact path={`${process.env.PUBLIC_URL}/digitalmarketing`} component={ServiceDM}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/visualidentity`} component={ServiceVI}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/webmobile`} component={ServiceWM}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/pressrelation`} component={ServicePR}/>

                        <Route exact path={`${process.env.PUBLIC_URL}/blogs`} component={Blog}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/blogs/category/:category`} component={BlogCategory}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/blogs/:id`} component={BlogDetails}/>
                        {/* <Route exact path={`${process.env.PUBLIC_URL}/portfolio-details`} component={PortfolioDetails}/> */}
                        
                        <Route path={`${process.env.PUBLIC_URL}/404`} component={error404}/>

                        {/* DEACTIVATED PAGES */}
                        {/*
                        <Route exact path={`${process.env.PUBLIC_URL}/old`} component={DarkMainDemoOld}/>           
                        <Route exact path={`${process.env.PUBLIC_URL}/home-particles`} component={HomeParticles}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/light`} component={LightMainDemo}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/dark-portfolio-landing`} component={DarkPortfolioLanding}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/light`} component={LightMainDemo}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/interior-landing`} component={InteriorLanding}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/corporate-business`} component={CorporateBusiness}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/creative-agency`} component={CreativeAgency}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/main-demo`} component={MainDemo}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/startup`} component={Startup}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/paralax`} component={Paralax}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/digital-agency`} component={DigitalAgency}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/demo`} component={Demo}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/personal-portfolio`} component={PersonalPortfolio}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/studio-agency`} component={StudioAgency}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/business`} component={Business}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/portfolio-home`} component={HomePortfolio}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/portfolio-landing`} component={PortfolioLanding}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/creative-landing`} component={CreativeLanding}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/home-particles`} component={HomeParticles}/>                    
                        <Route exact path={`${process.env.PUBLIC_URL}/designer-portfolio`} component={DesignerPortfolio}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/creative-portfolio`} component={CreativePortfolio}/> 
                        <Route exact path={`${process.env.PUBLIC_URL}/interactive-agency`} component={InteractiveAgency}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/service-details`} component={ServiceDetails}/>
                        
                        <Route exact path={`${process.env.PUBLIC_URL}/team`} component={Team}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/counters`} component={Counters}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/testimonial`} component={Testimonial}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/portfolio`} component={Portfolio}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/video-popup`} component={VideoPopup}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/gallery`} component={Gallery}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/clint-logo`} component={Brand}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/progressbar`} component={ProgressBar}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/contact-form`} component={ContactForm}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/google-map`} component={GoogleMap}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/columns`} component={Columns}/>
                        */}
                        
                        <Route component={error404}/>
                    </Switch>
                </PageScrollTop>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));
serviceWorker.register();