import { RxCross2 } from "react-icons/rx";

import styles from './MobileMenu.module.scss';

interface MainNavProps {
    setIsMenuOpen: (value: boolean) => void;
    isMenuOpen: boolean;
    customClassName?: string;
};

function MobileMenu({ setIsMenuOpen, isMenuOpen, customClassName }: MainNavProps) {
    return (
        <div className={`${styles['mobile-menu']} list-group ${isMenuOpen ? styles.open : ''} ${customClassName || ''}`}>
            <div className={`${styles['menu-close']}`}>
                <RxCross2 onClick={() => setIsMenuOpen(!isMenuOpen)} />
            </div>
            <a href="#" className="list-group-item list-group-item-action">About Us</a>
            <a href="#" className="list-group-item list-group-item-action">The Venue</a>
            <a href="#" className="list-group-item list-group-item-action">Open Dates</a>
            <a href="#" className="list-group-item list-group-item-action">Vendors</a>
            <a href="#" className="list-group-item list-group-item-action">Gallery</a>
            <a href="#" className="list-group-item list-group-item-action">Contact</a>
            <a href="#" className="list-group-item list-group-item-action">Reviews</a>
        </div>
    )
}

export default MobileMenu;