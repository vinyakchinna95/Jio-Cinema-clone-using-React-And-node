import React from "react";
import styles from "./Spotlight.module.css";
const Spotlight =() =>{
    return(
        <>
        <div className={styles.container}> 
            <div className={styles.heading}>
                <h1>In The Spotlight</h1>
            </div>
            <div className={styles.imageconatiner}>
                <div className={styles.box}>
                    <img src="https://v3img.voot.com/resizeMedium,w_1920,h_1080/v3Storage/assets/16x9-1739163562207.jpg" alt="image1" />
                </div>
                <div className={styles.box}>
                    <img src="https://v3img.voot.com/resizeMedium,w_1920,h_1080/v3Storage/assets/16x9-1739098116289.jpg" alt="image2" />
                </div>
            </div>
        </div>
        </>
    );
};
export default Spotlight;