const firstDisplay = document.getElementById("firstDisplay");
const startGame = document.getElementById("startGame");
const prices = document.getElementById("prices");
const q1 = document.getElementById("q1");
const q2 = document.getElementById("q2");
const q3 = document.getElementById("q3");
const q4 = document.getElementById("q4");
const q5 = document.getElementById("q5");
const q5title = document.getElementById("q5title");
const q6 = document.getElementById("q6");
const q7 = document.getElementById("q7");
const q8 = document.getElementById("q8");
const q9 = document.getElementById("q9");
const q10 = document.getElementById("q10");
const q10title = document.getElementById("q10title");
const q11 = document.getElementById("q11");
const q12 = document.getElementById("q12");
const q13 = document.getElementById("q13");
const q14 = document.getElementById("q14");
const q15 = document.getElementById("q15");
const q15title = document.getElementById("q15title");
const main = document.getElementById("main");
const questionTitle = document.getElementById("questionTitle");
const firstOption = document.getElementById("firstOption");
const secondOption = document.getElementById("secondOption");
const thirdOption = document.getElementById("thirdOption");
const fourthOption = document.getElementById("fourthOption");
const lossTitle = document.getElementById("lossTitle");
const audio = new Audio();

let totalLevels = 0;



window.onload = async () => {
  const data = await loadData();
  // 1. OTÁZKA
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
    totalLevels++;
    setTimeout(() => {
      audio.src = "./res/audio/honzovoOblibene.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/untillTill.jpg)";
      main.style.display = "none";
      q1.style.color = "aqua";
      console.log(totalLevels);
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

// 2. OTÁZKA
q2.onclick = async () => {
  // Default nastavení
  firstOption.style.backgroundColor = "black";
  secondOption.style.backgroundColor = "black";
  thirdOption.style.backgroundColor = "black";
  fourthOption.style.backgroundColor = "black";

  // JSON záležitost
  const data = await loadData();
  questionTitle.innerHTML = `<h2>${data[1].question}</h2>`;
  firstOption.innerHTML = `<h2>${data[1].A}</h2>`;
  secondOption.innerHTML = `<h2>${data[1].B}</h2>`;
  thirdOption.innerHTML = `<h2>${data[1].C}</h2>`;
  fourthOption.innerHTML = `<h2>${data[1].D}</h2>`;

  // Změna struktury webu
  prices.style.display = "none";
  document.body.style.backgroundImage = "url(./res/img/foto.jpg)";
  audio.src = "./res/audio/questionTime.mp3";
  audio.currentTime = 7;
  audio.play();
  main.style.display = "inline";

  // Volba správné odpovědi:
  firstOption.onclick = () => {
    firstOption.style.backgroundColor = "red";
    thirdOption.style.backgroundColor = "lime";
    setTimeout(() => {
      lossTitle.style.display = "inline";
      audio.src = "./res/audio/loss.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/pepegas.PNG)";
      main.style.display = "none";
      prices.style.display = "none";
    }, 1500);
  };

  secondOption.onclick = () => {
    secondOption.style.backgroundColor = "red";
    thirdOption.style.backgroundColor = "lime";
    setTimeout(() => {
      lossTitle.style.display = "inline";
      audio.src = "./res/audio/loss.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/pepegas.PNG)";
      main.style.display = "none";
      prices.style.display = "none";
    }, 1500);
  };

  thirdOption.onclick = () => {
    thirdOption.style.backgroundColor = "lime";
    totalLevels++;
    setTimeout(() => {
      audio.src = "./res/audio/honzovoOblibene.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/untillTill.jpg)";
      main.style.display = "none";
      q2.style.color = "aqua";
    }, 1500);
  };

  fourthOption.onclick = () => {
    fourthOption.style.backgroundColor = "red";
    thirdOption.style.backgroundColor = "lime";
    setTimeout(() => {
      lossTitle.style.display = "inline";
      audio.src = "./res/audio/loss.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/pepegas.PNG)";
      main.style.display = "none";
      prices.style.display = "none";
    }, 1500);
  };
};

// 3. OTÁZKA
q3.onclick = async () => {
  // Default nastavení
  firstOption.style.backgroundColor = "black";
  secondOption.style.backgroundColor = "black";
  thirdOption.style.backgroundColor = "black";
  fourthOption.style.backgroundColor = "black";

  // JSON záležitost
  const data = await loadData();
  questionTitle.innerHTML = `<h2>${data[2].question}</h2>`;
  firstOption.innerHTML = `<h2>${data[2].A}</h2>`;
  secondOption.innerHTML = `<h2>${data[2].B}</h2>`;
  thirdOption.innerHTML = `<h2>${data[2].C}</h2>`;
  fourthOption.innerHTML = `<h2>${data[2].D}</h2>`;

  // Změna struktury webu
  prices.style.display = "none";
  document.body.style.backgroundImage = "url(./res/img/foto.jpg)";
  audio.src = "./res/audio/questionTime.mp3";
  audio.currentTime = 7;
  audio.play();
  main.style.display = "inline";

  // Volba správné odpovědi:
  firstOption.onclick = () => {
    firstOption.style.backgroundColor = "red";
    fourthOption.style.backgroundColor = "lime";
    setTimeout(() => {
      lossTitle.style.display = "inline";
      audio.src = "./res/audio/loss.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/pepegas.PNG)";
      main.style.display = "none";
      prices.style.display = "none";
    }, 1500);
  };

  secondOption.onclick = () => {
    secondOption.style.backgroundColor = "red";
    fourthOption.style.backgroundColor = "lime";
    setTimeout(() => {
      lossTitle.style.display = "inline";
      audio.src = "./res/audio/loss.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/pepegas.PNG)";
      main.style.display = "none";
      prices.style.display = "none";
    }, 1500);
  };

  thirdOption.onclick = () => {
    thirdOption.style.backgroundColor = "red";
    fourthOption.style.backgroundColor = "lime";
    setTimeout(() => {
      lossTitle.style.display = "inline";
      audio.src = "./res/audio/loss.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/pepegas.PNG)";
      main.style.display = "none";
      prices.style.display = "none";
    }, 1500);
  };

  fourthOption.onclick = () => {
    fourthOption.style.backgroundColor = "lime";
    totalLevels++;
    setTimeout(() => {
      audio.src = "./res/audio/honzovoOblibene.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/untillTill.jpg)";
      main.style.display = "none";
      q3.style.color = "aqua";
    }, 1500);
  };
};

// 4. OTÁZKA
q4.onclick = async () => {
  // Default nastavení
  firstOption.style.backgroundColor = "black";
  secondOption.style.backgroundColor = "black";
  thirdOption.style.backgroundColor = "black";
  fourthOption.style.backgroundColor = "black";

  // JSON záležitost
  const data = await loadData();
  questionTitle.innerHTML = `<h2>${data[3].question}</h2>`;
  firstOption.innerHTML = `<h2>${data[3].A}</h2>`;
  secondOption.innerHTML = `<h2>${data[3].B}</h2>`;
  thirdOption.innerHTML = `<h2>${data[3].C}</h2>`;
  fourthOption.innerHTML = `<h2>${data[3].D}</h2>`;

  // Změna struktury webu
  prices.style.display = "none";
  document.body.style.backgroundImage = "url(./res/img/foto.jpg)";
  audio.src = "./res/audio/questionTime.mp3";
  audio.currentTime = 7;
  audio.play();
  main.style.display = "inline";

  // Volba správné odpovědi:
  firstOption.onclick = () => {
    firstOption.style.backgroundColor = "red";
    secondOption.style.backgroundColor = "lime";
    setTimeout(() => {
      lossTitle.style.display = "inline";
      audio.src = "./res/audio/loss.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/pepegas.PNG)";
      main.style.display = "none";
      prices.style.display = "none";
    }, 1500);
  };

  secondOption.onclick = () => {
    secondOption.style.backgroundColor = "lime";
    totalLevels++;
    setTimeout(() => {
      audio.src = "./res/audio/honzovoOblibene.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/untillTill.jpg)";
      main.style.display = "none";
      q4.style.color = "aqua";
    }, 1500);
  };

  thirdOption.onclick = () => {
    thirdOption.style.backgroundColor = "red";
    secondOption.style.backgroundColor = "lime";
    setTimeout(() => {
      lossTitle.style.display = "inline";
      audio.src = "./res/audio/loss.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/pepegas.PNG)";
      main.style.display = "none";
      prices.style.display = "none";
    }, 1500);
  };

  fourthOption.onclick = () => {
    fourthOption.style.backgroundColor = "red";
    secondOption.style.backgroundColor = "lime";
    setTimeout(() => {
      lossTitle.style.display = "inline";
      audio.src = "./res/audio/loss.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/pepegas.PNG)";
      main.style.display = "none";
      prices.style.display = "none";
    }, 1500);
  };
};

// 5. OTÁZKA
q5.onclick = async () => {
  // Default nastavení
  firstOption.style.backgroundColor = "black";
  secondOption.style.backgroundColor = "black";
  thirdOption.style.backgroundColor = "black";
  fourthOption.style.backgroundColor = "black";

  // JSON záležitost
  const data = await loadData();
  questionTitle.innerHTML = `<h2>${data[4].question}</h2>`;
  firstOption.innerHTML = `<h2>${data[4].A}</h2>`;
  secondOption.innerHTML = `<h2>${data[4].B}</h2>`;
  thirdOption.innerHTML = `<h2>${data[4].C}</h2>`;
  fourthOption.innerHTML = `<h2>${data[4].D}</h2>`;

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
    totalLevels++;
    setTimeout(() => {
      audio.src = "./res/audio/honzovoOblibene.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/untillTill.jpg)";
      main.style.display = "none";
      q5title.style.color = "aqua";
      q5.style.backgroundColor = "brown";
      console.log(totalLevels);
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
      q5.style.color = "aqua";
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
      q5.style.color = "aqua";
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
      q5.style.color = "aqua";
      prices.style.display = "none";
    }, 1500);
  };
};

// 6. OTÁZKA
q6.onclick = async () => {
  // Default nastavení
  firstOption.style.backgroundColor = "black";
  secondOption.style.backgroundColor = "black";
  thirdOption.style.backgroundColor = "black";
  fourthOption.style.backgroundColor = "black";

  // JSON záležitost
  const data = await loadData();
  questionTitle.innerHTML = `<h2>${data[5].question}</h2>`;
  firstOption.innerHTML = `<h2>${data[5].A}</h2>`;
  secondOption.innerHTML = `<h2>${data[5].B}</h2>`;
  thirdOption.innerHTML = `<h2>${data[5].C}</h2>`;
  fourthOption.innerHTML = `<h2>${data[5].D}</h2>`;

  // Změna struktury webu
  prices.style.display = "none";
  document.body.style.backgroundImage = "url(./res/img/foto.jpg)";
  audio.src = "./res/audio/questionTime.mp3";
  audio.currentTime = 7;
  audio.play();
  main.style.display = "inline";

  // Volba správné odpovědi:
  firstOption.onclick = () => {
    firstOption.style.backgroundColor = "red";
    secondOption.style.backgroundColor = "lime";
    setTimeout(() => {
      lossTitle.style.display = "inline";
      audio.src = "./res/audio/loss.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/pepegas.PNG)";
      main.style.display = "none";
      prices.style.display = "none";
    }, 1500);
  };

  secondOption.onclick = () => {
    secondOption.style.backgroundColor = "lime";
    totalLevels++;
    setTimeout(() => {
      audio.src = "./res/audio/honzovoOblibene.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/untillTill.jpg)";
      main.style.display = "none";
      q6.style.color = "aqua";
    }, 1500);
  };

  thirdOption.onclick = () => {
    thirdOption.style.backgroundColor = "red";
    secondOption.style.backgroundColor = "lime";
    setTimeout(() => {
      lossTitle.style.display = "inline";
      audio.src = "./res/audio/loss.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/pepegas.PNG)";
      main.style.display = "none";
      prices.style.display = "none";
    }, 1500);
  };

  fourthOption.onclick = () => {
    fourthOption.style.backgroundColor = "red";
    secondOption.style.backgroundColor = "lime";
    setTimeout(() => {
      lossTitle.style.display = "inline";
      audio.src = "./res/audio/loss.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/pepegas.PNG)";
      main.style.display = "none";
      prices.style.display = "none";
    }, 1500);
  };
};

// 7. OTÁZKA
q7.onclick = async () => {
  // Default nastavení
  firstOption.style.backgroundColor = "black";
  secondOption.style.backgroundColor = "black";
  thirdOption.style.backgroundColor = "black";
  fourthOption.style.backgroundColor = "black";

  // JSON záležitost
  const data = await loadData();
  questionTitle.innerHTML = `<h2>${data[6].question}</h2>`;
  firstOption.innerHTML = `<h2>${data[6].A}</h2>`;
  secondOption.innerHTML = `<h2>${data[6].B}</h2>`;
  thirdOption.innerHTML = `<h2>${data[6].C}</h2>`;
  fourthOption.innerHTML = `<h2>${data[6].D}</h2>`;

  // Změna struktury webu
  prices.style.display = "none";
  document.body.style.backgroundImage = "url(./res/img/foto.jpg)";
  audio.src = "./res/audio/questionTime.mp3";
  audio.currentTime = 7;
  audio.play();
  main.style.display = "inline";

  // Volba správné odpovědi:
  firstOption.onclick = () => {
    firstOption.style.backgroundColor = "red";
    fourthOption.style.backgroundColor = "lime";
    setTimeout(() => {
      lossTitle.style.display = "inline";
      audio.src = "./res/audio/loss.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/pepegas.PNG)";
      main.style.display = "none";
      prices.style.display = "none";
    }, 1500);
  };

  secondOption.onclick = () => {
    secondOption.style.backgroundColor = "red";
    fourthOption.style.backgroundColor = "lime";
    setTimeout(() => {
      lossTitle.style.display = "inline";
      audio.src = "./res/audio/loss.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/pepegas.PNG)";
      main.style.display = "none";
      prices.style.display = "none";
    }, 1500);
  };

  thirdOption.onclick = () => {
    thirdOption.style.backgroundColor = "red";
    fourthOption.style.backgroundColor = "lime";
    setTimeout(() => {
      lossTitle.style.display = "inline";
      audio.src = "./res/audio/loss.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/pepegas.PNG)";
      main.style.display = "none";
      prices.style.display = "none";
    }, 1500);
  };

  fourthOption.onclick = () => {
    fourthOption.style.backgroundColor = "lime";
    totalLevels++;
    setTimeout(() => {
      audio.src = "./res/audio/honzovoOblibene.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/untillTill.jpg)";
      main.style.display = "none";
      q7.style.color = "aqua";
    }, 1500);
  };
};

// 8. OTÁZKA
q8.onclick = async () => {
  // Default nastavení
  firstOption.style.backgroundColor = "black";
  secondOption.style.backgroundColor = "black";
  thirdOption.style.backgroundColor = "black";
  fourthOption.style.backgroundColor = "black";
  // JSON záležitost
  const data = await loadData();
  questionTitle.innerHTML = `<h2>${data[7].question}</h2>`;
  firstOption.innerHTML = `<h2>${data[7].A}</h2>`;
  secondOption.innerHTML = `<h2>${data[7].B}</h2>`;
  thirdOption.innerHTML = `<h2>${data[7].C}</h2>`;
  fourthOption.innerHTML = `<h2>${data[7].D}</h2>`;

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
    totalLevels++;
    setTimeout(() => {
      audio.src = "./res/audio/honzovoOblibene.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/untillTill.jpg)";
      main.style.display = "none";
      q8.style.color = "aqua";
      console.log(totalLevels);
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
      q8.style.color = "aqua";
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
      q8.style.color = "aqua";
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
      q8.style.color = "aqua";
      prices.style.display = "none";
    }, 1500);
  };
};

// 9. OTÁZKA
q9.onclick = async () => {
  // Default nastavení
  firstOption.style.backgroundColor = "black";
  secondOption.style.backgroundColor = "black";
  thirdOption.style.backgroundColor = "black";
  fourthOption.style.backgroundColor = "black";

  // JSON záležitost
  const data = await loadData();
  questionTitle.innerHTML = `<h2>${data[8].question}</h2>`;
  firstOption.innerHTML = `<h2>${data[8].A}</h2>`;
  secondOption.innerHTML = `<h2>${data[8].B}</h2>`;
  thirdOption.innerHTML = `<h2>${data[8].C}</h2>`;
  fourthOption.innerHTML = `<h2>${data[8].D}</h2>`;

  // Změna struktury webu
  prices.style.display = "none";
  document.body.style.backgroundImage = "url(./res/img/foto.jpg)";
  audio.src = "./res/audio/questionTime.mp3";
  audio.currentTime = 7;
  audio.play();
  main.style.display = "inline";

  // Volba správné odpovědi:
  firstOption.onclick = () => {
    firstOption.style.backgroundColor = "red";
    thirdOption.style.backgroundColor = "lime";
    setTimeout(() => {
      lossTitle.style.display = "inline";
      audio.src = "./res/audio/loss.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/pepegas.PNG)";
      main.style.display = "none";
      prices.style.display = "none";
    }, 1500);
  };

  secondOption.onclick = () => {
    secondOption.style.backgroundColor = "red";
    thirdOption.style.backgroundColor = "lime";
    setTimeout(() => {
      lossTitle.style.display = "inline";
      audio.src = "./res/audio/loss.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/pepegas.PNG)";
      main.style.display = "none";
      prices.style.display = "none";
    }, 1500);
  };

  thirdOption.onclick = () => {
    thirdOption.style.backgroundColor = "lime";
    totalLevels++;
    setTimeout(() => {
      audio.src = "./res/audio/honzovoOblibene.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/untillTill.jpg)";
      main.style.display = "none";
      q9.style.color = "aqua";
    }, 1500);
  };

  fourthOption.onclick = () => {
    fourthOption.style.backgroundColor = "red";
    thirdOption.style.backgroundColor = "lime";
    setTimeout(() => {
      lossTitle.style.display = "inline";
      audio.src = "./res/audio/loss.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/pepegas.PNG)";
      main.style.display = "none";
      prices.style.display = "none";
    }, 1500);
  };
};

// 10. OTÁZKA
q10.onclick = async () => {
  // Default nastavení
  firstOption.style.backgroundColor = "black";
  secondOption.style.backgroundColor = "black";
  thirdOption.style.backgroundColor = "black";
  fourthOption.style.backgroundColor = "black";

  // JSON záležitost
  const data = await loadData();
  questionTitle.innerHTML = `<h2>${data[9].question}</h2>`;
  firstOption.innerHTML = `<h2>${data[9].A}</h2>`;
  secondOption.innerHTML = `<h2>${data[9].B}</h2>`;
  thirdOption.innerHTML = `<h2>${data[9].C}</h2>`;
  fourthOption.innerHTML = `<h2>${data[9].D}</h2>`;

  // Změna struktury webu
  prices.style.display = "none";
  document.body.style.backgroundImage = "url(./res/img/foto.jpg)";
  audio.src = "./res/audio/questionTime.mp3";
  audio.currentTime = 7;
  audio.play();
  main.style.display = "inline";

  // Volba správné odpovědi:
  firstOption.onclick = () => {
    firstOption.style.backgroundColor = "red";
    secondOption.style.backgroundColor = "lime";
    setTimeout(() => {
      lossTitle.style.display = "inline";
      audio.src = "./res/audio/loss.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/pepegas.PNG)";
      main.style.display = "none";
      prices.style.display = "none";
    }, 1500);
  };

  secondOption.onclick = () => {
    secondOption.style.backgroundColor = "lime";
    totalLevels++;
    setTimeout(() => {
      audio.src = "./res/audio/honzovoOblibene.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/untillTill.jpg)";
      main.style.display = "none";
      q10title.style.color = "aqua";
      q10title.style.backgroundColor = "brown";
    }, 1500);
  };

  thirdOption.onclick = () => {
    thirdOption.style.backgroundColor = "red";
    secondOption.style.backgroundColor = "lime";
    setTimeout(() => {
      lossTitle.style.display = "inline";
      audio.src = "./res/audio/loss.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/pepegas.PNG)";
      main.style.display = "none";
      prices.style.display = "none";
    }, 1500);
  };

  fourthOption.onclick = () => {
    fourthOption.style.backgroundColor = "red";
    secondOption.style.backgroundColor = "lime";
    setTimeout(() => {
      lossTitle.style.display = "inline";
      audio.src = "./res/audio/loss.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/pepegas.PNG)";
      main.style.display = "none";
      prices.style.display = "none";
    }, 1500);
  };
};

// 11. OTÁZKA
q11.onclick = async () => {
  // Default nastavení
  firstOption.style.backgroundColor = "black";
  secondOption.style.backgroundColor = "black";
  thirdOption.style.backgroundColor = "black";
  fourthOption.style.backgroundColor = "black";

  // JSON záležitost
  const data = await loadData();
  questionTitle.innerHTML = `<h2>${data[10].question}</h2>`;
  firstOption.innerHTML = `<h2>${data[10].A}</h2>`;
  secondOption.innerHTML = `<h2>${data[10].B}</h2>`;
  thirdOption.innerHTML = `<h2>${data[10].C}</h2>`;
  fourthOption.innerHTML = `<h2>${data[10].D}</h2>`;

  // Změna struktury webu
  prices.style.display = "none";
  document.body.style.backgroundImage = "url(./res/img/foto.jpg)";
  audio.src = "./res/audio/questionTime.mp3";
  audio.currentTime = 7;
  audio.play();
  main.style.display = "inline";

  // Volba správné odpovědi:
  firstOption.onclick = () => {
    firstOption.style.backgroundColor = "red";
    fourthOption.style.backgroundColor = "lime";
    setTimeout(() => {
      lossTitle.style.display = "inline";
      audio.src = "./res/audio/loss.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/pepegas.PNG)";
      main.style.display = "none";
      prices.style.display = "none";
    }, 1500);
  };

  secondOption.onclick = () => {
    secondOption.style.backgroundColor = "red";
    fourthOption.style.backgroundColor = "lime";
    setTimeout(() => {
      lossTitle.style.display = "inline";
      audio.src = "./res/audio/loss.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/pepegas.PNG)";
      main.style.display = "none";
      prices.style.display = "none";
    }, 1500);
  };

  thirdOption.onclick = () => {
    thirdOption.style.backgroundColor = "red";
    fourthOption.style.backgroundColor = "lime";
    setTimeout(() => {
      lossTitle.style.display = "inline";
      audio.src = "./res/audio/loss.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/pepegas.PNG)";
      main.style.display = "none";
      prices.style.display = "none";
    }, 1500);
  };

  fourthOption.onclick = () => {
    fourthOption.style.backgroundColor = "lime";
    totalLevels++;
    setTimeout(() => {
      audio.src = "./res/audio/honzovoOblibene.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/untillTill.jpg)";
      main.style.display = "none";
      q11.style.color = "aqua";
    }, 1500);
  };
};

// 12. OTÁZKA
q12.onclick = async () => {
  // Default nastavení
  firstOption.style.backgroundColor = "black";
  secondOption.style.backgroundColor = "black";
  thirdOption.style.backgroundColor = "black";
  fourthOption.style.backgroundColor = "black";
  // JSON záležitost
  const data = await loadData();
  questionTitle.innerHTML = `<h2>${data[11].question}</h2>`;
  firstOption.innerHTML = `<h2>${data[11].A}</h2>`;
  secondOption.innerHTML = `<h2>${data[11].B}</h2>`;
  thirdOption.innerHTML = `<h2>${data[11].C}</h2>`;
  fourthOption.innerHTML = `<h2>${data[11].D}</h2>`;

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
    totalLevels++;
    setTimeout(() => {
      audio.src = "./res/audio/honzovoOblibene.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/untillTill.jpg)";
      main.style.display = "none";
      q12.style.color = "aqua";
      console.log(totalLevels);
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
      q12.style.color = "aqua";
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
      q12.style.color = "aqua";
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
      q12.style.color = "aqua";
      prices.style.display = "none";
    }, 1500);
  };
};

// 13. OTÁZKA
q13.onclick = async () => {
  // Default nastavení
  firstOption.style.backgroundColor = "black";
  secondOption.style.backgroundColor = "black";
  thirdOption.style.backgroundColor = "black";
  fourthOption.style.backgroundColor = "black";

  // JSON záležitost
  const data = await loadData();
  questionTitle.innerHTML = `<h2>${data[12].question}</h2>`;
  firstOption.innerHTML = `<h2>${data[12].A}</h2>`;
  secondOption.innerHTML = `<h2>${data[12].B}</h2>`;
  thirdOption.innerHTML = `<h2>${data[12].C}</h2>`;
  fourthOption.innerHTML = `<h2>${data[12].D}</h2>`;

  // Změna struktury webu
  prices.style.display = "none";
  document.body.style.backgroundImage = "url(./res/img/foto.jpg)";
  audio.src = "./res/audio/questionTime.mp3";
  audio.currentTime = 7;
  audio.play();
  main.style.display = "inline";

  // Volba správné odpovědi:
  firstOption.onclick = () => {
    firstOption.style.backgroundColor = "red";
    thirdOption.style.backgroundColor = "lime";
    setTimeout(() => {
      lossTitle.style.display = "inline";
      audio.src = "./res/audio/loss.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/pepegas.PNG)";
      main.style.display = "none";
      prices.style.display = "none";
    }, 1500);
  };

  secondOption.onclick = () => {
    secondOption.style.backgroundColor = "red";
    thirdOption.style.backgroundColor = "lime";
    setTimeout(() => {
      lossTitle.style.display = "inline";
      audio.src = "./res/audio/loss.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/pepegas.PNG)";
      main.style.display = "none";
      prices.style.display = "none";
    }, 1500);
  };

  thirdOption.onclick = () => {
    thirdOption.style.backgroundColor = "lime";
    totalLevels++;
    setTimeout(() => {
      audio.src = "./res/audio/honzovoOblibene.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/untillTill.jpg)";
      main.style.display = "none";
      q13.style.color = "aqua";
    }, 1500);
  };

  fourthOption.onclick = () => {
    fourthOption.style.backgroundColor = "red";
    thirdOption.style.backgroundColor = "lime";
    setTimeout(() => {
      lossTitle.style.display = "inline";
      audio.src = "./res/audio/loss.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/pepegas.PNG)";
      main.style.display = "none";
      prices.style.display = "none";
    }, 1500);
  };
};

