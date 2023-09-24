import React, { Component, Fragment } from "react";
import PageHelmet from "../component/common/Helmet";
// import Breadcrumb from "../elements/common/Breadcrumb";
// import Pagination from "../elements/common/Pagination";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import BlogCategoryT from "./blog/BlogCategoryT";
import { useParams } from 'react-router-dom';


import ReactPaginate from "react-paginate";
import moment from 'moment';
import axios from "axios";
// import dotenv from 'dotenv';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { FiCalendar, FiMonitor } from "react-icons/fi";
import { FiClock , FiUser, FiEdit, FiArrowLeft, FiLayers } from "react-icons/fi";
import { ShimmerSimpleGallery } from "react-shimmer-effects";

const queryUrl = process.env.REACT_APP_QUERY_URL
const baseURL = process.env.REACT_APP_BASE_URL_POSTS_CATEGORY
const bearer = `Bearer ${process.env.REACT_APP_BEARER_TOKEN}`

const api = axios.create({
    baseURL: baseURL,
    headers: {'Authorization': bearer},
})

const categoryMapping = {
    '00' : 'Digital Marketing',
    '01' : 'Content Marketing',
    '02' : 'Social Media Marketing',
    '03' : 'Email Marketing',
    '04' : 'Affiliate Marketing',
    '05' : 'Search Engine Optimization (SEO)',
    '06' : 'Search Engine Advertising (SEA)',
    '07' : 'Mobile Marketing',
    '08' : 'Display Advertising',
    '09' : 'Pay-Per-Click (PPC)',
    '10' : 'Visual Identity',
    '11' : 'Branding',
    '12' : 'UI/UX',
    '13' : 'Social Media Design',
    '14' : 'Illustrations',
    '15' : 'Motion Graphics',
    '16' : 'Videography',
    '17' : 'Stationary',
};
class Blog extends Component{
    constructor () {
        super()
        this.state = {
            blogs: [],
            category: '',
            loading: true,
            pageCount: 0,
            pageNumber: 1,
            itemsPerPage: 6,
          };
      
          this.handlePageChange = this.handlePageChange.bind(this);
    }

    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate(prevProps) {
        const { category: prevCategory } = prevProps.match.params;
        const { category } = this.props.match.params;
    
        if (category !== prevCategory) {
          this.fetchData();
        }
      }
    
    fetchData() {
        api.get(`/${this.props.match.params.category}?page=${this.state.pageNumber}`).then(res => {
            console.log("Res Data is:")
            console.log(res.data.data)
            console.log(this.state.pageNumber)
            this.setState({
                loading: false,
                blogs: res.data.data,
                pageNumber: res.data.current_page,
                pageCount: res.data.last_page,
            })
        })
    }
    
    handlePageChange({ selected }) {
        console.log(selected);
        this.setState({ pageNumber: selected+1 }, () => {
          this.fetchData();
        });
    }
    render(){
        const { blogs, pageCount } = this.state;
        const displayData = blogs.map((blog , i ) => {
            return (
                <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                    <div className="blog blog-style--1">
                        <div className="">
                            <a href={`/blogs/${blog.id}`}>
                                <LazyLoadImage className="w-100" alt="" effect="blur" src={`${queryUrl}${blog.image7}`} onError={({ currentTarget }) => {currentTarget.onerror = null; currentTarget.src="/../assets/images/blog/blog-thumbnail-default.png"; }} />
                                {/* <img className="w-100" src={`/assets/images/blog/blog-0${blog.imageid1}.jpg`} alt="Blog Images"/> */}
                            </a>
                            {/* <div className="content">
                                <div className="blog-btn">
                                    <a className="rn-btn text-white" >{blog.category}</a>
                                </div>
                            </div> */}
                        </div>
                        <div className="content-text">
                            <div className="blog-btn-cat">
                                <a className="rn-btn-cat" href={`/blogs/category/${blog.category}`}>{categoryMapping[blog.category] || 'OTHER'}</a>
                                <a className="rn-btn-date" ><FiCalendar className="rn-btn-date-icon" /> {moment(blog.created_at).format('MMMM Do, YYYY')}</a>
                            </div>
                            <h4 className="title textUpper"><a href={`/blogs/${blog.id}`}>{blog.title}</a></h4>
                        </div>
                    </div>
                </div>
            );
        });
        return(
            <div className="active-dark">
            <React.Fragment>
                <PageHelmet pageTitle='VERBUNG | Blogs' />

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
                {/* Start Breadcrump Area */}
                <div className="rn-page-title-area pt--120 pb--60"  data-black-overlay="6">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="header-btn pt--100">
                                    <a className="rn-btn" href="/blogs">
                                        <span><FiArrowLeft /> Return to Blogs</span>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center">
                                    <h2 className="title theme-gradient textUpper">OUR BLOG</h2>
                                    <p>Explore our blog section, where every article is a window into our passion for sharing valuable content with our readers. Start your journey now!</p>
                                    <p>Selected Category: <strong>{categoryMapping[this.props.match.params.category]}</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Breadcrump Area */}

                <div>
                    <div className="container">
                        <BlogCategoryT column="col-lg-2 col-md-3 col-sm-3 col-4" />
                    </div>
                </div>


                {/* Start Blog Area */}
                <div className="rn-blog-area ptb--120 bg_color--1">
                    <div className="container">
                    <div>
            {this.state.loading ? (
                <div className="darkModeShimmerGallery">
                    <ShimmerSimpleGallery card imageHeight={300} caption className="darkModeShimmerGallery" />
                </div>
            ) : (
             <Fragment>
                 <div className="row">
                    {displayData}
                    <div className="col-12">
                        <ReactPaginate
                            previousLabel={"« Previous"}
                            nextLabel={"Next »"}
                            pageCount={pageCount}
                            onPageChange={this.handlePageChange}
                            containerClassName={"pagination"}
                            previousLinkClassName={"previous-page"}
                            nextLinkClassName={"next-page"}
                            disabledClassName={"pagination-disabled"}
                            activeClassName={"pagination-active"}
                        />
                    </div>
                 </div>
             </Fragment>
             )}
             </div>
                        {/* <div className="row mt--20">
                            <div className="col-lg-12">
                                <Pagination />
                            </div>
                        </div> */}
                    </div>
                </div>
                {/* End Blog Area */}
                
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
export default Blog;
