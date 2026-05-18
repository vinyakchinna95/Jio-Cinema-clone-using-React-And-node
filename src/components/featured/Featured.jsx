import React from "react";
import styles from "./Featured.module.css";
const Featured =() =>{
    return(
        <>
        <section className={styles.featured}>
            <h1 className={styles.sectiontitle}>Hot Right Now 🔥</h1>
            <div className={styles.imageconatiner}>
            <div className={styles.box}>
                        <img src="https://v3img.voot.com/resizeMedium,w_540,h_540/v3Storage/assets/1x1-1736860115169.jpg" alt="image1" />
                    </div>
                    <div className={styles.box}>
                        <img src="https://v3img.voot.com/resizeMedium,w_540,h_540/v3Storage/assets/1x1-cta-1739365752021.jpg" alt="image2" />
                    </div>
                    <div className={styles.box}>
                        <img src="https://v3img.voot.com/resizeMedium,w_540,h_540/v3Storage/assets/1x1white-1737525174094.jpg" alt="image3" />
                    </div>
                    <div className={styles.box}>
                        <img src="https://v3img.voot.com/resizeMedium,w_540,h_540/v3Storage/assets/1x1-1727440268287.jpg" alt="image4" />
                    </div>
                    <div className={styles.box}>
                        <img src="https://v3img.voot.com/resizeMedium,w_540,h_540/v3Storage/assets/1x1-1737221164744.jpg" alt="image4" />
                    </div>
            </div>
        </section>
        </>
    );
};
export default Featured;