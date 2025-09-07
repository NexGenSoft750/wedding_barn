import styles from "./WhyChooseUs.module.scss";

function WhyChooseUs() {
    return (
        <div className={`${styles.main}`}>
            <h3>Why Choose Acre 31?</h3>
            <div className={`${styles.content}`}>
                <div className={`${styles['list-items']}`}>
                    <ul>
                        <li>
                            <b>Affordable Luxury:</b> Enjoy the charm and sophistication of a high-end venue at a fraction of the cost. Our competitive pricing ensures you get the best value for your investment.
                        </li>
                        <li>
                            <b>Stunning Views:</b> Capture the magic of your event with breathtaking hilltop vistas, serene pond views, and mature Spanish oaks and pine trees scattered throughout our 31-acre property, providing a stunning backdrop for your photos.
                        </li>
                        <li>
                            <b>Elegant Spaces:</b> Our venue features a 2400 sq foot event barn (accommodates up to 150 people), a 2400 sq foot spacious patio with an outdoor ceremony area, and a graveled cocktail area. These offer versatile settings that can accommodate events of all sizes and styles.
                        </li>
                        <li>
                            <b>Exceptional Service:</b> Our dedicated team is committed to making your wedding day flawless, ensuring every detail of your wedding is perfect from start to finish.
                        </li>
                        <li>
                            <b>Convenient Location:</b> Located just 50 minutes from Austin, Acre 31 is easily accessible for you and your guests. It is 1 hour 40 mins from Houston and 2 hours from San Antonio.
                        </li>
                    </ul>
                </div>
                <div className={`${styles['image']}`}>
                    <img src="https://acre31.com/Venue_Couple_at_arch.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs;