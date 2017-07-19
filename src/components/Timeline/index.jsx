import React from 'react';
import styles from './styles.css';

export default class Player extends React.Component {
    render() {
        const { time, duration } = this.props;
        return <input
            className={styles['timeline']}
            ref={(input) => this.input = input}
            type="range"
            min={0}
            max={duration}
            value={time}
            onChange={() => this.onChange()}
        />;
    }

    onChange() {
        this.props.onSeek(this.input.value);
    }
}
