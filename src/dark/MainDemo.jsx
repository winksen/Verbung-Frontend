import React, { Component , Fragment } from "react";
import Scrollspy from 'react-scrollspy';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp , FiX , FiMenu } from "react-icons/fi";
import { FaFacebookF , FaLinkedinIn , FaTwitter, FaGlobe, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import CounterOne from "../elements/counters/CounterTwo";
import Testimonial from "../elements/Testimonial";
import ServiceTwo from "../elements/service/ServiceTwo";
import SliderOne from "../component/slider/SliderOne";
import About from "../component/HomeLayout/homeOne/About";
import Footer from "../component/footer/Footer";
import Helmet from "../component/common/Helmet";
import TeamOne from "../blocks/team/TeamOne";
import Slider from "react-slick";
import { slickDot , portfolioSlick2 } from "../page-demo/script";


const SlideList = [
    {
        textPosition: 'text-center',
        category: '',
        title: 'SCALE NOW.',
        description: 'There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.',
        buttonText: 'Contact Us',
        buttonLink: '/contact'
    }
]

const PortfolioList2 = [
    {
        images: '01',
        title: 'INPT OLYMPICS XI',
        designation: 'Event • Visual Identity',
        view: 'View On Behance',
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
        view: 'View On Behance',
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
        view: 'View On Behance',
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
        view: 'View Wesbite',
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
        view: 'View Wesbite',
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
        images: '01',
        title: 'INPT OLYMPICS XI',
        designation: 'Event • Visual Identity',
        view: 'View On Behance',
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
        view: 'View On Behance',
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
        view: 'View On Behance',
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
]


const ServiceListOne = [
    {
        icon: "icon-01.png",
        title: 'Interior Design',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    {
        icon: "icon-02.png",
        title: 'Landcape Design',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    {
        icon: "icon-03.png",
        title: 'Home Interior',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    
]

class InteriorLanding extends Component{
    constructor(props) {
        super(props);
        this.menuTrigger = this.menuTrigger.bind(this);
        this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
        this.stickyHeader = this.stickyHeader.bind(this);

       //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
        window.addEventListener('load', function() {
            console.log('All assets are loaded');
        })
    }
    menuTrigger() {
        document.querySelector('.header-wrapper').classList.toggle('menu-open')
    }
    CLoseMenuTrigger() {
        document.querySelector('.header-wrapper').classList.remove('menu-open')
    }
    stickyHeader () {}
    render(){
        const setDark = () => {
            localStorage.setItem("theme", "dark");
            document.documentElement.setAttribute("data-theme", "dark");
          };
          
          const setLight = () => {
            localStorage.setItem("theme", "light");
            document.documentElement.setAttribute("data-theme", "light");
          };
          
          const storedTheme = localStorage.getItem("theme");
          
          const prefersDark =
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches;
          
          const defaultDark =
            storedTheme === "dark" || (storedTheme === null && prefersDark);
          
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
                                <Scrollspy className="mainmenu" items={['home','about','services','work']} currentClassName="is-current" offset={-200}>
                                    <li><a href="#home">Home</a></li>
                                    <li><a href="#about">About</a></li>
                                    <li><a href="#services">Services</a></li>
                                    <li><a href="#work">Work</a></li>
                                    <li></li>
                                </Scrollspy>
                            </nav>
                            <div>
                                <input id="chck" type="checkbox" onChange={toggleTheme} defaultChecked={defaultDark}/>
                                <label for="chck" class="check-trail">
                                    <span class="check-handler"></span>
                                </label>
                            </div>
                            <div className="header-btn">
                                <a className="rn-btn" href="/pricing">
                                    <span>PRICING</span>
                                </a>
                            </div>
                            {/* Start Humberger Menu  */}
                            <div className="humberger-menu d-block d-lg-none pl--20">
                                <span onClick={this.menuTrigger} className="menutrigger text-white"><FiMenu /></span>
                            </div>
                            {/* End Humberger Menu  */}
                            <div className="close-menu d-block d-lg-none">
                                <span onClick={this.CLoseMenuTrigger} className="closeTrigger"><FiX /></span>
                            </div>
                        </div>
                    </div>
                </header>
                {/* End Header Area  */}

                {/* Start Slider Area   */}
                <div className="slider-wrapper gradient-animated" id="home">
                    <SliderOne />
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
                                    <h2 className="textUpper">Our Work</h2>
                                    <p>We have a passionate team who puts their heart into what we do, so we would like to showcase you some of our work.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="wrapper portfolio-sacousel-inner mb--55">
                        <div className="portfolio-slick-activation mt--30 mt_sm--30">
                            <Slider {...portfolioSlick2}>
                                {PortfolioList2.map((value , index) => (
                                    // <div className="portfolio portfolio-interior-design" key={index}>
                                    //     <div className="thumbnail-inner">
                                    //         <div className={`thumbnail ${value.image}`}></div>
                                    //         <div className={`bg-blr-image ${value.image}`}></div>
                                    //     </div>
                                    //     <div className="content">
                                    //         <div className="inner">
                                    //             <p>{value.category}</p>
                                    //             <h4><a href="/portfolio-details">{value.title}</a></h4>
                                    //             <div className="portfolio-button">
                                    //                 <a className="rn-btn" href="/portfolio-details">Case Study</a>
                                    //             </div>
                                    //         </div>
                                    //     </div>
                                    // </div>
                                    <div className="" key={index}>
                                        <div className={`team`}>
                                            <div className="thumbnail">
                                                <img src={`/assets/images/projects/project-${value.images}.jpg`} alt="Project"/>
                                            </div>
                                            <div className="content">
                                                <h4 className="title">{value.title}</h4>
                                                <p className="designation">{value.designation}</p>
                                                {/* <p className="designation">{value.notif}</p>  */}
                                                <div className="portfolio-button">
                                                    <a className="rn-btn" href={value.link} target="_blank" rel="noreferrer noopener">{value.view}</a>
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
}

export default InteriorLanding;