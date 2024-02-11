const firstDisplay = document.getElementById("firstDisplay");
const startGame = document.getElementById("startGame");
const prices = document.getElementById("prices");
const q1 = document.getElementById("q1");
const q2 = document.getElementById("q2");
const q3 = document.getElementById("q3");
const q4 = document.getElementById("q4");
const q5 = document.getElementById("q5");
const q6 = document.getElementById("q6");
const q7 = document.getElementById("q7");
const q8 = document.getElementById("q8");
const q9 = document.getElementById("q9");
const q10 = document.getElementById("q10");
const q11 = document.getElementById("q11");
const q12 = document.getElementById("q12");
const q13 = document.getElementById("q13");
const q14 = document.getElementById("q14");
const q15 = document.getElementById("q15");
const main = document.getElementById("main");
const questionTitle = document.getElementById("questionTitle");
const firstOption = document.getElementById("firstOption");
const secondOption = document.getElementById("secondOption");
const thirdOption = document.getElementById("thirdOption");
const fourthOption = document.getElementById("fourthOption");
const lossTitle = document.getElementById("lossTitle");
const audio = new Audio();

let totalPoints = 0;
function success() {
  console.log("Správná odpověď")
}
startGame.onclick = () => {
  audio.src = "./res/audio/honzovoOblibene.mp3";
  audio.play();
  firstDisplay.style.display = "none";
  prices.style.display = "inline";
  document.body.style.backgroundImage = "url(./res/img/untillTill.jpg)";
};
q1.onclick = async () => {
  // JSON záležitost
  const data = await loadData();
  questionTitle.innerHTML = `<h2>${data[0].question}</h2>`;
  firstOption.innerHTML = `<h2>${data[0].A}</h2>`;
  secondOption.innerHTML = `<h2>${data[0].B}</h2>`;
  thirdOption.innerHTML = `<h2>${data[0].C}</h2>`;
  fourthOption.innerHTML = `<h2>${data[0].D}</h2>`;

  // Změna struktury webu
  prices.style.display = "none";
  document.body.style.backgroundImage = "url(./res/img/foto.jpg)";
  audio.src = "./res/audio/questionTime.mp3";
  audio.currentTime = 7;
  audio.play();
  main.style.display = "inline";

  // Volba správné odpovědi:
  firstOption.onclick = () => {
    firstOption.style.backgroundColor = "lime";
    addPoints();
    setTimeout(() => {
      audio.src = "./res/audio/honzovoOblibene.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/untillTill.jpg)";
      main.style.display = "none";
      q1.style.color = "aqua";
    }, 1500);
  };

  secondOption.onclick = () => {
    secondOption.style.backgroundColor = "red";
    setTimeout(() => {
      lossTitle.style.display = "inline";
      audio.src = "./res/audio/loss.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/pepegas.PNG)";
      main.style.display = "none";
      q1.style.color = "aqua";
      prices.style.display = "none";
    }, 1500);
  };

  thirdOption.onclick = () => {
    thirdOption.style.backgroundColor = "red";
    setTimeout(() => {
      lossTitle.style.display = "inline";
      audio.src = "./res/audio/loss.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/pepegas.PNG)";
      main.style.display = "none";
      q1.style.color = "aqua";
      prices.style.display = "none";
    }, 1500);
  };

  fourthOption.onclick = () => {
    fourthOption.style.backgroundColor = "red";
    setTimeout(() => {
      lossTitle.style.display = "inline";
      audio.src = "./res/audio/loss.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/pepegas.PNG)";
      main.style.display = "none";
      q1.style.color = "aqua";
      prices.style.display = "none";
    }, 1500);
  };
};

if(this.success) {
  q2.onclick = async () => {
    // Default nastavení
    firstOption.style.backgroundColor = "black";
    secondOption.style.backgroundColor = "black";
    thirdOption.style.backgroundColor = "black";
    fourthOption.style.backgroundColor = "black";
    // JSON záležitost
    const data = await loadData();
    questionTitle.innerHTML = `<h2>${data[0].question}</h2>`;
    firstOption.innerHTML = `<h2>${data[0].A}</h2>`;
    secondOption.innerHTML = `<h2>${data[0].B}</h2>`;
    thirdOption.innerHTML = `<h2>${data[0].C}</h2>`;
    fourthOption.innerHTML = `<h2>${data[0].D}</h2>`;
  
    // Změna struktury webu
    prices.style.display = "none";
    document.body.style.backgroundImage = "url(./res/img/foto.jpg)";
    audio.src = "./res/audio/questionTime.mp3";
    audio.currentTime = 7;
    audio.play();
    main.style.display = "inline";
  
    // Volba správné odpovědi:
    firstOption.onclick = () => {
      firstOption.style.backgroundColor = "lime";
      addPoints();
      setTimeout(() => {
        audio.src = "./res/audio/honzovoOblibene.mp3";
        audio.play();
        firstDisplay.style.display = "none";
        prices.style.display = "inline";
        document.body.style.backgroundImage = "url(./res/img/untillTill.jpg)";
        main.style.display = "none";
        q1.style.color = "aqua";
      }, 1500);
    };
  
    secondOption.onclick = () => {
      secondOption.style.backgroundColor = "red";
      setTimeout(() => {
        lossTitle.style.display = "inline";
        audio.src = "./res/audio/loss.mp3";
        audio.play();
        firstDisplay.style.display = "none";
        prices.style.display = "inline";
        document.body.style.backgroundImage = "url(./res/img/pepegas.PNG)";
        main.style.display = "none";
        q1.style.color = "aqua";
        prices.style.display = "none";
      }, 1500);
    };
  
    thirdOption.onclick = () => {
      thirdOption.style.backgroundColor = "red";
      setTimeout(() => {
        lossTitle.style.display = "inline";
        audio.src = "./res/audio/loss.mp3";
        audio.play();
        firstDisplay.style.display = "none";
        prices.style.display = "inline";
        document.body.style.backgroundImage = "url(./res/img/pepegas.PNG)";
        main.style.display = "none";
        q1.style.color = "aqua";
        prices.style.display = "none";
      }, 1500);
    };
  
    fourthOption.onclick = () => {
      fourthOption.style.backgroundColor = "red";
      setTimeout(() => {
        lossTitle.style.display = "inline";
        audio.src = "./res/audio/loss.mp3";
        audio.play();
        firstDisplay.style.display = "none";
        prices.style.display = "inline";
        document.body.style.backgroundImage = "url(./res/img/pepegas.PNG)";
        main.style.display = "none";
        q1.style.color = "aqua";
        prices.style.display = "none";
      }, 1500);
    };
  };
}
const loadData = async () => {
  const file = await fetch("../res/data/data.json");
  const data = await file.json();
  return data;
};

window.onload = async () => {
  const data = await loadData();
  /*
    for(let i = 0; i < data.length; i++) {
        console.log(data[i].question);
    }
    */
};
