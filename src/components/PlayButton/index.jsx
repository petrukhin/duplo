import React from 'react';
import cx from 'classnames';
import styles from './styles.css';

export default function(props) {
    const { hidden } = props;
    const className = cx(styles['play-button'], {
        [styles['play-button_hidden']]: hidden
    });
    return <div className={className} role="button">
        <div className={styles['play-button__inner']}/>
    </div>;
};
