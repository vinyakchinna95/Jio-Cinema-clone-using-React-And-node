import React from "react";
import styles from './Header.module.css';
import voiceSearchIcon from '../../assets/voice-search.svg'
import searchbox from '../../assets/ic_search.svg'
import avatar from '../../assets/avatar_guest.svg'

const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.navigation}>
                <div className={styles.logoContainer}>
                    <img src="https://www.jiocinema.com/images/jc_logo_v2.svg" alt="JioCinema Logo" className={styles.logo} />
                    <button className={styles.premiumButton}>
                        <img src="https://www.jiocinema.com/images/subscription/crown.svg" alt="Premium Icon" />
                        Go Premium
                    </button>
                </div>
                <ul className={styles.navLinks}>
                    <li><a href="Home">Home</a></li>
                    <li><a href="Sports">Sports</a></li>
                    <li><a href="Movies">Movies</a></li>
                    <li><a href="Shows">TV Shows</a></li>
                    <li><a href="More">More</a></li>
                </ul>
            </nav>
            <div className={styles.searchContainer}>
                <div className={styles.searchBox}>
                    <span className={styles.Icon}><img src={searchbox} alt="search" /></span>
                    <input type="text" placeholder="Movies, Shows and more" className={styles.searchInput} />
                    <span className={styles.Icon}><img src={voiceSearchIcon} alt="speak" /></span>
                </div>
                <button className={styles.guest}><img src={avatar} alt="guest" /></button>
            </div>
        </header>
    );
};

export default Header;
