const tilesBoard = document.getElementsByClassName('tiles-board');
const board = document.getElementsByClassName('board');
const p1Img = document.getElementById('p1-img');
const p2Img = document.getElementById('p2-img');
let p1MainChar;
let p2MainChar;
let contMainCharArr = [];
let skillCharX = [];
let skillCharO = [];
var XorO = "X";
const elementIdArr = [];
const charFainted = [];
const charWin = [];
let p1charFaintedIndex = 0;
let p2charFaintedIndex = 0;
let p1Score = 0;
let p2Score = 0;
const p1HealthBar = document.getElementById('p1-health-bar');
const p2HealthBar = document.getElementById('p2-health-bar');
const countdown = document.getElementById('countdown');
var countdownVar;
var countdownInt = 4;
const countdownDiv = document.getElementsByClassName('countdown-div');
var totalClicked = 0;
const draw = document.getElementsByClassName('draw-div');
let hadWon = false;
let drawVar , drawInt = 1;
const go = document.getElementsByClassName('go-div');
const clipDiv = document.getElementById('clip-effect');
const clipGif = document.getElementById('clip-gif');
let clipCharArr = [];
var clipInt = 4, clipVar;
const clipIntervalChar = [];
var p1HealthBarWidth = 100;
var p2HealthBarWidth = 100;
var healthBarWidth = 100;
const winDiv = document.getElementById('win-id');
const charText = document.getElementById('char-text');
const winFaintText = document.getElementById('win-faint-text');
const winFaintedCharTextArr = [];
let winLossTimer = 0;
var defeatedVar , arrowVar , winnerVar;
var arrowBlink = 0;
const arrowImg = document.getElementById('arrow-img');
const p1Name = document.getElementById('player-one-name');
const p2Name = document.getElementById('player-two-name');
const p1IconChar = document.getElementById('p1-img-icon');
const p2IconChar = document.getElementById('p2-img-icon');
const charIconArr = [];
const charNameDefault = [];

