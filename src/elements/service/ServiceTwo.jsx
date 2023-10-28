// USED IMPORTS
import React from "react";
import { useTranslation } from 'react-i18next';
import { FiCast , FiMaximize , FiUsers , FiMonitor } from "react-icons/fi";

// UNUSED IMPORTS
// import Fade from 'react-reveal/Fade';

const ServiceList = [
    {
        icon: <FiCast />,
        title: 'digitalmarketing',
        link: '/services/digitalmarketing',
        description: 'services_digitalmarketing_description'
    },
    {
        icon: <FiMaximize />,
        title: 'visualidentity',
        link: '/services/visualidentity',
        description: 'services_visualidentity_description'
    },
    {
        icon: <FiMonitor />,
        title: 'webmobile',
        link: '/services/webmobile',
        description: 'services_webmobile_description'
    },
    {
        icon: <FiUsers />,
        title: 'pressrelation',
        link: '/services/pressrelation',
        description: 'services_pressrelation_description'
    }
]

function ServiceTwo(props){
        const { t } = useTranslation();
        return(
            <React.Fragment>
                <div className="row">
                    <div className="col-lg-4 col-12">
                        <div className="section-title mt--30 mt_md--5 mt_mobile--5 mb_mobile--10">
                            <h2 className="title textUpper">Services</h2>
                            <p align="justify">{t("services_description")}</p>
                            {/* <div className="service-btn">
                                <a className="btn-transparent rn-btn-dark" href="/service"><span className="text">Request Custom Service</span></a>
                            </div> */}
                        </div>
                    </div>
                    <div className="col-lg-8 col-12 mt_md--50">
                        {/* <Fade bottom cascade> */}
                        <div className="row service-one-wrapper">
                            {ServiceList.map( (val , i) => (
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12" key={i}>
                                    <a href={`${val.link}`}>
                                        <div className="service service__style--2">
                                            <div className="icon">
                                                {val.icon}
                                            </div>
                                            {/* <Fade bottom cascade> */}
                                                <div className="content">
                                                    <h3 className="title textUpper">{t(val.title)}</h3>
                                                    <p align="justify">{t(val.description)}</p>
                                                </div>
                                            {/* </Fade> */}
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                        {/* </Fade> */}
                    </div>
                </div>
            </React.Fragment>
        )
}

export default ServiceTwo;