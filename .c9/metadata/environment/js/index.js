{"changed":true,"filter":false,"title":"index.js","tooltip":"/js/index.js","value":"let order = [];\nlet playerOrder = [];\nlet flash;\nlet turn;\nlet good;\nlet compTurn;\nlet intervalId;\nlet strict = false;\nlet noise = true;\nlet on = false;\nlet win;\n\nconst turnCounter = document.querySelector(\"#turn\");\nconst topLeft = document.querySelector(\"#topleft\");\nconst topRight = document.querySelector(\"#topright\");\nconst bottomLeft = document.querySelector(\"#bottomleft\");\nconst bottomRight = document.querySelector(\"#bottomright\");\nconst strictButton = document.querySelector(\"#strict\");\nconst onButton = document.querySelector(\"#on\");\nconst startButton = document.querySelector(\"#start\");\n\nstrictButton.addEventListener('click', (event) => {\n  if (strictButton.checked == true) {\n    strict = true;\n  } else {\n    strict = false;\n  }\n});\n\nonButton.addEventListener('click', (event) => {\n  if (onButton.checked == true) {\n    on = true;\n    turnCounter.innerHTML = \"-\";\n  } else {\n    on = false;\n    turnCounter.innerHTML = \"\";\n    clearColor();\n    clearInterval(intervalId);\n  }\n});\n\nstartButton.addEventListener('click', (event) => {\n  if (on || win) {\n    play();\n  }\n});\n\nfunction play() {\n  win = false;\n  order = [];\n  playerOrder = [];\n  flash = 0;\n  intervalId = 0;\n  turn = 1;\n  turnCounter.innerHTML = 1;\n  good = true;\n  for (var i = 0; i < 20; i++) {\n    order.push(Math.floor(Math.random() * 4) + 1);\n  }\n  compTurn = true;\n\n  intervalId = setInterval(gameTurn, 800);\n}\n\nfunction gameTurn() {\n  on = false;\n\n  if (flash == turn) {\n    clearInterval(intervalId);\n    compTurn = false;\n    clearColor();\n    on = true;\n  }\n\n  if (compTurn) {\n    clearColor();\n    setTimeout(() => {\n      if (order[flash] == 1) one();\n      if (order[flash] == 2) two();\n      if (order[flash] == 3) three();\n      if (order[flash] == 4) four();\n      flash++;\n    }, 200);\n  }\n}\n\nfunction one() {\n  if (noise) {\n    let audio = document.getElementById(\"clip1\");\n    audio.play();\n  }\n  noise = true;\n  topLeft.style.backgroundColor = \"lightgreen\";\n}\n\nfunction two() {\n  if (noise) {\n    let audio = document.getElementById(\"clip2\");\n    audio.play();\n  }\n  noise = true;\n  topRight.style.backgroundColor = \"tomato\";\n}\n\nfunction three() {\n  if (noise) {\n    let audio = document.getElementById(\"clip3\");\n    audio.play();\n  }\n  noise = true;\n  bottomLeft.style.backgroundColor = \"yellow\";\n}\n\nfunction four() {\n  if (noise) {\n    let audio = document.getElementById(\"clip4\");\n    audio.play();\n  }\n  noise = true;\n  bottomRight.style.backgroundColor = \"lightskyblue\";\n}\n\nfunction clearColor() {\n  topLeft.style.backgroundColor = \"darkgreen\";\n  topRight.style.backgroundColor = \"darkred\";\n  bottomLeft.style.backgroundColor = \"goldenrod\";\n  bottomRight.style.backgroundColor = \"darkblue\";\n}\n\nfunction flashColor() {\n  topLeft.style.backgroundColor = \"lightgreen\";\n  topRight.style.backgroundColor = \"tomato\";\n  bottomLeft.style.backgroundColor = \"yellow\";\n  bottomRight.style.backgroundColor = \"lightskyblue\";\n}\n\ntopLeft.addEventListener('click', (event) => {\n  if (on) {\n    playerOrder.push(1);\n    check();\n    one();\n    if(!win) {\n      setTimeout(() => {\n        clearColor();\n      }, 300);\n    }\n  }\n})\n\ntopRight.addEventListener('click', (event) => {\n  if (on) {\n    playerOrder.push(2);\n    check();\n    two();\n    if(!win) {\n      setTimeout(() => {\n        clearColor();\n      }, 300);\n    }\n  }\n})\n\nbottomLeft.addEventListener('click', (event) => {\n  if (on) {\n    playerOrder.push(3);\n    check();\n    three();\n    if(!win) {\n      setTimeout(() => {\n        clearColor();\n      }, 300);\n    }\n  }\n})\n\nbottomRight.addEventListener('click', (event) => {\n  if (on) {\n    playerOrder.push(4);\n    check();\n    four();\n    if(!win) {\n      setTimeout(() => {\n        clearColor();\n      }, 300);\n    }\n  }\n})\n\nfunction check() {\n  if (playerOrder[playerOrder.length - 1] !== order[playerOrder.length - 1])\n    good = false;\n\n  if (playerOrder.length == 3 && good) {\n    winGame();\n  }\n\n  if (good == false) {\n    flashColor();\n    turnCounter.innerHTML = \"NO!\";\n    setTimeout(() => {\n      turnCounter.innerHTML = turn;\n      clearColor();\n\n      if (strict) {\n        play();\n      } else {\n        compTurn = true;\n        flash = 0;\n        playerOrder = [];\n        good = true;\n        intervalId = setInterval(gameTurn, 800);\n      }\n    }, 800);\n\n    noise = false;\n  }\n\n  if (turn == playerOrder.length && good && !win) {\n    turn++;\n    playerOrder = [];\n    compTurn = true;\n    flash = 0;\n    turnCounter.innerHTML = turn;\n    intervalId = setInterval(gameTurn, 800);\n  }\n\n}\n\nfunction winGame() {\n  flashColor();\n  turnCounter.innerHTML = \"WIN!\";\n  on = false;\n  win = true;\n}\n\n\n\n\n\n\n","undoManager":{"mark":-2,"position":0,"stack":[[{"start":{"row":0,"column":0},"end":{"row":240,"column":0},"action":"insert","lines":["let order = [];","let playerOrder = [];","let flash;","let turn;","let good;","let compTurn;","let intervalId;","let strict = false;","let noise = true;","let on = false;","let win;","","const turnCounter = document.querySelector(\"#turn\");","const topLeft = document.querySelector(\"#topleft\");","const topRight = document.querySelector(\"#topright\");","const bottomLeft = document.querySelector(\"#bottomleft\");","const bottomRight = document.querySelector(\"#bottomright\");","const strictButton = document.querySelector(\"#strict\");","const onButton = document.querySelector(\"#on\");","const startButton = document.querySelector(\"#start\");","","strictButton.addEventListener('click', (event) => {","  if (strictButton.checked == true) {","    strict = true;","  } else {","    strict = false;","  }","});","","onButton.addEventListener('click', (event) => {","  if (onButton.checked == true) {","    on = true;","    turnCounter.innerHTML = \"-\";","  } else {","    on = false;","    turnCounter.innerHTML = \"\";","    clearColor();","    clearInterval(intervalId);","  }","});","","startButton.addEventListener('click', (event) => {","  if (on || win) {","    play();","  }","});","","function play() {","  win = false;","  order = [];","  playerOrder = [];","  flash = 0;","  intervalId = 0;","  turn = 1;","  turnCounter.innerHTML = 1;","  good = true;","  for (var i = 0; i < 20; i++) {","    order.push(Math.floor(Math.random() * 4) + 1);","  }","  compTurn = true;","","  intervalId = setInterval(gameTurn, 800);","}","","function gameTurn() {","  on = false;","","  if (flash == turn) {","    clearInterval(intervalId);","    compTurn = false;","    clearColor();","    on = true;","  }","","  if (compTurn) {","    clearColor();","    setTimeout(() => {","      if (order[flash] == 1) one();","      if (order[flash] == 2) two();","      if (order[flash] == 3) three();","      if (order[flash] == 4) four();","      flash++;","    }, 200);","  }","}","","function one() {","  if (noise) {","    let audio = document.getElementById(\"clip1\");","    audio.play();","  }","  noise = true;","  topLeft.style.backgroundColor = \"lightgreen\";","}","","function two() {","  if (noise) {","    let audio = document.getElementById(\"clip2\");","    audio.play();","  }","  noise = true;","  topRight.style.backgroundColor = \"tomato\";","}","","function three() {","  if (noise) {","    let audio = document.getElementById(\"clip3\");","    audio.play();","  }","  noise = true;","  bottomLeft.style.backgroundColor = \"yellow\";","}","","function four() {","  if (noise) {","    let audio = document.getElementById(\"clip4\");","    audio.play();","  }","  noise = true;","  bottomRight.style.backgroundColor = \"lightskyblue\";","}","","function clearColor() {","  topLeft.style.backgroundColor = \"darkgreen\";","  topRight.style.backgroundColor = \"darkred\";","  bottomLeft.style.backgroundColor = \"goldenrod\";","  bottomRight.style.backgroundColor = \"darkblue\";","}","","function flashColor() {","  topLeft.style.backgroundColor = \"lightgreen\";","  topRight.style.backgroundColor = \"tomato\";","  bottomLeft.style.backgroundColor = \"yellow\";","  bottomRight.style.backgroundColor = \"lightskyblue\";","}","","topLeft.addEventListener('click', (event) => {","  if (on) {","    playerOrder.push(1);","    check();","    one();","    if(!win) {","      setTimeout(() => {","        clearColor();","      }, 300);","    }","  }","})","","topRight.addEventListener('click', (event) => {","  if (on) {","    playerOrder.push(2);","    check();","    two();","    if(!win) {","      setTimeout(() => {","        clearColor();","      }, 300);","    }","  }","})","","bottomLeft.addEventListener('click', (event) => {","  if (on) {","    playerOrder.push(3);","    check();","    three();","    if(!win) {","      setTimeout(() => {","        clearColor();","      }, 300);","    }","  }","})","","bottomRight.addEventListener('click', (event) => {","  if (on) {","    playerOrder.push(4);","    check();","    four();","    if(!win) {","      setTimeout(() => {","        clearColor();","      }, 300);","    }","  }","})","","function check() {","  if (playerOrder[playerOrder.length - 1] !== order[playerOrder.length - 1])","    good = false;","","  if (playerOrder.length == 3 && good) {","    winGame();","  }","","  if (good == false) {","    flashColor();","    turnCounter.innerHTML = \"NO!\";","    setTimeout(() => {","      turnCounter.innerHTML = turn;","      clearColor();","","      if (strict) {","        play();","      } else {","        compTurn = true;","        flash = 0;","        playerOrder = [];","        good = true;","        intervalId = setInterval(gameTurn, 800);","      }","    }, 800);","","    noise = false;","  }","","  if (turn == playerOrder.length && good && !win) {","    turn++;","    playerOrder = [];","    compTurn = true;","    flash = 0;","    turnCounter.innerHTML = turn;","    intervalId = setInterval(gameTurn, 800);","  }","","}","","function winGame() {","  flashColor();","  turnCounter.innerHTML = \"WIN!\";","  on = false;","  win = true;","}","","","","","","",""],"id":1}]]},"ace":{"folds":[],"scrolltop":3194,"scrollleft":0,"selection":{"start":{"row":240,"column":0},"end":{"row":240,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":122,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1559657107696}