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
                        <p>
                            Private tours available on request. Group tours take place every 3 months.
                            Please email <a href="mailto:hello@test123@gmail.com">
                                hello@test123@gmail.com
                            </a> or fill out contact form.
                        </p>

                        <h4>Tuckerberry Hill Events</h4>
                        <p>35 Becks Road, Drysdale Victoria 3222, Australia</p>

                        <ul>
                            <li>15 minutes from Portarlington</li>
                            <li>30 minutes from Geelong</li>
                            <li>60 minutes from Avalon airport</li>
                            <li>90 minutes from Melbourne</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactUsPage;
