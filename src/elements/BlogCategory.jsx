import React, { Component, Fragment } from "react";
import PageHelmet from "../component/common/Helmet";
// import Breadcrumb from "../elements/common/Breadcrumb";
// import Pagination from "../elements/common/Pagination";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";


import ReactPaginate from "react-paginate";
import axios from "axios";
// import dotenv from 'dotenv';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { ShimmerSimpleGallery } from "react-shimmer-effects";

const queryUrl = process.env.REACT_APP_QUERY_URL
const baseURL = process.env.REACT_APP_BASE_URL_POSTS_CATEGORY
const bearer = `Bearer ${process.env.REACT_APP_BEARER_TOKEN}`

const api = axios.create({
    baseURL: baseURL,
    headers: {'Authorization': bearer},
})

class Blog extends Component{
    constructor (props) {
        super(props)
        this.state = {
            blogs: [],
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
                            <h4 className="title textUpper"><a href={`/blogs/${blog.id}`}>{blog.title}</a></h4>
                        </div>
                    </div>
                </div>
            );
        });
        return(
            <div className="active-dark">
            <React.Fragment>
                <PageHelmet pageTitle='VERBUNG // Blogs' />

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
                {/* Start Breadcrump Area */}
                <div className="rn-page-title-area pt--120 pb--60"  data-black-overlay="6">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 className="title theme-gradient textUpper">OUR BLOG</h2>
                                    <p>Find our most recent blog articles below. Category: {this.props.match.params.category}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Breadcrump Area */}


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
