import React from 'react';
import {FaTwitter ,FaInstagram ,FaFacebookF , FaLinkedinIn, FaYoutube} from "react-icons/fa";

const SocialShare = [
    {Social: <FaFacebookF /> , link: 'https://www.facebook.com/Verbung'},
    {Social: <FaLinkedinIn /> , link: 'https://www.linkedin.com/company/verbung'},
    {Social: <FaInstagram /> , link: 'https://www.instagram.com/verbung/'},
    {Social: <FaTwitter /> , link: 'https://twitter.com/verbung'},
    {Social: <FaYoutube /> , link: 'https://www.youtube.com/channel/UCang3Nx-Z01oWYAa-EE3qfw'},
]

const FooterTwo = () => {
    return (
        <div className="active-dark footer-style-2 ptb--30" data-black-overlay="6">
            <div className="wrapper plr--50 plr_sm--20">
                <div className="row align-items-center justify-content-between">
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="inner">
                            <div className="logo text-center text-sm-left mb_sm--20">
                                <a href="/">
                                    <img src="/assets/images/logo/logoFull.png" alt="Logo images"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="inner text-center">
                            <ul className="social-share rn-lg-size d-flex justify-content-center liststyle">
                                {SocialShare.map((val , i) => (
                                    <li key={i}><a href={`${val.link}`} target="_blank" rel="noreferrer noopener">{val.Social}</a></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                        <div className="inner text-lg-right text-center mt_md--20 mt_sm--20">
                            <div className="text">
                                <p>Copyright © 2022 VERBUNG®. All Rights Reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FooterTwo;