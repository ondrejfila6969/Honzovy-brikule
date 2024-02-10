const firstDisplay = document.getElementById("firstDisplay");
const startGame = document.getElementById("startGame");
const prices = document.getElementById("prices");
const audio = new Audio();

startGame.onclick = () => {
    audio.src = "./res/audio/honzovoOblibene.mp3";
    audio.play();
    firstDisplay.style.display = "none";
    prices.style.display = "inline";
    document.body.style.backgroundImage = "url(./res/img/untillTill.jpg)";
}