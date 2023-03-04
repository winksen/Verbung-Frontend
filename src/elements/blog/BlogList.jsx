import React, { Component, Fragment } from "react";
import axios from "axios";
import dotenv from 'dotenv';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

// dotenv.config();
const queryUrl = process.env.REACT_APP_QUERY_URL
const baseURL = process.env.REACT_APP_BASE_URL_POSTS
const bearer = `Bearer ${process.env.REACT_APP_BEARER_TOKEN}`

const api = axios.create({
    baseURL: baseURL,
    headers: {'Authorization': bearer},
})
class BLogList extends Component{
    constructor () {
        super()
        this.state = {
          blogs: []
        }
        api.get(`/`).then(res => {
            console.log(res.data)
            this.setState({ blogs: res.data})
        })
    }
    render() {
        return (
             <Fragment>
                 <div className="row">
                    {this.state.blogs.map((blog , i ) => (
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                            <div className="blog blog-style--1">
                                <div className="thumbnail">
                                    <a href={`/blogs_${blog.id}`}>
                                        <LazyLoadImage className="w-100" alt="" effect="blur" src={`${queryUrl}/${blog.image6}`} onError={({ currentTarget }) => {currentTarget.onerror = null; currentTarget.src="assets/images/blog/blog-thumbnail-default.png"; }} />
                                        {/* <img className="w-100" src={`/assets/images/blog/blog-0${blog.imageid1}.jpg`} alt="Blog Images"/> */}
                                    </a>
                                </div>
                                <div className="content">
                                    <p className="blogtype">{blog.category}</p>
                                    <h4 className="title textUpper"><a href={`/blogs_${blog.id}`}>{blog.title}</a></h4>
                                    <div className="blog-btn">
                                        <a className="rn-btn text-white" href={`/blogs_${blog.id}`}>Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                     ))}
                 </div>
             </Fragment>
        );
    }
}
export default BLogList;