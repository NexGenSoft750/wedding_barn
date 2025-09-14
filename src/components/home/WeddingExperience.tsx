import styles from './WeddingExperience.module.scss';
import Section from '../layout/Section';
import Image from 'next/image';

const WeddingExperience = () => {
    return (
        <>
            <Section>
                <div className={styles.weddingExperience}>
                    <div className={styles.weddingExperience__header}>
                        <h2 className={styles.weddingExperience__title}>Your Perfect Wedding Experience</h2>
                        <p className={styles.weddingExperience__subtitle}>
                            From intimate ceremonies to grand celebrations, we create unforgettable moments that last a lifetime.
                        </p>
                    </div>

                    <div className={styles.weddingExperience__features}>
                        <div className={styles.weddingExperience__feature}>
                            <div className={styles.weddingExperience__featureIcon}>
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="currentColor" />
                                </svg>
                            </div>
                            <h3 className={styles.weddingExperience__featureTitle}>Exclusive Venue</h3>
                            <p className={styles.weddingExperience__featureText}>
                                Reserve the entire estate for complete privacy and exclusivity on your special day.
                            </p>
                        </div>

                        <div className={styles.weddingExperience__feature}>
                            <div className={styles.weddingExperience__featureIcon}>
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 6.5V7.5C15 8.4 14.4 9 13.5 9S12 8.4 12 7.5V6.5L6 7V9L12 8.5V9.5C12 10.4 12.6 11 13.5 11S15 10.4 15 9.5V8.5L21 9ZM12 11C9.8 11 8 12.8 8 15V22H10V15C10 13.9 10.9 13 12 13S14 13.9 14 15V22H16V15C16 12.8 14.2 11 12 11Z" fill="currentColor" />
                                </svg>
                            </div>
                            <h3 className={styles.weddingExperience__featureTitle}>Expert Coordination</h3>
                            <p className={styles.weddingExperience__featureText}>
                                Professional wedding coordinators ensure every detail is perfect and stress-free.
                            </p>
                        </div>

                        <div className={styles.weddingExperience__feature}>
                            <div className={styles.weddingExperience__featureIcon}>
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="currentColor" />
                                </svg>
                            </div>
                            <h3 className={styles.weddingExperience__featureTitle}>Luxury Accommodation</h3>
                            <p className={styles.weddingExperience__featureText}>
                                16 elegant rooms on-site plus partnerships with nearby luxury accommodations.
                            </p>
                        </div>
                    </div>

                    <div className={styles.weddingExperience__testimonial}>
                        <div className={styles.weddingExperience__testimonialContent}>
                            <div className={styles.weddingExperience__quote}>
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" fill="currentColor" />
                                </svg>
                            </div>
                            <blockquote className={styles.weddingExperience__testimonialText}>
                                "Our wedding at this venue was absolutely magical. The staff went above and beyond to make our day perfect. The views are breathtaking and the atmosphere is simply unforgettable."
                            </blockquote>
                            <div className={styles.weddingExperience__testimonialAuthor}>
                                <span className={styles.weddingExperience__authorName}>Sarah & Michael</span>
                                <span className={styles.weddingExperience__authorDate}>June 2023</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
};

export default WeddingExperience;
