import React, { Component } from "react";
import Fade from 'react-reveal/Fade';
import AnimatedBg from "react-animated-bg";
import ServiceOne from "../../elements/service/ServiceOne";
import Particles from "react-tsparticles";
// import Spline from '@splinetool/react-spline';


class SliderOne extends Component {
  render() {
    return (
        <div>
            {/* Start Single Slide */}
            <div className="slide slide-style-1 slider-fixed--height d-flex align-items-center bg_image bg_image--1 ptb--120 with-particles">
                <div className="frame-layout__particles">
                    {/* <iframe src='https://my.spline.design/interactivespherescopy-4cd4e20c173ad3def941ff82a9c1ea6d/' frameborder='0' width='100%' height='100%'></iframe> */}
                </div>
                <div className="frame-layout__particles">
                    <Particles className="particle"  
                        options={{
                            style:{
                                position: "absolute"
                            },
                            fpsLimit: 100,
                            interactivity: {
                            detectsOn: "canvas",
                            events: {
                                onClick: {
                                enable: false,
                                mode: "push",
                                },
                                onHover: {
                                enable: true,
                                mode: "repulse",
                                },
                                resize: true,
                            },
                            modes: {
                                bubble: {
                                    distance: 100,
                                    duration: 2,
                                    opacity: 0.8,
                                    size: 10,
                                    color: "#ccc",
                                },
                                push: {
                                quantity: 4,
                                },
                                repulse: {
                                    distance: 100,
                                    duration: 0.2,
                                    color: "#aaa",
                                },
                            },
                            },
                            particles: {
                            color: {
                                value: "#09493E",
                            },
                            links: {
                                color: "#09493E",
                                distance: 150,
                                enable: true,
                                opacity: 0.5,
                                width: 1,
                            },
                            collisions: {
                                enable: true,
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outMode: "bounce",
                                random: false,
                                speed: 6,
                                straight: false,
                            
                            },
                            number: {
                                density: {
                                    enable: true,
                                    value_area: 2000,
                                },
                                value: 80,
                            },
                            opacity: {
                                value: 0.5,
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                random: true,
                                value: 5,
                            },
                            },
                            detectRetina: true,
                        }}
                    />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner">                            
                            <Fade bottom cascade>
                                <div>
                                    <h1 className="title oswald">SCALE NOW.</h1><br />
                                    <h4 className="title theme-gradient">with Verbung</h4>
                                </div>
                            </Fade>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Single Slide */}
        </div>
    );
  }
}
export default SliderOne;