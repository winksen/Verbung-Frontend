import React, { useEffect } from 'react';
import {useState} from 'react';
import { useTranslation } from 'react-i18next';
import { loadLanguageFromLocalStorage } from '../../dark/LanguageHelper';
import axios from 'axios';

const INITIAL = {
    first_name: "",
    last_name: "",
    email: "",
    cat_1: "0",
    cat_2: "0",
    cat_3: "0",
    cat_4: "0"
  }
  
  const NewsLetterForm = () => {
    const url = process.env.REACT_APP_BASE_URL_SUBSCRIPTIONS
    const token = process.env.REACT_APP_BEARER_TOKEN
    const [data, setData] = useState(INITIAL);
    const [subscription, setSubscription] = useState(null);
    const [result, showResult ] = useState(false);

    const { t } = useTranslation();
    useEffect(() => {
        loadLanguageFromLocalStorage();
    }, []);
  
    function handleSubmit(e) {
      e.preventDefault();
  
      setSubscription(null);
  
      // REPLACE WITH DYNAMIC TOKEN LATER
      // axios.post(url, data, { headers: { 'Authorization': `Basic ${token}` } })
      axios.post(url, data, { headers: { 'Authorization': `Bearer ${token}` } })
        .then(res => {
          setData(res.data);
          setSubscription(res.subscription);
          showResult(true);
        })
        .catch(err => {
          setSubscription(err.subscription);
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
                id="first_name"
                type="text"
                name="first_name"
                placeholder={t("first_name")}
                value={data.first_name}
                onChange={handleChange}
                required
                />
            </div>

            <div className="rn-form-group">
                <input className='textInputField'
                id="last_name"
                type="text"
                name="last_name"
                placeholder={t("last_name")}
                value={data.last_nameme}
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
              <input type="checkbox" id="switch" checked disabled required/><label for="switch">Offers</label>
              <input type="checkbox" id="switch1" /><label for="switch1">Blog</label>
              <input type="checkbox" id="switch2" /><label for="switch2">Events</label>
              <input type="checkbox" id="switch3" /><label for="switch3">Hiring</label>
            </div>

            <div className="rn-form-group">
                <input className='textInputField'
                id="cat_1"
                type="checkbox"
                name="Category 1"
                placeholder={t("email")}
                value={data.cat_1}
                onChange={handleChange}
                />
            </div>

            <div className="rn-form-group">
                <input className='textInputField'
                id="cat_2"
                type="checkbox"
                name="Category 2"
                placeholder={t("email")}
                value={data.cat_2}
                onChange={handleChange}
                />
            </div>

            <div className="rn-form-group">
                <input className='textInputField'
                id="cat_3"
                type="checkbox"
                name="Category 3"
                placeholder={t("email")}
                value={data.cat_3}
                onChange={handleChange}
                />
            </div>

            <div className="rn-form-group">
                <input className='textInputField'
                id="cat_4"
                type="checkbox"
                name="Category 4"
                placeholder={t("email")}
                value={data.cat_4}
                onChange={handleChange}
                />
            </div>

            <div className="rn-form-group">
                <button className="rn-button-style--2 btn-solid" type="submit" value="submit" name="submit" id="mc-embedded-subscribe">{t("subscribe")}</button>
            </div> 

            <div className="rn-form-group">
                {result ? <p className="success-message">{t("subscription_success")}</p> : null}
            </div>
            <div className="rn-form-group">
                {subscription && <p className="error-message">{t("subscription_error")}</p>}
            </div>
          </form>
    );
  };
  
  export default NewsLetterForm;