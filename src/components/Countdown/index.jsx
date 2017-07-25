import React from 'react';
import styles from './styles.css';
import formatTime from '../../utils/formatTime';

export default function({ time, duration }) {
    time = formatTime(time);
    duration = formatTime(duration);
    return <div className={styles['countdown']}>
        {`${time}/${duration}`}
    </div>;
}