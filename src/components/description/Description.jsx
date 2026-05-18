import React from "react";
import styles from './Description.module.css'
const Description = () => {
    return (
        <>
            <div className={styles.des_container}>
                <div className={styles.support_conatiner}>
                    <div className={styles.support}>
                        <div className={styles.support_title}>
                            <h2>JioCinema</h2>
                        </div>
                        <ul>
                            <a href=""><h4>For You</h4></a>
                            <a href=""><h4>Sports</h4></a>
                            <a href=""><h4>TV Show</h4></a>
                            <a href=""><h4>Movies</h4></a>
                        </ul>
                    </div>
                    <div className={styles.support}>
                        <div className={styles.support_title}>
                            <h2>Support</h2>
                        </div>
                        <ul>
                            <a href="" ><h4>Help Center</h4></a>
                            <a href=""><h4>Terms Of Use</h4></a>
                            <a href=""><h4>Privacy Policy</h4></a>
                            <a href=""><h4>Content Complaints</h4></a>

                        </ul>
                    </div>
                </div>
                <div className={styles.contact}>
                    <div className={styles.contact_conatiner}>
                        <h2 className={styles.contact_conatiner_title}>
                            Connect With
                        </h2>
                        <div className={styles.contact_list}>
                            <div><img src="https://www.jiocinema.com/images/facebook.svg" alt="logo" /></div>
                            <div><img src="https://www.jiocinema.com/images/x.svg" alt="logo" /></div>
                            <div><img src="https://www.jiocinema.com/images/instagram.svg" alt="logo" /></div>
                            <div><img src="https://www.jiocinema.com/images/youtube.svg" alt="logo" /></div>
                        </div>
                    </div>
                    <div className={styles.contact_conatiner}>
                        <h2 className={styles.contact_conatiner_title}>
                            Download the App
                        </h2>
                        <div className={styles.contact_list_1}>
                            <div><img src="https://img10.hotstar.com/image/upload/f_auto,q_90/v1661346101/google-playstore" alt="logo" /></div>
                            <div><img src="https://img10.hotstar.com/image/upload/f_auto,q_90/v1661346071/ios-appstore" alt="logo" /></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.finalconatiner}>
                <div className={styles.finalconatiner_1}>
                    <p>Copyright © 2025 Star India Private Limited. All rights reserved.</p>
                </div>
            </div>
        </>
    );
};
export default Description;