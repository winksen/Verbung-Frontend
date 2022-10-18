import React, { Component } from "react";
import moment from 'moment';
import axios from "axios";
// import { useParams } from 'react-router';
import PageHelmet from "../component/common/Helmet";
import ModalVideo from 'react-modal-video';
import { FiClock , FiUser, FiEdit } from "react-icons/fi";
// import { Link } from 'react-router-dom';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/FooterTwo";


const api = axios.create({
    baseURL: `http://127.0.0.1:8000/api/posts`
    //baseURL: `https://api.verbung.net/public/api/posts`
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
                <div className="rn-page-title-area pt--120 pb--190 bg_image" data-black-overlay="7">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="blog-single-page-title text-center pt--100">
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
                <div className="rn-blog-details pt--110 pb--70 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner-wrapper">
                                    <div className="inner">
                                        {/* CatchPhrase 1 */}
                                        <h3 className="oswald textUpper">{this.state.blogs.catch1}</h3>
                                        <br />
                                        {/* Para 1 */}
                                        <p align="justify">{this.state.blogs.para1}</p>
                                        {/* CatchPhrase 2 */}
                                        <h3 className="oswald textUpper">{this.state.blogs.catch2}</h3>
                                        <br />
                                        {/* Image 1 */}
                                        <div className="thumbnail">
                                            <img className="w-100" src={`http://127.0.0.1:8000/${this.state.blogs.image}`} onError={(event) => event.target.style.display = 'none'}/>
                                        </div>
                                        <br /><br />
                                        {/* CatchPhrase 3 */}
                                        <h3 className="oswald textUpper">{this.state.blogs.catch3}</h3>
                                        {/* Para 2 */}
                                        <p align="justify" className="mt--40">{this.state.blogs.para2}</p>
                                        {/* CatchPhrase 4 */}
                                        <h3 className="oswald textUpper">{this.state.blogs.catch4}</h3>
                                        <br />
                                        <div className="blog-single-list-wrapper d-flex flex-wrap">
                                            <div className="thumbnail">
                                                {/* Image 2 */}
                                                
                                                <img className="w-100" src={`http://127.0.0.1:8000/${this.state.blogs.image2}`} onError={(event) => event.target.style.display = 'none'}/>
                                                <span>{this.state.blogs.image_source}</span>
                                            </div>
                                            <div className="content">
                                                {/* Para 3 */}
                                                <p align="justify">{this.state.blogs.para3}</p>
                                                {/* CatchPhrase 5 */}
                                                <h3 className="oswald textUpper">{this.state.blogs.catch5}</h3>
                                                <br />
                                                <p align="justify">{this.state.blogs.para4}</p>
                                                {/* <h4 className="title">Ordered &amp; Unordered Lists.</h4>
                                                <ul className="list-style">
                                                    <li>Yet this above sewed flirted opened ouch</li>
                                                    <li>Goldfinch realistic sporadic ingenuous</li>
                                                    <li>Abominable this abidin far successfully then like piquan</li>
                                                    <li>Risus commodo viverra</li>
                                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                                                </ul>
                                                <h4 className="title">Ordered &amp; Unordered Lists.</h4>
                                                <ul className="list-style">
                                                    <li>Yet this above sewed flirted opened ouch</li>
                                                    <li>Goldfinch realistic sporadic ingenuous</li>
                                                    <li>Abominable this abidin far successfully then like piquan</li>
                                                    <li>Risus commodo viverra</li>
                                                </ul> */}
                                            </div>
                                        </div>

                                        {/* CatchPhrase 6 */}
                                        <h3 className="oswald textUpper">{this.state.blogs.catch6}</h3>
                                        {/* Para 4 */}
                                        <p align="justify" className="mt--25 mt_sm--5">{this.state.blogs.para4}</p>
                                        {/* Image 3 */}
                                        <div className="thumbnail">
                                            <img className="w-100" src={`http://127.0.0.1:8000/${this.state.blogs.image3}`} onError={(event) => event.target.style.display = 'none'}/>
                                        </div>
                                        <br /><br />
                                        {/* Para 5 */}
                                        <p align="justify" className="mb--0">{this.state.blogs.para5}</p>
                                        <br /><br />
                                        {/* CatchPhrase 7 */}
                                        <h3 className="oswald textUpper">{this.state.blogs.catch7}</h3>
                                        <br />
                                        {/* Para 6 */}
                                        <p align="justify" className="mb--0">{this.state.blogs.para6}</p>
                                        <br /><br />
                                        <div className="video-wrapper position-relative mb--40">
                                            <div className="thumbnail">
                                                <img className="w-100" src={`http://127.0.0.1:8000/${this.state.blogs.image}`} onError={(event) => event.target.style.display = 'none'}/>
                                            </div>
                                            <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId={this.state.blogs.videoid} onClose={() => this.setState({isOpen: false})} />
                                            <button style={ this.state.blogs.videoid != null ? { display:'block'} : {display : 'none'}} className="video-popup position-top-center" onClick={this.openModal}><span className="play-icon"></span></button>                                            
                                        </div>
                                        {/* Para 7 */}
                                        <p align="justify" className="mb--0">{this.state.blogs.para6}</p>
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