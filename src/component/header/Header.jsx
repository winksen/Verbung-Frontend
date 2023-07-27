import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { FiX , FiMenu } from "react-icons/fi";
import { changeLanguage } from '../../dark/LanguageHelper';
import { loadLanguageFromLocalStorage } from '../../dark/LanguageHelper';

import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import Stack from '@mui/material/Stack';
// import Typography from '@mui/material/Typography';



class Header extends Component{
    // constructor(props) {
    //     super(props);
    //     this.menuTrigger = this.menuTrigger.bind(this);
    //     this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
    //    //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
    //     window.addEventListener('load', function() {
    //         console.log('All assets are loaded')
    //     })
    // }

    constructor(props) {
        super(props);
        this.state = {
          selectedLanguage: 'en',
        };
      }
    
      componentDidMount() {
        const savedLanguage = loadLanguageFromLocalStorage();
        if (savedLanguage) {
          this.setState({ selectedLanguage: savedLanguage });
        }
      }
    
      handleLanguageChange = (event) => {
        const newLanguage = event.target.value;
        changeLanguage(newLanguage);
        this.setState({ selectedLanguage: newLanguage });
      };


    menuTrigger() {
        document.querySelector('.header-wrapper').classList.toggle('menu-open')
    }

    CLoseMenuTrigger() {
        document.querySelector('.header-wrapper').classList.remove('menu-open');
    }


    render(){
        const { t } = this.props;
        var elements = document.querySelectorAll('.has-droupdown > a');
        for(var i in elements) {
            if(elements.hasOwnProperty(i)) {
                elements[i].onclick = function() {
                    this.parentElement.querySelector('.submenu').classList.toggle("active");
                    this.classList.toggle("open");
                }
            }
        }
        const { logo, color='default-color' } = this.props;
        let logoUrl;
        if(logo === 'light'){
            logoUrl = <img src="/assets/images/logo/logo-light.png" alt="Verbung" />;
        }else if(logo === 'dark'){
            logoUrl = <img src="/assets/images/logo/logo-dark.png" alt="Verbung" />;
        }else if(logo === 'symbol-dark'){
            logoUrl = <img src="/assets/images/logo/logo-symbol-dark.png" alt="Verbung" />;
        }else if(logo === 'symbol-light'){
            logoUrl = <img src="/assets/images/logo/logo-symbol-light.png" alt="Verbung" />;
        }else{
            logoUrl = <img src="/assets/images/logo/logo.png" alt="Verbung" />;
        }

        const borderColor = '#4CBD94';
        const hoverBorderColor = '#1C9D79';

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

          const { selectedLanguage } = this.state;
        
        return(
            <header className={`sticky-nav header-area formobile-menu header--transparent ${color}`}>
                <div className="header-wrapper" id="header-wrapper">
                    <div className="header-left">
                        <div className="logo">
                            <a href="/">
                                {logoUrl}
                            </a>
                        </div>
                    </div>
                    <div className="header-right">
                        <nav className="mainmenunav d-lg-block">
                            <ul className="mainmenu">
                                <li className="has-droupdown"><Link to="/">Home</Link>
                                    <ul className="submenu">
                                        <li><Link to="/#about">About</Link></li>
                                        <li><Link to="/#services">Services</Link></li>
                                        <li><Link to="/#work">Work</Link></li>
                                    </ul>
                                </li>
                                <li className="has-droupdown"><Link>Services</Link>
                                    <ul className="submenu">
                                        <li><Link to="/digitalmarketing">Digital Marketing</Link></li>
                                        <li><Link to="/visualidentity">Visual Identity</Link></li>
                                        <li><Link to="/webmobile">Web &amp; Mobile</Link></li>
                                        <li><Link to="/pressrelation">Press Relation</Link></li>
                                    </ul>
                                </li>
                                {/* <li><Link to="/about" >About</Link></li> */}

                                {/* <li className="has-droupdown"><Link to="#pages" >Pages</Link>
                                    <ul className="submenu">
                                        <li><Link to="/blog">Blog List</Link></li>
                                        <li><Link to="/blog-details">Blog Details</Link></li>
                                        <li><Link to="/service">Service</Link></li>
                                        <li><Link to="/service-details">Service Details</Link></li>
                                        <li><Link to="/portfolio">Portfolio</Link></li>
                                        <li><Link to="/portfolio-details">Portfolio Details</Link></li>
                                        <li><Link to="/404">404</Link></li>
                                    </ul>
                                </li> */}
                                {/* <li className="has-droupdown"><Link to="#" >Blocks</Link>
                                    <ul className="submenu">
                                        <li><Link to="/portfolio">Portfolio</Link></li>
                                        <li><Link to="/team">Team</Link></li>
                                        <li><Link to="/service">Service</Link></li>
                                        <li><Link to="/video-popup">Video Popup</Link></li>
                                        <li><Link to="/progressbar">Progressbar</Link></li>
                                        <li><Link to="/gallery">Gallery</Link></li>
                                        <li><Link to="/counters">Counters</Link></li>
                                        <li><Link to="/blog">Blog List</Link></li>
                                        <li><Link to="/clint-logo">Clint Logo</Link></li>
                                        <li><Link to="/contact-form">Contact Form</Link></li>
                                        <li><Link to="/google-map">Google Map</Link></li>
                                        <li><Link to="/columns">Columns</Link></li>
                                        <li><Link to="/pricing-table">Pricing Table</Link></li>
                                    </ul>
                                </li> */}
                                <li><Link to="/contact" >Contact</Link></li>
                                <li><Link to="/blogs" >Blog</Link></li>
                                <li></li>
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
                                      onChange={this.handleLanguageChange}
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
                            </ul>
                        </nav>
                        <div className="header-btn">
                            <a className="rn-btn" href="/packs">
                                <span>PACKS</span>
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
        )
    }
}
export default withTranslation()(Header);