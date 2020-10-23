class Box {

constructor(x,y,width,height){
 this.width = width;
 this.height = height;

    var options = {
    
        restitution : 1.0,
        density : 2.0,
        friction : 1.0

    }

this.body = Bodies.rectangle(x,y,width,height,options)

World.add(world, this.body)

}

display(){

    var pos = this.body.position
    var angle = this.body.angle
rectMode(CENTER);
push()
translate(pos.x,pos.y)
rotate(angle)
fill("red");
rect(0,0,this.width,this.height);
pop()

}



}