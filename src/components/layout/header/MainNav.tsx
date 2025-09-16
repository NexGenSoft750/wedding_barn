import { IoMdMenu } from "react-icons/io";
import styles from './MainNav.module.scss';
import Link from "next/link";

interface MainNavProps {
    setIsMenuOpen: (value: boolean) => void;
    isMenuOpen: boolean;
};

function MainNav({ setIsMenuOpen, isMenuOpen }: MainNavProps) {
    return (
        <nav className={`${styles['main']} container`}>
            <Link href="/" className={`${styles.logo}`}>
                <img src="/images/acre31-logo.png" alt="Logo not found" />
            </Link>
            <div className={`${styles.list}`}>
                <ul>
                    <li>The Venue</li>
                    <li><Link href="/price">Prices</Link></li>
                    <li>Gallery</li>
                    <li>Reviews</li>
                    <li><Link href="/contact-us">Contact Us</Link></li>
                </ul>
                <button className={`${styles['btn-book-tour']} btn`}>
                    Book a Tour
                </button>
            </div>
            <div className={`${styles.menu}`}>
                <IoMdMenu onClick={() => setIsMenuOpen(!isMenuOpen)} />
            </div>
        </nav>
    )
}

export default MainNav;