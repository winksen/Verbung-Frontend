import React, { Component } from "react";
import ServiceOne from "../../elements/service/ServiceOne";

class SliderOne extends Component {
  render() {
    return (
        <div className="slider-activation">
            {/* Start Single Slide */}
            <div className="slide slide-style-1 slider-fixed--height d-flex align-items-center bg_image bg_image--1" data-black-overlay="6">
                <div className="container position-relative">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner">
                                <h1 className="title theme-gradient">S C A L E &nbsp;&nbsp;N O W. </h1><br />
                                <h4 align="justify">Verbung provides digital marketing services for businesses of all sizes with an opportunity to market their brand 24/7 at a low cost.</h4>
                            </div>
                        </div>
                    </div>
                    {/* Start Service Area */}
                    <div className="service-wrapper service-white">
                        <ServiceOne />
                    </div>
                    {/* End Service Area */}
                </div>
            </div> 
            {/* End Single Slide */}
        </div>
    );
  }
}
export default SliderOne;