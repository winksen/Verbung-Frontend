import React from 'react';
// import emailjs from 'emailjs-com';
import axios from 'axios';

// const Result = () => {
//     return (
//         <p className="success-message">Your Message has been successfully sent. We will contact you soon.</p>
//     )
// }
function ContactForm({props}) {
    const [formValue, setformValue] = React.useState({
        fullname: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });
    
    const handleSubmit = async() => {
        // store the states in the form data
        const messageFormData = new FormData();
        messageFormData.append("name", formValue.fullname)
        messageFormData.append("email", formValue.email)
        messageFormData.append("phone", formValue.phone)
        messageFormData.append("subject", formValue.subject)
        messageFormData.append("message", formValue.message)
        
        try {
          // make axios post request
          const response = await axios({
            method: "post",
            // url: "http://127.0.0.1:8000/api/messages",
            url: "https://api.verbung.net/public/api/messages",
            data: messageFormData,
            headers: { "Content-Type": "multipart/form-data" },
          });
          console.log(response);
        } catch(error) {
          console.log(error)
        }
      }
    
    const handleChange = (event) => {
        setformValue({
            ...formValue,
            [event.target.name]: event.target.value
        });
        // console.log(messageFormData);
    }

    // const [ result,showresult ] = useState(false);

    // const sendEmail = (e) => {
    //     e.preventDefault();
    //     emailjs
    //     .sendForm(
    //         'service_o9an4x4',
    //         'template_r8wkhsp', 
    //         e.target, 
    //         'kvWfZqb0L2Py660lw'
    //     )
    //     .then((result) => {
    //         console.log(result.text);
    //         }, 
    //         (error) => {
    //             console.log(error.text);
    //         }
    //     );
    //     e.target.reset();
    //     showresult(true);
    // };

    // setTimeout(() => {
    //     showresult(false);
    // }, 5000);

    return (
        <form className='contact-form--1' onSubmit={handleSubmit}>

            <div className="rn-form-group">
                <input className='textInputField'
                type="text"
                name="fullname"
                placeholder="Your Name"
                value={formValue.fullname}
                onChange={handleChange}
                required
                />
            </div>

            <div className="rn-form-group">
                <input className='textInputField'
                type="email"
                name="email"
                placeholder="Your Email"
                value={formValue.email}
                onChange={handleChange}
                required
                />
            </div>

            <div className="rn-form-group">
                <input className='textInputField'
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formValue.phone}
                onChange={handleChange}
                required
                />
            </div>

            <div className="rn-form-group">
                <input className='textInputField'
                type="text"
                name="subject"
                placeholder="Subject"
                value={formValue.subject}
                onChange={handleChange}
                required
                />
            </div>
            
            <div className="rn-form-group">
                <textarea className='textInputField'
                name="message"
                placeholder="Your Message"
                value={formValue.message}
                onChange={handleChange}
                required
                >
                </textarea>
            </div>

            <div className="rn-form-group">
                <button className="rn-button-style--2 btn-solid" type="submit" value="submit" name="submit" id="mc-embedded-subscribe">Submit Now</button>
            </div> 

            {/* <div className="rn-form-group">
                {result ? <Result /> : null}
            </div>  */}
        </form>
    )
}
export default ContactForm;
