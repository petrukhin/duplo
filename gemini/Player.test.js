const playerSelector = '[data-preview=\"Player\"]';

gemini.suite('Player', (suite) => {
    suite.setUrl('/#!/Player')
        .setCaptureElements(playerSelector)
        .capture('plain');
});