import { FaSatelliteDish, FaFacebook, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import { FaTwitter, FaCirclePlay } from "react-icons/fa6";


const Headerlive = () => {
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
        </div>
    )
}

export default Headerlive