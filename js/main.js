var can1;
var can2;
var ctx1;
var ctx2;

var canWidth;
var canHeight;
var lastTime;
var deltaTime;

var ane;
var fruit;
var dust;
var dustPic = [];

var mom;
var bigBodyOrange = [];
var bigBodyBlue = [];
var baby;
var mx;
var my;
var data;
var eat;

var babyTail = [];
var babyEye = [];
var babyBody = [];
var bigTail = [];
var bigEye = [];
var bigEat = [];
var bigEatBlue = [];

var bgPic = new Image();
document.body.onload = game;
function game () {
	init();
	lastTime = Date.now;
	deltaTime = 0;
	gameloop();

}
function init () {
	 // 获得canvas context 
	 can1 = document.getElementById("canvas1");//fishes,dust,UI,circles
	 ctx1 = can1.getContext("2d");
	 can2 = document.getElementById("canvas2");//background,one,fruits
	 ctx2 = can2.getContext("2d");

	 can1.addEventListener('mousemove',onMouseMove,false);
	 // can1.onclick = onMouseMove;

	 bgPic.src = "./src/background.jpg";

	 canWidth = can1.width;
	 canHeight = can1.height;

	 ane = new aneObj();
	 ane.init();

	 fruit = new fruitObj();
	 fruit.init();

	 mom = new momObj;
	 mom.init();

	 baby = new babyObj;
	 baby.init();

	 eat = new eatObj;

	 for(var i =0; i < 8; i++)
	 {
	 	babyTail[i] = new Image();
	 	babyTail[i].src = "./src/babyTail0.png";
	 	bigTail[i] = new Image();
	 	bigTail[i].src = "./src/bigTail" + i + ".png"
	 }
	 for(var i = 0;i < 2;i++){
	 	babyEye[i] = new Image();
	 	bigEye[i] = new Image();
	 	babyEye[i].src = "./src/babyEye"+ i + ".png";
	 	bigEye[i].src = "./src/bigEye"+ i + ".png";
	 }
	 for(var i =0;i <20 ;i ++)
	 {
	 	babyBody[i] = new Image();
	 	babyBody[i].src = "./src/babyFade" + i + ".png";
	 }

	 data = new dataObj();
	 for(var i =0; i < 8; i++ )
	 {
	 	bigBodyOrange[i] = new Image();
	 	bigBodyBlue[i] = new Image();
	 	bigEat[i] = new Image();
	 	bigEatBlue[i] = new Image();
	 	bigBodyOrange[i].src = "./src/bigSwim" + i + ".png";
	 	bigBodyBlue[i].src = "./src/bigSwimBlue" + i + ".png";
	 	bigEat[i].src = "./src/bigEat" + i + ".png";
	 	bigEatBlue[i].src = "./src/bigEatBlue" + i + ".png";

	 }
	 dust = new dustObj();
	 dust.init();
	 for(var i =0;i<7;i++)
	 {
	 	dustPic[i] = new Image();
	 	dustPic[i].src = "./src/dust" + i + ".png";
	 }
}

function gameloop () {
	 requestAnimFrame(gameloop);
	 // requestAnimationFrame(gameloop);
	  var now = Date.now();
	  deltaTime = now - lastTime;
	  if(deltaTime>=50){deltaTime = 50;}
	  lastTime = now;

	  drawBackground();
	  ane.draw();
	  fruitMonitor();
	  fruit.draw();

	  ctx1.clearRect(0, 0, canWidth, canHeight);
	  mom.draw();
	  baby.draw();
	  momFruitsCollision();
	  momBabyCollision();
	  data.draw();
	  dust.draw();

}

function onMouseMove (e) {
	if(!data.gameOver)
	{
		if(e.offsetX||e.layerX)
	 {
	 	mx = e.offsetX == undefined ? e.layerX : e.offsetX;
	 	my = e.offsetY == undefined ? e.layerY : e.offsetY;
	 } 

	}

}