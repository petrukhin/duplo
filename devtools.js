window.addEventListener('orientationchange', function (e) {
    console.log('orientationchange', window.orientation, e);
}, true);

window.addEventListener('deviceorientation', function (data) {
    console.log('deviceorientation', data);
}, true);