import { IoMdMenu } from "react-icons/io";
import styles from './StickyNav.module.scss';
import { useEffect } from "react";
import Link from "next/link";

interface MainNavProps {
    setIsMenuOpen: (value: boolean) => void;
    isMenuOpen: boolean;
};

function StickyNav({ setIsMenuOpen, isMenuOpen }: MainNavProps) {
    useEffect(() => {
        const stickyNavbarDesk = document.querySelector(`.${styles['sticky-navbar-desk']}`) as HTMLElement | null;
        const stickyNavbarMob = document.querySelector(`.${styles['sticky-navbar-mob']}`) as HTMLElement | null;

        const onScroll = () => {
            if (stickyNavbarDesk) {
                if (window.scrollY > 100 && window.innerWidth > 425) {
                    stickyNavbarDesk.classList.add(styles['show-navbar']);
                } else {
                    stickyNavbarDesk.classList.remove(styles['show-navbar']);
                }
            }

            if (stickyNavbarMob) {
                if (window.scrollY > 100 && window.innerWidth < 425) {
                    stickyNavbarMob.classList.add(styles['show-navbar']);
                } else {
                    stickyNavbarMob.classList.remove(styles['show-navbar']);
                }
            }
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <>
            {/* Sticky header Desktop */}
            <nav className={`${styles['sticky-navbar-desk']} container`}>
                <div className={`${styles['navbar']}`}>
                    <div className={`${styles.logo}`}>
                        <span>Acre31</span>
                    </div>
                    <div className={`${styles.list}`}>
                        <ul>
                            <li>The Venue</li>
                            <li>Contact Us</li>
                            <li>Reviews</li>
                            <li><Link href="/price">Prices</Link></li>
                        </ul>
                    </div>
                    <button className={`${styles['btn-book-tour']} btn`}>
                        Book a Tour
                    </button>
                </div>
            </nav>

            {/* Sticky header Mobile */}
            <nav className={`${styles['sticky-navbar-mob']} container`}>
                <div className={`${styles.logo}`}>
                    <img src="https://img.freepik.com/premium-vector/rustic-barn-wedding-venue-logo-design_497517-249.jpg" alt="Logo not found" />
                </div>
                <div className={`${styles.menu}`}>
                    <IoMdMenu onClick={() => setIsMenuOpen(!isMenuOpen)} />
                </div>
            </nav>
        </>
    )
}

export default StickyNav;