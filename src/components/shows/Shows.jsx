import React, { useEffect, useState } from "react";
import styles from './Shows.module.css';

const SectionWithLogo = ({ title, data }) => (
    <section className={styles.featured}>
        <h1 className={styles.sectiontitle}>{title}</h1>
        <div className={styles.imageconatiner}>
            {data.map((item) => (
                <div key={item.id} className={styles.box}>
                    <div className={styles.logobox}>
                        <img 
                            src="https://v3img.voot.com/v3Storage/menu/jv/premium_badge_tv.svg" 
                            alt="logo" 
                            className={styles.logo} 
                        />
                    </div>
                    <img src={item.image} alt={item.title} />
                </div>
            ))}
        </div>
    </section>
);

const SectionWithoutLogo = ({ title, data }) => (
    <section className={styles.featured}>
        <h1 className={styles.sectiontitle}>{title}</h1>
        <div className={styles.imageconatiner}>
            {data.map((item) => (
                <div key={item.id} className={styles.box}>
                    <img src={item.image} alt={item.title} />
                </div>
            ))}
        </div>
    </section>
);

const Shows = () => {
    const [images, setImages] = useState([]);
    const [serials, setSerials] = useState([]);
    const [telugu, settelugu] = useState([]);
    const [special, specialimg] = useState([]);
    const [Anime, Animeimg] = useState([]);

    const fetchData = (url, setter) => {
        fetch(url)
            .then(response => response.json())
            .then(data => setter(data))
            .catch(error => console.error(`Error fetching ${url}:`, error));
    };

    useEffect(() => {
        fetchData("http://localhost:3000/movies/Hindi%20Movies", setImages);
        fetchData("http://localhost:3000/movies/Hindi%20Serials", setSerials);
        fetchData("http://localhost:3000/movies/Telugu%20Movies", settelugu);
        fetchData("http://localhost:3000/movies/Premium", specialimg);
        fetchData("http://localhost:3000/movies/Anime%20series", Animeimg);
    }, []);

    return (
        <>
            <SectionWithoutLogo title="Your Fav Movies Now On JioCinema🎬🍿" data={images} />
            <SectionWithoutLogo title="Bollywood Drama 🎭💃🎶" data={serials} />
            <SectionWithoutLogo title="Tollywood Blockbusters 🔥🎥" data={telugu} />
            <SectionWithLogo title="Best In Premium On JioCinema" data={special} />
            <SectionWithoutLogo title="Anime Universe On JioCinema" data={Anime} />
        </>
    );
};

export default Shows;
