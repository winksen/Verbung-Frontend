// USED IMPORTS
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Scrollspy from 'react-scrollspy';
import ScrollToTop from 'react-scroll-up';

import axios from 'axios';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton,
} from 'react-accessible-accordion';
import './i18next';
import { loadLanguageFromLocalStorage } from './LanguageHelper';
import { changeLanguage  } from './LanguageHelper';
import { useTranslation } from "react-i18next";

import { RiInstagramFill } from "react-icons/ri";
import { FiChevronUp , FiX , FiMenu, FiLink2 } from "react-icons/fi";
import { FaFacebookF , FaLinkedinIn , FaTwitter, FaGlobe, FaYoutube } from "react-icons/fa";
import { FiCast , FiMaximize , FiUsers , FiMonitor } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";

import SliderOne from "../component/slider/SliderOne";
import About from "../component/HomeLayout/homeOne/About";
import Footer from "../component/footer/Footer";
import NewsLetter from "../elements/NewsLetter";
import Helmet from "../component/common/Helmet";
import ServiceTwo from "../elements/service/ServiceTwo";
import { portfolioSlick2 } from "../page-demo/script";

import { styled } from '@mui/material/styles';
import { makeStyles } from "@material-ui/core/styles";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import BeatLoader from "react-spinners/BeatLoader";

// UNUSED IMPORTS
// import CounterOne from "../elements/counters/CounterTwo";
// import Testimonial from "../elements/Testimonial";
// import TeamOne from "../blocks/team/TeamOne";
// import Stack from '@mui/material/Stack';
// import Typography from '@mui/material/Typography';
// import Fade from 'react-reveal/Fade';
// import ReactCountryFlag from "react-country-flag";


  
// i18n.use(initReactI18next).init({
//     resources: {
//     en: { translation: translationsEn },
//     fr: { translation: translationsFr },
//     },
//     lng: "en",
//     fallbackLng: "en",
//     interpolation: { escapeValue: false },
// });

const PortfolioList2 = [
    {
        images: '01',
        title: 'INPT OLYMPICS XI',
        designation: 'Event • Visual Identity',
        view: 'behance',
        link: 'https://www.behance.net/gallery/112073013/INPT-Olympics-Visual-Identity',
        socialNetwork: [
            {
                icon: <FaLinkedinIn />,
                url: 'https://www.linkedin.com/company/olympiades-inpt'
            },
        ]
    },
    {
        images: '02',
        title: 'A2S JUNIOR ENTREPRISE',
        designation: 'Brand • Visual Identity, Stationary',
        view: 'behance',
        link: 'https://www.behance.net/gallery/104515389/A2S-Visual-Identity',
        socialNetwork: [
            {
                icon: <FaFacebookF />,
                url: 'http://facebook.com/A2S.JE'
            },
            {
                icon: <FaLinkedinIn />,
                url: 'http://linkedin.com/in/a2sinpt/'
            },
            {
                icon: <RiInstagramFill />,
                url: 'http://instagram.com/a2s_junior_entreprise'
            },
        ]
    },
    {
        images: '03',
        title: 'PANTOFIT',
        designation: 'Brand • Visual Identity, UI/UX',
        view: 'behance',
        link: 'https://www.behance.net/gallery/120757181/PantoFit-Visual-Identity',
        socialNetwork: [
            {
                icon: <FaFacebookF />,
                url: 'https://facebook.com/pantofit1'
            },
            {
                icon: <FaLinkedinIn />,
                url: 'https://linkedin.com/company/pantofit/'
            },
            {
                icon: <FaGlobe />,
                url: 'https://www.pantofit.com/'
            },
        ]
    },
    {
        images: '04',
        title: 'DETAFOUR',
        designation: 'Brand • UI/UX, Website',
        view: 'website',
        notif: 'Project on Behance coming soon!',
        link: 'https://www.detafour.com',
        socialNetwork: [
            {
                icon: <FaYoutube />,
                url: 'https://www.youtube.com/channel/UCk0_9-y_I8IdrNUMrF5oekA'
            },
            {
                icon: <FaFacebookF />,
                url: 'https://www.facebook.com/detafour'
            },
            {
                icon: <RiInstagramFill />,
                url: 'https://www.instagram.com/m55economie/'
            },
            {
                icon: <FaTwitter />,
                url: 'https://mobile.twitter.com/detafour_ar'
            },
        ]
    },
    {
        images: '05',
        title: 'CORAIL',
        designation: 'Brand • Visual Identity, UI/UX, Website',
        view: 'website',
        link: 'https://corail.co.ma',
        socialNetwork: [
            {
                icon: <FaFacebookF />,
                url: 'https://www.facebook.com/getCorail'
            },
            {
                icon: <RiInstagramFill />,
                url: 'https://www.instagram.com/corail/'
            },
            {
                icon: <FaTwitter />,
                url: 'https://twitter.com/corail_bank'
            },
            {
                icon: <FaYoutube />,
                url: 'https://www.youtube.com/channel/UC0t8rqO4uq-6sYO8NMa5JOw'
            },
            {
                icon: <FaLinkedinIn />,
                url: 'https://www.linkedin.com/company/corail/'
            },
        ]
    },
    {
        images: '06',
        title: 'DIGITAL JOB FAIR',
        designation: 'Event • Press Relation',
        view: 'pressbook',
        link: 'https://drive.google.com/file/d/1KYdSUhvhZk4SmT97uRaO2l37hD4FMT1o/view?usp=sharing',
        socialNetwork: [
            {
                icon: <FaFacebookF />,
                url: 'https://www.facebook.com/djfinpt'
            },
        ]
    },
]