// 14. OTÁZKA
q14.onclick = async () => {
  // Default nastavení
  firstOption.style.backgroundColor = "black";
  secondOption.style.backgroundColor = "black";
  thirdOption.style.backgroundColor = "black";
  fourthOption.style.backgroundColor = "black";
  // JSON záležitost
  const data = await loadData();
  questionTitle.innerHTML = `<h2>${data[13].question}</h2>`;
  firstOption.innerHTML = `<h2>${data[13].A}</h2>`;
  secondOption.innerHTML = `<h2>${data[13].B}</h2>`;
  thirdOption.innerHTML = `<h2>${data[13].C}</h2>`;
  fourthOption.innerHTML = `<h2>${data[13].D}</h2>`;

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
    totalLevels++;
    setTimeout(() => {
      audio.src = "./res/audio/honzovoOblibene.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/untillTill.jpg)";
      main.style.display = "none";
      q14.style.color = "aqua";
      console.log(totalLevels);
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
      q14.style.color = "aqua";
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
      q14.style.color = "aqua";
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
      q14.style.color = "aqua";
      prices.style.display = "none";
    }, 1500);
  };
};

// 15. OTÁZKA
q15.onclick = async () => {
  // Default nastavení
  firstOption.style.backgroundColor = "black";
  secondOption.style.backgroundColor = "black";
  thirdOption.style.backgroundColor = "black";
  fourthOption.style.backgroundColor = "black";

  // JSON záležitost
  const data = await loadData();
  questionTitle.innerHTML = `<h2>${data[14].question}</h2>`;
  firstOption.innerHTML = `<h2>${data[14].A}</h2>`;
  secondOption.innerHTML = `<h2>${data[14].B}</h2>`;
  thirdOption.innerHTML = `<h2>${data[14].C}</h2>`;
  fourthOption.innerHTML = `<h2>${data[14].D}</h2>`;

  // Změna struktury webu
  prices.style.display = "none";
  document.body.style.backgroundImage = "url(./res/img/foto.jpg)";
  audio.src = "./res/audio/questionTime.mp3";
  audio.currentTime = 7;
  audio.play();
  main.style.display = "inline";

  // Volba správné odpovědi:
  firstOption.onclick = () => {
    firstOption.style.backgroundColor = "red";
    thirdOption.style.backgroundColor = "lime";
    setTimeout(() => {
      lossTitle.style.display = "inline";
      audio.src = "./res/audio/loss.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/pepegas.PNG)";
      main.style.display = "none";
      prices.style.display = "none";
    }, 1500);
  };

  secondOption.onclick = () => {
    secondOption.style.backgroundColor = "red";
    thirdOption.style.backgroundColor = "lime";
    setTimeout(() => {
      lossTitle.style.display = "inline";
      audio.src = "./res/audio/loss.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/pepegas.PNG)";
      main.style.display = "none";
      prices.style.display = "none";
    }, 1500);
  };

  thirdOption.onclick = () => {
    thirdOption.style.backgroundColor = "lime";
    totalLevels++;
    setTimeout(() => {
      audio.src = "./res/audio/honzovoOblibene.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/untillTill.jpg)";
      main.style.display = "none";
      q15.style.color = "aqua";
      q15title.style.color = "aqua";
      q15.style.backgroundColor = "brown";
    }, 1500);
  };

  fourthOption.onclick = () => {
    fourthOption.style.backgroundColor = "red";
    thirdOption.style.backgroundColor = "lime";
    setTimeout(() => {
      lossTitle.style.display = "inline";
      audio.src = "./res/audio/loss.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/pepegas.PNG)";
      main.style.display = "none";
      prices.style.display = "none";
    }, 1500);
  };
};
};

