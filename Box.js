class Box{
    constructor(x,y,width,height){
       var options={
           restitution:1
       }
       this.width = width;
       this.height = height;
       this.body = Bodies.rectangle(200,100,50,50,options); 
       World.add(myWorld,this.body);
    }

    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill(255);
        rect(pos.x,pos.y,this.width,this.height);
    }
}