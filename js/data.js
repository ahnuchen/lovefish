var dataObj = function () {
	 this.fruitNum = 0;
	 this.blueNum = 0;
	 this.doubleEat = 1; 
	 this.hp = 0;
	 this.gameOver = false;
	 this.alp = 0;
	 this.score = 0;
}
dataObj.prototype.draw = function  () {
	 var w = can1.width;
	 var h = can1.height;

	 ctx1.save();
	 ctx1.shadowBlur = "10";
	 ctx1.shadowColor = "white";
	 ctx1.fillStyle = "white"; 
	 ctx1.font = "22px Verdana";
	 ctx1.textAlign = "left";
	 ctx1.fillText("生命: " + this.hp, w*0.4, h-40);
	 ctx1.fillText("得分: " + this.score, w*0.4, h-10);
	 ctx1.restore();
	 ctx1.save();
	 ctx1.shadowBlur = "30";
	 ctx1.shadowColor = "white";
	 ctx1.fillStyle = "white"; 
	 ctx1.font = "28px Verdana";
	 ctx1.textAlign = "center";
	 if(this.gameOver)
	 {  
	 	this.alp += 0.02;
	 	if(this.alp > 1)
	 		this.alp = 1;
	 	ctx1.fillStyle = "rgba(255,255,255," + this.alp + ")";
	 	ctx1.fillText("G A M E O V E R !", w*0.5, h*0.5);
	 }
	 ctx1.restore();
	 
}
dataObj.prototype.addScore = function () {
	 this.hp = this.hp + this.fruitNum *100 -this.blueNum*100;
	 if(this.hp < 0){
	 	data.gameOver = true;
	 }
	 this.fruitNum = 0;
	 this.blueNum = 0;
	 this.doubleEat = 1; 


}
