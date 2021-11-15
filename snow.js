class Snow{
    constructor(x,y){
     var options = {
         'restitution': 0.8,
         'friction':1.0,
         'density':1.0,
     }
     this.image = loadImage("snow4.webp")
     World.add(world,this.body);
    }
    display(){

        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
  }


