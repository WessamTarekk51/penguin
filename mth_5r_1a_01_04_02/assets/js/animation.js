let penguinCharacter = bodymovin.loadAnimation({
    container: document.getElementById('penguinCharacter'),
    path: './assets/json/penguin.json', // required
    renderer: 'svg', // required
    loop: true, // optional
    autoplay: false, // optional
    name: "Feed Right", // optional
});
penguinCharacter.goToAndStop(0, false);


let progressbar = bodymovin.loadAnimation({
    container: document.getElementById('progressbar'),
    path: './assets/json/data.json', // required
    renderer: 'svg', // required
    loop: false, // optional
    autoplay: false, // optional
    name: "Feed Right", // optional
});



progressbar.goToAndStop(0, false);
// infoScreen.playSegments([0, 80], true);