function main(){

	/*
	*NOTE
	*p1charFaintedIndex ,and p2charFaintedIndex are the main index of some of the arrays
	*/

	board[0].style.border = "1px solid white";
	//Orig Board of Tictactoe
	//origBoard();

	//putting the ID of every tiles to elementIDArr
	for(var i = 0; i < 9; ++i){
		elementIdArr[i] = document.getElementById(i);
	}

	//set visible false; 
	document.getElementById('strikeThrough-effect').style.visibility = "hidden";
	countdownDiv[0].style.visibility = "hidden";
	draw[0].style.visibility = "hidden";
	go[0].style.visibility = "hidden";
	clipDiv.style.visibility = "hidden";
	winDiv.style.visibility = "hidden";

	//pass the value image of players from characters.html
	p1Img.src = localStorage.getItem("player-one-image");
	p2Img.src = localStorage.getItem("player-two-image");

	p1MainChar = localStorage.getItem("main-char-p1");
	p2MainChar = localStorage.getItem("main-char-p2");

	//assign main char image to contMainChar
	contMainCharArr[0] = "pikachuMain.jpg";
	contMainCharArr[1] = "bulbasaurMain.jpg";
	contMainCharArr[2] = "charmanderMain.jpg";
	contMainCharArr[3] = "squirtleMain.jpg";
	contMainCharArr[4] = "chimcharMain.jpg";
	contMainCharArr[5] = "piplupMain.jpg";

	//assign main char skills to skillCharX and skillCharO
	skillCharX[0] = "thunder.png";
	skillCharX[1] = "razorleaf.png";
	skillCharX[2] = "flames.png";
	skillCharX[3] = "kame.png";
	skillCharX[4] = "kameRed.png";
	skillCharX[5] = "water.gif";

	skillCharO[0] = "thunderO.png";
	skillCharO[1] = "razorleaf.png";
	skillCharO[2] = "flames.png";
	skillCharO[3] = "kameO.png";
	skillCharO[4] = "kameRedO.png";
	skillCharO[5] = "waterO.gif";

	//https://kissanime.ru/Anime/Pokemon-Dub

	//assign characters fainted image to charFainted
	charFainted[0] = "pikachuFainted.jpg";
	charFainted[1] = "bulbasaurFainted.png";
	charFainted[2] = "charmanderFainted.jpg";
	charFainted[3] = "squirtleFainted.jpg";
	charFainted[4] = "chimcharFainted.gif";
	charFainted[5] = "piplupFainted.jpg";

	p1charFaintedIndex = localStorage.getItem("p1-char-Fainted-Index");

	switch(parseInt(p1charFaintedIndex)){
		case 0: p1Img.style.transform = "rotateY(0deg)";
			break;
		case 1: p1Img.style.transform = "rotateY(180deg)";
			break;
		case 2: p1Img.style.transform = "rotateY(180deg)";
			break;
		case 3: p1Img.style.transform = "rotateY(180deg)";
			break;
		case 4: p1Img.style.transform = "rotateY(0deg)";
			break;
		case 5: p1Img.style.transform = "rotateY(0deg)";
			break;
	}

	p2charFaintedIndex = localStorage.getItem("p2-char-Fainted-Index");

	switch(parseInt(p2charFaintedIndex)){
		case 0: p2Img.style.transform = "rotateY(180deg)";
			break;
		case 1: p2Img.style.transform = "rotateY(0deg)";
			break;
		case 2: p2Img.style.transform = "rotateY(0deg)";
			break;
		case 3: p2Img.style.transform = "rotateY(0deg)";
			break;
		case 4: p2Img.style.transform = "rotateY(180deg)";
			break;
		case 5: p2Img.style.transform = "rotateY(180deg)";
			break;
	}

	//assign characters win image to charWin
	charWin[0] = "pikachuWin.jpg";
	charWin[1] = "bulbasaurWin.jpg";
	charWin[2] = "charmanderWin.jpg";
	charWin[3] = "squirtleWin.jpg";
	charWin[4] = "chimcharWin.jpg";
	charWin[5] = "piplupWin.jpg";

	//assign characters skill gif to clipCharArr
	clipCharArr[0] = "pikachuSkill.gif";
	clipCharArr[1] = "bulbasaurSkill.gif";
	clipCharArr[2] = "charmanderSkill.gif";
	clipCharArr[3] = "squirtleSkill.gif";
	clipCharArr[4] = "chimcharSkill.gif";
	clipCharArr[5] = "piplupSkill.gif";

	// estimated clip timer per char
	clipIntervalChar[0] = 2.5;
	clipIntervalChar[1] = 3.5;
	clipIntervalChar[2] = 3;
	clipIntervalChar[3] = 3.5;
	clipIntervalChar[4] = 3.5;
	clipIntervalChar[5] = 3.5;

	//assign all characters name in winFaintedCharTextArr;
	winFaintedCharTextArr[0] = "PIKACHU";
	winFaintedCharTextArr[1] = "BULBASAUR";
	winFaintedCharTextArr[2] = "CHARMANDER";
	winFaintedCharTextArr[3] = "SQUIRTLE";
	winFaintedCharTextArr[4] = "CHIMCHAR";
	winFaintedCharTextArr[5] = "PIPLUP";

	//assign all characters icon to players/characters name
	charIconArr[0] = "pikachuIcon.png";
	charIconArr[1] = "bulbasaurIcon.png";
	charIconArr[2] = "charmanderIcon.png";
	charIconArr[3] = "squirtleIcon.png";
	charIconArr[4] = "chimcharIcon.png";
	charIconArr[5] = "piplupIcon.png";

	//default names of the characters , from the array of winFaintedCharTextArr
	for(var i = 0; i < 6; ++i){
		charNameDefault[i] = winFaintedCharTextArr[i];
	}

	//set the name of the players , ***mean time the characters name***
	p1Name.textContent = charNameDefault[p1charFaintedIndex];
	p2Name.textContent = charNameDefault[p2charFaintedIndex];

	//set the players icon image beside the name of the character
	p1IconChar.src = "./imgs/" + charIconArr[p1charFaintedIndex];
	p2IconChar.src = "./imgs/" + charIconArr[p2charFaintedIndex];
}

