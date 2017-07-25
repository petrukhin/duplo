import React from 'react';
import ReactDOM from 'react-dom';
import Player from './components/Player';

ReactDOM.render(
    <Player
        poster=""
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
        width="100%"
        height="400px"
    />,
    document.getElementById('root')
);