import { IoMdMenu } from "react-icons/io";
import styles from './MainNav.module.scss';

interface MainNavProps {
    setIsMenuOpen: (value: boolean) => void;
    isMenuOpen: boolean;
};

function MainNav({ setIsMenuOpen, isMenuOpen }: MainNavProps) {
    return (
        <nav className={`${styles['main']} container`}>
            <div className={`${styles.logo}`}>
                <img src="/images/acre31-logo.png" alt="Logo not found" />
            </div>
            <div className={`${styles.list}`}>
                <ul>
                    <li>The Venue</li>
                    <li>Gallery</li>
                    <li>Reviews</li>
                    <li>Contact Us</li>
                </ul>
                <button className={`${styles['btn-book-tour']} btn`}>
                    Book a Tour
                </button>
            </div>
            <div className={`${styles.menu}`}>
                <IoMdMenu onClick={() => setIsMenuOpen(!isMenuOpen)}/>
            </div>
        </nav>
    )
}

export default MainNav;