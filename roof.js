class Roof {
    constructor(x, y, sides, radius) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.polygon(x, y, sides, radius, options);
      this.side = side;
      this.radius = radius;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill(220,20,60);
      polygon(pos.x, pos.y, this.sides, this.radius);
      pop();
    }
  }
  