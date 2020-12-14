class Box{
    constructor(x,y,width,height){
       var options={
           restitution:0.8,
           friction:0.3,
           density:1.0,
       }
       this.width = width;
       this.height = height;
       this.body = Bodies.rectangle(200,100,this.width,this.height,options); 
       World.add(myWorld,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle
        push();
        translate(pos.x,pos.y)
        rotate(angle);
        rectMode(CENTER);
        fill(255);
        rect(pos.x,pos.y,this.width,this.height);
        pop();
    }
}