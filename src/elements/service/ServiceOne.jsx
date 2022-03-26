import React, { Component } from "react";

const ServiceList = [
    {
        icon: '02',
        title: 'Digital Marketing',
        description: 'We partner with clients to build ROI centric campaigns through a variety of digital marketing services that will take your business to the next level.'
    },
    {
        icon: '01',
        title: 'Visual Identity',
        description: 'Good graphic design can make the difference to any business, as it has the ability to connect with your audience and reach your business goals.'
    },
    {
        icon: '03',
        title: 'Web & Mobile',
        description: 'Your website is the first place that your customers will look to find out about your business and the services or products you provide.'
    },
    {
        icon: '02',
        title: 'Press Relation',
        description: 'The best way to get your news in front of the journalists who matter.'
    },
]

class ServiceOne extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="row">
                    {ServiceList.map( (val , i) => (
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12" key={i}>
                            <div className="service service__style--1">
                                <div className="icon">
                                    <img src={`/assets/images/icons/icon-${val.icon}.png`} alt="Icon Service"/>
                                </div>
                                <div className="content">
                                    <h4 className="title">{val.title}</h4>
                                    <p align="justify">{val.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceOne;