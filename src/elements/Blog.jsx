import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
// import Breadcrumb from "../elements/common/Breadcrumb";
// import Pagination from "../elements/common/Pagination";
import BlogList from "../elements/blog/BlogList";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import BlogCategoryT from "./blog/BlogCategoryT";

class Blog extends Component{
    render(){
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
                                    <p>Explore our blog section, where every article is a window into our passion for sharing valuable content with our readers. Start your journey now!</p>
                                    <p>You can now filter by Category.</p>
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
                        <BlogList />
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
