import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Controls from '../Controls';
import styles from './styles.css';
import initMetrika from '../../metrika/mc.js'

/**
 * Simple Video Player
 */
export default class Player extends Component {
    static propTypes = {
        src: PropTypes.string.isRequired,
        poster: PropTypes.string,
        width: PropTypes.string,
        height: PropTypes.string
    };

    static defaultProps = {
        width: '640px',
        height: '360px',
        poster: ''
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

    componentDidMount() {
        initMetrika(45426990);
    }

    render() {
        const { time, duration, playing, muted } = this.state;
        const { poster, width, height } = this.props;

        return <div className={styles['player']} style={{width, height}}>
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
                poster={poster}
                style={{width, height}}
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
        if (time > 10) {
            yaCounter[0].params({
                error: {
                    code: 300,
                    type: 'outOfRange',
                    value: time,
                    maxValue: 10
                }
            })
        }

        if (time > 20) {
            yaCounter[0].params({
                error: {
                    code: 120,
                    type: 'middleRange',
                    value: time,
                    maxValue: 20
                }
            })
        }
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