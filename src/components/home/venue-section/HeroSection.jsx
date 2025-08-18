import styles from "./HeroSection.module.scss";

function HeroSection() {
    return (
        <div className={`${styles.hero}`}>
            <p>WELCOME TO ACRE 31</p>
            <h2>Affordable Elegance for Your Special Events <br /> Just 50 Minutes from Austin</h2>
        </div>
    )
}

export default HeroSection;