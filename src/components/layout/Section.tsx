import styles from './Section.module.scss';

type SectionProps = {
  children: React.ReactNode;
};

const Section = ({ children }: SectionProps) => {
  return (
    <>
      <section className={styles.section}>
        {children}
      </section>
    </>
  );
};

export default Section;
