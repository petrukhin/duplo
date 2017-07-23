import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Controls from "../Controls";
import styles from './styles.css';

/**
 * Simple Player without Chapters and Image
 */
export default class Player extends Component {
    static propTypes = {
        src: PropTypes.string.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            duration: 0,
            time: 0,
            playing: false,
            muted: props.muted || false
        }
    }
    render() {
        const { time, duration, playing, muted } = this.state;

        return <div className={styles['player']}>
            <video
                className={styles['player__video-tag']}
                src={this.props.src}
                ref={(video) => this.video = video}
                onDurationChange={() => this.setState({ duration: this.video.duration })}
                onTimeUpdate={() => this.setState({ time: this.video.currentTime })}
                onPlay={() => this.onVideoPlayingChange()}
                onPlaying={() => this.onVideoPlayingChange()}
                onPause={() => this.onVideoPlayingChange()}
                onEnded={() => this.onVideoPlayingChange()}
                muted={muted}
            />
            <Controls
                time={time} duration={duration} playing={playing}
                onSeek={(val) => this.seek(val)}
                onClick={() => this.togglePlay()}
                muted={muted}
                toggleMute={() => this.toggleMute()}
            />
        </div>
    }

    seek(time) {
        this.setState({ time });
        this.video.currentTime = time;
    }

    togglePlay() {
        if (this.video.paused) {
            this.video.play();
        } else {
            this.video.pause();
        }
    }

    toggleMute() {
        console.log(this.state.muted, '->', !this.state.muted);
        this.setState({ muted: !this.state.muted })
    }

    onVideoPlayingChange() {
        this.setState({ playing: !this.video.paused })
    }
}