// USED IMPORTS
import React, { Component } from "react";
import { useTranslation } from 'react-i18next';
import LazyImage from "../../LazyLoader";

// UNUSED IMPORTS

function About(props){
        const { t } = useTranslation();
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