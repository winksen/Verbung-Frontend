import React, { useEffect } from 'react';
import {useState} from 'react';
import { useTranslation } from 'react-i18next';
import { loadLanguageFromLocalStorage } from '../../dark/LanguageHelper';
import axios from 'axios';

const INITIAL = {
    first_name: "",
    last_name: "",
    email: "",
    cat_1: "1",
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
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const { t } = useTranslation();
    useEffect(() => {
        loadLanguageFromLocalStorage();
    }, []);
  
    function handleSubmit(e) {
      e.preventDefault();
  
      setLoading(true);
      setSubscription(null);
  
      // REPLACE WITH DYNAMIC TOKEN LATER
      // axios.post(url, data, { headers: { 'Authorization': `Basic ${token}` } })
      axios.post(url, data, { headers: { 'Authorization': `Bearer ${token}` } })
        .then(res => {
          setData(res.data);
          setSubscription(res.subscription);
          showResult(true);
          setSubmitted(true);
        })
        .catch(err => {
          setSubscription(err.subscription);
        })
        .finally(() => {
          setLoading(false); // Set loading to false when the request is complete
        });
    }
  
    function handleChange(e) {
      const { name, value, type, checked } = e.target;
      // Check if the input element is a checkbox
      if (type === 'checkbox') {
        setData({ ...data, [name]: checked ? '1' : '0' });
      } else {
        setData({ ...data, [name]: value });
      }
    }

    function handleReset() {
      setSubscription(null);
      showResult(false);
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
              <input type="checkbox" name="cat_1" id="cat_1" value={data.cat_1} onChange={handleChange} checked disabled required/><label for="cat_1">Offers</label>
              <input type="checkbox" name="cat_2" id="cat_2" value={data.cat_2} onChange={handleChange} /><label for="cat_2">Blog</label>
              <input type="checkbox" name="cat_3" id="cat_3" value={data.cat_3} onChange={handleChange} /><label for="cat_3">Events</label>
              <input type="checkbox" name="cat_4" id="cat_4" value={data.cat_4} onChange={handleChange} /><label for="cat_4">Hiring</label>
            </div>

            <div className="rn-form-group">
              <button className="rn-button-style--2 btn-solid" type="submit" value="submit" name="submit" id="mc-embedded-subscribe" disabled={submitted}>
                {loading ? 'Loading...' : t('subscribe')}
              </button>
              {/* <button type="button" className="rn-button-style--2 btn-solid" onClick={handleReset}>
                {t('reset')}
              </button> */}
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