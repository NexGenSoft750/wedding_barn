import LookAroundCard from './LookAroundCard';
import styles from "./LookAround.module.scss";

function LookAround () {
    return (
        <section className={`${styles['look-around-section']}`}>
            <div className={`${styles.head}`}>
                <hr />
                <span>LOOK AROUND</span>
            </div>
            <div className={`${styles.cards} container`}>
                <LookAroundCard bgImage={"https://acre31.com/Venue_Amenities.jpeg"} headingText={"amenities"} text={"INCLUDED IN YOUR PACKAGE"} linkText={"TAKE A LOOK"} linkHref={'/'}/>
                <LookAroundCard bgImage={"https://acre31.com/Venue_Photos.jpeg"} headingText={"photos"} text={"more photos and videos"} linkText={"yes, please!"} linkHref={'/'}/>
                <LookAroundCard bgImage={"https://acre31.com/Venue_Vendors.png"} headingText={"amenities"} text={"INCLUDED IN YOUR PACKAGE"} linkText={"TAKE A LOOK"} linkHref={'/'}/>
                <LookAroundCard bgImage={"https://acre31.com/Venue_Amenities.jpeg"} headingText={"amenities"} text={"INCLUDED IN YOUR PACKAGE"} linkText={"TAKE A LOOK"} linkHref={'/'}/>
                <LookAroundCard bgImage={"https://acre31.com/Venue_Amenities.jpeg"} headingText={"amenities"} text={"INCLUDED IN YOUR PACKAGE"} linkText={"TAKE A LOOK"} linkHref={'/'}/>
            </div>
        </section>
    )
}

export default LookAround;