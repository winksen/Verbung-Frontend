import React, { useEffect } from 'react';
import {useState} from 'react';
import { useTranslation } from 'react-i18next';
import { loadLanguageFromLocalStorage } from '../../dark/LanguageHelper';
import axios from 'axios';

const INITIAL = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  }
  
  const MessageForm = () => {
    const url = process.env.REACT_APP_BASE_URL_BOOKINGS
    const token = process.env.REACT_APP_BEARER_TOKEN
    const [data, setData] = useState(INITIAL);
    const [message, setMessage] = useState(null);
    const [result, showResult ] = useState(false);

    const { t } = useTranslation();
    useEffect(() => {
        loadLanguageFromLocalStorage();
    }, []);
  
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
                placeholder={t("full_name")}
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
                placeholder={t("email")}
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
                placeholder={t("phone")}
                value={data.phone}
                onChange={handleChange}
                required
                />
            </div>

            <div className="rn-form-group">
                <input className='textInputField'
                id="date"
                type="date"
                name="date"
                placeholder={t("phone")}
                value={data.date}
                onChange={handleChange}
                required
                />
            </div>

            <div className="rn-form-group">
              <label hidden htmlFor="time">Time Slot:</label>
              <select className="textInputField"
              id="time"
              name="time"
              value={data.time}
              onChange={handleChange}
              required
              >
                <option value="" disabled>
                  Select Time Slot
                </option>
                <option value="09:00">09:00 AM</option>
                <option value="10:00">10:00 AM</option>
                {/* Add more time slots as needed */}
              </select>
            </div>
            
            <div className="rn-form-group">
                <textarea className='textInputField'
                id="message"
                name="message"
                placeholder={t("message")}
                value={data.message}
                onChange={handleChange}
                required
                >
                </textarea>
            </div>

            <div className="rn-form-group">
                <button className="rn-button-style--2 btn-solid" type="submit" value="submit" name="submit" id="mc-embedded-subscribe">{t("submit")}</button>
            </div> 

            <div className="rn-form-group">
                {result ? <p className="success-message">{t("contact_success")}</p> : null}
            </div>
            <div className="rn-form-group">
                {message && <p className="error-message">{t("contact_error")}</p>}
            </div>
          </form>
    );
  };
  
  export default MessageForm;