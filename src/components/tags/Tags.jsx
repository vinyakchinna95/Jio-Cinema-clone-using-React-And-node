import React, { useState } from "react";
import styles from './Tags.module.css';
const Tags = () => {
    const [tags, settags] = useState([
        "For you",
        "Action",
        "Adventure",
        "Animation",
        "Biography",
        "Comedy",
        "Crime",
        "Documentary",
        "Drama",
        "Family",
        "History",
        "Horror",
        "Thriller",
        "War",
        "Western"
    ])
    return (
        <>
            <div className={styles.tags}>
                {
                    tags.map((tags) => {
                        return <button className={styles.tagnames}>{tags}</button>
                    })
                }
            </div>
        </>
    );
};
export default Tags;