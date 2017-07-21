import React from 'react';
import styles from './styles.css';

const pad = (t) => t < 10 ? `0${t}` : t;

const formatTime = (t) => {
    const min = Math.floor(t / 60);
    const sec = Math.round(t - min * 60);
    return `${pad(min)}:${pad(sec)}`;
};

export default function({ time, duration }) {
    time = formatTime(time);
    duration = formatTime(duration);
    return <div className={styles['countdown']}>
        {`${time}/${duration}`}
    </div>;
}