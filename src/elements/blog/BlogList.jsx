import React, { Component, Fragment } from "react";
import ReactPaginate from "react-paginate";

import moment from 'moment';
import axios from "axios";
// import dotenv from 'dotenv';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { FiCalendar, FiMonitor } from "react-icons/fi";
import { BiBookContent, BiAnalyse, BiAt, BiSearch, BiSearchAlt, BiUserVoice, BiMobileAlt, BiWallet } from "react-icons/bi";
import { BiVector, BiIntersect, BiMessageEdit, BiNetworkChart, BiCaretRightCircle, BiCameraMovie, BiFile } from "react-icons/bi";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { ShimmerSimpleGallery } from "react-shimmer-effects";

// dotenv.config();
const queryUrl = process.env.REACT_APP_QUERY_URL
const baseURL = process.env.REACT_APP_BASE_URL_POSTS
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

class BLogList extends Component{
    constructor () {
        super()
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
        api.get(`?page=${this.state.pageNumber}`).then(res => {
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

    render() {
        const { blogs, pageCount } = this.state;
        const displayData = blogs.map((blog , i ) => {
            return (
                <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                    <div className="blog blog-style--1">
                        <div className="">
                            <a href={`/blogs/${blog.id}`}>
                                <LazyLoadImage className="w-100" alt="" effect="blur" src={`${queryUrl}${blog.image7}`} onError={({ currentTarget }) => {currentTarget.onerror = null; currentTarget.src="assets/images/blog/blog-thumbnail-default.png"; }} />
                                {/* <img className="w-100" src={`/assets/images/blog/blog-0${blog.imageid1}.jpg`} alt="Blog Images"/> */}
                            </a> 
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
        return (
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
        );
    }
}
export default BLogList;