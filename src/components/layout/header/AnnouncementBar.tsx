import styles from './AnnouncementBar.module.scss';

function AnnouncementBar() {
    return (
        <div className={`${styles['announcement-bar']}`}>
            <h2>Open house <br/> sunday february 2nd 12:00–3:00</h2>
            <a href="https://forms.gle/VXMdyEYTWB2YAF3w5" target="_blank" className="button-link">
                <button className={`${styles['rsvp']}`}>RSVP</button>
            </a>
        </div>
    )
}

export default AnnouncementBar;