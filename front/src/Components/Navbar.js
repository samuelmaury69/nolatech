import React, { useState } from 'react'
import Logo from '../Assets/icongrab.png'
import Prb_Header from '../Assets/Prb_Header.png'
import { CiStreamOn } from "react-icons/ci";
import { FaSatelliteDish, FaRegPlayCircle, FaFacebook, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import { FaTwitter, FaCirclePlay } from "react-icons/fa6";



const Navbar = () => {
    return (
        <div>
            <div className="menuLateral">
                <i className="fa-brands fa-facebook" ><FaFacebook /></i>
                <i className="fa-brands fa-twitter" ><FaTwitter /></i>
                <i className="fa-brands fa-instagram" ><FaInstagram /></i>
                <i className="fa-brands fa-youtube" ><FaYoutube /></i>
                <i className="fa-brands fa-tiktok" ><FaTiktok /></i>
            </div>
            <header>
                <div>
                    <span className="isLive">Live &nbsp;&nbsp;<i className="fa-solid fa-satellite-dish"><FaSatelliteDish /></i> </span>
                    <span> Lorem ipsu dolor sit amet </span>
                    <span className="isJoin"> Join Now &nbsp;&nbsp;<i className="fa-solid fa-circle-play"><FaCirclePlay /></i></span>
                </div>
            </header>
            <nav>
                <img src={Prb_Header} alt="prb_header" className="Navbackground" />
                <div className="contentNav">
                    <div className="headerNav">
                        <img src={Logo} alt="grab" className="iconHeadernNav" />
                        <div className="contentNavBody">
                            <div className="routeNav">
                                <a href="/" className="route">LOREM IPSUM</a>
                                <a href="/" className="route">LOREM IPSUM</a>
                                <a href="/" className="route">LOREM IPSUM</a>
                                <a href="/" className="route">LOREM IPSUM</a>
                                <a href="/" className="route">LOREM IPSUM</a>
                                <a href="/" className="route">LOREM IPSUM</a>
                            </div>
                            <div className="bodyNav">
                                <h1 className="bodyNavTitle">LOREM IPSUM</h1>
                                <h1 className="bodyNavTitle2">LOREM IPSUM DOLOR &nbsp;</h1>
                                <h1 className="bodyNavTitle">LOREM IPSUM</h1>
                                <button className="bodyNavButton">WHAT IS NEXT</button>
                            </div>
                        </div>
                    </div>
                    <div className="footerNav">
                        <div className="footerContenTextNav">
                            <p>Lorem ipsum dolor sit
                                amet, consetetur</p>
                        </div>
                        <div className="footerContenTimeNav">
                            <div className="blockTime">
                                <span>170</span>
                                <span className="blockSpan">days</span>
                            </div>
                            <hr className="divider" />
                            <div className="blockTime">
                                <span>13</span>
                                <span className="blockSpan">Hour</span>
                            </div>
                            <hr className="divider" />
                            <div className="blockTime">
                                <span>39</span>
                                <span className="blockSpan">Minutes</span>
                            </div>
                            <hr className="divider" />
                            <div className="blockTime">
                                <span>29</span>
                                <span className="blockSpan">Seconds</span>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        /* <nav>
                    <header>
                        <div >
                            <span className='isLive'>LIVE <CiStreamOn /></span>
                            <span>asdasd</span>
                            <span className='isJoin'>JOIN NOW! <FaRegPlayCircle /></span>
                        </div>
                    </header>
                    <div className='routeNav headerNav'>
                        <img className='iconHeadernNav' src={logo} alt='' />
                         <a href="/">Option 1</a>
                         <a href="/">Option 2</a>
                         <a href="/">Option 3</a>
                         <a href="/">Option 4</a>
                         <a href="/">Option 5</a>
                         <a href="/">Option 6</a>

                    </div>
                </nav>*/
    )
}

export default Navbar