import Section from '../layout/Section';
import styles from './OurVenue.module.scss';
import Image from 'next/image';

const OurVenue = () => {
  return (
    <>
      <Section>
        <div className={styles.ourVenue}>
          <div className={styles.ourVenue__imagesContainer}>
            <Image
              src="/images/ourVenue_1.jpg"
              alt=''
              width={100}
              height={100}
              className={styles.ourVenue__image}
            />
            <Image
              src="/images/ourVenue_2.jpg"
              alt=''
              width={100}
              height={100}
              className={styles.ourVenue__image}
            />
          </div>
          <div className={styles.ourVenue__content}>
            <h1 className={styles.ourVenue__heading}>Your dream event 50 minutes from Austin</h1>
            <p className={styles.ourVenue__text}><b>Affordable Luxury:</b> Experience the charm of a high-end venue without the high cost. Our competitive pricing offers exceptional value</p>
            <p className={styles.ourVenue__text}><b>Stunning Views:</b> Enjoy a ceremony pergola with serene pond views and mature Spanish oaks on our 31-acre property.</p>
            <p className={styles.ourVenue__text}><b>Elegant Spaces:</b> Our venue includes a 2400 sq ft event barn for up to 150 guests, a 3500 sq ft patio with an outdoor ceremony area, and a 600 sq ft bar.</p>
            <p className={styles.ourVenue__text}><b>Exceptional Service:</b> Our dedicated team ensures every detail of your wedding day is flawless.</p>
            <p className={styles.ourVenue__text}><b>Convenient Location:</b> Just 50 minutes from Austin, 1.5 hours from Houston, 2 hours from San Antonio.</p>
            <button className={styles.ourVenue__contactBtn}>Contact Us</button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default OurVenue;
