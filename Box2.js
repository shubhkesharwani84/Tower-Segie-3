class Box2  {
    constructor(x, y, width, height){
      var options={
        restitution:0.1,
       
        friction:0.3,
        density:1.0
      }
      this.body=Bodies.rectangle(x,y,width,height,options)
     this.width=width;
     this.height=height;
     this.image = loadImage("polygon.png")
     World.add(world,this.body)
    }
    display(){
        push ()
        translate(this.body.position.x,this.body.position.y)
        rotate (this.body.angle)
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height)
        pop ()
  
       }
  
  };
  