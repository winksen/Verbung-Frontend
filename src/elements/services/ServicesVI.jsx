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
                                            <img src="/assets/images/service/VI1.png" alt="Digital Marketing"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/service/VI2.png" alt="Digital Marketing"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/service/VI3.png" alt="Digital Marketing"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/service/VI4.png" alt="Digital Marketing"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/service/VI5.png" alt="Digital Marketing"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/service/VI6.png" alt="Digital Marketing"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/service/VI7.png" alt="Digital Marketing"/>
                                        </div>
                                    </div>
                                </Tab>
                            </TabList>
                            <br />

                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <h2 className="textUpper">Brochures &amp; Catalogues</h2>
                                    </div>
                                    <div className="author-info">
                                        <p>Brochures are a very important part of your marketing materials and can contribute significantly towards projecting your brand’s image, as well as displaying your company’s products or services with style, accuracy and creativity. Our in-house team of writers, designers &amp; illustrators are skilled at graphic concept development, copywriting, electronic and print production.</p>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <h2 className="textUpper">Exhibitions</h2>
                                    </div>
                                    <div className="author-info">
                                        <p>Exhibitions offer a direct opportunity for you to engage with your prospective clients face-to-face. We understand the importance of this opportunity and investment so that not only do we deliver a unique and innovative custom built stand design, we also offer a full project management service to make the experience as stress-free as possible.</p>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <h2 className="textUpper">Posters &amp; Flyers</h2>
                                    </div>
                                    <div className="author-info">
                                        <p>Posters are a great way to attract attention, whether used in your marketing campaign to your customers or internally to your employees. Our attention grabbing poster design will help your business stand out. We understand the power of putting the right words with creative design to produce stunning, eye-catching and effective results!</p>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <h2 className="textUpper">Brand Consultancy</h2>
                                    </div>
                                    <div className="author-info">
                                        <p>It is imperative to understand where, when and how to use your marketing resources. As brand consultants we scrutinise, analyse and evaluate the brand identity, performance and strategy to deliver a more effective brand approach.</p>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <h2 className="textUpper">Brand Development &amp; Strategy</h2>
                                    </div>
                                    <div className="author-info">
                                        <p>Your brand strategy defines what your brand stands for, the promise it makes, and the personality it projects. We develop a brand blueprint that will help clients discover and define their brand. We create powerful and authentic brand narratives that will inspire and engage your customers. To achieve this, our strategy documents include: mission, vision, values and core brand expressions.</p>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <h2 className="textUpper">Website Design &amp; Development</h2>
                                    </div>
                                    <div className="author-info">
                                        <p>We design and develop high quality, bespoke websites. Coded for technical strength and designed for front end users – our websites deliver strong results. We work to the latest standards and use a number of popular Content Management platforms.</p>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <h2 className="textUpper">Microsites</h2>
                                    </div>
                                    <div className="author-info">
                                        <p>Already have a well-built core website but need something that’s related to a specific campaign, audience or promotion? Our microsites are built using the same standards as our core websites and offer a great way to support marketing activities.</p>
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