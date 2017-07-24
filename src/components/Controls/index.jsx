import React from 'react';
import Countdown from '../Countdown';
import Timeline from '../Timeline';
import PlayButton from '../PlayButton';
import MuteButton from '../MuteButton';
import cx from 'classnames';
import styles from './styles.css'

const HIDE_TIMEOUT = 1000;

export default class Controls extends React.Component {

    constructor() {
        super();
        this.state = { hidden: true }
    }

    render() {
        const { time, duration, onSeek, onClick, playing, toggleMute, muted } = this.props;
        const hidden = this.props.duration === 0 || this.state.hidden;

        const className = cx(styles['controls'], {
            [styles['controls_hidden']]: hidden
        });

        return <div
            className={className}
            onClick={onClick}
            onMouseMove={() => this.scheduleControlsHide()}>

            <PlayButton hidden={playing}/>

            <div className={styles['controls__bottom']} onClick={(e) => e.stopPropagation()}>
                <MuteButton onClick={toggleMute} muted={muted}/>
                <Timeline time={time} duration={duration} onSeek={onSeek}/>
                <Countdown time={time} duration={duration}/>
            </div>
        </div>
    }

    clearControlsHideTimeout() {
        if (this.controlsHideTimeout) {
            clearTimeout(this.controlsHideTimeout);
            this.controlsHideTimeout = 0;
        }
    }

    scheduleControlsHide() {
        if (this.state.hidden) {
            this.setState({ hidden: false });
        }
        this.clearControlsHideTimeout();
        this.controlsHideTimeout = setTimeout(() => this.setState({ hidden: true}), HIDE_TIMEOUT);
    }

    componentWillUnmount() {
        this.clearControlsHideTimeout();
    }
}