import React, { Component } from "react";
import ContactForm from "./ContactForm";

class ContactTwo extends Component {
    render(){
        return(
            <div className="contact-form--1">
                <div className="container">
                    <div className="row row--35 align-items-start">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="section-title text-left mb--50">
                                <h2 className="title textUpper">Contact Us.</h2>
                                <p className="description">Give us a call, visit, or email to let us know how we can help grow your business!</p>
                            </div>
                            <div className="form-wrapper contact-form--1">
                                <ContactForm />
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2">
                            <div className="thumbnail mb_md--30 mb_sm--30">
                                <img src="/assets/images/about/phone.png" alt="Phone"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ContactTwo;