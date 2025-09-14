import styles from "./AllInclusiveSection.module.scss";
import CTAButton from "@/components/common/CTAButton";

type Props = {
    className?: string;
};

const AllInclusiveSection: React.FC<Props> = ({ className = '' }) => {
    return (
        <section className={`${styles.allInclusiveSection} ${className}`}>
            <div className={styles.container}>
                <h2 className={styles.title}>All-Inclusive Options.</h2>
                
                <div className={styles.description}>
                    <p>
                        When you choose Acre 31 as your wedding venue, you're not just selecting a beautiful location; 
                        you're also securing ample seating for up to 150 guests during both the ceremony and reception, 
                        along with complete, exclusive access to the venue starting at 12 PM on your special day.
                    </p>
                    
                    <p>
                        We offer elegant clear chiavari wedding chairs for your ceremony, a built-in bar, 
                        an outdoor bar area, specialty tables for gifts and signage, a customized floor plan 
                        for the reception, beautiful spots for bridal portraits, and much more.
                    </p>
                    
                    <p>
                        You can select from our preferred vendors or choose any other vendors you prefer. 
                        Additionally, you have the option to bring your own alcohol, which can significantly reduce costs.
                    </p>
                </div>

                <div className={styles.pricingExample}>
                    <h3>All-Inclusive Package Pricing <span className={styles.exampleText}>Example:</span></h3>
                    <p className={styles.pricingDetail}>
                        100 guests = $16,000 + venue rental price based on date
                    </p>
                </div>

                <div className={styles.ctaWrapper}>
                    <CTAButton 
                        text="Book a Tour"
                        href="/contact"
                        size="large"
                        variant="primary"
                    />
                </div>
            </div>
        </section>
    );
};

export default AllInclusiveSection;