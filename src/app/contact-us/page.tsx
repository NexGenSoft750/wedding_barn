'use client';

import { useState, useEffect } from 'react';
import ContactForm from '@/components/contact-us/ContactForm';
import MainNav from '@/components/layout/header/MainNav';
import MobileMenu from '@/components/layout/header/MobileMenu';
import styles from './ContactUsPage.module.scss';

const ContactUsPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Hide sticky navigation on this page
    useEffect(() => {
        const stickyNavs = document.querySelectorAll('[class*="sticky-navbar"]');
        stickyNavs.forEach(nav => {
            (nav as HTMLElement).style.display = 'none';
        });

        // Cleanup function to restore sticky nav when leaving the page
        return () => {
            stickyNavs.forEach(nav => {
                (nav as HTMLElement).style.display = '';
            });
        };
    }, []);

    return (
        <>
            <div className={styles.navContainer}>
                <MainNav setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
            </div>
            <MobileMenu setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} customClassName={styles.contactMobileMenu} />
            <section className={styles.contactSection}>
                <h1 className={styles.contactSection__heading}>Contact Us</h1>
                <div className={styles.contactSection__container}>
                    <ContactForm />
                    <div className={styles.contactSection__info}>
                        <h3>Better yet, see us in person!</h3>
                        <p>Private tours available during weekends on request.Please email <a href="mailto:amber@acre31.com">amber@acre31.com</a> or fill out contact form.</p>
                        <h4>Acre 31 Wedding and ​Event Center</h4>
                        <p>1490 FM2104, Smithville, TX 78759</p>
                        <ul>
                            <li>50​ minutes from Austin</li>
                            <li>1.5​ hours from Houston</li>
                            <li>2 hours from San Antonio</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactUsPage;
