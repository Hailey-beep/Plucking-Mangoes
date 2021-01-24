class stone {

    constructor(x, y) {

        var options = {isStatic:false, restitution:0.8, friction:0.6, density:0.5} 

        //Adding a body
        this.body=Bodies.circle(x,y,30,options);
        this.r = 50;
        

        //adding the image
        this.image = loadImage("images/stone.png");

        World.add(world, this.body)
    }

    display() {
        
        var pos = this.body.position;

        push()
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, 0, 0, 50, 50);
        pop()
    }
}