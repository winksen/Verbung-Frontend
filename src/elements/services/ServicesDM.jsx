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
                            <TabList className="testimonial-thumb-wrapper">
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/service/DM1.png" alt="Digital Marketing"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/service/DM2.png" alt="Digital Marketing"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/service/DM3.png" alt="Digital Marketing"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/service/DM4.png" alt="Digital Marketing"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/service/DM5.png" alt="Digital Marketing"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/service/DM6.png" alt="Digital Marketing"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/service/DM7.png" alt="Digital Marketing"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/service/DM8.png" alt="Digital Marketing"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/service/DM9.png" alt="Digital Marketing"/>
                                        </div>
                                    </div>
                                </Tab>
                            </TabList>
                            <br/>

                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <h2 className="textUpper">Online Display Advertising</h2>
                                    </div>
                                    <div className="author-info">
                                        <p>VI carefully design strategies to meet your business and marketing goals, from a single project to retainer for an online marketing package. Always ‘data-informed’ and using powerful digital analytics, we help your business thrive.</p>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <h2 className="textUpper">Remarketing</h2>
                                    </div>
                                    <div className="author-info">
                                        <p>Remarketing drives consumer awareness. By targeting existing users and converting those who have engaged with your website before and encouraging further interaction. Not only do we set-up and manage the campaign, but we also design the ads too.</p>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <h2 className="textUpper">Pay Per Click (PPC)</h2>
                                    </div>
                                    <div className="author-info">
                                        <p>PPC advertising gives you the opportunity to pay for top positions on search engines and appear on relevant partner websites. Pay-per-click delivers instant traffic and offers ways to compliment existing SEO strategies and allows you to develop an overall online strategy armed with facts, not assumptions.</p>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <h2 className="textUpper">Search Engine Optimization (SEO)</h2>
                                    </div>
                                    <div className="author-info">
                                        <p>Having a website that can be easily found by potential customers is crucial. When searching for what you offer, your site needs to be up there in rankings. We optimize your website both onsite and offsite with the proper information that will achieve this.</p>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <h2 className="textUpper">Infographics</h2>
                                    </div>
                                    <div className="author-info">
                                        <p>Whether you’re looking for content aimed at link acquisition, visuals to support editorial or traditional marketing content, infographics can tell your story in a more engaging, memorable and effective way. As experts in visual storytelling, we can help you tell your brand story, no matter what your end goal may be.</p>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <h2 className="textUpper">Videos</h2>
                                    </div>
                                    <div className="author-info">
                                        <p>Video marketing has taken the social media world by storm with 100 million hours of video on the internet per day. We combine the talents of a video production company, with the knowledge and expertise of scriptwriters and storyboard creators to develop branded video content that engage and entertain your audiences.</p>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <h2 className="textUpper">Email Marketing</h2>
                                    </div>
                                    <div className="author-info">
                                        <p>Research shows that no marketing channel consistently returns a better ROI than a properly implemented email marketing campaign. Repeat customers are the most valuable. They convert at the highest rates (20%), spend the most time on your website (7.69 seconds on average), look at 16.83 page views per session, and spend the most.</p>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <h2 className="textUpper">Marketing Consultancy</h2>
                                    </div>
                                    <div className="author-info">
                                        <p>The biggest marketing expense is employing skilled people. Partners rather than suppliers we provide consultancy services giving you access to our expert team for a fraction of the price. This frees up your time and can reduce your overheads and headcount.</p>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <h2 className="textUpper">Marketing Strategy</h2>
                                    </div>
                                    <div className="author-info">
                                        <p>Marketing is complicated. Multiple channels, competitors and audiences. We work with you to understand your market, challenge you and work out what you are trying to achieve. We’ll then develop the best fit strategy with audiences, messages and media.</p>
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