const featureList = [
    {
        icon:  <FiCast />,
        title: 'digitalmarketing',
        link: '/faq/digitalmarketing',
        subtitle: 'faq_digitalmarketing_description'
    },
    {
        icon: <FiMaximize />,
        title: 'visualidentity',
        link: '/faq/visualidentity',
        subtitle: 'faq_visualidentity_description'
    },
    {
        icon: <FiMonitor />,
        title: 'webmobile',
        link: '/faq/webmobile',
        subtitle: 'faq_webmobile_description'
    },
    {
        icon: <FiUsers />,
        title: 'pressrelation',
        link: '/faq/pressrelation',
        subtitle: 'faq_pressrelation_description'
    },
]

const queryUrl = process.env.REACT_APP_QUERY_URL;
const baseURL = process.env.REACT_APP_BASE_URL_QUESTIONS;
const bearer = `Bearer ${process.env.REACT_APP_BEARER_TOKEN}`;

const api = axios.create({
  baseURL: baseURL,
  headers: { 'Authorization': bearer },
});

const categoryMapping = {
  '0': 'General',
  '1': 'Digital Marketing',
};


function MainDemo(props){
    // constructor(props) {
    //     super(props);
    //     this.menuTrigger = this.menuTrigger.bind(this);
    //     this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
    //     this.stickyHeader = this.stickyHeader.bind(this);

    //    //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
    //     window.addEventListener('load', function() {
    //         console.log('All assets are loaded');
    //     })
    // }
    const { t } = useTranslation();
    // const onChange = (event) => {
    //     i18n.changeLanguage(event.target.value);
    // };
    const handleLanguageChange = (event) => {
        const newLanguage = event.target.value;
        changeLanguage(newLanguage);
        setSelectedLanguage(newLanguage);
    };
    const [selectedLanguage, setSelectedLanguage] = useState('en');
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        const savedLanguage = loadLanguageFromLocalStorage();
        if (savedLanguage) { setSelectedLanguage(savedLanguage); }
        fetchData();
    }, []);

    const fetchData = () => {
        api.get(`/category/0`)
          .then((res) => {
            setQuestions(res.data);
          })
          .catch((error) => {
            console.error(error);
          });
      };

    const menuTrigger = () => {
        document.querySelector('.header-wrapper').classList.toggle('menu-open')
    }
    const CLoseMenuTrigger = () => {
        document.querySelector('.header-wrapper').classList.remove('menu-open')
    }
    // const stickyHeader = () => {}

        const [loading, setLoading] = useState(true);
        window.onload = () => {
            setLoading(false);
          };
        
        // useEffect(() => {
        //     setLoading(true);
        //     setTimeout(() => {
        //         setLoading(false);
        //     }, 2000)
        // }, []);
        // const [playAnimation, setPlayAnimation] = useState(false);
        // useEffect(() => {
        //     const onPageLoad = () => {
        //         setLoading(true);
        //     };
            // document.onreadystatechange = () => {
            //     setLoading(document.readyState === "complete");
            // }
        //     if (document.readyState == 'complete') {
        //         setLoading(false);
        //         console.log("here1");
        //     }
        //     else {
        //         console.log("here2");
        //         window.addEventListener('load', onPageLoad);
        //         return () => window.removeEventListener('load', onPageLoad);
                
        //     }
        // }, []);
        // useEffect(() => {
        //     // Here you can access your API to get the Network state instead on document ready
        //     console.log(document.readyState == 'complete');
        //     setLoading(document.readyState == 'complete');
        //   }, [])

        // useEffect(() => {
        //     const onPageLoad = () => {
        //       setPlayAnimation(true);
        //     };
        
        //     // Check if the page has already loaded
        //     if (document.readyState === 'complete') {
        //         setPlayAnimation(false);
        //     } else {
        //       window.addEventListener('load', onPageLoad);
        //       // Remove the event listener when component unmounts
        //       return () => window.removeEventListener('load', onPageLoad);
        //     }
        //   }, []);

        const setDark = () => {
            localStorage.setItem("theme", "dark");
            document.documentElement.setAttribute("data-theme", "dark");
          };
          
          const setLight = () => {
            localStorage.setItem("theme", "light");
            document.documentElement.setAttribute("data-theme", "light");
          };
          
          const storedTheme = localStorage.getItem("theme");
          const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
          const defaultDark =storedTheme === "dark" || (storedTheme === null && prefersDark);
          
          if (defaultDark) {
            setDark();
          }
          
          const toggleTheme: ChangeEventHandler<HTMLInputElement> = (e) => {
            if (e.target.checked) {
              setDark();
            } else {
              setLight();
            }
          };

          const MaterialUISwitch = styled(Switch)(({ theme }) => ({
            width: 62,
            height: 34,
            padding: 7,
            '& .MuiSwitch-switchBase': {
              margin: 1,
              padding: 0,
              transform: 'translateX(6px)',
              '&.Mui-checked': {
                color: '#fff',
                transform: 'translateX(22px)',
                '& .MuiSwitch-thumb:before': {
                  backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                    '#fff',
                  )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
                },
                '& + .MuiSwitch-track': {
                  opacity: 1,
                  backgroundColor: theme.palette.mode === 'dark' ? '#aab4be' : '#aab4be',
                },
              },
            },
            '& .MuiSwitch-thumb': {
              backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#1C9D79',
              width: 32,
              height: 32,
              '&:before': {
                content: "''",
                position: 'absolute',
                width: '100%',
                height: '100%',
                left: 0,
                top: 0,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                  '#fff',
                )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
              },
            },
            '& .MuiSwitch-track': {
              opacity: 1,
              backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
              borderRadius: 20 / 2,
            },
          }));

          const useStyles = makeStyles({
            container: {
              marginTop: "10%",
            },
            formControl: {
              minWidth: 120,
            },
            label: {
              color: "darkred",
              "&.Mui-focused": {
                color: "darkred",
              },
            },
            select: {
              "&:after": {
                borderBottomColor: "#ccc",
              },
              "& .MuiSvgIcon-root": {
                color: "darkred",
              },
            },
          });
            
          

        window.addEventListener('scroll', function() {
            var value = window.scrollY;
            if (value > 50) {
                document.querySelector('.header--fixed').classList.add('sticky')
            }else{
                document.querySelector('.header--fixed').classList.remove('sticky')
            }
        });

        var elements = document.querySelectorAll('.has-droupdown > a');
        for(var i in elements) {
            if(elements.hasOwnProperty(i)) {
                elements[i].onclick = function() {
                    this.parentElement.querySelector('.submenu').classList.toggle("active");
                    this.classList.toggle("open");
                }
            }
        }

        const borderColor = '#4CBD94';
        const hoverBorderColor = '#1C9D79';

        const classes = useStyles();

        const displayQuestions = questions;
        console.log(displayQuestions);
        return(
            <div className="active-dark">
                {/* {
                    loading ?
                    ( <div className="loader">
                        <BeatLoader  color="#4CBD94" loading={loading} margin={10} size={30} aria-label="Loading Spinner" data-testid="loader"/>
                    </div> )
                    :
                    ( */}
                    <div className="active-dark">
                    <Helmet pageTitle="VERBUNG | Scale Now" />

                    {/* Start Header Area  */}
                    <header className="header-area formobile-menu header--fixed default-color">
                        <div className="header-wrapper" id="header-wrapper">
                            <div className="header-left">
                                <div className="logo">
                                    <a href="/">
                                        <img className="logo-1" src="/assets/images/logo/logo.webp" alt="Verbung"/>
                                        <img className="logo-2" src="/assets/images/logo/logoFull.webp" alt="Logo Images"/>
                                    </a>
                                </div>
                            </div>
                            <div className="header-right">
                                <nav className="mainmenunav d-lg-block">
                                    <Scrollspy className="mainmenu" items={['home','about','services','work','newsletter','faq','blog']} currentClassName="is-current" offset={-200}>
                                        <li><a href="#home">{t("home")}</a></li>
                                        <li><a href="#about">{t("about")}</a></li>
                                        <li><a href="#services">Services</a></li>
                                        <li><a href="#work">{t("work")}</a></li>
                                        <li><a href="#newsletter">NewsLetter</a></li>
                                        <li><a href="#faq">FAQ</a></li>
                                        <li><a href="/blogs">Blog <FiLink2 /></a></li>
                                        <li><a href="/booking">Booking <FiLink2 /></a></li>
                                        <li className="dark-mode-switch">
                                            <FormGroup>
                                                <FormControlLabel control={<MaterialUISwitch sx={{ m: 1 }}  defaultChecked={defaultDark} />} label="" onChange={toggleTheme} defaultChecked={defaultDark}/>
                                            </FormGroup>
                                        </li>
                                        <li>
                                            <FormControl variant="standard" sx={{ m: 1, minWidth: 120, color: '#ccc' }}>
                                                <InputLabel className="language-selector-text" id="demo-simple-select-standard-label">{t("language")}</InputLabel>
                                                <Select
                                                labelId="demo-simple-select-standard-label"
                                                id="demo-simple-select-standard"
                                                value={selectedLanguage}
                                                onChange={handleLanguageChange}
                                                label="Language"
                                                className="language-selector"
                                                sx={{
                                                    '&:before': {
                                                    borderColor: borderColor,
                                                    },
                                                    '&:after': {
                                                    borderColor: borderColor,
                                                    },
                                                    '&:hover:not(.Mui-disabled):before': {
                                                    borderColor: hoverBorderColor,
                                                    },
                                                }}
                                                >
                                                <MenuItem value="en">{t("en")}</MenuItem>
                                                <MenuItem value="fr">{t("fr")}</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </li>
                                    </Scrollspy>
                                </nav>
                                

                                <div className="header-btn">
                                    <a className="rn-btn title" href="/packs">
                                        <span className="title">PACKS</span>
                                    </a>
                                </div>
                                        
                                
                                {/* Start Humberger Menu  */}
                                <div className="humberger-menu d-block d-lg-none pl--20">
                                    <span onClick={menuTrigger} className="menutrigger text-white"><FiMenu /></span>
                                </div>
                                {/* End Humberger Menu  */}
                                <div className="close-menu d-block d-lg-none">
                                    <span onClick={CLoseMenuTrigger} className="closeTrigger"><FiX /></span>
                                </div>
                            </div>
                        </div>
                    </header>
                    {/* End Header Area  */}

                    {/* Start Slider Area   */}
                    <div className="slider-wrapper gradient-animated" id="home">
                        <SliderOne parentFunction={t}/>
                    </div>
                    {/* End Slider Area   */} 

                    {/* Start About Area */}
                    <div className="about-area about-position-top bg_color--1" id="about">
                        <About />
                    </div>
                    {/* End About Area */}

                    {/* Start Service Area  */}
                    <div className="service-area ptb--80 bg_image bg_image--3" id="services">
                        <div className="container">
                            <ServiceTwo />
                        </div>
                    </div>
                    {/* End Service Area  */}
                    
                    {/* Start Portfolio Area */}
                    <div className="portfolio-area ptb--120 bg_color--1" id="work">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-center mb--30">
                                        <h2 className="textUpper">{t("our_work_title")}</h2>
                                        <p>{t("our_work_description")}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="wrapper portfolio-sacousel-inner mb--55">
                            <div className="mt--30 mt_sm--30">
                                <Slider {...portfolioSlick2}>
                                    {PortfolioList2.map((value , index) => (
                                        <div className="" key={index}>
                                            <div className={`team`}>
                                                <div className="thumbnail">
                                                    {/* <LazyLoadImage alt="Project" effect="blur" src={`/assets/images/projects/project-${value.images}.jpg`}/> */}
                                                    <img src={`/assets/images/projects/project-${value.images}.webp`} alt="Project"/>
                                                </div>
                                                <div className="content">
                                                    <h4 className="title">{value.title}</h4>
                                                    <p className="designation">{value.designation}</p>
                                                    {/* <p className="designation">{value.notif}</p>  */}
                                                    <div className="portfolio-button">
                                                        <a className="rn-btn btn-work" href={value.link} target="_blank" rel="noreferrer noopener">{t(value.view)}</a>
                                                    </div>
                                                </div>
                                                <ul className="social-icon" >
                                                    {value.socialNetwork.map((social, index) =>
                                                        <li key={index}><a href={`${social.url}`} target="_blank" rel="noreferrer noopener">{social.icon}</a></li>
                                                    )}
                                                </ul>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </div>
                    {/* End Portfolio Area */}

                    {/* Start NewsLetter Style  */}
                    <div id="newsletter">
                        <NewsLetter />
                    </div>
                    {/* End NewsLetter Style  */}

                    {/* Start Faq Area */}
                    <div className="pv-feaq-area bg_color--3 ptb--120 active-darkless" id="faq">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 offset-lg-2">
                                    <div className="section-title text-left pb--30">
                                        <p>{t("faq_check")}</p>
                                        <h2 className="theme-gradient textUpper">{t("faq_check_question")}</h2>
                                    </div>
                                </div>
                            </div>
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
                        <br />
                        <div className="wrapper plr--120">
                            <div className="row">
                                {/* Start Single Feature  */}
                                {featureList.map((value, i) => (
                                    <div className="col-lg-6 col-xl-3 col-md-6 col-sm-6 col-12" key={i}>
                                        <a className="text-center" href={`${value.link}`}>
                                            <div className="service service__style--2">
                                                <div className="icon">
                                                    {value.icon}
                                                </div>
                                                <div className="content">
                                                    <h3 className="title textUpper">{t(value.title)}</h3>
                                                    <p className="subtitle">{t(value.subtitle)}</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                ))}
                                {/* End Single Feature  */}
                            </div>
                        </div>     
                    </div>
                     {/* Start Faq Area */}

                     {/* Start Calendly Style  */}
                     {/* <div className="pv-feaq-area bg_color--3 ptb--120 active-darkless" id="faq">
                        <Calendly />
                    </div> */}
                    {/* End Calendly Style  */}

                    {/* Start Footer Style  */}
                    <Footer />
                    {/* End Footer Style  */}

                    {/* Start Back To Top */}
                    <div className="backto-top">
                        <ScrollToTop showUnder={160}>
                            <FiChevronUp />
                        </ScrollToTop>
                    </div>
                    {/* End Back To Top */}
                    </div>
                    {/* )
                } */}
            </div>

        )
    
}

export default MainDemo;