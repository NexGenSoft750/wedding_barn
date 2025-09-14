import styles from './IntroSection.module.scss';

const IntroSection = () => {
  return (
    <>
      <div className={styles.introSection}>
        <div className={styles.introSection__wrapper}>
          <p className={styles.introSection__text}>The Wedding Barn is a historic estate surrounded by five hectares of cultivated land, extensive vineyards, and breathtaking views over the rolling countryside.</p>
          <p className={styles.introSection__text}>We have mastered the art of combining traditional charm that you would expect from a luxury estate, with modern facilities that you would expect from a luxury hotel.</p>
          <p className={styles.introSection__text}>
            With a
            <strong> dedicated event hall, three bars, wine cellars, and fantastic outdoor spaces, </strong>
            The Wedding Barn offers you the ability to create a highly personalized and customized wedding of your dreams.
          </p>
          <p className={styles.introSection__text}>
            We have a range of wedding organizers and catering suppliers to meet your precise needs. We are also delighted to partner with a planner or supplier of your choice. Our
            <strong> number one priority is that you feel confident and comfortable</strong>
            having a team that has the willingness and passion to make your perfect wedding happen.
          </p>
        </div>
      </div>
    </>
  );
};

export default IntroSection;