const loadData = async () => {
  const file = await fetch("../res/data/data.json");
  const data = await file.json();
  return data;
};



startGame.onclick = () => {
  audio.src = "./res/audio/honzovoOblibene.mp3";
  audio.play();
  firstDisplay.style.display = "none";
  prices.style.display = "inline";
  document.body.style.backgroundImage = "url(./res/img/untillTill.jpg)";
};

/*
// 1. OTÁZKA
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
    totalLevels++;
    setTimeout(() => {
      audio.src = "./res/audio/honzovoOblibene.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/untillTill.jpg)";
      main.style.display = "none";
      q1.style.color = "aqua";
      console.log(totalLevels);
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

// 2. OTÁZKA
q2.onclick = async () => {
  // Default nastavení
  firstOption.style.backgroundColor = "black";
  secondOption.style.backgroundColor = "black";
  thirdOption.style.backgroundColor = "black";
  fourthOption.style.backgroundColor = "black";

  // JSON záležitost
  const data = await loadData();
  questionTitle.innerHTML = `<h2>${data[1].question}</h2>`;
  firstOption.innerHTML = `<h2>${data[1].A}</h2>`;
  secondOption.innerHTML = `<h2>${data[1].B}</h2>`;
  thirdOption.innerHTML = `<h2>${data[1].C}</h2>`;
  fourthOption.innerHTML = `<h2>${data[1].D}</h2>`;

  // Změna struktury webu
  prices.style.display = "none";
  document.body.style.backgroundImage = "url(./res/img/foto.jpg)";
  audio.src = "./res/audio/questionTime.mp3";
  audio.currentTime = 7;
  audio.play();
  main.style.display = "inline";

  // Volba správné odpovědi:
  firstOption.onclick = () => {
    firstOption.style.backgroundColor = "red";
    thirdOption.style.backgroundColor = "lime";
    setTimeout(() => {
      lossTitle.style.display = "inline";
      audio.src = "./res/audio/loss.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/pepegas.PNG)";
      main.style.display = "none";
      prices.style.display = "none";
    }, 1500);
  };

  secondOption.onclick = () => {
    secondOption.style.backgroundColor = "red";
    thirdOption.style.backgroundColor = "lime";
    setTimeout(() => {
      lossTitle.style.display = "inline";
      audio.src = "./res/audio/loss.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/pepegas.PNG)";
      main.style.display = "none";
      prices.style.display = "none";
    }, 1500);
  };

  thirdOption.onclick = () => {
    thirdOption.style.backgroundColor = "lime";
    totalLevels++;
    setTimeout(() => {
      audio.src = "./res/audio/honzovoOblibene.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/untillTill.jpg)";
      main.style.display = "none";
      q2.style.color = "aqua";
    }, 1500);
  };

  fourthOption.onclick = () => {
    fourthOption.style.backgroundColor = "red";
    thirdOption.style.backgroundColor = "lime";
    setTimeout(() => {
      lossTitle.style.display = "inline";
      audio.src = "./res/audio/loss.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/pepegas.PNG)";
      main.style.display = "none";
      prices.style.display = "none";
    }, 1500);
  };
};

// 3. OTÁZKA
q3.onclick = async () => {
  // Default nastavení
  firstOption.style.backgroundColor = "black";
  secondOption.style.backgroundColor = "black";
  thirdOption.style.backgroundColor = "black";
  fourthOption.style.backgroundColor = "black";

  // JSON záležitost
  const data = await loadData();
  questionTitle.innerHTML = `<h2>${data[2].question}</h2>`;
  firstOption.innerHTML = `<h2>${data[2].A}</h2>`;
  secondOption.innerHTML = `<h2>${data[2].B}</h2>`;
  thirdOption.innerHTML = `<h2>${data[2].C}</h2>`;
  fourthOption.innerHTML = `<h2>${data[2].D}</h2>`;

  // Změna struktury webu
  prices.style.display = "none";
  document.body.style.backgroundImage = "url(./res/img/foto.jpg)";
  audio.src = "./res/audio/questionTime.mp3";
  audio.currentTime = 7;
  audio.play();
  main.style.display = "inline";

  // Volba správné odpovědi:
  firstOption.onclick = () => {
    firstOption.style.backgroundColor = "red";
    fourthOption.style.backgroundColor = "lime";
    setTimeout(() => {
      lossTitle.style.display = "inline";
      audio.src = "./res/audio/loss.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/pepegas.PNG)";
      main.style.display = "none";
      prices.style.display = "none";
    }, 1500);
  };

  secondOption.onclick = () => {
    secondOption.style.backgroundColor = "red";
    fourthOption.style.backgroundColor = "lime";
    setTimeout(() => {
      lossTitle.style.display = "inline";
      audio.src = "./res/audio/loss.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/pepegas.PNG)";
      main.style.display = "none";
      prices.style.display = "none";
    }, 1500);
  };

  thirdOption.onclick = () => {
    thirdOption.style.backgroundColor = "red";
    fourthOption.style.backgroundColor = "lime";
    setTimeout(() => {
      lossTitle.style.display = "inline";
      audio.src = "./res/audio/loss.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/pepegas.PNG)";
      main.style.display = "none";
      prices.style.display = "none";
    }, 1500);
  };

  fourthOption.onclick = () => {
    fourthOption.style.backgroundColor = "lime";
    totalLevels++;
    setTimeout(() => {
      audio.src = "./res/audio/honzovoOblibene.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/untillTill.jpg)";
      main.style.display = "none";
      q3.style.color = "aqua";
    }, 1500);
  };
};

// 4. OTÁZKA
q4.onclick = async () => {
  // Default nastavení
  firstOption.style.backgroundColor = "black";
  secondOption.style.backgroundColor = "black";
  thirdOption.style.backgroundColor = "black";
  fourthOption.style.backgroundColor = "black";

  // JSON záležitost
  const data = await loadData();
  questionTitle.innerHTML = `<h2>${data[3].question}</h2>`;
  firstOption.innerHTML = `<h2>${data[3].A}</h2>`;
  secondOption.innerHTML = `<h2>${data[3].B}</h2>`;
  thirdOption.innerHTML = `<h2>${data[3].C}</h2>`;
  fourthOption.innerHTML = `<h2>${data[3].D}</h2>`;

  // Změna struktury webu
  prices.style.display = "none";
  document.body.style.backgroundImage = "url(./res/img/foto.jpg)";
  audio.src = "./res/audio/questionTime.mp3";
  audio.currentTime = 7;
  audio.play();
  main.style.display = "inline";

  // Volba správné odpovědi:
  firstOption.onclick = () => {
    firstOption.style.backgroundColor = "red";
    secondOption.style.backgroundColor = "lime";
    setTimeout(() => {
      lossTitle.style.display = "inline";
      audio.src = "./res/audio/loss.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/pepegas.PNG)";
      main.style.display = "none";
      prices.style.display = "none";
    }, 1500);
  };

  secondOption.onclick = () => {
    secondOption.style.backgroundColor = "lime";
    totalLevels++;
    setTimeout(() => {
      audio.src = "./res/audio/honzovoOblibene.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/untillTill.jpg)";
      main.style.display = "none";
      q4.style.color = "aqua";
    }, 1500);
  };

  thirdOption.onclick = () => {
    thirdOption.style.backgroundColor = "red";
    secondOption.style.backgroundColor = "lime";
    setTimeout(() => {
      lossTitle.style.display = "inline";
      audio.src = "./res/audio/loss.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/pepegas.PNG)";
      main.style.display = "none";
      prices.style.display = "none";
    }, 1500);
  };

  fourthOption.onclick = () => {
    fourthOption.style.backgroundColor = "red";
    secondOption.style.backgroundColor = "lime";
    setTimeout(() => {
      lossTitle.style.display = "inline";
      audio.src = "./res/audio/loss.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/pepegas.PNG)";
      main.style.display = "none";
      prices.style.display = "none";
    }, 1500);
  };
};

// 5. OTÁZKA
q5.onclick = async () => {
  // Default nastavení
  firstOption.style.backgroundColor = "black";
  secondOption.style.backgroundColor = "black";
  thirdOption.style.backgroundColor = "black";
  fourthOption.style.backgroundColor = "black";

  // JSON záležitost
  const data = await loadData();
  questionTitle.innerHTML = `<h2>${data[4].question}</h2>`;
  firstOption.innerHTML = `<h2>${data[4].A}</h2>`;
  secondOption.innerHTML = `<h2>${data[4].B}</h2>`;
  thirdOption.innerHTML = `<h2>${data[4].C}</h2>`;
  fourthOption.innerHTML = `<h2>${data[4].D}</h2>`;

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
    totalLevels++;
    setTimeout(() => {
      audio.src = "./res/audio/honzovoOblibene.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/untillTill.jpg)";
      main.style.display = "none";
      q5title.style.color = "aqua";
      q5.style.backgroundColor = "brown";
      console.log(totalLevels);
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
      q5.style.color = "aqua";
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
      q5.style.color = "aqua";
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
      q5.style.color = "aqua";
      prices.style.display = "none";
    }, 1500);
  };
};

// 6. OTÁZKA
q6.onclick = async () => {
  // Default nastavení
  firstOption.style.backgroundColor = "black";
  secondOption.style.backgroundColor = "black";
  thirdOption.style.backgroundColor = "black";
  fourthOption.style.backgroundColor = "black";

  // JSON záležitost
  const data = await loadData();
  questionTitle.innerHTML = `<h2>${data[5].question}</h2>`;
  firstOption.innerHTML = `<h2>${data[5].A}</h2>`;
  secondOption.innerHTML = `<h2>${data[5].B}</h2>`;
  thirdOption.innerHTML = `<h2>${data[5].C}</h2>`;
  fourthOption.innerHTML = `<h2>${data[5].D}</h2>`;

  // Změna struktury webu
  prices.style.display = "none";
  document.body.style.backgroundImage = "url(./res/img/foto.jpg)";
  audio.src = "./res/audio/questionTime.mp3";
  audio.currentTime = 7;
  audio.play();
  main.style.display = "inline";

  // Volba správné odpovědi:
  firstOption.onclick = () => {
    firstOption.style.backgroundColor = "red";
    secondOption.style.backgroundColor = "lime";
    setTimeout(() => {
      lossTitle.style.display = "inline";
      audio.src = "./res/audio/loss.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/pepegas.PNG)";
      main.style.display = "none";
      prices.style.display = "none";
    }, 1500);
  };

  secondOption.onclick = () => {
    secondOption.style.backgroundColor = "lime";
    totalLevels++;
    setTimeout(() => {
      audio.src = "./res/audio/honzovoOblibene.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/untillTill.jpg)";
      main.style.display = "none";
      q6.style.color = "aqua";
    }, 1500);
  };

  thirdOption.onclick = () => {
    thirdOption.style.backgroundColor = "red";
    secondOption.style.backgroundColor = "lime";
    setTimeout(() => {
      lossTitle.style.display = "inline";
      audio.src = "./res/audio/loss.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/pepegas.PNG)";
      main.style.display = "none";
      prices.style.display = "none";
    }, 1500);
  };

  fourthOption.onclick = () => {
    fourthOption.style.backgroundColor = "red";
    secondOption.style.backgroundColor = "lime";
    setTimeout(() => {
      lossTitle.style.display = "inline";
      audio.src = "./res/audio/loss.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/pepegas.PNG)";
      main.style.display = "none";
      prices.style.display = "none";
    }, 1500);
  };
};

// 7. OTÁZKA
q7.onclick = async () => {
  // Default nastavení
  firstOption.style.backgroundColor = "black";
  secondOption.style.backgroundColor = "black";
  thirdOption.style.backgroundColor = "black";
  fourthOption.style.backgroundColor = "black";

  // JSON záležitost
  const data = await loadData();
  questionTitle.innerHTML = `<h2>${data[6].question}</h2>`;
  firstOption.innerHTML = `<h2>${data[6].A}</h2>`;
  secondOption.innerHTML = `<h2>${data[6].B}</h2>`;
  thirdOption.innerHTML = `<h2>${data[6].C}</h2>`;
  fourthOption.innerHTML = `<h2>${data[6].D}</h2>`;

  // Změna struktury webu
  prices.style.display = "none";
  document.body.style.backgroundImage = "url(./res/img/foto.jpg)";
  audio.src = "./res/audio/questionTime.mp3";
  audio.currentTime = 7;
  audio.play();
  main.style.display = "inline";

  // Volba správné odpovědi:
  firstOption.onclick = () => {
    firstOption.style.backgroundColor = "red";
    fourthOption.style.backgroundColor = "lime";
    setTimeout(() => {
      lossTitle.style.display = "inline";
      audio.src = "./res/audio/loss.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/pepegas.PNG)";
      main.style.display = "none";
      prices.style.display = "none";
    }, 1500);
  };

  secondOption.onclick = () => {
    secondOption.style.backgroundColor = "red";
    fourthOption.style.backgroundColor = "lime";
    setTimeout(() => {
      lossTitle.style.display = "inline";
      audio.src = "./res/audio/loss.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/pepegas.PNG)";
      main.style.display = "none";
      prices.style.display = "none";
    }, 1500);
  };

  thirdOption.onclick = () => {
    thirdOption.style.backgroundColor = "red";
    fourthOption.style.backgroundColor = "lime";
    setTimeout(() => {
      lossTitle.style.display = "inline";
      audio.src = "./res/audio/loss.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/pepegas.PNG)";
      main.style.display = "none";
      prices.style.display = "none";
    }, 1500);
  };

  fourthOption.onclick = () => {
    fourthOption.style.backgroundColor = "lime";
    totalLevels++;
    setTimeout(() => {
      audio.src = "./res/audio/honzovoOblibene.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/untillTill.jpg)";
      main.style.display = "none";
      q7.style.color = "aqua";
    }, 1500);
  };
};

// 8. OTÁZKA
q8.onclick = async () => {
  // Default nastavení
  firstOption.style.backgroundColor = "black";
  secondOption.style.backgroundColor = "black";
  thirdOption.style.backgroundColor = "black";
  fourthOption.style.backgroundColor = "black";
  // JSON záležitost
  const data = await loadData();
  questionTitle.innerHTML = `<h2>${data[7].question}</h2>`;
  firstOption.innerHTML = `<h2>${data[7].A}</h2>`;
  secondOption.innerHTML = `<h2>${data[7].B}</h2>`;
  thirdOption.innerHTML = `<h2>${data[7].C}</h2>`;
  fourthOption.innerHTML = `<h2>${data[7].D}</h2>`;

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
    totalLevels++;
    setTimeout(() => {
      audio.src = "./res/audio/honzovoOblibene.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/untillTill.jpg)";
      main.style.display = "none";
      q8.style.color = "aqua";
      console.log(totalLevels);
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
      q8.style.color = "aqua";
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
      q8.style.color = "aqua";
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
      q8.style.color = "aqua";
      prices.style.display = "none";
    }, 1500);
  };
};

// 9. OTÁZKA
q9.onclick = async () => {
  // Default nastavení
  firstOption.style.backgroundColor = "black";
  secondOption.style.backgroundColor = "black";
  thirdOption.style.backgroundColor = "black";
  fourthOption.style.backgroundColor = "black";

  // JSON záležitost
  const data = await loadData();
  questionTitle.innerHTML = `<h2>${data[8].question}</h2>`;
  firstOption.innerHTML = `<h2>${data[8].A}</h2>`;
  secondOption.innerHTML = `<h2>${data[8].B}</h2>`;
  thirdOption.innerHTML = `<h2>${data[8].C}</h2>`;
  fourthOption.innerHTML = `<h2>${data[8].D}</h2>`;

  // Změna struktury webu
  prices.style.display = "none";
  document.body.style.backgroundImage = "url(./res/img/foto.jpg)";
  audio.src = "./res/audio/questionTime.mp3";
  audio.currentTime = 7;
  audio.play();
  main.style.display = "inline";

  // Volba správné odpovědi:
  firstOption.onclick = () => {
    firstOption.style.backgroundColor = "red";
    thirdOption.style.backgroundColor = "lime";
    setTimeout(() => {
      lossTitle.style.display = "inline";
      audio.src = "./res/audio/loss.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/pepegas.PNG)";
      main.style.display = "none";
      prices.style.display = "none";
    }, 1500);
  };

  secondOption.onclick = () => {
    secondOption.style.backgroundColor = "red";
    thirdOption.style.backgroundColor = "lime";
    setTimeout(() => {
      lossTitle.style.display = "inline";
      audio.src = "./res/audio/loss.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/pepegas.PNG)";
      main.style.display = "none";
      prices.style.display = "none";
    }, 1500);
  };

  thirdOption.onclick = () => {
    thirdOption.style.backgroundColor = "lime";
    totalLevels++;
    setTimeout(() => {
      audio.src = "./res/audio/honzovoOblibene.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/untillTill.jpg)";
      main.style.display = "none";
      q9.style.color = "aqua";
    }, 1500);
  };

  fourthOption.onclick = () => {
    fourthOption.style.backgroundColor = "red";
    thirdOption.style.backgroundColor = "lime";
    setTimeout(() => {
      lossTitle.style.display = "inline";
      audio.src = "./res/audio/loss.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/pepegas.PNG)";
      main.style.display = "none";
      prices.style.display = "none";
    }, 1500);
  };
};

// 10. OTÁZKA
q10.onclick = async () => {
  // Default nastavení
  firstOption.style.backgroundColor = "black";
  secondOption.style.backgroundColor = "black";
  thirdOption.style.backgroundColor = "black";
  fourthOption.style.backgroundColor = "black";

  // JSON záležitost
  const data = await loadData();
  questionTitle.innerHTML = `<h2>${data[9].question}</h2>`;
  firstOption.innerHTML = `<h2>${data[9].A}</h2>`;
  secondOption.innerHTML = `<h2>${data[9].B}</h2>`;
  thirdOption.innerHTML = `<h2>${data[9].C}</h2>`;
  fourthOption.innerHTML = `<h2>${data[9].D}</h2>`;

  // Změna struktury webu
  prices.style.display = "none";
  document.body.style.backgroundImage = "url(./res/img/foto.jpg)";
  audio.src = "./res/audio/questionTime.mp3";
  audio.currentTime = 7;
  audio.play();
  main.style.display = "inline";

  // Volba správné odpovědi:
  firstOption.onclick = () => {
    firstOption.style.backgroundColor = "red";
    secondOption.style.backgroundColor = "lime";
    setTimeout(() => {
      lossTitle.style.display = "inline";
      audio.src = "./res/audio/loss.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/pepegas.PNG)";
      main.style.display = "none";
      prices.style.display = "none";
    }, 1500);
  };

  secondOption.onclick = () => {
    secondOption.style.backgroundColor = "lime";
    totalLevels++;
    setTimeout(() => {
      audio.src = "./res/audio/honzovoOblibene.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/untillTill.jpg)";
      main.style.display = "none";
      q10title.style.color = "aqua";
      q10title.style.backgroundColor = "brown";
    }, 1500);
  };

  thirdOption.onclick = () => {
    thirdOption.style.backgroundColor = "red";
    secondOption.style.backgroundColor = "lime";
    setTimeout(() => {
      lossTitle.style.display = "inline";
      audio.src = "./res/audio/loss.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/pepegas.PNG)";
      main.style.display = "none";
      prices.style.display = "none";
    }, 1500);
  };

  fourthOption.onclick = () => {
    fourthOption.style.backgroundColor = "red";
    secondOption.style.backgroundColor = "lime";
    setTimeout(() => {
      lossTitle.style.display = "inline";
      audio.src = "./res/audio/loss.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/pepegas.PNG)";
      main.style.display = "none";
      prices.style.display = "none";
    }, 1500);
  };
};

// 11. OTÁZKA
q11.onclick = async () => {
  // Default nastavení
  firstOption.style.backgroundColor = "black";
  secondOption.style.backgroundColor = "black";
  thirdOption.style.backgroundColor = "black";
  fourthOption.style.backgroundColor = "black";

  // JSON záležitost
  const data = await loadData();
  questionTitle.innerHTML = `<h2>${data[10].question}</h2>`;
  firstOption.innerHTML = `<h2>${data[10].A}</h2>`;
  secondOption.innerHTML = `<h2>${data[10].B}</h2>`;
  thirdOption.innerHTML = `<h2>${data[10].C}</h2>`;
  fourthOption.innerHTML = `<h2>${data[10].D}</h2>`;

  // Změna struktury webu
  prices.style.display = "none";
  document.body.style.backgroundImage = "url(./res/img/foto.jpg)";
  audio.src = "./res/audio/questionTime.mp3";
  audio.currentTime = 7;
  audio.play();
  main.style.display = "inline";

  // Volba správné odpovědi:
  firstOption.onclick = () => {
    firstOption.style.backgroundColor = "red";
    fourthOption.style.backgroundColor = "lime";
    setTimeout(() => {
      lossTitle.style.display = "inline";
      audio.src = "./res/audio/loss.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/pepegas.PNG)";
      main.style.display = "none";
      prices.style.display = "none";
    }, 1500);
  };

  secondOption.onclick = () => {
    secondOption.style.backgroundColor = "red";
    fourthOption.style.backgroundColor = "lime";
    setTimeout(() => {
      lossTitle.style.display = "inline";
      audio.src = "./res/audio/loss.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/pepegas.PNG)";
      main.style.display = "none";
      prices.style.display = "none";
    }, 1500);
  };

  thirdOption.onclick = () => {
    thirdOption.style.backgroundColor = "red";
    fourthOption.style.backgroundColor = "lime";
    setTimeout(() => {
      lossTitle.style.display = "inline";
      audio.src = "./res/audio/loss.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/pepegas.PNG)";
      main.style.display = "none";
      prices.style.display = "none";
    }, 1500);
  };

  fourthOption.onclick = () => {
    fourthOption.style.backgroundColor = "lime";
    totalLevels++;
    setTimeout(() => {
      audio.src = "./res/audio/honzovoOblibene.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/untillTill.jpg)";
      main.style.display = "none";
      q11.style.color = "aqua";
    }, 1500);
  };
};

// 12. OTÁZKA
q12.onclick = async () => {
  // Default nastavení
  firstOption.style.backgroundColor = "black";
  secondOption.style.backgroundColor = "black";
  thirdOption.style.backgroundColor = "black";
  fourthOption.style.backgroundColor = "black";
  // JSON záležitost
  const data = await loadData();
  questionTitle.innerHTML = `<h2>${data[11].question}</h2>`;
  firstOption.innerHTML = `<h2>${data[11].A}</h2>`;
  secondOption.innerHTML = `<h2>${data[11].B}</h2>`;
  thirdOption.innerHTML = `<h2>${data[11].C}</h2>`;
  fourthOption.innerHTML = `<h2>${data[11].D}</h2>`;

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
    totalLevels++;
    setTimeout(() => {
      audio.src = "./res/audio/honzovoOblibene.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/untillTill.jpg)";
      main.style.display = "none";
      q12.style.color = "aqua";
      console.log(totalLevels);
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
      q12.style.color = "aqua";
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
      q12.style.color = "aqua";
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
      q12.style.color = "aqua";
      prices.style.display = "none";
    }, 1500);
  };
};

// 13. OTÁZKA
q13.onclick = async () => {
  // Default nastavení
  firstOption.style.backgroundColor = "black";
  secondOption.style.backgroundColor = "black";
  thirdOption.style.backgroundColor = "black";
  fourthOption.style.backgroundColor = "black";

  // JSON záležitost
  const data = await loadData();
  questionTitle.innerHTML = `<h2>${data[12].question}</h2>`;
  firstOption.innerHTML = `<h2>${data[12].A}</h2>`;
  secondOption.innerHTML = `<h2>${data[12].B}</h2>`;
  thirdOption.innerHTML = `<h2>${data[12].C}</h2>`;
  fourthOption.innerHTML = `<h2>${data[12].D}</h2>`;

  // Změna struktury webu
  prices.style.display = "none";
  document.body.style.backgroundImage = "url(./res/img/foto.jpg)";
  audio.src = "./res/audio/questionTime.mp3";
  audio.currentTime = 7;
  audio.play();
  main.style.display = "inline";

  // Volba správné odpovědi:
  firstOption.onclick = () => {
    firstOption.style.backgroundColor = "red";
    thirdOption.style.backgroundColor = "lime";
    setTimeout(() => {
      lossTitle.style.display = "inline";
      audio.src = "./res/audio/loss.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/pepegas.PNG)";
      main.style.display = "none";
      prices.style.display = "none";
    }, 1500);
  };

  secondOption.onclick = () => {
    secondOption.style.backgroundColor = "red";
    thirdOption.style.backgroundColor = "lime";
    setTimeout(() => {
      lossTitle.style.display = "inline";
      audio.src = "./res/audio/loss.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/pepegas.PNG)";
      main.style.display = "none";
      prices.style.display = "none";
    }, 1500);
  };

  thirdOption.onclick = () => {
    thirdOption.style.backgroundColor = "lime";
    totalLevels++;
    setTimeout(() => {
      audio.src = "./res/audio/honzovoOblibene.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/untillTill.jpg)";
      main.style.display = "none";
      q13.style.color = "aqua";
    }, 1500);
  };

  fourthOption.onclick = () => {
    fourthOption.style.backgroundColor = "red";
    thirdOption.style.backgroundColor = "lime";
    setTimeout(() => {
      lossTitle.style.display = "inline";
      audio.src = "./res/audio/loss.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/pepegas.PNG)";
      main.style.display = "none";
      prices.style.display = "none";
    }, 1500);
  };
};

// 14. OTÁZKA
q14.onclick = async () => {
  // Default nastavení
  firstOption.style.backgroundColor = "black";
  secondOption.style.backgroundColor = "black";
  thirdOption.style.backgroundColor = "black";
  fourthOption.style.backgroundColor = "black";
  // JSON záležitost
  const data = await loadData();
  questionTitle.innerHTML = `<h2>${data[13].question}</h2>`;
  firstOption.innerHTML = `<h2>${data[13].A}</h2>`;
  secondOption.innerHTML = `<h2>${data[13].B}</h2>`;
  thirdOption.innerHTML = `<h2>${data[13].C}</h2>`;
  fourthOption.innerHTML = `<h2>${data[13].D}</h2>`;

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
    totalLevels++;
    setTimeout(() => {
      audio.src = "./res/audio/honzovoOblibene.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/untillTill.jpg)";
      main.style.display = "none";
      q14.style.color = "aqua";
      console.log(totalLevels);
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
      q14.style.color = "aqua";
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
      q14.style.color = "aqua";
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
      q14.style.color = "aqua";
      prices.style.display = "none";
    }, 1500);
  };
};

// 15. OTÁZKA
q15.onclick = async () => {
  // Default nastavení
  firstOption.style.backgroundColor = "black";
  secondOption.style.backgroundColor = "black";
  thirdOption.style.backgroundColor = "black";
  fourthOption.style.backgroundColor = "black";

  // JSON záležitost
  const data = await loadData();
  questionTitle.innerHTML = `<h2>${data[14].question}</h2>`;
  firstOption.innerHTML = `<h2>${data[14].A}</h2>`;
  secondOption.innerHTML = `<h2>${data[14].B}</h2>`;
  thirdOption.innerHTML = `<h2>${data[14].C}</h2>`;
  fourthOption.innerHTML = `<h2>${data[14].D}</h2>`;

  // Změna struktury webu
  prices.style.display = "none";
  document.body.style.backgroundImage = "url(./res/img/foto.jpg)";
  audio.src = "./res/audio/questionTime.mp3";
  audio.currentTime = 7;
  audio.play();
  main.style.display = "inline";

  // Volba správné odpovědi:
  firstOption.onclick = () => {
    firstOption.style.backgroundColor = "red";
    thirdOption.style.backgroundColor = "lime";
    setTimeout(() => {
      lossTitle.style.display = "inline";
      audio.src = "./res/audio/loss.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/pepegas.PNG)";
      main.style.display = "none";
      prices.style.display = "none";
    }, 1500);
  };

  secondOption.onclick = () => {
    secondOption.style.backgroundColor = "red";
    thirdOption.style.backgroundColor = "lime";
    setTimeout(() => {
      lossTitle.style.display = "inline";
      audio.src = "./res/audio/loss.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/pepegas.PNG)";
      main.style.display = "none";
      prices.style.display = "none";
    }, 1500);
  };

  thirdOption.onclick = () => {
    thirdOption.style.backgroundColor = "lime";
    totalLevels++;
    setTimeout(() => {
      audio.src = "./res/audio/honzovoOblibene.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/untillTill.jpg)";
      main.style.display = "none";
      q15.style.color = "aqua";
      q15title.style.color = "aqua";
      q15.style.backgroundColor = "brown";
    }, 1500);
  };

  fourthOption.onclick = () => {
    fourthOption.style.backgroundColor = "red";
    thirdOption.style.backgroundColor = "lime";
    setTimeout(() => {
      lossTitle.style.display = "inline";
      audio.src = "./res/audio/loss.mp3";
      audio.play();
      firstDisplay.style.display = "none";
      prices.style.display = "inline";
      document.body.style.backgroundImage = "url(./res/img/pepegas.PNG)";
      main.style.display = "none";
      prices.style.display = "none";
    }, 1500);
  };
};
*/