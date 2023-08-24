import React ,{ Component }from "react";
import { FiCast , FiLayers , FiUsers , FiMonitor } from "react-icons/fi";
import {FaTwitter ,FaInstagram ,FaFacebookF , FaLinkedinIn, FaYoutube} from "react-icons/fa";

const BlogCategoryDM = [
    {
        icon: <FiLayers />,
        title: 'Content Marketing',
    },
    {
        icon: <FiUsers />,
        title: 'Social Media Marketing',
    },
    { 
        icon: <FiMonitor />,
        title: 'Email Marketing',
    },
    {
        icon: <FiUsers />,
        title: 'Affiliate Marketing',
    },
    { 
        icon: <FiMonitor />,
        title: 'SEO',
    },
    { 
        icon: <FiMonitor />,
        title: 'SEA',
    },
    { 
        icon: <FiMonitor />,
        title: 'Mobile Marketing',
    },
    { 
        icon: <FiMonitor />,
        title: 'Display Advertising',
    },
    { 
        icon: <FiMonitor />,
        title: 'Pay Per Click',
    },
]

const BlogCategoryVI = [
    {
        icon: <FiLayers />,
        title: 'Design',
    },
    {
        icon: <FiLayers />,
        title: 'Design',
    },
    {
        icon: <FiLayers />,
        title: 'Visual Identity Design',
    },
    {
        icon: <FiLayers />,
        title: 'Visual Identity Design',
    },
    {
        icon: <FiLayers />,
        title: 'Visual Identity Design',
    },
    {
        icon: <FiLayers />,
        title: 'Visual Identity Design',
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
                            <ul className="social-share rn-lg-size d-flex liststyle">
                                {ServiceContentDM.map((val , i) => (
                                    <li key={i}><a href={`blogs/category/${val.title}`}>{val.icon}</a>{val.title}</li>
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
                                    <li key={i}><a href={`blogs/category/${val.title}`}>{val.icon}</a>{val.title}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default BlogCategoryT;
