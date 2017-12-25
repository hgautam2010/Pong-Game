function Ball(r)
{
  this.mass = 1;
  this.r = r;
  this.loc = createVector(width/2, height/2);;
  this.acc = createVector(2, 2);
  this.vel = createVector(0, 0);
  this.update = function()
  {
    this.vel.add(this.acc);
    this.loc.add(this.vel);
    this.acc.mult(0);
  }
  this.applyForce = function(f)
  {
    f.div(this.mass);
    this.acc.add(f);
  }
  this.show = function()
  {
    this.update();
    fill(200);
    stroke(0);
    strokeWeight(2);
    ellipse(this.loc.x, this.loc.y, r, r);
  }
  this.check = function()
  {
    if(this.loc.x < 0)
    {
      this.loc.x = 0;
      this.vel.x *= -1;
      wallStrike.play()
      return true;
    }
    if(this.loc.x > width)
    {
      this.loc.x = width;
      this.vel.x *= -1;
      wallStrike.play()
      return true;
    }
    if(this.loc.y < 0)
    {
      this.loc.y = 0;
      this.vel.y *= -1;
      wallStrike.play()
      return true;
    }
    if(this.loc.x >= slider.x && this.loc.x <= slider.x + slider.width && slider.y - this.loc.y - r/2 <= this.vel.mag())
    {
      sliderStrike.play();
      this.vel.y *= -1;
      return true;
    }
    if (this.loc.y > height + 20)
    {
      winGame.play();
      return false;
    }
    return true;
  }
  this.double = function()
  {
    this.vel.mult(1.1);
  }
}
