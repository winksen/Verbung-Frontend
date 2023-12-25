import React, { useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { loadLanguageFromLocalStorage } from '../../dark/LanguageHelper';
import NewsLetterForm from "./NewsLetterForm";

function NewsLetterOne(props){
    const { t } = useTranslation();
    useEffect(() => {
        loadLanguageFromLocalStorage();
    }, []);
        return(
            <div className="contact-form--1">
                <div className="container">
                    <div className="row row--35 align-items-start">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="section-title text-left mb--50">
                                <h2 className="title textUpper">{t("subscription_form")}</h2>
                                <p className="description">{t("subscription_form_description")}</p>
                            </div>
                            <div className="form-wrapper contact-form--1">
                                <NewsLetterForm />
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2">
                            <div className="thumbnail mb_md--30 mb_sm--30">
                                <img src="/assets/images/about/newsletter.webp" alt="NewsLetter"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}
export default NewsLetterOne;