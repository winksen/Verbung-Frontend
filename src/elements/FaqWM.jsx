import React, { useState, useEffect } from "react";
import { loadLanguageFromLocalStorage } from '../dark/LanguageHelper';
import { useTranslation } from "react-i18next";
import PageHelmet from "../component/common/Helmet";
import { FiUsers , FiMonitor ,FiChevronUp, FiMaximize } from "react-icons/fi";
import ScrollToTop from 'react-scroll-up';
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import axios from 'axios';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton,
} from 'react-accessible-accordion';

const queryUrl = process.env.REACT_APP_QUERY_URL;
const baseURL = process.env.REACT_APP_BASE_URL_QUESTIONS;
const bearer = `Bearer ${process.env.REACT_APP_BEARER_TOKEN}`;

const api = axios.create({
  baseURL: baseURL,
  headers: { 'Authorization': bearer },
});

const FaqDM = () => {
    const { t } = useTranslation();
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        loadLanguageFromLocalStorage();
        fetchData();
    }, []);
    const fetchData = () => {
        api.get(`/category/3`)
          .then((res) => {
            setQuestions(res.data);
          })
          .catch((error) => {
            console.error(error);
          });
      };
      const displayQuestions = questions;
        console.log(displayQuestions);
        return(
            <div className="active-dark">
                <React.Fragment>
                <PageHelmet pageTitle="VERBUNG | FAQs" />
                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

                {/* Start Service Area */}
                <br /><br /><br /><br />
                <div className="service-area pt--120 pb--60 bg_color--5" id="VI">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    <h1 className="textUpper">{t("webmobile")}</h1>
                                    <p>{t("faq_webmobile_description")}</p>
                                    <h3 className="title theme-gradient">•</h3>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 offset-lg-2">
                                    <div className="faq-area">
                                        <Accordion className="accodion-style--1" preExpanded={'0'}>
                                            {displayQuestions.map((question , index) => (
                                                <div className="" key={index}>
                                                    <AccordionItem >
                                                        <AccordionItemHeading>
                                                            <AccordionItemButton>
                                                                {question.question}
                                                            </AccordionItemButton>
                                                        </AccordionItemHeading>
                                                        <AccordionItemPanel>
                                                            <p>{question.answer}</p>
                                                        </AccordionItemPanel>
                                                    </AccordionItem>
                                                </div>
                                            ))}
                                        </Accordion>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* End Service Area */}

                {/* Start Other Service Area */}
                <div className="service-area ptb--60 bg_color--1" id="VI">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center mb--30">
                                    <h2 className="textUpper">{t("faq_other")}</h2>
                                    <p>{t("faq_other_check")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="row service-one-wrapper">
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                <a className="text-center" href="/faq/digitalmarketing">
                                    <div className="service service__style--2">
                                        <div className="icon">
                                            <FiMonitor />
                                        </div>
                                        <div className="content">
                                            <h3 className="title textUpper">{t("digitalmarketing")}</h3>
                                            <p>{t("faq_digitalmarketing_description")}</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                <a className="text-center" href="/faq/visualidentity">
                                    <div className="service service__style--2">
                                        <div className="icon">
                                            <FiMaximize />
                                        </div>
                                        <div className="content">
                                            <h3 className="title textUpper">{t("visualidentity")}</h3>
                                            <p>{t("faq_visualidentity_description")}</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                <a className="text-center" href="/faq/pressrelation">
                                    <div className="service service__style--2">
                                        <div className="icon">
                                            <FiUsers />
                                        </div>
                                        <div className="content">
                                            <h3 className="title textUpper">{t("pressrelation")}</h3>
                                            <p>{t("faq_pressrelation_description")}</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Other Service Area */}

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
export default FaqDM;