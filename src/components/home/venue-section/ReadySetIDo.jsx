import styles from './ReadySetIDo.module.scss';

function ReadySetIDo() {
    return (
        <div class={`${styles.main}`}>
            <h3 className={`${styles.mobile}`}>Ready, Set, “I do"!</h3>
            <div className={`${styles.content}`}>
                <div className={`${styles['image']}`}>
                    <img src="https://acre31.com/Venue_Outside_Arch_7.jpg" alt="" />
                </div>
                <div className={`${styles['list-items']}`}>
                    <h3 className={`${styles.desk}`}>Ready, Set, “I do"!</h3>
                    <p>
                        Your love story has been a journey filled with unforgettable moments, and we are deeply honored to be a part of this special chapter. At Acre 31, our dedication extends far beyond providing a stunning wedding venue: we aim to craft unforgettable moments that you will cherish forever.
                    </p>
                    <p>
                        Ready to learn more? Experience the beauty and charm of Acre 31 for yourself and discover how Acre 31 can offer you an unforgettable experience at an unbeatable value. Schedule a tour today and start planning the wedding of your dreams.
                    </p>
                    <div className={`${styles['btn-tour-schedule']}`}>
                        <button>Schedule A Tour</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReadySetIDo;