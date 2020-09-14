class Particle {
    constructor(x,y,r) {
      var options = {
          friction:0,
          restitution: 0.4
      }
      this.body = Bodies.circle(x,y,r,options);
      this.r = r; 
      World.add(world, this.body);
    }
    display(){
      var position =this.body.position;
      ellipseMode(CENTER);
      fill("green");
    ellipse(position.x, position.y, this.r);
    }
  };