import styles from './Footer.module.scss';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";

function Footer() {
    return (
        <footer className={`${styles.footer}`}>
            <div className={`${styles.main} container`}>
                <div className={`${styles['list-section']}`}>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">ABOUT</li>
                        <li className="list-group-item">AMENITIES</li>
                        <li className="list-group-item">GALLERY</li>
                        <li className="list-group-item">VENDORS</li>
                        <li className="list-group-item">PRICING</li>
                        <li className="list-group-item">Micro Wedding</li>
                        <li className="list-group-item">CONTACT US</li>
                        <li className="list-group-item">BLOG</li>
                        <li className="list-group-item">FAQ'S</li>
                        <li className="list-group-item">RESOURCES</li>
                    </ul>
                </div>
                <div className={`${styles['logo-section']}`}>
                    <div className={`${styles.logo}`}>
                        <img src="https://img.freepik.com/premium-vector/rustic-barn-wedding-venue-logo-design_497517-249.jpg" alt="Logo not found" />
                    </div>
                </div>
                <div className={`${styles['social-section']}`}>
                    <p>Like What you see?</p>
                    <h3>Reach out to Us</h3>
                    <div className={`${styles['social-icons']}`}>
                        <span>Social Stalk Us</span>
                        <a href="{{ setting('social_facebook') }}"><FaFacebook /></a>
                        <a href="{{ setting('social_twitter') }}"><FaTwitter /></a>
                        <a href="{{ setting('social_instagram') }}"><FaInstagram /></a>
                        <a href="{{ setting('social_linkedin') }}"><IoLogoLinkedin /></a>
                    </div>
                </div>
            </div>
            <div className={`${styles.bottom} container`}>
                <div >
                    <p>Email: info@example.com</p>
                    <p>Phone: +12345678</p>
                </div>
                <div >
                    <p>2024 Acre 31</p>
                </div>
                <div >
                    <p>123 Wedding Lane</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;