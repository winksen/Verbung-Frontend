// USED IMPORTS
import React, { useState, useEffect, Suspense } from "react";
import Slider from "react-slick";
import Scrollspy from 'react-scrollspy';
import ScrollToTop from 'react-scroll-up';
import ReactCountryFlag from "react-country-flag";

import i18n from "i18next";
import './i18next';
import { loadLanguageFromLocalStorage } from './LanguageHelper';
import { changeLanguage  } from './LanguageHelper';
import { useTranslation, initReactI18next, Trans } from "react-i18next";

import { RiInstagramFill } from "react-icons/ri";
import { FiChevronUp , FiX , FiMenu } from "react-icons/fi";
import { FaFacebookF , FaLinkedinIn , FaTwitter, FaGlobe, FaYoutube } from "react-icons/fa";

import SliderOne from "../component/slider/SliderOne";
import About from "../component/HomeLayout/homeOne/About";
import Footer from "../component/footer/Footer";
import Helmet from "../component/common/Helmet";
import ServiceTwo from "../elements/service/ServiceTwo";
import { portfolioSlick2 } from "../page-demo/script";

import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import BeatLoader from "react-spinners/BeatLoader";

// UNUSED IMPORTS
// import CounterOne from "../elements/counters/CounterTwo";
// import Testimonial from "../elements/Testimonial";
// import TeamOne from "../blocks/team/TeamOne";
// import Stack from '@mui/material/Stack';
// import Typography from '@mui/material/Typography';
// import Fade from 'react-reveal/Fade';

const translationsEn = {
    home: "Home",
    about: "About",
    work: "Work",
    our_work_title: "Our Work",
    our_work_description: "We have a passionate team who puts their heart into what we do, so we would like to showcase you some of our work.",
    behance: "View on Behance",
    website: "View Website",
    pressbook: "View PressBook",
    scaleNow: "SCALE NOW.",
    inCreativity: "In Creativity",
    inMarketing: "In Marketing",
    inVisibility: "In Visibility",
    inCommunication: "In Communication",
    about_description: "At Verbung, we work hard to understand your business and digital goals, so we can develop creative, results-driven strategies to help you achieve them at all times. You know your brand better than anyone, so our experts listen carefully to your needs and take a tailored approach to better understand what convinces your target audience.",
    about_whoAreWe: "Who Are We",
    about_description2: "We are more than a typical communications agency; we are an agency of creative and strategic thinkers with brilliant minds working hand in hand with each client to achieve their digital business goals.",
    services_description: "We offer services from across the full marketing mix to a range of clients in both B2C and B2B environments.",
    digitalmarketing: "Digital Marketing",
    digitalmarketing_description: "We build ROI centric campaigns that will take your business to the next level.",
    visualidentity: "Visual Identity",
    visualidentity_description: "Good graphic design has the ability to connect with your audience and reach your business goals.",
    webmobile: "Web and Mobile",
    webmobile_description: "Your website is the first place your customers will look. It is, in essence, your first impression and your sales tool.",
    pressrelation: "Press Relation",
    pressrelation_description: "The best way to get your news in front of the journalists who matter.",
    language: "Language",
    en: "English",
    fr: "French",
    ready: "Ready for a new Adventure?",
    work_with_us: "WORK <br/> WITH US",
    contact_us: "Contact Us",
    quicklinks: "Quick Links",
    lets_talk: "Let's Talk",
    reach_out: "Reach Out",
  };
  
