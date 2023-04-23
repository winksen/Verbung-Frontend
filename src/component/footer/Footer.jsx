// USED IMPORTS
import React, { Component } from "react";
import { useTranslation } from 'react-i18next';
import { RiInstagramFill } from "react-icons/ri";
import {FaTwitter, FaFacebookF , FaLinkedinIn, FaYoutube} from "react-icons/fa";

// UNUSED IMPORTS

const SocialShare = [
    {Social: <FaFacebookF /> , link: 'https://www.facebook.com/Verbung'},
    {Social: <FaLinkedinIn /> , link: 'https://www.linkedin.com/company/verbung'},
    {Social: <RiInstagramFill /> , link: 'https://www.instagram.com/verbung/'},
    {Social: <FaTwitter /> , link: 'https://twitter.com/verbung'},
    {Social: <FaYoutube /> , link: 'https://www.youtube.com/channel/UCang3Nx-Z01oWYAa-EE3qfw'},
]

function Footer(props){
    const { t } = useTranslation();
    return(
        <React.Fragment>
            <footer className="footer-area">
                <div className="footer-wrapper active-darkless">
                    <div className="row align-items-end row--0">
                        <div className="col-lg-6">
                            <div className="footer-left">
                                <div className="inner">
                                    <span>{t("ready")}</span>
                                    <h2 dangerouslySetInnerHTML={{__html: t('work_with_us', {interpolation: {escapeValue: false}})}} />
                                    <a className="rn-button-style--2" href="/contact">
                                        <span>{t("contact_us")}</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="footer-right" data-black-overlay="6">
                                <div className="row">
                                    {/* Start Single Widget  */}
                                    <div className="col-lg-6 col-sm-6 col-12">
                                        <div className="footer-link">
                                            <h4 className="textUpper">{t("quicklinks")}</h4>
                                            <ul className="ft-link">
                                                <li><a href="/packs">Packs</a></li>
                                                <li><a href="/about">{t("about")}</a></li>
                                                <li><a href="/contact">{t("lets_talk")}</a></li>
                                                <li><a href="/blogs">Blog</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* End Single Widget  */}
                                    {/* Start Single Widget  */}
                                    <div className="col-lg-6 col-sm-6 col-12 mt_mobile--30">
                                        <div className="footer-link">
                                            <h4 className="textUpper">{t("reach_out")}</h4>
                                            <ul className="ft-link">
                                                <li><a href="mailto:contact@verbung.net">contact@verbung.net</a></li>
                                                {/* <li><a href="mailto:hr@example.com">hr@example.com</a></li> */}
                                            </ul>

                                            <div className="social-share-inner">
                                                <ul className="social-share social-style--2 d-flex justify-content-start liststyle mt--15">
                                                    {SocialShare.map((val , i) => (
                                                        <li key={i}><a href={`${val.link}`} target="_blank" rel="noreferrer noopener">{val.Social}</a></li>
                                                    ))}
                                                </ul>
                                            </div> 
                                        </div>
                                    </div>
                                    {/* End Single Widget  */}

                                    <div className="col-lg-12">
                                        <div className="copyright-text">
                                            <p>Copyright © 2023 VERBUNG®. All Rights Reserved.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    )
}
export default Footer;