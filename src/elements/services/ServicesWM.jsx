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
                                            <img src="/assets/images/service/WM1.png" alt="Digital Marketing"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/service/WM2.png" alt="Digital Marketing"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/service/WM3.png" alt="Digital Marketing"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/service/WM4.png" alt="Digital Marketing"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/service/WM5.png" alt="Digital Marketing"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/service/WM6.png" alt="Digital Marketing"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/service/WM7.png" alt="Digital Marketing"/>
                                        </div>
                                    </div>
                                </Tab>
                            </TabList>
                            <br />

                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <h2 className="textUpper">Website Strategy</h2>
                                    </div>
                                    <div className="author-info">
                                        <p>When visitors hit your site there is only a matter of seconds to engage them. A web strategy is about crafting a solution that is usable and accessible and exudes the right look and feel. The strategy will contain the scope of work, direct the content creation process and provide tactical direction for the developers.</p>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <h2 className="textUpper">UI Design</h2>
                                    </div>
                                    <div className="author-info">
                                        <p>The purpose of any interface is to help the user accomplish their goal. Our UI designers put themselves in the user’s mindset, predict what they will expect and then make the design that reflects these insights. They design each screen to ensure that the UI visually communicates the path that a UX designer has developed.</p>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <h2 className="textUpper">UX Design</h2>
                                    </div>
                                    <div className="author-info">
                                        <p>UX design is about having a complete understanding of the user. Our UX designers will conduct user research, review user types and conduct performance and usability testing to design the most effective journey. We ensure that the navigation of your website is completely intuitive so the user can get to their end destination easily.</p>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <h2 className="textUpper">Mobile-first Design</h2>
                                    </div>
                                    <div className="author-info">
                                        <p>Mobile-first or responsive design means that a website responds to the user’s device or platform by reformatting itself fluidly. This makes the website usable and accessible on the device that’s accessing it. Everything VI develops online is built with mobile-use in mind.</p>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <h2 className="textUpper">Tracking &amp; Analysis</h2>
                                    </div>
                                    <div className="author-info">
                                        <p>Our web analytics help you to measure, collect, analyze and report your web data for purposes of understanding and optimizing your website. Web analytics can be used as a tool for business and market research, and to assess and improve the effectiveness of a website.</p>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <h2 className="textUpper">Search Engine Optimisation (SEO)</h2>
                                    </div>
                                    <div className="author-info">
                                        <p>A beautiful and functional website is a great tool, but if your potential customers are not able to find you with their search terms, you’ll be left behind. Vi uses industry recognised tools and processes to review, optimize and ultimately improve or maintain rankings.</p>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <h2 className="textUpper">Search Engine Optimisation (SEO)</h2>
                                    </div>
                                    <div className="author-info">
                                        <p>A beautiful and functional website is a great tool, but if your potential customers are not able to find you with their search terms, you’ll be left behind. Vi uses industry recognised tools and processes to review, optimize and ultimately improve or maintain rankings.</p>
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