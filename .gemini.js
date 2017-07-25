module.exports = {
    rootUrl: 'http://127.0.0.1:4444:6060',
    gridUrl: 'http://127.0.0.1:4444/wd/hub',
    screenshotsDir: './gemini/screenshots/',

    browsers: {
        PhantomJS: {
            desiredCapabilities: {
                browserName: 'phantomjs'
            }
        }
    }
};


