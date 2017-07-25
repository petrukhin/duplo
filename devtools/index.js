window.addEventListener('deviceorientation', function (data) {
    console.log(data);
}, true);

window.addEventListener('orientationchange', function (e) {
    console.log('angle', window.orientation, e);
}, true);