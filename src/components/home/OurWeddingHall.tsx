import styles from './OurWeddingHall.module.scss';
import Section from '../layout/Section';
import Image from 'next/image';

const OurWeddingHall = () => {
  return (
    <>
      <Section>
        <div className={styles.ourWeddingHall}>
          <div className={styles.ourWeddingHall__content}>
            <h1 className={styles.ourWeddingHall__heading}>Ready, Set, “I do"!</h1>
            <p className={styles.ourWeddingHall__text}>Your love story has been a journey filled with unforgettable moments, and we are deeply honored to be a part of this special chapter. At Acre 31, our dedication extends far beyond providing a stunning wedding venue: we aim to craft unforgettable moments that you will cherish forever.</p>
            <p className={styles.ourWeddingHall__text}>Ready to learn more? Experience the beauty and charm of Acre 31 for yourself and discover how Acre 31 can offer you an unforgettable experience at an unbeatable value. Schedule a tour today and start planning the wedding of your dreams.</p>
            <button className={styles.ourWeddingHall__contactBtn}>Contact Us</button>
          </div>
          <div className={styles.ourWeddingHall__imagesContainer}>
            <Image
              src="/images/ourWeddingHall_1.jpg"
              alt=''
              width={100}
              height={100}
              className={styles.ourWeddingHall__image}
            />
            <Image
              src="/images/ourWeddingHall_2.jpg"
              alt=''
              width={100}
              height={100}
              className={styles.ourWeddingHall__image}
            />
          </div>
        </div>
      </Section>
    </>
  );
};

export default OurWeddingHall;
