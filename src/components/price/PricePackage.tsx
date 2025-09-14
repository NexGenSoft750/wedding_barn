import CTAButton from "../common/CTAButton";
import styles from "./PricePackage.module.scss";

type PricingItem = {
    label: string;
    price: number | string;
    days: string | number;
};

type Pricing = {
    peak: PricingItem[];
    nonPeak: PricingItem[];
};

type Props = {
    currentPricing: Pricing;
    currentIncludes: string[];
    packageType: "single" | "multi";
};

const PricePackage: React.FC<Props> = ({ currentPricing, currentIncludes, packageType }) => {
    return (
        <div className={styles.pricePackage}>
            <h3>2025 {packageType === 'single' ? 'Single Day' : 'Multi-Day'} Packages Pricing Guide</h3>
            <p>*Available 2025 dates - Prices vary by day of the week and season*</p>
            
            <div className={styles.pricingSection}>
                <h4>Peak Season (March - June and September - December)</h4>
                <ul>
                    {currentPricing.peak.map((item, index) => (
                        <li key={index}>
                            <span>{item.days}:</span>
                            <span>{item.price}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className={styles.pricingSection}>
                <h4>Non-Peak Season (January, February, July, August)</h4>
                <ul>
                    {currentPricing.nonPeak.map((item, index) => (
                        <li key={index}>
                            <span>{item.days}:</span>
                            <span>{item.price}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className={styles.includedSection}>
                <h4>{packageType === 'single' ? 'Single Day' : 'Multi-Day'} Package Includes:</h4>
                <ul>
                    {currentIncludes.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
            <div style={{ textAlign: 'center', margin: '4rem 0 0 0' }}>
                <CTAButton 
                    text="Book a Tour"
                    href="/contact"
                    size="large"
                    variant="primary"
                />
            </div>
        </div>
    );
}

export default PricePackage;