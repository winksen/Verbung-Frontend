import React, { Component ,Fragment } from "react";
// import BlogContent from "./BlogContent";
import axios from "axios";

const api = axios.create({
    //baseURL: `http://127.0.0.1:8000/api/posts`
    baseURL: `https://api.verbung.net/public/api/posts`
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
                                    <a href={`/blogs/${blog.id}`}>
                                        <img className="w-100" src={`${this.baseURL}/public/${blog.image5}`} alt="BLog Images"/>
                                        {/* <img className="w-100" src={`/assets/images/blog/blog-0${blog.imageid1}.jpg`} alt="Blog Images"/> */}
                                    </a>
                                </div>
                                <div className="content">
                                    <p className="blogtype">{blog.category}</p>
                                    <h4 className="title textUpper"><a href={`/blogs/${blog.id}`}>{blog.title}</a></h4>
                                    <div className="blog-btn">
                                        <a className="rn-btn text-white" href={`/blogs/${blog.id}`}>Read More</a>
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