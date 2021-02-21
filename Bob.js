class Bob {
    constructor(x, y,radius) {
      var options = {
          isStatic:false,
          restitution:0.3,
          friction:0.5,
          density:1.2
      }
      this.body = Bodies.circle(x, y,radius, options);
      this.radius= radius
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle= this.body.angle
      push();
      rotate(angle);
      ellipseMode(CENTER);
      fill("purple");
      ellipse(pos.x,pos.y,100,80);
      pop();
    }
  };
  