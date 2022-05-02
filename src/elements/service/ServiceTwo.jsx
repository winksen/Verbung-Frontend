import React, { Component } from "react";
import Fade from 'react-reveal/Fade';
import { FiCast , FiMaximize , FiUsers , FiMonitor } from "react-icons/fi";

const ServiceList = [
    {
        icon: <FiCast />,
        title: 'Digital Marketing',
        description: 'We build ROI centric campaigns that will take your business to the next level.'
    },
    {
        icon: <FiMaximize />,
        title: 'Visual Identity',
        description: 'Good graphic design has the ability to connect with your audience and reach your business goals.'
    },
    {
        icon: <FiMonitor />,
        title: 'Web & Mobile',
        description: 'Your website is the first place your customers will look. It is, in essence, your first impression and your sales tool.'
    },
    {
        icon: <FiUsers />,
        title: 'Press Relation',
        description: 'The best way to get your news in front of the journalists who matter.'
    }
]

class ServiceTwo extends Component{
    render(){
        let title = 'Services',
        description = 'We offer services from across the full marketing mix to a range of clients in both B2C and B2B environments.';
        return(
            <React.Fragment>
                <div className="row">
                    <div className="col-lg-4 col-12">
                        <div className="section-title mt--30 mt_md--5 mt_mobile--5 mb_mobile--10">
                            <h2 className="title">{title}</h2>
                            <p align="justify">{description}</p>
                            {/* <div className="service-btn">
                                <a className="btn-transparent rn-btn-dark" href="/service"><span className="text">Request Custom Service</span></a>
                            </div> */}
                        </div>
                    </div>
                    <div className="col-lg-8 col-12 mt_md--50">
                        <Fade bottom cascade>
                        <div className="row service-one-wrapper">
                            {ServiceList.map( (val , i) => (
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12" key={i}>
                                    <a href="/services">
                                        <div className="service service__style--2">
                                            <div className="icon">
                                                {val.icon}
                                            </div>
                                            <Fade bottom cascade>
                                                <div className="content">
                                                    <h3 className="title">{val.title}</h3>
                                                    <p align="justify">{val.description}</p>
                                                </div>
                                            </Fade>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                        </Fade>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceTwo;
