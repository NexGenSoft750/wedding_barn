'use client';

import { useState } from "react";
import AnnouncementBar from "./AnnouncementBar";
import MainNav from "./MainNav";
import StickyNav from "./StickyNav";
import MobileMenu from "./MobileMenu";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header>
            <AnnouncementBar />
            <MainNav setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen}/>
            <StickyNav setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen}/>
            <MobileMenu setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen}/>
        </header>
        
    )
}

export default Header;