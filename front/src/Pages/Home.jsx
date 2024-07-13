import React from 'react'
import Pic1 from '../Assets/Pic1.png'
import Pic2 from '../Assets/Pic2.png'
import Pic3 from '../Assets/Pic3.png'
import Pic4 from '../Assets/Pic4.png'
import Pic5 from '../Assets/Pic5.png'
import Pic6 from '../Assets/Pic6.png'
import Pic7 from '../Assets/Pic7.png'
import Pic8 from '../Assets/Pic8.png'
import Pic9 from '../Assets/Pic9.png'
import JoinUS from '../Assets/JoinUs.png'
import Prb_Header from '../Assets/Prb_Header.png'
import NavigationBar from '../Components/NavigationBar'
import Footer from '../Components/Footer'
import { FaPlayCircle, FaCircle, FaRegCircle } from "react-icons/fa";

const Home = () => {
    return (
        <div className=''>
            <nav>
                <img src={Prb_Header} alt="prb_header" className="Navbackground" />
                <NavigationBar />
                <div className="headerNav">
                    <div className="bodyNav">
                        <h1 className="bodyNavTitle">LOREM IPSUM</h1>
                        <h1 className="bodyNavTitle2">LOREM IPSUM DOLOR &nbsp;</h1>
                        <h1 className="bodyNavTitle">LOREM IPSUM</h1>
                        <button className="bodyNavButton">WHAT IS NEXT</button>
                    </div>
                </div>
                <div className="footerNav">
                    <div className="footerContenTextNav">
                        <p>Lorem ipsum dolor sit<br></br>
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
            </nav>
            <main>
                <div className="firtsCard">
                    <div className="textFirst">
                        <h1>Lorem ipsum dolor sit amet</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                            diam nonumy eirmod tempor invidunt ut labore et dolore
                            magna aliquyam erat, sed diam voluptua. At vero eos et
                            accusam et justo duo dolores et ea rebum. Stet clita kasd
                            gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                            amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                            sed diam nonumy eirmod tempor invidunt ut labore et dolore
                            magna aliquyam erat, sed diam voluptua. At vero eos et
                            accusam et justo duo dolores et ea rebum. Stet clita kasd
                            gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                        </p>
                    </div>
                    <img src={Pic1} alt="pic1" className="imageFirstCard" />
                </div>
                <div className="secondCard">
                    <h1 style={{ fontSize: "56px" }}>Lorem ipsum</h1>
                    <p style={{ width: "50%", textAlign: "center" }}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                        voluptua.
                    </p>
                    <div className="secondCardContent">
                        <div className="card">
                            <img src={Pic2} alt="pic2" className="cardImage" />
                            <button className="btnCard">LOREM IPSUM</button>
                        </div>
                        <div className="card">
                            <img src={Pic3} alt="pic2" className="cardImage" />
                            <button className="btnCard">LOREM IPSUM</button>
                        </div>
                        <div className="card">
                            <img src={Pic4} alt="pic2" className="cardImage" />
                            <button className="btnCard">LOREM IPSUM</button>
                        </div>
                    </div>
                    <button className="btnSecondCard">LEARN MORE</button>
                </div>
                <div className="threeCard">
                    <div className="threeCardContent">
                        <p className="textCardThree">
                            Lorem ipsum
                            dolor sit
                            amet,
                            consetetur
                        </p>
                        <button className="btnThreeCard">LOREM IPSUM DOLOR SIT</button>
                        <button className="btnThreeCard2">LOREM IPSUM DOLOR SIT AMET</button>
                    </div>
                    <img src={Pic5} alt="pic5" className="threeCardImage" />
                </div>
                <div className="fourCard">
                    <h1 style={{ fontSize: "48px", fontWeight: "bold" }}>Latest videos</h1>
                    <div className="fourCardContent">
                        <div className="fourCardFile">
                            <i className="fa-solid fa-play" style={{ position: "absolute", color: "white" }}><FaPlayCircle /></i>
                            <img src={Pic1} alt="file" style={{ objectFit: "cover", maxWidth: "250px" }} />
                            <p style={{ marginTop: "5%" }}>
                                Lorem ipsum dolor sit amet, consetetur
                            </p>
                        </div>
                        <div className="fourCardFile">
                            <i className="fa-solid fa-play" style={{ position: "absolute", color: "white" }}><FaPlayCircle /></i>
                            <img src={Pic1} alt="file" style={{ objectFit: "cover", maxWidth: "250px" }} />
                            <p style={{ marginTop: "5%" }}>
                                Lorem ipsum dolor sit amet, consetetur
                            </p>
                        </div>
                        <div className="fourCardFile">
                            <i className="fa-solid fa-play" style={{ position: "absolute", color: "white" }}><FaPlayCircle /></i>
                            <img src={Pic1} alt="file" style={{ objectFit: "cover", maxWidth: "250px" }} />
                            <p style={{ marginTop: "5%" }}>
                                Lorem ipsum dolor sit amet, consetetur
                            </p>
                        </div>
                        <div className="fourCardFile">
                            <i className="fa-solid fa-play" style={{ position: "absolute", color: "white" }}><FaPlayCircle /></i>
                            <img src={Pic1} alt="file" style={{ objectFit: "cover", maxWidth: "250px" }} />
                            <p style={{ marginTop: "5 %" }}>
                                Lorem ipsum dolor sit amet, consetetur
                            </p>
                        </div>
                        <div className="fourCardFile">
                            <i className="fa-solid fa-play" style={{ position: "absolute", color: "white" }}><FaPlayCircle /></i>
                            <img src={Pic1} alt="file" style={{ objectFit: "cover", maxWidth: "250px" }} />
                            <p style={{ marginTop: "5 %" }}>
                                Lorem ipsum dolor sit amet, consetetur
                            </p>
                        </div>
                        <div className="fourCardFile">
                            <i className="fa-solid fa-play" style={{ position: "absolute", color: "white" }}><FaPlayCircle /></i>
                            <img src={Pic1} alt="file" style={{ objectFit: "cover", maxWidth: "250px" }} />
                            <p style={{ marginTop: "5 %" }}>
                                Lorem ipsum dolor sit amet, consetetur
                            </p>
                        </div>
                    </div >
                    <button className="btnFourCard">VIEW ALL</button>
                </div >
                <div className="fiveCard" >
                    <img src={JoinUS} alt="backgroun" style={{ position: "absolute", width: "100%", objectFit: "fill", zindex: "-1", maxHeight: "800px" }} />
                    <div className="formFiveCard">
                        <h1 style={{ fontSize: "56px", fontWeight: "bold", color: "white", margin: "2%" }}>JOIN US</h1>
                        <h1 style={{ fontSize: "16px", fontWeight: "bold", color: "white", margin: "2%" }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,</h1>
                        <div style={{ display: "flex" }}>
                            <input type="text" className="inputFormBasic" placeholder="Name" style={{ marginRight: "0px", width: "100%" }} />
                            <input type="text" className="inputFormBasic" placeholder="Username" style={{ width: "100%" }} />
                        </div>
                        <div style={{ display: "flex" }}>
                            <input type="text" className="inputFormBasic" placeholder="Phone" style={{ marginRight: "0px", width: "100%" }} />
                            <input type="text" className="inputFormBasic" placeholder="Email" style={{ width: "100%" }} />
                        </div>
                        <input type="text" className="inputFormBasic" placeholder="Departamen" />
                        <textarea className="inputFormBasic" placeholder="Mensajse" style={{ height: "120px", paddingTop: "16px" }} ></textarea >
                        <button className="btnStandarIn" style={{ maxWidth: "fit-content", margin: "2 %" }}>I’M IN</button>
                        < p style={{ fontSize: "16px", fontWeight: "bold", color: "white", marginTop: "2 %", marginLeft: "2 %", textAlign: "center" }}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                        </p >
                    </div >
                </div >
                <div className="sixCard">
                    <img src={Pic6} alt="backgroun" style={{ position: "absolute", width: "100%", objectFit: "fill", zindex: "-1", maxHeight: "600px" }} />
                    <div style={{ width: "40%", marginLeft: "5%", marginTop: "10%", zIndex: 99 }}>
                        <h1 style={{ fontSize: "86px" }}>Lorem ipsum</h1>
                        <p style={{ width: "25" }}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                            diam nonumy eirmod tempor invidunt ut labore et dolore
                            magna aliquyam erat, sed diam voluptua.
                        </p>
                        <button className="btnStandar" style={{ marginTop: "10%" }}>VIEW ALL</button>
                    </div >

                </div >
                <div className="sevenCard">
                    <h1 style={{ fontSize: "56px", color: "white" }}>Lorem ipsum</h1>
                    <div style={{ display: "flex", gap: "5 %" }}>
                        <img src={Pic7} alt="pci" style={{ objectFit: "fill", width: "300px", height: "400px", marginRight: '15px' }} />
                        <img src={Pic8} alt="pci" style={{ objectFit: "fill", width: "300px", height: "400px", marginRight: '15px' }} />
                        <img src={Pic9} alt="pci" style={{ objectFit: "fill", width: "300px", height: "400px", marginRight: '15px' }} />
                    </div>
                    <div style={{ display: "flex", marginTop: "2%", width: "100%", justifycontent: "center", gap: "2 %", justifyContent: 'center', margin: "2%" }}>
                        <i className="fa-solid fa-circle" style={{ color: "white" }}><FaCircle /></i>
                        <i className="fa-regular fa-circle" style={{ color: "white" }}><FaRegCircle /></i>
                        <i className="fa-regular fa-circle" style={{ color: "white" }}><FaRegCircle /></i>
                    </div>
                    <button className="btnStandar" style={{ color: "black", backgroundcolor: "white", marginTop: "5 %" }}>VIEW ALL</button>
                </div >
            </main >
            <Footer />
        </div >
    )
}

export default Home