function origBoard(){
	let arr = [];

	board[0].style.border = "";

	for(var i = 0; i < tilesBoard.length; ++i){
		arr[i] = tilesBoard[i];
	}
	arr[0].style.borderTop = "0";
	arr[0].style.borderLeft = "0";
	arr[1].style.borderTop = "0";
	arr[2].style.borderTop = "0";
	arr[2].style.borderRight = "0";
	arr[3].style.borderLeft = "0";
	arr[5].style.borderRight = "0";
	arr[6].style.borderBottom = "0";
	arr[6].style.borderLeft = "0";
	arr[7].style.borderBottom = "0";
	arr[8].style.borderBottom = "0";
	arr[8].style.borderRight = "0";

}

function clicked(index){
	elementIdArr[index].textContent = XorO;

	elementIdArr[index].style.color = "#FFE77AFF";
	elementIdArr[index].style.textAlign = "center";
	elementIdArr[index].style.pointerEvents = "none";
	elementIdArr[index].style.fontSize = "120px";
	elementIdArr[index].style.fontFamily = "Agency FB";
	elementIdArr[index].style.backgroundColor = "#080a11";

	if(XorO == "X"){
		XorO = "O";
	}else{
		XorO = "X";
	}
	totalClicked++;
	patterns();
	
}

function reset(){
	for(var i = 0; i < 9; ++i){
		elementIdArr[i].style.pointerEvents = "auto";
		elementIdArr[i].textContent = "";
	}

	XorO = "X";
	hadWon = false;
	totalClicked = 0;
	document.getElementById('strikeThrough-effect').style.visibility = "hidden";
}

function countdownTimer(){

	countdown.textContent = countdownInt;

	if(countdownInt == 0){
		reset();
		countdownDiv[0].style.visibility = "hidden";
		go[0].style.visibility = "visible";
	}
	if(countdownInt == -1){
		clearInterval(countdownVar);
		go[0].style.visibility = "hidden";
		countdownInt = 5;
		countdown.textContent = countdownInt;
	}

	countdownInt--;
}

function onToTheNextRound(){
	countdownDiv[0].style.visibility = "visible";
	countdownVar = setInterval(countdownTimer , 1000);
}

function patterns(){
	let win = "X";
	for(var i = 0; i <= 1; ++i){
		if(elementIdArr[0].textContent == win && elementIdArr[1].textContent == win && elementIdArr[2].textContent == win){
			setDisabledTiles();
			strikeThrough(win , "h1");
			hadWon = true;
		}
		if(elementIdArr[3].textContent == win && elementIdArr[4].textContent == win  && elementIdArr[5].textContent == win){
			setDisabledTiles();
			strikeThrough(win , "h2");
			hadWon = true;
		}
		if(elementIdArr[6].textContent == win && elementIdArr[7].textContent == win && elementIdArr[8].textContent == win){
			setDisabledTiles();
			strikeThrough(win , "h3");
			hadWon = true;
		}
		if(elementIdArr[0].textContent == win && elementIdArr[4].textContent == win && elementIdArr[8].textContent == win){
			setDisabledTiles();
			strikeThrough(win , "sL");
			hadWon = true;
		}
		if(elementIdArr[2].textContent == win && elementIdArr[4].textContent == win && elementIdArr[6].textContent == win){
			setDisabledTiles();
			strikeThrough(win , "sR");
			hadWon = true;
		}
		if(elementIdArr[0].textContent == win && elementIdArr[3].textContent == win && elementIdArr[6].textContent == win){
			setDisabledTiles();
			strikeThrough(win , "v1");
			hadWon = true;
		}
		if(elementIdArr[1].textContent == win && elementIdArr[4].textContent == win && elementIdArr[7].textContent == win){
			setDisabledTiles();
			strikeThrough(win , "v2");
			hadWon = true;	
		}
		if(elementIdArr[2].textContent == win && elementIdArr[5].textContent == win && elementIdArr[8].textContent == win){
			setDisabledTiles();
			strikeThrough(win , "v3");
			hadWon = true;	
		}
		win = "O";
	}
	
	if(totalClicked == 9 && hadWon == false){
		draw[0].style.visibility = "visible";
		drawVar = setInterval(drawTimer , 1000);
	}
}

function drawTimer(){
	if(drawInt == 0){
		draw[0].style.visibility = "hidden";
		drawInt = 1;
		clearInterval(drawVar);
		onToTheNextRound();
	}

	drawInt--;
}

function setDisabledTiles(){
	for(var i = 0; i < 9; ++i){
		elementIdArr[i].style.pointerEvents = "none";
	}
}


