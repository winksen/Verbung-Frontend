import React ,{ Component }from "react";
import { FiCast , FiLayers , FiUsers , FiMonitor } from "react-icons/fi";
import { BiBookContent, BiAnalyse, BiAt, BiSearch, BiSearchAlt, BiUserVoice, BiMobileAlt, BiWallet } from "react-icons/bi";
import { BiVector, BiIntersect, BiMessageEdit, BiNetworkChart, BiCaretRightCircle, BiCameraMovie, BiFile } from "react-icons/bi";
import { BiCodeCurly, BiCode, BiMicrochip, BiSlideshow, BiSlider, BiPulse, BiReset} from "react-icons/bi";
import { BiCollection, BiCrosshair, BiGroup, BiMedal } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';
import {FaTwitter ,FaInstagram ,FaFacebookF , FaLinkedinIn, FaYoutube} from "react-icons/fa";
// import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

// const BlogCategoryDM = [
//     {
//         icon: <BiBookContent />,
//         title: 'Content Marketing',
//         code: '01',
//     },
//     {
//         icon: <BiAnalyse />,
//         title: 'Social Media Marketing',
//         code: '02',
//     },
//     { 
//         icon: <BiAt />,
//         title: 'Email Marketing',
//         code: '03',
//     },
//     {
//         icon: <BiUserVoice />,
//         title: 'Affiliate Marketing',
//         code: '04',
//     },
//     { 
//         icon: <BiSearch />,
//         title: 'Search Engine Optimization (SEO)',
//         code: '05',
//     },
//     { 
//         icon: <BiSearchAlt />,
//         title: 'Search Engine Advertising (SEA)',
//         code: '06',
//     },
//     { 
//         icon: <BiMobileAlt />,
//         title: 'Mobile Marketing',
//         code: '07',
//     },
//     { 
//         icon: <FiMonitor />,
//         title: 'Display Advertising',
//         code: '08',
//     },
//     { 
//         icon: <BiWallet />,
//         title: 'Pay Per Click (PPC)',
//         code: '09',
//     },
// ]

// const BlogCategoryVI = [
//     {
//         icon: <BiVector />,
//         title: 'Branding',
//         code: '11',
//     },
//     {
//         icon: <BiIntersect />,
//         title: 'UI/UX',
//         code: '12',
//     },
//     {
//         icon: <BiMessageEdit />,
//         title: 'Social Media Design',
//         code: '13',
//     },
//     {
//         icon: <BiNetworkChart />,
//         title: 'Illustrations',
//         code: '14',
//     },
//     {
//         icon: <BiCaretRightCircle />,
//         title: 'Motion Graphics',
//         code: '15',
//     },
//     {
//         icon: <BiCameraMovie />,
//         title: 'Videography',
//         code: '16',
//     },
//     {
//         icon: <BiFile />,
//         title: 'Stationary',
//         code: '17',
//     },
// ]


