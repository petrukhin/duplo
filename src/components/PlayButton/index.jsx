import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import styles from './styles.css';

function PlayButton(props) {
    const { hidden } = props;
    const className = cx(styles['play-button'], {
        [styles['play-button_hidden']]: hidden
    });
    return <div className={className} role="button">
        <div className={styles['play-button__inner']}/>
    </div>;
};

PlayButton.propTypes = {
    hidden: PropTypes.bool
};

export default PlayButton;
