let penguinCharacter = bodymovin.loadAnimation({
    container: document.getElementById('penguinCharacter'),
    path: './content/json/Penguin.json', // required
    renderer: 'svg', // required
    loop: true, // optional
    autoplay: false, // optional
    name: "Feed Right", // optional
});


penguinCharacter.goToAndStop(0, false);
// infoScreen.playSegments([0, 80], true);

