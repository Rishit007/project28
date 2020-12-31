class Stone{
    constructor(x, y, r) {
        var options = {
          'isStatic':false,
          'restitution':0,
          'friction':1.0,
          'density':1.2
        }
        this.body = Bodies.circle(x, y, r, options);
        this.image = loadImage("images/stone.png");
        this.r = r;
        World.add(world, this.body);
      }
      display(){
//        push();
//        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.r*2, this.r*2);
 //       pop();
      }
}