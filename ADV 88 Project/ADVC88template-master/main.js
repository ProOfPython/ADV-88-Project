var canvas = new fabric.Canvas('myCanvas')
ballX = 0
ballY = 0
holeX = 400
holeY = 800
ballSpeed = 5
ballObj = ''
holeObj = ''
function load_img(){
	fabric.Image.fromURL('golf-h.png', function(Img){
		holeObj = Img
		holeObj.scaleToWidth(50)
		holeObj.scaleToHeight(50)
		holeObj.set({top: holeY, left: holeX})
	});
	canvas.add(holeObj)
	new_image();
}
function new_image()
{
	fabric.Image.fromURL('ball.png', function(Img){
		ballObj = Img
		ballObj.scaleToWidth(50)
		ballObj.scaleToHeight(50)
		ballObj.set({top: ballY, left: ballX})
	});
	canvas.add(ballObj)
	new_image();
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if ((ballX == holeX) && (ballY == holeY)) {
		canvas.remove(ballObj)
		document.getElementById('hd3').innerHTML = 'You scored!'
		document.getElementById('hd3').style.borderColor = 'red'
	} else {
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	};
	
	function up()
	{
		if(ballY <= 450){
		ballY += ballSpeed
	}
	}

	function down()
	{
		if(ballY >= 5){
			ballY += ballSpeed
		}
	}

	function left()
	{
		if(ballX >5)
		{
			ballX -= ballSpeed
		}
	}

	function right()
	{
		if(ballX <=1050)
		{
			ballX += ballSpeed
		}
	}
	
}

