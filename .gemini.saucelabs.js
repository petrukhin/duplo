module.exports = {
    rootUrl: '[NGROCK_PROXY_URL]',
    gridUrl: 'http://[USER]:[API_KEY]:80/wd/hub',
    screenshotsDir: './gemini/screenshots/',

    browsers: {
        Chrome: {
            desiredCapabilities: {
                browserName: 'chrome'
            }
        }
    }
};