function strikeThrough(win , patterns){

	let top, left, deg, width;
	var strikeThrough = document.getElementById('strikeThrough-effect');
	strikeThrough.style.visibility = "visible";

	for(var i = 0; i < 6; ++i){
		if(win == "X"){
			if(contMainCharArr[i] == p1MainChar){
				strikeThrough.style.backgroundImage = "url(./imgs/" + skillCharX[i] + ")";

				strikeThrough.style.width = skillsX[i][patterns].width;
				strikeThrough.style.top = skillsX[i][patterns].top;
				strikeThrough.style.left = skillsX[i][patterns].left;
				strikeThrough.style.transform = "rotate(" + skillsX[i][patterns].deg; + ")";
				
				p1Score++;

				
				//GIF effect 
				clipGif.src = "./imgs/" + clipCharArr[p1charFaintedIndex];

				//handle the facing of the GIF towards to the enemy
				switch(parseInt(p1charFaintedIndex)){
					case 0: clipGif.style.transform = "rotateY(0deg)";
						break
					case 1: clipGif.style.transform = "rotateY(0deg)";
						break;
					case 2: clipGif.style.transform = "rotateY(180deg)";
						break
					case 3: clipGif.style.transform = "rotateY(180deg)";
						break
					case 4: clipGif.style.transform = "rotateY(180deg)";
						break;
				}

				clipVar = setInterval(function() {clipTimer(clipIntervalChar[p1charFaintedIndex] , "p2" , p1Score);} , 1000);



				break;
			}
		}
		if(win == "O"){
			if(contMainCharArr[i] == p2MainChar){
				strikeThrough.style.backgroundImage = "url(./imgs/" + skillCharO[i] + ")";

				strikeThrough.style.width = skillsO[i][patterns].width;
				strikeThrough.style.top = skillsO[i][patterns].top;
				strikeThrough.style.left = skillsO[i][patterns].left;
				strikeThrough.style.transform = "rotate(" + skillsO[i][patterns].deg; + ")";
				 	
				p2Score++;

				//GIF effect 
				clipGif.src = "./imgs/" + clipCharArr[p2charFaintedIndex];

				switch(parseInt(p2charFaintedIndex)){
					case 0: clipGif.style.transform = "rotateY(180deg)";
						break;
					case 1: clipGif.style.transform = "rotateY(180deg)";
						break;
					case 2: clipGif.style.transform = "rotateY(0deg)";
						break;
					case 3: clipGif.style.transform = "rotateY(0deg)";
						break;
					case 4: clipGif.style.transform = "rotateY(0deg)";
						break;
				}


				clipVar = setInterval(function() {clipTimer(clipIntervalChar[p2charFaintedIndex] , "p1" , p2Score ,);} , 1000);

				break;
			}
		}
	}
}

function clipTimer(endSecs , player , score){
	if(clipInt >= endSecs){
		clipDiv.style.visibility = "visible";
		clipInt -= .5;
	}else{
		clipDiv.style.visibility = "hidden";
		clipInt = 4;
		healthBar(player , score);
		clearInterval(clipVar);
	}

}

function healthBar(player , score){

	let color;
	let interval = 0;

	switch(score){
		case 1: interval = 60; 
				color = "#56ca7c";
			break;
		case 2: interval = 25;
				color = "#f18c00";
			break;
		case 3: interval = 10;
				color = "#ce0000";
			break;
		case 3: interval = 0; 
			break;
	}

	var healthBarVar = setInterval(frame , 50);
	function frame(){
		if(player == "p1"){
			if(p1HealthBarWidth == interval){
				clearInterval(healthBarVar);

				if(score == 4){
					p2Img.src = "./imgs/" + charWin[p2charFaintedIndex]
					p1Img.src = "./imgs/" + charFainted[p1charFaintedIndex];

					defeatedVar = setInterval(function(){defeated(p1charFaintedIndex , p2charFaintedIndex)} , 1000);
					arrowVar = setInterval(arrowBlinking , 500);
				}else{
					onToTheNextRound();
				}

			}else{
				p1HealthBarWidth--;
				healthBarWidth = p1HealthBarWidth;
				p1HealthBar.style.width = p1HealthBarWidth + "%";
				p1HealthBar.style.backgroundColor = color;
			}
		}	
		if(player == "p2"){
			if(p2HealthBarWidth == interval){
				clearInterval(healthBarVar);
				

				if(score == 4){
					p1Img.src = "./imgs/" + charWin[p1charFaintedIndex]
					p2Img.src = "./imgs/" + charFainted[p2charFaintedIndex];

					defeatedVar = setInterval(function(){defeated(p2charFaintedIndex , p1charFaintedIndex)} , 1000);
					arrowVar = setInterval(arrowBlinking , 500);

					defeated(p2charFaintedIndex);
				}else{
					onToTheNextRound();
				}

			}else{
				p2HealthBarWidth--;
				healthBarWidth = p2HealthBarWidth;
				p2HealthBar.style.width = p2HealthBarWidth + "%";
				p2HealthBar.style.backgroundColor = color;
			}
		}
	}
}

