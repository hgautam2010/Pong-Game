function Slider(x, h)
{
  this.x = x;
  this.y = height - h;
  this.strength = 20;
  this.width = width/6;
  this.height = h;
}
Slider.prototype.show = function()
{
  fill(200);
  stroke(0);
  strokeWeight(2);
  rect(this.x,this.y,this.width,this.height);
}
Slider.prototype.update = function(key)
{
  console.log(key);
  if(key == LEFT_ARROW)
  {
    if (this.x - this.strength >= 0)
    {
      this.x -= this.strength;
    }
    else
    {
      this.x = 0;
    }
  }
  if(key == RIGHT_ARROW)
  {
    if(this.x + this.strength + this.width <= width)
    {
      this.x += this.strength;
    }
    else
    {
      this.x = width - this.width;
    }
  }
}
