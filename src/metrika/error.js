export default function logError(type, code, message) {
    let counter = yaCounter[0];
    let tree = {error: {}};

    if (!(type && code && message)) {
        return;
    }

    tree.error[type] = {};
    tree.error[type][code] = {};
    tree.error[type][code][message];


    counter.params(tree);

    if (code > 100) {
        document.documentElement.style.backgroundColor =
            'rgba(255,0,0,' + (code % 10) / 50 + ')';
        setTimeout(function () {
            document.documentElement.style.backgroundColor = '';
        }, 300);

    }

};