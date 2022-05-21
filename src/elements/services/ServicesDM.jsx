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
                                        <p>1. Online Display Advertising</p>
                                    </div>
                                    <div className="author-info">
                                        <h6>VI carefully design strategies to meet your business and marketing goals, from a single project to retainer for an online marketing package. Always ‘data-informed’ and using powerful digital analytics, we help your business thrive.</h6>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>2. Remarketing</p>
                                    </div>
                                    <div className="author-info">
                                        <h6>Remarketing drives consumer awareness. By targeting existing users and converting those who have engaged with your website before and encouraging further interaction. Not only do we set-up and manage the campaign, but we also design the ads too.</h6>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>3. Pay Per Click (PPC)</p>
                                    </div>
                                    <div className="author-info">
                                        <h6>PPC advertising gives you the opportunity to pay for top positions on search engines and appear on relevant partner websites. Pay-per-click delivers instant traffic and offers ways to compliment existing SEO strategies and allows you to develop an overall online strategy armed with facts, not assumptions.</h6>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>4. Search Engine Optimization (SEO)</p>
                                    </div>
                                    <div className="author-info">
                                        <h6>Having a website that can be easily found by potential customers is crucial. When searching for what you offer, your site needs to be up there in rankings. We optimize your website both onsite and offsite with the proper information that will achieve this.</h6>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>5. Infographics</p>
                                    </div>
                                    <div className="author-info">
                                        <h6>Whether you’re looking for content aimed at link acquisition, visuals to support editorial or traditional marketing content, infographics can tell your story in a more engaging, memorable and effective way. As experts in visual storytelling, we can help you tell your brand story, no matter what your end goal may be.</h6>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>6. Videos</p>
                                    </div>
                                    <div className="author-info">
                                        <h6>Video marketing has taken the social media world by storm with 100 million hours of video on the internet per day. We combine the talents of a video production company, with the knowledge and expertise of scriptwriters and storyboard creators to develop branded video content that engage and entertain your audiences.</h6>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>7. Email Marketing</p>
                                    </div>
                                    <div className="author-info">
                                        <h6>Research shows that no marketing channel consistently returns a better ROI than a properly implemented email marketing campaign. Repeat customers are the most valuable. They convert at the highest rates (20%), spend the most time on your website (7.69 seconds on average), look at 16.83 page views per session, and spend the most.</h6>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>8. Marketing Consultancy</p>
                                    </div>
                                    <div className="author-info">
                                        <h6>The biggest marketing expense is employing skilled people. Partners rather than suppliers we provide consultancy services giving you access to our expert team for a fraction of the price. This frees up your time and can reduce your overheads and headcount.</h6>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>9. Marketing Strategy</p>
                                    </div>
                                    <div className="author-info">
                                        <h6>Marketing is complicated. Multiple channels, competitors and audiences. We work with you to understand your market, challenge you and work out what you are trying to achieve. We’ll then develop the best fit strategy with audiences, messages and media.</h6>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>10. Marketing Planning</p>
                                    </div>
                                    <div className="author-info">
                                        <h6>Not sure where to start? We can help you create and deliver your marketing plan. We understand what needs to be included and how to present it in the most successful way.</h6>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>11. Market Research</p>
                                    </div>
                                    <div className="author-info">
                                        <h6>We work closely with you to understand your target market and customers. We use a mix of quantitative and qualitative methodologies to deliver best results. We ‘go the extra mile’ in terms of analysis and recommendations.</h6>
                                    </div>
                                </div>
                            </TabPanel>
                            
                            <TabList className="testimonial-thumb-wrapper">
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-1.jpg" alt="Digital Marketing"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-2.jpg" alt="Digital Marketing"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-3.jpg" alt="Digital Marketing"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-4.jpg" alt="Digital Marketing"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-5.jpg" alt="Digital Marketing"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-6.jpg" alt="Digital Marketing"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-7.jpg" alt="Digital Marketing"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-8.jpg" alt="Digital Marketing"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-8.jpg" alt="Digital Marketing"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-8.jpg" alt="Digital Marketing"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-8.jpg" alt="Digital Marketing"/>
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