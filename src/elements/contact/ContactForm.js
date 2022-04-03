import React , {useState} from 'react';
import emailjs from 'emailjs-com';

const Result = () => {
    return (
        <p className="success-message">Your Message has been successfully sent. I will contact you soon.</p>
    )
}
function ContactForm({props}) {
    const [ result,showresult ] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
        .sendForm(
            'service_p4x3hv8', 
            'template_jgfr42f', 
            e.target, 
            'user_jrfTH2e0Ely35ZCVFdT9S'
        )
        .then((result) => {
            console.log(result.text);
            }, 
            (error) => {
                console.log(error.text);
            }
        );
        e.target.reset();
        showresult(true);
    };

    setTimeout(() => {
        showresult(false);
    }, 5000);

    return (
        <form className='contact-form--1' action="" onSubmit={sendEmail}>
            <div className="rnform-group">
                <input className='textInputField'
                type="text"
                name="fullname"
                placeholder="Your Name"
                required
                />
            </div>

            <div className="rn-form-group">
                <input className='textInputField'
                type="email"
                name="email"
                placeholder="Your Email"
                required
                />
            </div>

            <div className="rn-form-group">
                <input className='textInputField'
                type="text"
                name="phone"
                placeholder="Phone Number"
                required
                />
            </div>

            <div className="rn-form-group">
                <input className='textInputField'
                type="text"
                name="subject"
                placeholder="Subject"
                required
                />
            </div>
            
            <div className="rn-form-group">
                <textarea className='textInputField'
                name="message"
                placeholder="Your Message"
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
        </form>
    )
}
export default ContactForm;
