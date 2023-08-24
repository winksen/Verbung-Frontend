import React ,{ Component }from "react";
import { FiCast , FiLayers , FiUsers , FiMonitor } from "react-icons/fi";
import { BiBookContent, BiAnalyse, BiAt, BiSearch, BiSearchAlt, BiUserVoice, BiMobileAlt, BiWallet } from "react-icons/bi";
import { BiVector, BiIntersect, BiMessageEdit, BiNetworkChart, BiCaretRightCircle, BiCameraMovie, BiFile } from "react-icons/bi";
import {FaTwitter ,FaInstagram ,FaFacebookF , FaLinkedinIn, FaYoutube} from "react-icons/fa";
// import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const BlogCategoryDM = [
    {
        icon: <BiBookContent />,
        title: 'Content Marketing',
        code: '01',
    },
    {
        icon: <BiAnalyse />,
        title: 'Social Media Marketing',
        code: '02',
    },
    { 
        icon: <BiAt />,
        title: 'Email Marketing',
        code: '03',
    },
    {
        icon: <BiUserVoice />,
        title: 'Affiliate Marketing',
        code: '04',
    },
    { 
        icon: <BiSearch />,
        title: 'Search Engine Optimization (SEO)',
        code: '05',
    },
    { 
        icon: <BiSearchAlt />,
        title: 'Search Engine Advertising (SEA)',
        code: '06',
    },
    { 
        icon: <BiMobileAlt />,
        title: 'Mobile Marketing',
        code: '07',
    },
    { 
        icon: <FiMonitor />,
        title: 'Display Advertising',
        code: '08',
    },
    { 
        icon: <BiWallet />,
        title: 'Pay Per Click (PPC)',
        code: '09',
    },
]

const BlogCategoryVI = [
    {
        icon: <BiVector />,
        title: 'Branding',
        code: '11',
    },
    {
        icon: <BiIntersect />,
        title: 'UI/UX',
        code: '12',
    },
    {
        icon: <BiMessageEdit />,
        title: 'Social Media Design',
        code: '13',
    },
    {
        icon: <BiNetworkChart />,
        title: 'Illustrations',
        code: '14',
    },
    {
        icon: <BiCaretRightCircle />,
        title: 'Motion Graphics',
        code: '15',
    },
    {
        icon: <BiCameraMovie />,
        title: 'Videography',
        code: '16',
    },
    {
        icon: <BiFile />,
        title: 'Stationary',
        code: '17',
    },
]


class BlogCategoryT extends Component{
    render(){
        const {column } = this.props;
        const ServiceContentDM = BlogCategoryDM.slice(0 , this.props.item);
        const ServiceContentVI = BlogCategoryVI.slice(0 , this.props.item);
        
        return(
            <React.Fragment>
                <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                    <h3>DIGITAL MARKETING</h3>
                    <p>Select a Subcategory:</p>
                </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="inner text-center">
                            <ul className="social-share rn-lg-size d-flex justify-content-between liststyle">
                                {ServiceContentDM.map((val , i) => (
                                    <Tooltip title={<h4 style={{ color: "white" }}>{val.title}</h4>} arrow>
                                        <IconButton>
                                            <li key={i}>
                                                <a href={`blogs/category/${val.code}`}>{val.icon}</a>
                                                {/* <p className="icon-hidden">{val.title}</p> */}
                                            </li>
                                        </IconButton>
                                    </Tooltip>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                    <h3>VISUAL IDENTITY</h3>
                    <p>Select a Subcategory:</p>
                </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="inner text-center">
                            <ul className="social-share rn-lg-size d-flex liststyle">
                                {ServiceContentVI.map((val , i) => (
                                    <Tooltip title={<h4 style={{ color: "white" }}>{val.title}</h4>} arrow>
                                        <IconButton>
                                            <li key={i}>
                                                <a href={`blogs/category/${val.code}`}>{val.icon}</a>
                                                {/* <p className="icon-hidden">{val.title}</p> */}
                                            </li>
                                        </IconButton>
                                    </Tooltip>
                                ))}
                            </ul>
                        </div>
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
