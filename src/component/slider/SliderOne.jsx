// USED IMPORTS
import React, { Component } from "react";
import { useTranslation } from 'react-i18next';
import TextLoop from "react-text-loop";
import Particles from "react-tsparticles";
import { RandomReveal } from 'react-random-reveal';

// UNUSED IMPORTS
// import Fade from 'react-reveal/Fade';
// import ServiceOne from "../../elements/service/ServiceOne";
// import { FiCast , FiMaximize , FiUsers , FiMonitor } from "react-icons/fi";

const SlideList = [
    {
        textPosition: 'text-left',
        category: 'Welcome to my World',
        description: '',
        buttonText: '',
        buttonLink: ''
    }
]

function SliderOne(props){
    const { t } = useTranslation();
    return (
        <div>
            {/* Start Single Slide */}
            {/* Start Slider Area   */}
            <div id="home" className="fix">
                <div className="slider-wrapper">
                    {/* Start Single Slide */}
                    {SlideList.map((value , index) => (
                        <div className="slide slide-style-1 slider-fixed--height d-flex align-items-center ptb--60 with-particles bg_image" key={index}>
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
                                            speed: 3,
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
                                    <div className="col-lg-6">
                                        <div className={`inner ${value.textPosition}`}>
                                            <h1 className="title oswald">SCALE NOW.<br/>
                                            </h1>
                                            {/* <h3 className="theme-gradient body-font">
                                                    IN CREATIVITY
                                            </h3> */}
                                            <TextLoop mask={true} delay={100} interval={1500}>
                                                {/* <RandomReveal/> */}
                                                <h3 className="theme-gradient body-font">{t("inCreativity")}</h3>
                                                <h3 className="theme-gradient body-font">{t("inMarketing")}</h3>
                                                <h3 className="theme-gradient body-font">{t("inVisibility")}</h3>
                                                <h3 className="theme-gradient body-font">{t("inCommunication")}</h3>
                                                {/* <h3 className="theme-gradient body-font">
                                                    <RandomReveal
                                                    isPlaying
                                                    duration={1}
                                                    revealDuration={3}
                                                    characters={t("inCreativity")}
                                                    onComplete={() => ({ shouldRepeat: true, delay: 3 })}
                                                    />
                                                </h3>
                                                <h3 className="theme-gradient body-font">
                                                    <RandomReveal
                                                    isPlaying
                                                    duration={1}
                                                    revealDuration={3}
                                                    characters={t("inMarketing")}
                                                    onComplete={() => ({ shouldRepeat: true, delay: 3 })}
                                                    />
                                                </h3>
                                                <h3 className="theme-gradient body-font">
                                                    <RandomReveal
                                                    isPlaying
                                                    duration={1}
                                                    revealDuration={3}
                                                    characters={t("inVisibility")}
                                                    onComplete={() => ({ shouldRepeat: true, delay: 3 })}
                                                    />
                                                </h3>
                                                <h3 className="theme-gradient body-font">
                                                    <RandomReveal
                                                    isPlaying
                                                    duration={1}
                                                    revealDuration={3}
                                                    characters={t("inCommunication")}
                                                    onComplete={() => ({ shouldRepeat: true, delay: 3 })}
                                                    />
                                                </h3> */}
                                            </TextLoop>
                                        </div>
                                    </div>
                                    <div className="col-lg-6"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* End Single Slide */}
                </div>
            </div>
            {/* End Slider Area   */}
        </div>
    );
}

export default SliderOne;