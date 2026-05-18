import React, { useState, useEffect } from "react";
import styles from "./Slideshow.module.css";
import slide1 from "../../assets/20240905040436_doubleismart.avif";
import slide2 from "../../assets/1.jpeg";
import slide3 from "../../assets/2.jpeg";
import slide4 from "../../assets/3(3).png";
import slide5 from "../../assets/5.png";

const slides = [
    {
        image: slide1,
        title: "Double Ismart",
        details: "2 hr 20 min | Action | 2024 | A",
        description:
            "A dying criminal seeks a rogue scientist's help to transfer his mind into a street-smart renegade with a unique brain port.",
    },
    {
        image: slide2,
        title: "A Good Girl's Guide to Murder",
        details: "2024 | Maturity Rating: U/A 16+ | 1 Season | Drama",
        description:
            "Five years after the murder of a 17-year-old girl in a sleepy English town, one student is determined to uncover the truth and find the real killer.",
    },
    {
        image: slide3,
        title: "Bigg Boss",
        details: "Hindi | Reality | U/A 16+",
        description:
            "Salman Khan returns with Bigg Boss Season 18! Watch celebrities compete for survival in a house full of twists and turns.",
    },
    {
        image: slide4,
        title: "Demon Slayer: Kimetsu no Yaiba",
        details: "Japanese | Anime | U/A 16+",
        description:
            "A young boy joins a group of demon slayers to avenge his family. Demon Slayer Hashira training. Prepare for Muzan's attack! Daily Hindi episodes.",
    },
    {
        image: slide5,
        title: "Fifty Shades Of Grey",
        details: "2 hr 0 min | Drama | 2015 | A",
        description:
            "Literature student Anastasia Steele's life changes forever when she meets handsome, yet tormented, billionaire Christian Grey.",
    },
];

const Slideshow = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);

    useEffect(() => {
        if (!isAutoPlay) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 3000); 

        return () => clearInterval(interval);
    }, [isAutoPlay, currentIndex]);

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        setIsAutoPlay(false); 
    };

    const goToPrevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
        setIsAutoPlay(false); 
    };

    return (
        <div className={styles.slideshowContainer}>
            <button className={styles.leftArrow} onClick={goToPrevSlide}>❮</button>

            <div className={styles.imageslide}>
                <img src={slides[currentIndex].image} alt="slide" className={styles.slideImage} />
                <div className={styles.overlay}>
                    <button className={styles.watchButton}>▶ Watch</button>
                    <h1 className={styles.movieTitle}>{slides[currentIndex].title}</h1>
                    <p className={styles.movieDetails}>{slides[currentIndex].details}</p>
                    <p className={styles.movieDescription}>{slides[currentIndex].description}</p>
                </div>
            </div>

            <button className={styles.rightArrow} onClick={goToNextSlide}>❯</button>
        </div>
    );
};

export default Slideshow;
