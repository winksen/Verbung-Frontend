import React, { Component } from "react";

class About extends Component{
    render(){
        let title = 'About',
        titlePartTwo = 'Who Are We',
        description = 'At Verbung, we work hard to understand your business and digital goals, so we can develop creative, results-driven strategies to help you achieve them at all times. You know your brand better than anyone, so our experts listen carefully to your needs and take a tailored approach to better understand what convinces your target audience.',
        descriptionPartTwo = "We are more than a typical communications agency; we are an agency of creative and strategic thinkers with brilliant minds working hand in hand with each client to achieve their digital business goals.";
        return(
            <React.Fragment>
                <div className="active-darkless about-wrapper pb--120">
                    <div className="container">
                        <div className="row row--35 align-items-center">

                            <div className="col-lg-5 col-md-12">
                                <div className="thumbnail">
                                    <img className="w-100" src="/assets/images/about/about-1.jpg" alt="About Images"/>
                                </div>
                            </div>

                            <div className="col-lg-7 col-md-12">
                                <div className="about-inner inner">
                                    <div className="section-title">
                                        <h2 className="title">{title}</h2>
                                        <p className="description" align="justify">{description}</p><br /><br />
                                        <h3 className="title">{titlePartTwo}</h3>
                                        <p className="description" align="justify">{descriptionPartTwo}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default About;