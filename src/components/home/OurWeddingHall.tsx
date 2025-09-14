import styles from './OurWeddingHall.module.scss';
import Section from '../layout/Section';
import Image from 'next/image';

const OurWeddingHall = () => {
  return (
    <>
      <Section>
        <div className={styles.ourWeddingHall}>
          <div className={styles.ourWeddingHall__content}>
            <h1 className={styles.ourWeddingHall__heading}>Welcoming & Distinctive</h1>
            <p className={styles.ourWeddingHall__text}>Upon your arrival at The Wedding Barn, you will pass through our olive groves and from there the views never stop. Even our parking areas have stunning views.</p>
            <p className={styles.ourWeddingHall__text}>We have a very elegant and timeless wedding hall (with fantastic views, of course), luxurious bathrooms, and a fantastic adjoining bar. Our weddings typically range between 50-150 people, but we can easily accommodate up to 180.</p>
            <p className={styles.ourWeddingHall__text}>The Wedding Barn has 16 rooms to accommodate your guests, and we have agreements with many other facilities in the area, should you need to arrange additional accommodation.</p>
            <p className={styles.ourWeddingHall__text}>The Wedding Barn can be reserved for 100% exclusivity and we are specialists in destination weddings, providing you not just a venue for one day, but a fully immersive experience covering two or three days.</p>
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
