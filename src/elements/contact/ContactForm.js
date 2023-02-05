import React from 'react';
import {useState} from 'react'
// import emailjs from 'emailjs-com';
import axios from 'axios';

// // const Result = () => {
// //     return (
// //         <p className="success-message">Your Message has been successfully sent. We will contact you soon.</p>
// //     )
// // }
// function ContactForm({props}) {
//     const [formValue, setformValue] = React.useState({
//         fullname: '',
//         email: '',
//         phone: '',
//         subject: '',
//         message: '',
//     });
    
//     const handleSubmit = async() => {
//         // store the states in the form data
//         const messageFormData = new FormData();
//         messageFormData.append("name", formValue.fullname)
//         messageFormData.append("email", formValue.email)
//         messageFormData.append("phone", formValue.phone)
//         messageFormData.append("subject", formValue.subject)
//         messageFormData.append("message", formValue.message)
        
//         try {
//           // make axios post request
//           const response = await axios({
//             method: "post",
//             // url: "http://127.0.0.1:8000/api/messages",
//             url: "https://api.verbung.net/public/api/messages",
//             data: messageFormData,
//             headers: { "Content-Type": "multipart/form-data" },
//           });
//           console.log(response);
//         } catch(error) {
//           console.log(error)
//         }
//       }
    
//     const handleChange = (event) => {
//         setformValue({
//             ...formValue,
//             [event.target.name]: event.target.value
//         });
//         // console.log(messageFormData);
//     }

//     // const [ result,showresult ] = useState(false);

//     // const sendEmail = (e) => {
//     //     e.preventDefault();
//     //     emailjs
//     //     .sendForm(
//     //         'service_o9an4x4',
//     //         'template_r8wkhsp', 
//     //         e.target, 
//     //         'kvWfZqb0L2Py660lw'
//     //     )
//     //     .then((result) => {
//     //         console.log(result.text);
//     //         }, 
//     //         (error) => {
//     //             console.log(error.text);
//     //         }
//     //     );
//     //     e.target.reset();
//     //     showresult(true);
//     // };

//     // setTimeout(() => {
//     //     showresult(false);
//     // }, 5000);

//     return (
//         <form className='contact-form--1' onSubmit={handleSubmit}>

            // <div className="rn-form-group">
            //     <input className='textInputField'
            //     type="text"
            //     name="fullname"
            //     placeholder="Your Name"
            //     value={formValue.fullname}
            //     onChange={handleChange}
            //     required
            //     />
            // </div>

            // <div className="rn-form-group">
            //     <input className='textInputField'
            //     type="email"
            //     name="email"
            //     placeholder="Your Email"
            //     value={formValue.email}
            //     onChange={handleChange}
            //     required
            //     />
            // </div>

            // <div className="rn-form-group">
            //     <input className='textInputField'
            //     type="text"
            //     name="phone"
            //     placeholder="Phone Number"
            //     value={formValue.phone}
            //     onChange={handleChange}
            //     required
            //     />
            // </div>

            // <div className="rn-form-group">
            //     <input className='textInputField'
            //     type="text"
            //     name="subject"
            //     placeholder="Subject"
            //     value={formValue.subject}
            //     onChange={handleChange}
            //     required
            //     />
            // </div>
            
            // <div className="rn-form-group">
            //     <textarea className='textInputField'
            //     name="message"
            //     placeholder="Your Message"
            //     value={formValue.message}
            //     onChange={handleChange}
            //     required
            //     >
            //     </textarea>
            // </div>

            // <div className="rn-form-group">
            //     <button className="rn-button-style--2 btn-solid" type="submit" value="submit" name="submit" id="mc-embedded-subscribe">Submit Now</button>
            // </div> 

//             {/* <div className="rn-form-group">
//                 {result ? <Result /> : null}
//             </div>  */}
//         </form>
//     )
// }
// export default ContactForm;

const Result = () => {
    return (
        <p className="success-message">Your Message has been successfully sent! We will contact you soon.</p>
    )
}

const Error = () => {
    return (
        <p className="error-message">An Error occured, please try again later</p>
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
    const url = "https://api.verbung.net/public/api/messages"
    const [data, setData] = useState(INITIAL);
    const [message, setMessage] = useState(null);
    const [result, showResult ] = useState(false);
  
    function handleSubmit(e) {
      e.preventDefault();
  
      setMessage(null);
  
      axios.post(url, data)
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