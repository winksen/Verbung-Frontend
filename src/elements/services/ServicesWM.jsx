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
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>1. Website Strategy</p>
                                    </div>
                                    <div className="author-info">
                                        <h6>When visitors hit your site there is only a matter of seconds to engage them. A web strategy is about crafting a solution that is usable and accessible and exudes the right look and feel. The strategy will contain the scope of work, direct the content creation process and provide tactical direction for the developers.</h6>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>2. UI Design</p>
                                    </div>
                                    <div className="author-info">
                                        <h6>The purpose of any interface is to help the user accomplish their goal. Our UI designers put themselves in the user’s mindset, predict what they will expect and then make the design that reflects these insights. They design each screen to ensure that the UI visually communicates the path that a UX designer has developed.</h6>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>3. UX Design</p>
                                    </div>
                                    <div className="author-info">
                                        <h6>UX design is about having a complete understanding of the user. Our UX designers will conduct user research, review user types and conduct performance and usability testing to design the most effective journey. We ensure that the navigation of your website is completely intuitive so the user can get to their end destination easily.</h6>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>4. Mobile-first Design</p>
                                    </div>
                                    <div className="author-info">
                                        <h6>Mobile-first or responsive design means that a website responds to the user’s device or platform by reformatting itself fluidly. This makes the website usable and accessible on the device that’s accessing it. Everything VI develops online is built with mobile-use in mind.</h6>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>5. Tracking &amp; Analysis</p>
                                    </div>
                                    <div className="author-info">
                                        <h6>Our web analytics help you to measure, collect, analyze and report your web data for purposes of understanding and optimizing your website. Web analytics can be used as a tool for business and market research, and to assess and improve the effectiveness of a website.</h6>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>6. Search Engine Optimisation (SEO)</p>
                                    </div>
                                    <div className="author-info">
                                        <h6>A beautiful and functional website is a great tool, but if your potential customers are not able to find you with their search terms, you’ll be left behind. Vi uses industry recognised tools and processes to review, optimize and ultimately improve or maintain rankings.</h6>
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