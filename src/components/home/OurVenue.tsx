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
            <h1 className={styles.ourVenue__heading}>Unique, Magical & Enchanting</h1>
            <p className={styles.ourVenue__text}>All our outdoor spaces have stunning views over our vineyards with the rolling countryside beyond.</p>
            <p className={styles.ourVenue__text}>Stroll along the cobbled paths, enjoy the ponds, fountains, multi-level terraces, and shaded lawns. We have a range of settings if you wish to have a civil ceremony, as well as many options for your main meal. We also highly recommend taking advantage of the beautiful weather and enjoying your pre-dinner drinks in one of our many outdoor spaces.</p>
            <p className={styles.ourVenue__text}>The beautiful historic gardens with unique structures built in 1906, private chapel, vineyards, woodland areas, and much more, give you many opportunities for a memorable and unique photo session.</p>
            <button className={styles.ourVenue__contactBtn}>Contact Us</button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default OurVenue;