class BlogCategoryT extends Component{
    render(){
        const {column } = this.props;
        // const ServiceContentDM = BlogCategoryDM.slice(0 , this.props.item);
        // const ServiceContentVI = BlogCategoryVI.slice(0 , this.props.item);
        
        return(
            <React.Fragment>
                {/* <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <h3>• DIGITAL MARKETING</h3>
                    </div>
                    <div className="col-12">
                        <div className="blog blog-style--1">
                            <div className="content-text">
                                <div className="blog-btn-cat">
                                    <a style={{ marginBottom: '5px', backgroundColor: 'black', padding: '0 100px' }} className="rn-btn-cat" href={`/blogs/category/00`}>Digital Marketing (Parent Category)</a>
                                </div>
                                <div className="blog-btn-cat">
                                    {ServiceContentDM.map((val , i) => (
                                        <a style={{ marginBottom: '5px', backgroundColor: '#093631', }} className="rn-btn-cat" href={`/blogs/category/${val.code}`}>{val.icon} {val.title}</a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <h3>• VISUAL IDENTITY</h3>
                    </div>
                    <div className="col-12">
                        <div className="blog blog-style--1">
                            <div className="content-text">
                                <div className="blog-btn-cat">
                                    <a style={{ marginBottom: '5px', backgroundColor: 'black', padding: '0 100px'}} className="rn-btn-cat" href={`/blogs/category/10`}>Visual Identity (Parent Category)</a>
                                </div>
                                <div className="blog-btn-cat">
                                    {ServiceContentVI.map((val , i) => (
                                        <a style={{ marginBottom: '5px', backgroundColor: '#093631', }} className="rn-btn-cat" href={`/blogs/category/${val.code}`}>{val.icon} {val.title}</a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="header-wrapper">
                    <div className="header-left d-flex align-items-center">
                        <nav className="mainmenunav d-lg-block ml--50">
                            <ul className="mainmenu">
                                <li className="has-droupdown"><Link to="/blogs/category/00">DIGITAL MARKETING <IoIosArrowDown /></Link>
                                    <ul className="submenu">
                                        <li><Link to="/blogs/category/01"><BiBookContent /> Content Marketing</Link></li>
                                        <li><Link to="/blogs/category/02"><BiAnalyse /> Social Media Marketing</Link></li>
                                        <li><Link to="/blogs/category/03"><BiAt /> Email Marketing</Link></li>
                                        <li><Link to="/blogs/category/04"><BiUserVoice /> Affiliate Marketing</Link></li>
                                        <li><Link to="/blogs/category/05"><BiSearch /> Search Engine Optimization (SEO)</Link></li>
                                        <li><Link to="/blogs/category/06"><BiSearchAlt /> Search Engine Advertising (SEA)</Link></li>
                                        <li><Link to="/blogs/category/07"><BiMobileAlt /> Mobile Marketing</Link></li>
                                        <li><Link to="/blogs/category/08"><FiMonitor /> Display Advertising</Link></li>
                                        <li><Link to="/blogs/category/09"><BiWallet /> Pay Per Click (PPC)</Link></li>
                                    </ul>
                                </li>
                                <li className="has-droupdown"><Link to="/blogs/category/10">VISUAL IDENTITY <IoIosArrowDown /></Link>
                                    <ul className="submenu">
                                        <li><Link to="/blogs/category/11"><BiVector /> Branding</Link></li>
                                        <li><Link to="/blogs/category/12"><BiIntersect /> UI/UX</Link></li>
                                        <li><Link to="/blogs/category/13"><BiMessageEdit /> Social Media Design</Link></li>
                                        <li><Link to="/blogs/category/14"><BiNetworkChart /> Illustrations</Link></li>
                                        <li><Link to="/blogs/category/15"><BiCaretRightCircle /> Motion Graphics</Link></li>
                                        <li><Link to="/blogs/category/16"><BiCameraMovie /> Videography</Link></li>
                                        <li><Link to="/blogs/category/17"><BiFile /> Stationary</Link></li>
                                    </ul>
                                </li>
                                <li className="has-droupdown"><Link to="/blogs/category/20">WEB & MOBILE <IoIosArrowDown /></Link>
                                    <ul className="submenu">
                                        <li><Link to="/blogs/category/21"><BiCodeCurly /> Dev Hacks</Link></li>
                                        <li><Link to="/blogs/category/22"><BiCode /> Programming Languages</Link></li>
                                        <li><Link to="/blogs/category/23"><BiMicrochip /> Frameworks</Link></li>
                                        <li><Link to="/blogs/category/24"><BiSlideshow /> Tools & Setups</Link></li>
                                        <li><Link to="/blogs/category/25"><BiSlider /> Website Strategies</Link></li>
                                        <li><Link to="/blogs/category/26"><BiPulse /> Monitoring</Link></li>
                                        <li><Link to="/blogs/category/27"><BiReset /> Pipelines</Link></li>
                                    </ul>
                                </li>
                                <li className="has-droupdown"><Link to="/blogs/category/30">PRESS RELATION <IoIosArrowDown /></Link>
                                    <ul className="submenu">
                                        <li><Link to="/blogs/category/31"><BiCollection /> Prospecting Techniques & Strategies</Link></li>
                                        <li><Link to="/blogs/category/32"><BiCrosshair /> Prospecting Tools & Technology</Link></li>
                                        <li><Link to="/blogs/category/33"><BiGroup /> Networking & Relationship Building</Link></li>
                                        <li><Link to="/blogs/category/34"><BiMedal /> Case Studies & Success Stories</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                {/* <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                    <h3>VISUAL IDENTITY</h3>
                    <p>Select a Subcategory:</p>
                </div>
                <div className="portfolio-share-link">
                <div className="inner text-center">
                    <ul className="social-share rn-lg-size d-flex justify-content-center liststyle">
                        {ServiceContentDM.map((val , i) => (
                            <li key={i}><a href={`blogs/category/${val.title}`}>{val.icon}</a></li>
                        ))}
                    </ul>
                </div>
                </div> */}
            </React.Fragment>
        )
    }
}
export default BlogCategoryT;
