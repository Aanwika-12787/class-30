class Pig  {
  constructor(x, y){
    var options = {
      'restitution':0.8,
      'friction':1.0,
      'density':0.5
  }
  this.body = Bodies.rectangle(x, y, width, height, options);
  this.width = width;
  this.height = height;

  World.add(world, this.body);
    this.image = loadImage("sprites/enemy.png");
    this.visiblity=255
  }
  display(){
    console.log(this.body.speed)
    if(this.body.speed<3){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0);
      pop() ;
    }
    else{
World.remove(world,this.body)
push()
this.visiblity=this.visiblity-5
tint(255,this.visiblity)
image(this.image,this.body.position.x,this.body.position.y)
pop()
    }
       
  }

}