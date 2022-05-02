import React, { Component } from "react";
import Fade from 'react-reveal/Fade';
import AnimatedBg from "react-animated-bg";
import ServiceOne from "../../elements/service/ServiceOne";

class SliderOne extends Component {
  render() {
    let illustration = <img src="/assets/images/illustration/home2.png" alt="Home Illustration" />;
    return (
        <AnimatedBg className="slider-activation section-styles" colors={["black", "#001E21", "#022726"]}
        duration={0.5}
        delay={4} // it will wait 4 seconds before next transition starts
        timingFunction="ease-out">
            {/* Start Single Slide */}
            <div className="slide slide-style-1 slider-fixed--height d-flex align-items-center bg_image bg_image--1" data-black-overlay="6">
                <div className="container position-relative">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner">
                                <div className="header-left">
                                    {/* <div className="logo">
                                        <a href="/">
                                            {illustration}
                                        </a>
                                    </div> */}
                                </div>
                                <Fade bottom cascade>
                                    <div>
                                        <h1 className="title theme-gradient">SCALE NOW.</h1><br />
                                        <h4 className="title theme-gradient">with Verbung</h4>
                                    </div>
                                </Fade>
                                {/* <h4 align="justify">Verbung provides digital marketing services for businesses of all sizes with an opportunity to market their brand 24/7 at a low cost.</h4> */}
                            </div>
                        </div>
                    </div>
                    {/* Start Service Area */}
                    {/* <div className="service-wrapper service-white">
                        <ServiceOne />
                    </div> */}
                    {/* End Service Area */}
                </div>
            </div> 
            {/* End Single Slide */}
        </AnimatedBg>
    );
  }
}
export default SliderOne;