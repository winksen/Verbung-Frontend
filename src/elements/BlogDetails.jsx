// USED IMPORTS
import React, { Component } from "react";
import ModalVideo from 'react-modal-video';
import ScrollToTop from 'react-scroll-up';
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

const queryUrl = 'https://api.verbung.net/public'
// const queryUrl = 'http://127.0.0.1:8000'

const api = axios.create({
    // baseURL: `http://127.0.0.1:8000/api/posts`
    baseURL: `https://api.verbung.net/public/api/posts`
})
class BlogDetails extends Component{
    constructor (props) {
        super(props)
        this.state = {
          isOpen: false,
          blogs: []
        }
        this.openModal = this.openModal.bind(this)
        api.get(`/${props.match.params.id}`).then(res => {
            console.log(res.data)
            this.setState({ blogs: res.data})
        })
    }
    openModal () {
        this.setState({isOpen: true})
    }
    // getBlog = () => {
    //     axios.get('http://127.0.0.1:8000/api/posts/1')
    //     .then(res => {
    //         console.log(res.data.id)
    //     }).catch(err => {
    //         console.log(err)
    //     })
    // }
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
                                    <h2 className="title theme-gradient textUpper">{this.state.blogs.title}</h2>                                    
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
                                        {/* CatchPhrase 1 */}
                                        <h3 className="textUpper">{this.state.blogs.catch1}</h3>
                                        <br />
                                        {/* Para 1 */}
                                        <p align="justify">{this.state.blogs.para1}</p>
                                        {/* CatchPhrase 2 */}
                                        <h3 className="textUpper">{this.state.blogs.catch2}</h3>
                                        <br />
                                        {/* Image 1 */}
                                        <div className="thumbnail">
                                            {/* <LazyLoadImage alt="" height={image.height} src={image.src} width={image.width} /> */}
                                            <LazyLoadImage className="w-100" alt="" effect="blur" src={`${queryUrl}/${this.state.blogs.image}`} onError={({ currentTarget }) => {currentTarget.onerror = null; currentTarget.src="assets/images/blog/blog-image-1-default.png"; }} />
                                            <span hidden={null == this.state.blogs.image || null == this.state.blogs.image_source1}>Image source: {this.state.blogs.image_source1}</span>
                                        </div>
                                        <br /><br />
                                        {/* CatchPhrase 3 */}
                                        <h3 className="textUpper">{this.state.blogs.catch3}</h3>
                                        {/* Para 2 */}
                                        <p align="justify" className="mt--40">{this.state.blogs.para2}</p>
                                        {/* Link 1 */}
                                        <p align="justify" className="mt--40 bold" hidden={null == this.state.blogs.link1}>• Link: <a className="linkHov" href={this.state.blogs.link1} target="_blank" rel="noreferrer noopener">{this.state.blogs.link1}</a></p>
                                        {/* CatchPhrase 4 */}
                                        <h3 className="textUpper">{this.state.blogs.catch4}</h3>
                                        <br />
                                        <div className="blog-single-list-wrapper d-flex flex-wrap">
                                            <div className="thumbnail">
                                                {/* Image 2 */}
                                                <LazyLoadImage className="w-100" alt="" effect="blur" src={`${queryUrl}/${this.state.blogs.image2}`} onError={({ currentTarget }) => {currentTarget.onerror = null; currentTarget.src="assets/images/blog/blog-image-2-default.png"; }} />
                                                <span hidden={null == this.state.blogs.image2 || null == this.state.blogs.image_source2} >Image source: {this.state.blogs.image_source2}</span>
                                            </div>
                                            <div className="content">
                                                {/* Para 3 */}
                                                <p align="justify">{this.state.blogs.para3}</p>
                                                {/* CatchPhrase 5 */}
                                                <h3 className="textUpper">{this.state.blogs.catch5}</h3>
                                                <br />
                                                {/* Para 4 */}
                                                <p align="justify">{this.state.blogs.para4}</p>
                                                {/* Link 2 */}
                                                <p align="justify" className="mt--40 bold" hidden={null == this.state.blogs.link2}>• Link: <a className="linkHov" href={this.state.blogs.link2} target="_blank" rel="noreferrer noopener">{this.state.blogs.link2}</a></p>
                                                {/* List Title 1 */}
                                                <h3 className="textUpper">{this.state.blogs.list1}</h3>
                                                <ul className="list-style">
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

