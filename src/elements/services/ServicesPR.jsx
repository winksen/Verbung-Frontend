import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import { FiCast , FiLayers , FiUsers , FiMonitor ,FiChevronUp, FiMaximize } from "react-icons/fi";

class Testimonial extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="row">
                    <div className="col-lg-12">
                        <Tabs>
                            <TabList className="testimonial-thumb-wrapper">
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/service/PR1.png" alt="Digital Marketing"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/service/PR2.png" alt="Digital Marketing"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/service/PR3.png" alt="Digital Marketing"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/service/PR4.png" alt="Digital Marketing"/>
                                        </div>
                                    </div>
                                </Tab>
                            </TabList>
                            <br/>

                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <h2 className="textUpper">Technical Direction</h2>
                                    </div>
                                    <div className="author-info">
                                        <p>The technical director is responsible for the technical and logistical feasibility during the preparation, assembly and dismantling phases of the operations. He directs and coordinates the management teams as well as all the subcontractors during the various phases of production.</p>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <h2 className="textUpper">Institutional Communication</h2>
                                    </div>
                                    <div className="author-info">
                                        <p>The daily life of the company requires support in order to inform, convince, know the feelings and build customer loyalty. In this perspective, institutional communication aims to promote the image of the company and show consumers the values that the company defends, its commitment and to make people like and understand the brand.</p>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <h2 className="textUpper">Photography</h2>
                                    </div>
                                    <div className="author-info">
                                        <p>Events are above all an appointment that contains a communication action. The photo coverage fixes the date and place of the event, translates the atmosphere and enhances the participation and the interventions of the participants in images. Guests will be photographed on the spot during conferences, breaks, cocktails and professional events.</p>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <h2 className="textUpper">Conferences, Seminars, Festivals</h2>
                                    </div>
                                    <div className="author-info">
                                        <p>You are organizing a seminar or a congress, audiovisual recording is now a major asset to take into account to increase the impact of your event. Because your events matter a lot, their coverage should be planned carefully. This is why we put at your service a team of production of the video of your event, adapted to your needs of distribution.</p>
                                    </div>
                                </div>
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Testimonial;