import React from 'react';
import ReactDOM from 'react-dom';
import Player from './components/Player';

ReactDOM.render(
    <Player
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
        width="100%"
        height="320px"
    />,
    document.getElementById('root')
);