                                        {/* CatchPhrase 6 */}
                                        <h3 className="textUpper">{this.state.blogs.catch6}</h3>
                                        {/* Para 5 */}
                                        <p align="justify" className="mt--25 mt_sm--5">{this.state.blogs.para5}</p>
                                        {/* Image 3 */}
                                        <div className="thumbnail">
                                            <LazyLoadImage className="w-100" alt="" effect="blur" src={`${queryUrl}/${this.state.blogs.image3}`} onError={({ currentTarget }) => {currentTarget.onerror = null; currentTarget.src="assets/images/blog/blog-image-1-default.png"; }} />
                                            <span hidden={null == this.state.blogs.image3 || null == this.state.blogs.image_source3}>Image source: {this.state.blogs.image_source3}</span>
                                        </div>
                                        <br /><br />
                                        {/* Para 6 */}
                                        <p align="justify" className="mb--0">{this.state.blogs.para6}</p>
                                        {/* Link 3 */}
                                        <p align="justify" className="mt--40 bold" hidden={null == this.state.blogs.link3}>• Link: <a className="linkHov" href={this.state.blogs.link3} target="_blank" rel="noreferrer noopener">{this.state.blogs.link3}</a></p>
                                        {/* CatchPhrase 7 */}
                                        <h3 className="textUpper">{this.state.blogs.catch7}</h3>
                                        <br />
                                        {/* Para 7 */}
                                        <p align="justify" className="mb--0">{this.state.blogs.para7}</p>
                                        <br /><br />
                                        <div className="video-wrapper position-relative mb--40">
                                            <div className="thumbnail">
                                            {/* Image 4 */}
                                            <LazyLoadImage className="w-100" alt="" effect="blur" src={`${queryUrl}/${this.state.blogs.image4}`} onError={({ currentTarget }) => {currentTarget.onerror = null; currentTarget.src="assets/images/blog/blog-image-1-default.png"; }} />
                                            </div>
                                            <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId={this.state.blogs.videoid} onClose={() => this.setState({isOpen: false})} />
                                            <button style={ this.state.blogs.videoid != null ? { display:'block'} : {display : 'none'}} className="video-popup position-top-center" onClick={this.openModal}><span className="play-icon"></span></button>
                                            <div className="thumbnail">
                                                <span hidden={null == this.state.blogs.image4 || null == this.state.blogs.image_source4}>Video Image source: {this.state.blogs.image_source4}</span>
                                            </div>                             
                                        </div>
                                        {/* Para 8 */}
                                        <p align="justify" className="mb--0">{this.state.blogs.para8}</p>
                                        <br /><br />
                                        <div className="blog-single-list-wrapper d-flex flex-wrap">            
                                            <div className="content-special">
                                                {/* Para 9 */}
                                                <p align="justify">{this.state.blogs.para9}</p>
                                                {/* Link 4 */}
                                                <p align="justify" className="mt--40 bold" hidden={null == this.state.blogs.link4}>• Link: <a className="linkHov" href={this.state.blogs.link4} target="_blank" rel="noreferrer noopener">{this.state.blogs.link4}</a></p>
                                                {/* CatchPhrase 8 */}
                                                <h3 className="textUpper">{this.state.blogs.catch8}</h3>
                                                <br />
                                                {/* Para 10 */}
                                                <p align="justify">{this.state.blogs.para10}</p>
                                                {/* List Title 2 */}
                                                <h3 className="textUpper">{this.state.blogs.list2}</h3>
                                                <ul className="list-style">
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
                                                {/* Image 5 */}
                                                <LazyLoadImage className="w-100" alt="" effect="blur" src={`${queryUrl}/${this.state.blogs.image5}`} onError={({ currentTarget }) => {currentTarget.onerror = null; currentTarget.src="assets/images/blog/blog-image-2-default.png"; }} />
                                                <span hidden={null == this.state.blogs.image5}>Image source: {this.state.blogs.image_source5}</span>
                                            </div>
                                        </div>

                                        <br /><br /><br /><br /><br />
                                        <p><FiEdit /> Last Updated: {moment(this.state.blogs.updated_at).fromNow()}</p>
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