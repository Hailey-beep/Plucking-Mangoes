class slingshot{

    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.06,
            length: 10
        }

        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    Release() {
        this.sling.bodyA = null;
    }

    attach() {
        this.sling.bodyA = stoneObj.body;
    }

    display(){

        if(this.sling.bodyA) {
        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}
