var imgChars = [];
var imgCounter = 0, imgPathCount = 1;
const imgArr = new Array(6).fill(0).map(() => new Array(3).fill(0));
const imgArrMain = [];
var imgHover;
const charTiles = document.querySelectorAll('.char-tiles');
const playerOne = document.getElementById('player-one');
const playertwo = document.getElementById('player-two');
const p1Img = document.getElementById('img-p1');
const p2Img = document.getElementById('img-p2');
var mainCharClick = 1;
const pokeballImgsClass = document.getElementsByClassName('pokeball-img');
const pokeballImgsID = [];
var p1Done = false;
var p2Done = false;
var p1Ball;
var p2Ball;
const btnDiv = document.getElementById('btn-div');
var btnTimer = 0;
var btnHover;
let p1charFaintedIndex = 0;
let p2charFaintedIndex = 0;

function main(){
	// assign images ID to imgChars
	for(var i = 0; i <= 5; ++i){
		imgChars[i] = document.getElementById(i);
	}

	//default image for pokeball tiles
	//assign pokeball imgs ID to pokeballImgsID
	for(var i = 0;i < pokeballImgsClass.length; ++i){
		pokeballImgsClass[i].src = "./imgs/pokeball.png";
		pokeballImgsID[i] = document.getElementById('ball-img-' + i);
	}

	//default iamge of every tiles
	imgChars[0].src = "./imgs/pikachu.jpg";
	imgChars[1].src = "./imgs/bulbasaur.webp";
	imgChars[2].src = "./imgs/charmander.png";
	imgChars[3].src = "./imgs/squirtle.jpg";
	imgChars[4].src = "./imgs/chimchar.jpg";
	imgChars[5].src = "./imgs/piplup.png";

	//assign image path to imgArr
	imgArr[0][0] = "pikachu.jpg";
	imgArr[0][1] = "pikachu2.png";
	imgArr[0][2] = "pikachu3.jpg";

	imgArr[1][0] = "bulbasaur.webp";
	imgArr[1][1] = "bulbasaur2.jpg";
	imgArr[1][2] = "bulbasaur3.jpg";

	imgArr[2][0] = "charmander.png";
	imgArr[2][1] = "charmander2.jpg";
	imgArr[2][2] = "charmander3.jpg";

	imgArr[3][0] = "squirtle.jpg";
	imgArr[3][1] = "squirtle2.jpg";
	imgArr[3][2] = "squirtle3.png";

	imgArr[4][0] = "chimchar.jpg";
	imgArr[4][1] = "chimchar2.jpg";
	imgArr[4][2] = "chimchar3.jpg";

	imgArr[5][0] = "piplup.png";
	imgArr[5][1] = "piplup2.png";
	imgArr[5][2] = "piplup3.jpg";

	imgArrMain[0] = "pikachuMain.jpg";
	imgArrMain[1] = "bulbasaurMain.jpg";
	imgArrMain[2] = "charmanderMain.jpg";
	imgArrMain[3] = "squirtleMain.jpg";
	imgArrMain[4] = "chimcharMain.jpg";
	imgArrMain[5] = "piplupMain.jpg";
}


function imageTimerHover(whatTiles){
	imgHover = setInterval(function() {imageSlider(whatTiles);} , 700);
}

function imageTimerOut(){
	clearInterval(imgHover);

	//set to default pokeball images
	for(var i = 0;i < pokeballImgsClass.length; ++i){
		pokeballImgsClass[i].src = "./imgs/pokeball.png";
	}

	if(p1Done){
		pokeballImgsClass[p1Ball].src = "./imgs/pokeball2.png";
	}
	if(p2Done){
		pokeballImgsClass[p2Ball].src = "./imgs/pokeball2.png";
	}
	
}

function imageSlider(whatTiles){
	imgChars[whatTiles].src = "./imgs/" + imgArr[whatTiles][imgPathCount];
	
	imgPathCount++;
	if(imgPathCount == 3){
		imgPathCount = 0;
	}

	//pokeball shaking 
	pokeballImgsID[whatTiles].src = "./imgs/pokeballRoll.gif";
}

function clickedChar(whatTiles){

	if(mainCharClick == 1){
		p1Img.src = "./imgs/" + imgArrMain[whatTiles];
		p1charFaintedIndex = whatTiles;//for index form
		charTiles[whatTiles].style.pointerEvents = "none";

		localStorage.setItem("main-char-p1" , imgArrMain[whatTiles]);

		//pokeball open img
		pokeballImgsID[whatTiles].src = "./imgs/pokeball2.png";
		p1Done = true;
		p1Ball = whatTiles;

	}else{
		p2Img.src = "./imgs/" + imgArrMain[whatTiles];
		p2charFaintedIndex = whatTiles;//for index form

		localStorage.setItem("main-char-p2" , imgArrMain[whatTiles]);
		//pokeball open img
		pokeballImgsID[whatTiles].src = "./imgs/pokeball2.png";
		p2Done = true;
		p2Ball = whatTiles;
		
		tilesDisables();

		//btn function
		btnTimerStart();
	}
	mainCharClick = 2;
}

function tilesDisables(){
	for(var i = 0; i < charTiles.length; ++i){
		charTiles[i].style.pointerEvents = "none";
	}
}

function btnTimerStart(){
	btnHover = setInterval( btnColorBlink, 700);
}

function btnColorBlink(){
	if(btnTimer == 0){
		btnDiv.style.backgroundColor = "#7ca76e";
		btnDiv.style.borderColor = "#7ca76e"
	}
	if(btnTimer == 1){
		btnDiv.style.backgroundColor = "#1670cb";
		btnDiv.style.borderColor = "#1670cb";
	}

	btnTimer++;
	if(btnTimer == 2){
		btnTimer = 0;
	}
}


btnDiv.addEventListener('click' , function(){
	clearInterval(btnHover);
	localStorage.setItem("player-one-image" , p1Img.src);
	localStorage.setItem("player-two-image" , p2Img.src);
	localStorage.setItem("p1-char-Fainted-Index" , p1charFaintedIndex);
	localStorage.setItem("p2-char-Fainted-Index" , p2charFaintedIndex);
	
} , false)
