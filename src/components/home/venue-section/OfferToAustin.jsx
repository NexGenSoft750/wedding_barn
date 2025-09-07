import styles from './OfferToAustin.module.scss';

function OfferToAustin() {
    return (
        <div className={`${styles.main}`}>
            <h3>What We Offer To Austin Weddings</h3>
            <div className={`${styles.content}`}>
                <div className={`${styles['list-items']}`}>
                    <ul>
                        <li>
                            <b>Single day, multi-day and microweddings packages:</b> Simplify your planning with our comprehensive wedding packages. Save more with multi-day or microwedding packages.
                        </li>
                        <li>
                            <b>Customizable Options:</b>  Personalize your wedding to reflect your style and vision with our flexible and affordable options.
                        </li>
                        <li>
                            <b>Get-Ready Bridal and Groom's Suites:</b>  Bridal suite and groom's saloon
                        </li>
                    </ul>
                </div>
                <div className={`${styles['image']}`}>
                    <img src="https://acre31.com/Venue_CoupleByTree.jpeg" alt="" />
                    <div className={`${styles['details']}`}>
                        <h3>It's all in the details!</h3>
                        <button className={`${styles['cta']}`}>View Amenities</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OfferToAustin;