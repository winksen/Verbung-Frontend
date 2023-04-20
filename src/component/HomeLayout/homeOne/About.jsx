// USED IMPORTS
import React, { Component } from "react";
import { useTranslation } from 'react-i18next';
import LazyImage from "../../LazyLoader";

// UNUSED IMPORTS

function About(props){
        const { t } = useTranslation();
        let title = 'About',
        titlePartTwo = 'Who Are We',
        description = 'At Verbung, we work hard to understand your business and digital goals, so we can develop creative, results-driven strategies to help you achieve them at all times. You know your brand better than anyone, so our experts listen carefully to your needs and take a tailored approach to better understand what convinces your target audience.',
        descriptionPartTwo = "We are more than a typical communications agency; we are an agency of creative and strategic thinkers with brilliant minds working hand in hand with each client to achieve their digital business goals.";
        return(
            <React.Fragment>
                <div className="active-darkless about-wrapper pb--60">
                    <div className="container">
                        <div className="row row--35 align-items-center">

                            <div className="col-lg-6 col-md-12">
                                <div className="about-inner inner">
                                    <div className="section-title">
                                        <h3 className="title textUpper">{t("about")}</h3>
                                        <p className="description" align="justify">{t("about_description")}</p><br /><br />
                                        <h3 className="title textUpper">{t("about_whoAreWe")}</h3>
                                        <p className="description" align="justify">{t("about_description2")}</p>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div className="col-lg-6 col-md-12">
                                <br />
                                <div className="thumbnail image-about">
                                    <LazyImage className="w-100" alt="About Images"/>
                                </div>
                            </div>        
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
}

export default About;