function defeated(defeatedPlayer , winnerPlayer){
	winDiv.style.visibility = "visible";

	charText.textContent = winFaintedCharTextArr[defeatedPlayer];
	winFaintText.textContent = "is fainted!"

	winLossTimer++;

	if(winLossTimer == 4){
		winLossTimer = 0;
		clearInterval(defeatedVar);
		winnerVar = setInterval(function() {winner(winnerPlayer)} , 1000);
	}
}

function winner(player){
	charText.textContent = winFaintedCharTextArr[player];
	winFaintText.textContent = "wins!"

	winLossTimer++;
}

function arrowBlinking(){
	arrowBlink++;

	if(arrowBlink % 2 == 0){
		arrowImg.style.visibility = "visible";
	}else{
		arrowImg.style.visibility = "hidden";
	}
}

const skillsX = {
	0 : {
		h1 : {
			width : "463px",
			top : "10px",
			left : "-15px",
			deg : "0deg"
		},
		h2 : {
			width : "463px",
			top : "160px",
			left : "-15px",
			deg : "0deg"
		},
		h3 : {
			width : "463px",
			top : "310px",
			left : "-15px",
			deg : "0deg"
		},

		v1 : {
			width : "463px",
			top : "165px",
			left : "-140px",
			deg : "90deg"
		},
		v2 : {
			width : "463px",
			top : "165px",
			left : "0px",
			deg : "90deg"
		},
		v3 : {
			width : "463px",
			top : "165px",
			left : "150px",
			deg : "90deg"
		},

		sL : {
			width : "650px",
			top : "145px",
			left : "-100px",
			deg : "42deg"
		},
		sR : {
			width : "650px",
			top : "175px",
			left : "-125px",
			deg : "312deg"
		}
	},

	1 : {
		h1 : {
			width : "450px",
			top : "25px",
			left : "0px",
			deg : "0deg"
		},
		h2 : {
			width : "450px",
			top : "175px",
			left : "0px",
			deg : "0deg"
		},
		h3 : {
			width : "450px",
			top : "325px",
			left : "0px",
			deg : "0deg"
		},

		v1 : {
			width : "463px",
			top : "173px",
			left : "-150px",
			deg : "90deg"
		},
		v2 : {
			width : "463px",
			top : "173px",
			left : "0px",
			deg : "90deg"
		},
		v3 : {
			width : "463px",
			top : "173px",
			left : "150px",
			deg : "90deg"
		},

		sL : {
			width : "550px",
			top : "180px",
			left : "-50px",
			deg : "45deg"
		},
		sR : {
			width : "550px",
			top : "180px",
			left : "-45px",
			deg : "-45deg"
		}
	},

	2 : {
		h1 : {
			width : "450px",
			top : "25px",
			left : "0px",
			deg : "0deg"
		},
		h2 : {
			width : "450px",
			top : "175px",
			left : "0px",
			deg : "0deg"
		},
		h3 : {
			width : "450px",
			top : "325px",
			left : "0px",
			deg : "0deg"
		},

		v1 : {
			width : "450px",
			top : "173px",
			left : "-150px",
			deg : "90deg"
		},
		v2 : {
			width : "450px",
			top : "173px",
			left : "0px",
			deg : "90deg"
		},
		v3 : {
			width : "450px",
			top : "173px",
			left : "150px",
			deg : "90deg"
		},

		sL : {
			width : "600px",
			top : "160px",
			left : "-65px",
			deg : "45deg"
		},
		sR : {
			width : "600px",
			top : "165px",
			left : "-85px",
			deg : "-45deg"
		}
	},

	3 : {
		h1 : {
			width : "450px",
			top : "25px",
			left : "0px",
			deg : "-180deg"
		},
		h2 : {
			width : "450px",
			top : "175px",
			left : "0px",
			deg : "-180deg"
		},
		h3 : {
			width : "450px",
			top : "325px",
			left : "0px",
			deg : "-180deg"
		},

		v1 : {
			width : "450px",
			top : "175px",
			left : "-150px",
			deg : "-90deg"
		},
		v2 : {
			width : "450px",
			top : "175px",
			left : "0px",
			deg : "-90deg"
		},
		v3 : {
			width : "450px",
			top : "175px",
			left : "150px",
			deg : "-90deg"
		},

		sL : {
			width : "600px",
			top : "170px",
			left : "-75px",
			deg : "225deg"
		},
		sR : {
			width : "600px",
			top : "175px",
			left : "-75px",
			deg : "-225deg"
		}
	},

	4 : {
		h1 : {
			width : "500px",
			top : "20px",
			left : "0px",
			deg : "0deg"
		},
		h2 : {
			width : "500px",
			top : "170px",
			left : "0px",
			deg : "0deg"
		},
		h3 : {
			width : "500px",
			top : "320px",
			left : "0px",
			deg : "0deg"
		},

		v1 : {
			width : "500px",
			top : "200px",
			left : "-170px",
			deg : "90deg"
		},
		v2 : {
			width : "500px",
			top : "200px",
			left : "-20px",
			deg : "90deg"
		},
		v3 : {
			width : "500px",
			top : "200px",
			left : "130px",
			deg : "90deg"
		},

		sL : {
			width : "670px",
			top : "190px",
			left : "-85px",
			deg : "45deg"
		},
		sR : {
			width : "670px",
			top : "150px",
			left : "-90px",
			deg : "-45deg"
		}
	},

	5 : {
		h1 : {
			width : "550px",
			top : "20px",
			left : "-5px",
			deg : "-10deg"
		},
		h2 : {
			width : "550px",
			top : "175px",
			left : "-5px",
			deg : "-10deg"
		},
		h3 : {
			width : "550px",
			top : "330px",
			left : "-5px",
			deg : "-10deg"
		},

		v1 : {
			width : "650px",
			top : "270px",
			left : "-255px",
			deg : "82deg"
		},
		v2 : {
			width : "650px",
			top : "270px",
			left : "-105px",
			deg : "82deg"
		},
		v3 : {
			width : "650px",
			top : "270px",
			left : "45px",
			deg : "82deg"
		},

		sL : {
			width : "800px",
			top : "235px",
			left : "-135px",
			deg : "40deg"
		},
		sR : {
			width : "800px",
			top : "110px",
			left : "-130px",
			deg : "-55deg"
		}
	}
}

