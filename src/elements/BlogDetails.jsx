// USED IMPORTS
import React, { Component } from "react";
import ModalVideo from 'react-modal-video';
import ScrollToTop from 'react-scroll-up';
import { ShimmerTitle, ShimmerText, ShimmerThumbnail } from "react-shimmer-effects";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { FiClock , FiUser, FiEdit, FiArrowLeft } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";

import PageHelmet from "../component/common/Helmet";
import Header from "../component/header/Header";
import Footer from "../component/footer/FooterTwo";

import moment from 'moment';
import axios from "axios";

// UNUSED IMPORTS
// import { Link } from 'react-router-dom';
// import { useParams } from 'react-router';
// import dotenv from 'dotenv';

// dotenv.config();
const queryUrl = process.env.REACT_APP_QUERY_URL
const baseURL = process.env.REACT_APP_BASE_URL_POSTS
const bearer = `Bearer ${process.env.REACT_APP_BEARER_TOKEN}`

const api = axios.create({
    baseURL: baseURL,
    headers: {'Authorization': bearer},
})
class BlogDetails extends Component{
    constructor (props) {
        super(props)
        this.state = {
          isOpen: false,
          loading: true,
          blogs: []
        }
        this.openModal = this.openModal.bind(this)
        api.get(`/${props.match.params.id}`).then(res => {
            console.log(res.data)
            this.setState({
                loading: false,
                blogs: res.data
            })
        })
    }
    openModal () {
        this.setState({isOpen: true})
    }
    render(){
        return(
            <div className="active-dark">
            <React.Fragment>
                <PageHelmet pageTitle='VERBUNG // Blogs' />
                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
                
                
                {/* Start Breadcrump Area */}
                <div className="rn-page-title-area pt--120 pb--90 bg_image" data-black-overlay="7">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="header-btn pt--100">
                                    <a className="rn-btn" href="/blogs">
                                        <span><FiArrowLeft /> Return to Blogs</span>
                                    </a>
                                </div>
                            </div>
                            {/* <div className="col-lg-4">
                            </div>
                            <div className="col-lg-2">
                                <div className="header-btn pt--100">
                                    <a className="rn-btn" href={`/blogs_${this.state.blogs.id}`}>
                                        <span>Next Blog <FiArrowRight /></span>
                                    </a>
                                </div>
                            </div> */}

                           

                            <div className="col-lg-12">
                                <div className="blog-single-page-title text-center ">
                                    <br />
                                    {this.state.loading ? ( <ShimmerTitle line={3} className="darkModeShimmer" /> ) : ( <h2 className="title theme-gradient textUpper">{this.state.blogs.title}</h2> )}
                                    <ul className="blog-meta d-flex justify-content-center align-items-center title">
                                        <li><FiClock />Created: {moment(this.state.blogs.created_at).fromNow()}</li>
                                        <li><FiEdit />Updated: {moment(this.state.blogs.updated_at).fromNow()}</li>
                                        <li><FiUser />{this.state.blogs.writer}</li>
                                        {/* <li><FiMessageCircle />15 Comments</li>
                                        <li><FiHeart />Like</li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Breadcrump Area */}

                {/* Start Blog Details */}
                <div className="rn-blog-details pt--90 pb--70 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner-wrapper">
                                    <div className="inner">
                                    {this.state.loading ? (
                                    <div>
                                        <ShimmerTitle className="darkModeShimmerPlus" />
                                        <ShimmerText className="darkModeShimmerPlus"/>

                                        <ShimmerTitle className="darkModeShimmerPlus" />
                                        <div className="darkModeShimmerPlus" >
                                            <ShimmerThumbnail height={500} rounded />
                                        </div>

                                        <ShimmerTitle className="darkModeShimmerPlus" />
                                        <ShimmerText className="darkModeShimmerPlus"/>
                                        <ShimmerText className="darkModeShimmerPlus"/>
                                    </div>
                                    ) : (
                                    <div>
                                        {/* Image 1 */}
                                        <div className="thumbnail">
                                            <LazyLoadImage hidden={null == this.state.blogs.image} className="w-100" alt="" effect="blur" src={`${queryUrl}/${this.state.blogs.image}`} onError={({ currentTarget }) => {currentTarget.onerror = null; currentTarget.src="assets/images/blog/blog-image-1-default.png"; }} />
                                            <span hidden={null == this.state.blogs.image || null == this.state.blogs.image_source1}>Image source: {this.state.blogs.image_source1}</span>
                                        </div>
                                        <br /><br />
                                        
                                        {/* Title 1 */}
                                        <h3 className="textUpper">{this.state.blogs.title1}</h3>
                                        {/* Subtitle 1 */}
                                        <p className="bold subtitle textUpper">{this.state.blogs.sub1}</p>
                                        {/* Para 1 */}
                                        
                                        <p align="justify">{this.state.blogs.para1}</p>
                                        <hr className="line"/>

                                        {/* Title 2 */}
                                        <h3 className="textUpper">{this.state.blogs.title2}</h3>
                                        {/* Subtitle 2 */}
                                        <p className="bold subtitle textUpper">{this.state.blogs.sub2}</p>
                                        <div className="blog-single-list-wrapper d-flex flex-wrap">
                                            <div className="thumbnail">
                                                {/* Image 2 */}
                                                <LazyLoadImage hidden={null == this.state.blogs.image2} className="w-100" alt="" effect="blur" src={`${queryUrl}/${this.state.blogs.image2}`} onError={({ currentTarget }) => {currentTarget.onerror = null; currentTarget.src="assets/images/blog/blog-image-2-default.png"; }} />
                                                <span hidden={null == this.state.blogs.image2 || null == this.state.blogs.image_source2} >Image source: {this.state.blogs.image_source2}</span>
                                            </div>
                                            <div className="content">
                                                {/* Para 2 */}
                                                <p align="justify">{this.state.blogs.para2}</p>
                                                {/* List Title 1 */}
                                                <p className="bold subtitle textUpper">{this.state.blogs.list1}</p>
                                                <ul className="list-style" hidden={null == this.state.blogs.item1}>
                                                    <li>{this.state.blogs.item1}</li>
                                                    <li>{this.state.blogs.item2}</li>
                                                    <li>{this.state.blogs.item3}</li>
                                                    <li>{this.state.blogs.item4}</li>
                                                    <li>{this.state.blogs.item5}</li>
                                                    <li>{this.state.blogs.item6}</li>
                                                    <li>{this.state.blogs.item7}</li>
                                                    <li>{this.state.blogs.item8}</li>
                                                    <li>{this.state.blogs.item9}</li>
                                                    <li>{this.state.blogs.item10}</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <hr className="line"/>

                                        {/* Title 3 */}
                                        <h3 className="textUpper">{this.state.blogs.title3}</h3>
                                        {/* Subtitle 3 */}
                                        <p className="bold subtitle textUpper">{this.state.blogs.sub3}</p>
                                        {/* Para 3 */}
                                        <p align="justify" className="mb--0">{this.state.blogs.para3}</p>
                                        {/* Image 3 */}
                                        <div className="thumbnail">
                                            <LazyLoadImage hidden={null == this.state.blogs.image3} className="w-100" alt="" effect="blur" src={`${queryUrl}/${this.state.blogs.image3}`} onError={({ currentTarget }) => {currentTarget.onerror = null; currentTarget.src="assets/images/blog/blog-image-1-default.png"; }} />
                                            <span hidden={null == this.state.blogs.image3 || null == this.state.blogs.image_source3}>Image source: {this.state.blogs.image_source3}</span>
                                        </div>
                                        <br /><br />
                                        <hr className="line"/>

                                        {/* Title 4 */}
                                        <h3 className="textUpper">{this.state.blogs.title4}</h3>
                                        {/* Subtitle 4 */}
                                        <p className="bold subtitle textUpper">{this.state.blogs.sub4}</p>
                                        <div className="blog-single-list-wrapper d-flex flex-wrap">            
                                            <div className="content-special">
                                                {/* Para 4 */}
                                                <p align="justify">{this.state.blogs.para4}</p>
                                                {/* List Title 2 */}
                                                <p className="bold subtitle textUpper">{this.state.blogs.list2}</p>
                                                <ul className="list-style" hidden={null == this.state.blogs.item11}>
                                                    <li>{this.state.blogs.item11}</li>
                                                    <li>{this.state.blogs.item12}</li>
                                                    <li>{this.state.blogs.item13}</li>
                                                    <li>{this.state.blogs.item14}</li>
                                                    <li>{this.state.blogs.item15}</li>
                                                    <li>{this.state.blogs.item16}</li>
                                                    <li>{this.state.blogs.item17}</li>
                                                    <li>{this.state.blogs.item18}</li>
                                                    <li>{this.state.blogs.item19}</li>
                                                    <li>{this.state.blogs.item20}</li>
                                                </ul>
                                            </div>
                                            <div className="thumbnail">
                                                {/* Image 4 */}
                                                <LazyLoadImage hidden={null == this.state.blogs.image4} className="w-100" alt="" effect="blur" src={`${queryUrl}/${this.state.blogs.image4}`} onError={({ currentTarget }) => {currentTarget.onerror = null; currentTarget.src="assets/images/blog/blog-image-2-default.png"; }} />
                                                <span hidden={null == this.state.blogs.image4}>Image source: {this.state.blogs.image_source4}</span>
                                            </div>
                                        </div>
                                        <hr className="line"/>

                                        {/* Title 5 */}
                                        <h3 className="textUpper">{this.state.blogs.title5}</h3>
                                        {/* Subtitle 5 */}
                                        <p className="bold subtitle textUpper">{this.state.blogs.sub5}</p>
                                        {/* Para 5 */}
                                        <p align="justify" className="mb--0">{this.state.blogs.para5}</p>
                                        {/* Image 5 */}
                                        <div className="thumbnail">
                                            <LazyLoadImage hidden={null == this.state.blogs.image5} className="w-100" alt="" effect="blur" src={`${queryUrl}/${this.state.blogs.image5}`} onError={({ currentTarget }) => {currentTarget.onerror = null; currentTarget.src="assets/images/blog/blog-image-1-default.png"; }} />
                                            <span hidden={null == this.state.blogs.image5 || null == this.state.blogs.image_source5}>Image source: {this.state.blogs.image_source5}</span>
                                        </div>
                                        <br /><br />
                                        <hr className="line"/>

                                        {/* Title 6 */}
                                        <h3 className="textUpper">{this.state.blogs.title6}</h3>
                                        {/* Subtitle 6 */}
                                        <p className="bold subtitle textUpper">{this.state.blogs.sub6}</p>
                                        {/* Para 6 */}
                                        <p align="justify">{this.state.blogs.para6}</p>

                                        <h3 className="textUpper" hidden={null == this.state.blogs.videoid}>Watch on YouTube</h3>
                                        <div className="video-wrapper position-relative mb--40">
                                            <div className="thumbnail">
                                            {/* Image 6 // VIDEO */}
                                            <LazyLoadImage hidden={null == this.state.blogs.image6} className="w-100" alt="" effect="blur" src={`${queryUrl}/${this.state.blogs.image6}`} onError={({ currentTarget }) => {currentTarget.onerror = null; currentTarget.src="assets/images/blog/blog-image-1-default.png"; }} />
                                            </div>
                                            <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId={this.state.blogs.videoid} onClose={() => this.setState({isOpen: false})} />
                                            <button style={ this.state.blogs.videoid != null ? { display:'block'} : {display : 'none'}} className="video-popup position-top-center" onClick={this.openModal}><span className="play-icon"></span></button>
                                            <div className="thumbnail">
                                                <span hidden={null == this.state.blogs.image6 || null == this.state.blogs.image_source6}>Video Image source: {this.state.blogs.image_source6}</span>
                                            </div>                             
                                        </div>
                                        <hr className="line"/>

                                        {/* Title 7 */}
                                        <h3 className="textUpper">{this.state.blogs.title7}</h3>
                                        {/* Subtitle 7 */}
                                        <p className="bold subtitle textUpper">{this.state.blogs.sub7}</p>
                                        {/* Para 7 */}
                                        <p align="justify" className="mb--0">{this.state.blogs.para7}</p>
                                        {/* Para 8 */}
                                        <p align="justify">{this.state.blogs.para8}</p>
                                        <hr className="line"/>

                                        {/* Title 8 */}
                                        <h3 className="textUpper">{this.state.blogs.title8}</h3>
                                        {/* Subtitle 8 */}
                                        <p className="bold subtitle textUpper">{this.state.blogs.sub8}</p>
                                        {/* Para 9 */}
                                        <p align="justify" className="mb--0">{this.state.blogs.para9}</p>
                                        {/* Para 10 */}
                                        <p align="justify">{this.state.blogs.para10}</p>
                                        <hr className="line"/>


                                        <h3 className="textUpper" hidden={null == this.state.blogs.link1}>Links</h3>
                                        {/* Link 1 */}
                                        <p align="justify" className="mb--0 bold" hidden={null == this.state.blogs.link1}>• Link: <a className="linkHov" href={this.state.blogs.link1} target="_blank" rel="noreferrer noopener">{this.state.blogs.link1}</a></p>
                                        <p align="justify" className="mb--0 bold" hidden={null == this.state.blogs.link2}>• Link: <a className="linkHov" href={this.state.blogs.link2} target="_blank" rel="noreferrer noopener">{this.state.blogs.link2}</a></p>
                                        <p align="justify" className="mb--0 bold" hidden={null == this.state.blogs.link3}>• Link: <a className="linkHov" href={this.state.blogs.link3} target="_blank" rel="noreferrer noopener">{this.state.blogs.link3}</a></p>
                                        <p align="justify" className="mb--0 bold" hidden={null == this.state.blogs.link4}>• Link: <a className="linkHov" href={this.state.blogs.link4} target="_blank" rel="noreferrer noopener">{this.state.blogs.link4}</a></p>
                                        

                                        <br /><br /><br /><br /><br />
                                        <p><FiEdit /> Last Updated: {moment(this.state.blogs.updated_at).fromNow()}</p>
                                    </div>
                                    )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Blog Details */}

                {/* Start BLog Comment Form  */}
                {/* <div className="blog-comment-form pb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner">
                                    <h3 className="title mb--40 fontWeight500">Leave a Reply</h3>
                                    <form action="#">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-12 col-12">
                                                <div className="rnform-group">
                                                    <input type="text" placeholder="Name" />
                                                </div>
                                                <div className="rnform-group">
                                                    <input type="email" placeholder="Email" />
                                                </div>
                                                <div className="rnform-group">
                                                    <input type="text" placeholder="Website" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-12 col-12">
                                                <div className="rnform-group">
                                                    <textarea type="text" placeholder="Comment"></textarea>
                                                </div>
                                                
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="blog-btn">
                                                    <a className="rn-button-style--2 btn-solid" href="#"></a>
                                                    <Link className="rn-button-style--2 btn-solid" to="/blog-details"><span>SEND MESSAGE</span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* End BLog Comment Form  */}

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
                
                <Footer /> 

            </React.Fragment>
            </div>
        )
    }
}
export default BlogDetails;