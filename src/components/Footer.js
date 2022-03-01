import { Link } from "react-router-dom";
import {FaFacebookF, FaTwitter, FaWhatsapp, FaVimeoV} from 'react-icons/fa';
import '../assets/css/Footer.css';

const year = new Date().getFullYear();

const Footer = () => {
    return(
        <footer>
            <div className="container">
                <div className="footer-cols-wrap">
                    <div className="footer-col logo-col">
                        <h2 className="logo">
                            <Link to='/'>Rest-Inn</Link>
                        </h2>
                        <p className="site-desc">We offer our visitors vacation rentals, cabins, beach houses and unique homes, around the world.</p>
                    </div>
                    <div className="footer-col">
                        <p className="footer-col-title">our company</p>
                        <ul>
                            <li><Link to='/'>About Us</Link></li>
                            <li><Link to='/'>Privacy Policy</Link></li>
                            <li><Link to='/'>Contact Us</Link></li>
                            <li><Link to='/'>Terms and Conditions</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <p className="footer-col-title">find us</p>
                        <ul className="social-links-ul">
                            <li><Link to='/' className="icon-text-wrap"><FaFacebookF className="fa" />Facebook</Link></li>
                            <li><Link to='/' className="icon-text-wrap"><FaTwitter className="fa" />Twitter</Link></li>
                            <li><Link to='/' className="icon-text-wrap"><FaWhatsapp className="fa" />WhatsApp</Link></li>
                            <li><Link to='/' className="icon-text-wrap"><FaVimeoV className="fa" />Vimeo</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="copyright text-center">&copy; {year} | Rest-Inn | All Rights Reserved</div>
            </div>
        </footer>
    )
}

export default Footer;