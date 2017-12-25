var ball;
var slider;
var go;
var winGame;
var loseGame;
var wallStrike;
var sliderStrike;
function preload()
{
	winGame = loadSound('youWin.wav');
	loseGame = loadSound('youLose.wav');
	wallStrike = loadSound('wallStrike.wav');
	sliderStrike = loadSound('sliderStrike.wav');
}
function setup()
{
	createCanvas(windowWidth, windowHeight);
	ball = new Ball(width/50);
	slider = new Slider(width/2, height/30);
	go = true;
}

function draw()
{
	if(go)
	{
		background(0);
		if(frameCount%100 == 0)
		{
			ball.double();
		}
		ball.update(slider);
		if(ball.check(slider) == false)
		{
			go = false;
			win();
		}
		ball.show();
		slider.show();
		if(keyIsDown(LEFT_ARROW) || keyIsDown(RIGHT_ARROW))
			slider.update(keyCode);
	}
}
function win()
{
	console.log('You Lose.');
}