const translationsFr = {
    home: "Accueil",
    about: "A Propos",
    work: "Travail",
    our_work_title: "Notre Travail",
    our_work_description: "Nous avons une équipe passionnée qui met tout son cœur dans ce qu'elle fait, c'est pourquoi nous aimerions vous présenter quelques-unes de nos réalisations.",
    behance: "Voir sur Behance",
    website: "Voir Site Web",
    pressbook: "Voir Livre de Presse",
    scaleNow: "ECHELER MAINTENANT.",
    inCreativity: "En Créativité",
    inMarketing: "En Marketing",
    inVisibility: "En Visibilité",
    inCommunication: "En Communication",
    about_description: "Chez Verbung, nous travaillons dur pour comprendre vos objectifs commerciaux et numériques, afin de développer des stratégies créatives et axées sur les résultats pour vous aider à les atteindre à tout moment. Vous connaissez votre marque mieux que quiconque, c'est pourquoi nos experts écoutent attentivement vos besoins et adoptent une approche sur mesure pour mieux comprendre ce qui convainc votre public cible.",
    about_whoAreWe: "Qui Sommes-Nous",
    about_description2: "Nous sommes plus qu'une agence de communication classique ; nous sommes une agence de créatifs et de stratèges avec des esprits brillants qui travaillent main dans la main avec chaque client pour atteindre leurs objectifs commerciaux numériques.",
    services_description: "Nous proposons des services couvrant l'ensemble du marketing mix à un large éventail de clients dans des environnements B2C et B2B.",
    digitalmarketing: "Marketing Digital",
    digitalmarketing_description: "Nous créons des campagnes axées sur le retour sur investissement qui permettront à votre entreprise de passer à la vitesse supérieure.",
    visualidentity: "Identite Visuelle",
    visualidentity_description: "Une bonne conception graphique permet d'établir un lien avec votre public et d'atteindre vos objectifs commerciaux.",
    webmobile: "Web et Mobile",
    webmobile_description: "Votre site web est le premier endroit que vos clients consultent. C'est, par essence, votre première impression et votre outil de vente.",
    pressrelation: "Relation Presse",
    pressrelation_description: "La meilleure façon de présenter vos informations aux journalistes qui comptent.",
    language: "Langue",
    en: "Anglais",
    fr: "Français",
    ready: "Prêts pour une nouvelle aventure ?",
    work_with_us: "TRAVAILLER <br/> AVEC NOUS",
    contact_us: "Contactez-Nous",
    quicklinks: "Liens Rapides",
    lets_talk: "Discutons-En",
    reach_out: "Nous Joindre",
};
  
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

    useEffect(() => {
        const savedLanguage = loadLanguageFromLocalStorage();
        if (savedLanguage) {
        setSelectedLanguage(savedLanguage);
        }
    }, []);

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
        return(
            <div className="active-dark">
                {
                    loading ?
                    ( <div className="loader">
                        <BeatLoader  color="#4CBD94" loading={loading} margin={10} size={30} aria-label="Loading Spinner" data-testid="loader"/>
                    </div> )
                    :
                    (
                    <div className="active-dark">
                    <Helmet pageTitle="VERBUNG // Scale Now" />

                    {/* Start Header Area  */}
                    <header className="header-area formobile-menu header--fixed default-color">
                        <div className="header-wrapper" id="header-wrapper">
                            <div className="header-left">
                                <div className="logo">
                                    <a href="/">
                                        <img className="logo-1" src="/assets/images/logo/logo.png" alt="Verbung"/>
                                        <img className="logo-2" src="/assets/images/logo/logoFull.png" alt="Logo Images"/>
                                    </a>
                                </div>
                            </div>
                            <div className="header-right">
                                <nav className="mainmenunav d-lg-block">
                                    <Scrollspy className="mainmenu" items={['home','about','services','work','blog']} currentClassName="is-current" offset={-200}>
                                        <li><a href="#home">{t("home")}</a></li>
                                        <li><a href="#about">{t("about")}</a></li>
                                        <li><a href="#services">Services</a></li>
                                        <li><a href="#work">{t("work")}</a></li>
                                        <li><a href="/blogs">Blog</a></li>
                                        <li></li>
                                        <li className="dark-mode-switch">
                                            <FormGroup>
                                                <FormControlLabel control={<MaterialUISwitch sx={{ m: 1 }}  defaultChecked={defaultDark} />} label="" onChange={toggleTheme} defaultChecked={defaultDark}/>
                                            </FormGroup>
                                        </li>
                                        <li><a>
                                            <select className="rn-select title" name="language" value={selectedLanguage} onChange={handleLanguageChange}>
                                                <option value="en">{t("en")}</option>
                                                <option value="fr">{t("fr")}</option>
                                            </select>
                                            {/* <ReactCountryFlag countryCode="US" svg /> */}
                                        </a></li>
                                    </Scrollspy>
                                </nav>
                                {/* <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                                    <InputLabel id="language">{t("language")}</InputLabel>
                                    <Select labelId="language" id="language" onChange={onChange} label="Language">
                                        <MenuItem value="en">{t("en")}</MenuItem>
                                        <MenuItem value="fr">{t("fr")}</MenuItem>
                                    </Select>
                                </FormControl> */}
                                
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
                                                    <img src={`/assets/images/projects/project-${value.images}.jpg`} alt="Project"/>
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
                    )
                }
            </div>

        )
    
}

export default MainDemo;