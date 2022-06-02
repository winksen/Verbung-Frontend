import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { FiCast , FiLayers , FiUsers , FiMonitor ,FiChevronUp, FiMaximize } from "react-icons/fi";

class Testimonial extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="row">
                    <div className="col-lg-12">
                        <Tabs>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>1. Technical Direction</p>
                                    </div>
                                    <div className="author-info">
                                        <h6>The technical director is responsible for the technical and logistical feasibility during the preparation, assembly and dismantling phases of the operations. He directs and coordinates the management teams as well as all the subcontractors during the various phases of production.</h6>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>2. Institutional Communication</p>
                                    </div>
                                    <div className="author-info">
                                        <h6>The daily life of the company requires support in order to inform, convince, know the feelings and build customer loyalty. In this perspective, institutional communication aims to promote the image of the company and show consumers the values that the company defends, its commitment and to make people like and understand the brand.</h6>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>3. Photography</p>
                                    </div>
                                    <div className="author-info">
                                        <h6>Events are above all an appointment that contains a communication action. The photo coverage fixes the date and place of the event, translates the atmosphere and enhances the participation and the interventions of the participants in images. Guests will be photographed on the spot during conferences, breaks, cocktails and professional events.</h6>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>4. Conferences, Seminars, Festivals</p>
                                    </div>
                                    <div className="author-info">
                                        <h6>You are organizing a seminar or a congress, audiovisual recording is now a major asset to take into account to increase the impact of your event. Because your events matter a lot, their coverage should be planned carefully. This is why we put at your service a team of production of the video of your event, adapted to your needs of distribution.</h6>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>5. Institutional Film</p>
                                    </div>
                                    <div className="author-info">
                                        <h6>Originality is what sets your company apart. Promoting the image of your company, its mission, its objectives, the team and the services through an institutional film improves its visibility. In the corporate video, you can include statements from directors, testimonials from your clients, images of your company’s facilities and subtitle the video in different languages.</h6>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>6. Commercial Film</p>
                                    </div>
                                    <div className="author-info">
                                        <h6>Announcing the release of a new product and highlighting the image of a brand means finding the right promotion that will ensure the best visibility. The video support helps the viewer to visualize the use of the product for future acquisition and promotes your company in the international market. We also offer a translation and subtitling service for better distribution of the video.</h6>
                                    </div>
                                </div>
                            </TabPanel>
                            
                            <TabList className="testimonial-thumb-wrapper">
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/service/1.jpg" alt="Digital Marketing"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/service/2.jpg" alt="Digital Marketing"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/service/3.jpg" alt="Digital Marketing"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/service/4.jpg" alt="Digital Marketing"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/service/5.jpg" alt="Digital Marketing"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/service/6.jpg" alt="Digital Marketing"/>
                                        </div>
                                    </div>
                                </Tab>
                            </TabList>
                        </Tabs>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Testimonial;