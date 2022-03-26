import React, { Component } from "react";
import Slider from "react-slick";
import { portfolioSlick2 } from "../../../page-demo/script";
import {Link} from "react-router-dom";


const PortfolioList = [
    {
        image: 'image-1',
        category: 'Visual Identity, Stationairy',
        type: 'Brand',
        link: 'https://www.behance.net/gallery/104515389/A2S-Visual-Identity',
        title: 'A2S Junior Entreprise'
    },
    {
        image: 'image-2',
        category: 'Visual Identity',
        type: 'Event',
        link: 'https://www.behance.net/gallery/112073013/INPT-Olympics-Visual-Identity',
        title: 'INPT Olympics XI'
    },
    {
        image: 'image-3',
        category: 'Visual Identity, Social Media',
        type: 'Brand',
        link: 'https://www.behance.net/gallery/120757181/PantoFit-Visual-Identity',
        title: 'PantoFit'
    },
    {
        image: 'image-4',
        category: 'Visual Identity, UI/UX, Web & Mobile',
        type: 'Brand',
        title: 'Corail'
    },
    {
        image: 'image-5',
        category: 'Development',
        type: 'Brand',
        title: 'DetaFour'
    },
    {
        image: 'image-6',
        category: 'Development',
        type: 'Brand',
        title: 'Salsaty'
    }
]

class Portfolio extends Component{
    render(){
        let title = 'Our Work',
        description = 'We have a passionate team who puts their heart into what we do, so we would like to showcase you some of our work.';
        return(
            <React.Fragment>
                <div className="active-darkless portfolio-wrapper ptb--120">
                    <div className="container">
                        <div className="row">
                            <div className="section-title">
                                <h2>{title}</h2>
                                <p align="justify">{description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-slick-activation mt--70 mt_sm--40">
                        <Slider {...portfolioSlick2}>
                            {PortfolioList.map((value , index) => (
                                <div className="portfolio" key={index}>
                                    <div className="thumbnail-inner">
                                        <div className={`thumbnail ${value.image}`}></div>
                                        <div className={`bg-blr-image ${value.image}`}></div>
                                    </div>
                                    <div className="content">
                                        <div className="inner">
                                            <p>{value.type} • {value.category}</p>
                                            <h4 className="title">{value.title}</h4>
                                            <div className="portfolio-button">
                                                <a className="rn-btn" href={value.link} target="_blank" rel="noreferrer noopener">View on BEHANCE</a>
                                            </div>
                                        </div>
                                    </div>
                                    <Link className="link-overlay"></Link>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Portfolio;