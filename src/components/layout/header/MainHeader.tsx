'use client';

import styles from "./MainHeader.module.scss";
import { useState } from "react";
import AnnouncementBar from "./AnnouncementBar";
import MainNav from "./MainNav";
import StickyNav from "./StickyNav";
import MobileMenu from "./MobileMenu";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className={styles['header-container']}>
            {/* <AnnouncementBar /> */}
            <MainNav setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen}/>
            <StickyNav setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen}/>
            <MobileMenu setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen}/>
        </header>
        
    )
}

export default Header;