const skillsO = {
	0 : {
		h1 : {
			width : "463px",
			top : "10px",
			left : "0px",
			deg : "0deg"
		},
		h2 : {
			width : "463px",
			top : "160px",
			left : "0px",
			deg : "0deg"
		},
		h3 : {
			width : "463px",
			top : "310px",
			left : "0px",
			deg : "0deg"
		},

		v1 : {
			width : "463px",
			top : "185px",
			left : "-140px",
			deg : "90deg"
		},
		v2 : {
			width : "463px",
			top : "185px",
			left : "0px",
			deg : "90deg"
		},
		v3 : {
			width : "463px",
			top : "185px",
			left : "150px",
			deg : "90deg"
		},

		sL : {
			width : "650px",
			top : "175px",
			left : "-75px",
			deg : "48deg"
		},
		sR : {
			width : "650px",
			top : "145px",
			left : "-95px",
			deg : "318deg"
		}
	},

	1 : {
		h1 : {
			width : "450px",
			top : "25px",
			left : "0px",
			deg : "0deg"
		},
		h2 : {
			width : "450px",
			top : "175px",
			left : "0px",
			deg : "0deg"
		},
		h3 : {
			width : "450px",
			top : "325px",
			left : "0px",
			deg : "0deg"
		},

		v1 : {
			width : "463px",
			top : "173px",
			left : "-150px",
			deg : "90deg"
		},
		v2 : {
			width : "463px",
			top : "173px",
			left : "0px",
			deg : "90deg"
		},
		v3 : {
			width : "463px",
			top : "173px",
			left : "150px",
			deg : "90deg"
		},

		sL : {
			width : "550px",
			top : "180px",
			left : "-50px",
			deg : "45deg"
		},
		sR : {
			width : "550px",
			top : "180px",
			left : "-45px",
			deg : "-45deg"
		}
	},

	2 : {
		h1 : {
			width : "450px",
			top : "25px",
			left : "0px",
			deg : "0deg"
		},
		h2 : {
			width : "450px",
			top : "175px",
			left : "0px",
			deg : "0deg"
		},
		h3 : {
			width : "450px",
			top : "325px",
			left : "0px",
			deg : "0deg"
		},

		v1 : {
			width : "450px",
			top : "173px",
			left : "-150px",
			deg : "90deg"
		},
		v2 : {
			width : "450px",
			top : "173px",
			left : "0px",
			deg : "90deg"
		},
		v3 : {
			width : "450px",
			top : "173px",
			left : "150px",
			deg : "90deg"
		},

		sL : {
			width : "600px",
			top : "160px",
			left : "-65px",
			deg : "45deg"
		},
		sR : {
			width : "600px",
			top : "165px",
			left : "-85px",
			deg : "-45deg"
		}
	},

	3 : {
		h1 : {
			width : "450px",
			top : "25px",
			left : "0px",
			deg : "-180deg"
		},
		h2 : {
			width : "450px",
			top : "175px",
			left : "0px",
			deg : "-180deg"
		},
		h3 : {
			width : "450px",
			top : "325px",
			left : "0px",
			deg : "-180deg"
		},

		v1 : {
			width : "450px",
			top : "175px",
			left : "-150px",
			deg : "90deg"
		},
		v2 : {
			width : "450px",
			top : "175px",
			left : "0px",
			deg : "90deg"
		},
		v3 : {
			width : "450px",
			top : "175px",
			left : "150px",
			deg : "90deg"
		},

		sL : {
			width : "600px",
			top : "170px",
			left : "-75px",
			deg : "225deg"
		},
		sR : {
			width : "600px",
			top : "175px",
			left : "-75px",
			deg : "-225deg"
		}
	},

	4 : {
		h1 : {
			width : "500px",
			top : "20px",
			left : "-50px",
			deg : "0deg"
		},
		h2 : {
			width : "500px",
			top : "170px",
			left : "-50px",
			deg : "0deg"
		},
		h3 : {
			width : "500px",
			top : "320px",
			left : "-50px",
			deg : "0deg"
		},

		v1 : {
			width : "500px",
			top : "150px",
			left : "-170px",
			deg : "90deg"
		},
		v2 : {
			width : "500px",
			top : "150px",
			left : "-20px",
			deg : "90deg"
		},
		v3 : {
			width : "500px",
			top : "150px",
			left : "130px",
			deg : "90deg"
		},

		sL : {
			width : "670px",
			top : "150px",
			left : "-125px",
			deg : "45deg"
		},
		sR : {
			width : "670px",
			top : "190px",
			left : "-135px",
			deg : "-45deg"
		}
	},

	5 : {
		h1 : {
			width : "550px",
			top : "20px",
			left : "-95px",
			deg : "-190deg"
		},
		h2 : {
			width : "550px",
			top : "175px",
			left : "-95px",
			deg : "-190deg"
		},
		h3 : {
			width : "550px",
			top : "330px",
			left : "-95px",
			deg : "-190deg"
		},

		v1 : {
			width : "650px",
			top : "80px",
			left : "-245px",
			deg : "262deg"
		},
		v2 : {
			width : "650px",
			top : "80px",
			left : "-95px",
			deg : "262deg"
		},
		v3 : {
			width : "650px",
			top : "80px",
			left : "55px",
			deg : "262deg"
		},

		sL : {
			width : "800px",
			top : "110px",
			left : "-215px",
			deg : "220deg"
		},
		sR : {
			width : "800px",
			top : "220px",
			left : "-245px",
			deg : "130deg"
		}
	}
}
