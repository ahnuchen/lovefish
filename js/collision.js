//判断大鱼和果实的距离
function momFruitsCollision () {
	if(!data.gameOver)
	{
		for(var i =0; i < fruit.num; i++){
		if(fruit.alive[i])
		{
	 		//calculate Length
	 		var l = calLength2(fruit.x[i],fruit.y[i],mom.x,mom.y);
	 		if(l < 625)
	 		{
	 			fruit.dead(i);
	 			mom.bigBodyCount++;
	 			if(mom.bigBodyCount > 7)
	 			{
	 				mom.bigBodyCount = 7;
	 			}
	 			if(fruit.fruitType[i] =="orange")
	 			{	
	 				data.fruitNum++;
	 				data.score++;

	 			}
	 			else
	 			{	
	 				data.blueNum++;
	 				data.doubleEat = 2;
	 			}
	 		}
	 	}
	 } 
	}
	
	}

//mom baby collision
function momBabyCollision () {
	if(data.hp >= 0 && data.gameOver == false &&((data.fruitNum>0) || (data.blueNum>0)))
	{
		var l = calLength2(mom.x, mom.y, baby.x, baby.y); 
		if(l<900)
		{
	 	//baby recover
	 	baby.babyBodyCount = 0;
	 	mom.bigBodyCount = 0;
	 	data.addScore();
	 }
	}

}