module.exports = {
    rootUrl: 'https://premium-jeans.surge.sh',
    gridUrl: 'http://klekh:d7307061-cc43-492f-8d34-302be5b05443@ondemand.saucelabs.com:80/wd/hub',
    screenshotsDir: './gemini/screenshots/',

    browsers: {
        Chrome: {
            desiredCapabilities: {
                browserName: 'chrome'
            }
        }
    }
};
