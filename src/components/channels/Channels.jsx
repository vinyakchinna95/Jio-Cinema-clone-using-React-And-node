import React from "react";
import styles from './Channel.module.css';
import image1 from '../../assets/channel1.jpg';
import image2 from '../../assets/channel2.png';
import image3 from '../../assets/channel3.jpg';
import image4 from '../../assets/channel4.jpg';
import image5 from '../../assets/channel5.jpg';
import image6 from '../../assets/channel6.jpg';
import image7 from '../../assets/channel7.jpg';

const channels = [
    { image: image1 },
    { image: image2 },
    { image: image3 },
    { image: image4 },
    { image: image5 },
    { image: image6 },
    { image: image7 },
    { image: image6 },
    { image: image7 }
];

const Channel = () => {
    return (
        <div className={styles.channels}>
            {channels.map((channel) => (
                <img src={channel.image} alt={`channel`}/>
            ))}
        </div>
    );
};

export default Channel;
