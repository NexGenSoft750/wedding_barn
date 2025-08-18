import styles from "./LookAroundCard.module.scss";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

function LookAroundCard({ bgImage, headingText, text, linkText, linkHref }) {
    return (
        <div className={`${styles.card}`}>
            <div className={`${styles.img}`} style={{ backgroundImage: 'url(' + bgImage + ')' }}></div>
            <div className={`${styles.content}`}>
                <h5>{ headingText }</h5>
                <p>{ text }</p>
                <a href={linkHref}>{ linkText } <MdKeyboardDoubleArrowRight /></a>
            </div>
        </div>
    )
}

export default LookAroundCard;