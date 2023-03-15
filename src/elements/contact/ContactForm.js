import React from 'react';
import {useState} from 'react'
import axios from 'axios';


const Result = () => {
    return (
        <p className="success-message">Your Message has been successfully sent! We will contact you soon.</p>
    )
}

const Error = () => {
    return (
        <p className="error-message">An Error occured, please try again later, or contact us at contact@verbung.net</p>
    )
}

const INITIAL = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  }
  
  const MessageForm = () => {
    const url = process.env.REACT_APP_BASE_URL_MESSAGES
    const token = process.env.REACT_APP_BEARER_TOKEN
    const [data, setData] = useState(INITIAL);
    const [message, setMessage] = useState(null);
    const [result, showResult ] = useState(false);
  
    function handleSubmit(e) {
      e.preventDefault();
  
      setMessage(null);
  
      // REPLACE WITH DYNAMIC TOKEN LATER
      // axios.post(url, data, { headers: { 'Authorization': `Basic ${token}` } })
      axios.post(url, data, { headers: { 'Authorization': `Bearer ${token}` } })
        .then(res => {
          setData(res.data);
          setMessage(res.message);
          showResult(true);
        })
        .catch(err => {
          setMessage(err.message);
        })
    }
  
    function handleChange(e) {
      const { id, value } = e.target; //destructuring 
      setData({...data, [id]:value})
    }
  
    return (
          <form className="contact-form--1" onSubmit={handleSubmit}>
            <div className="rn-form-group">
                <input className='textInputField'
                id="name"
                type="text"
                name="name"
                placeholder="Full Name"
                value={data.name}
                onChange={handleChange}
                required
                />
            </div>

            <div className="rn-form-group">
                <input className='textInputField'
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                value={data.email}
                onChange={handleChange}
                required
                />
            </div>

            <div className="rn-form-group">
                <input className='textInputField'
                id="phone"
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={data.phone}
                onChange={handleChange}
                required
                />
            </div>

            <div className="rn-form-group">
                <input className='textInputField'
                id="subject"
                type="text"
                name="subject"
                placeholder="Subject"
                value={data.subject}
                onChange={handleChange}
                required
                />
            </div>
            
            <div className="rn-form-group">
                <textarea className='textInputField'
                id="message"
                name="message"
                placeholder="Your Message"
                value={data.message}
                onChange={handleChange}
                required
                >
                </textarea>
            </div>

            <div className="rn-form-group">
                <button className="rn-button-style--2 btn-solid" type="submit" value="submit" name="submit" id="mc-embedded-subscribe">Submit Now</button>
            </div> 

            <div className="rn-form-group">
                {result ? <Result /> : null}
            </div>
            <div className="rn-form-group">
                {message && <Error />}
            </div>
          </form>
    );
  };
  
  export default MessageForm;