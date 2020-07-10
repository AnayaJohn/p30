class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }

       
        //this.sling3=loadImage("sprites/sling3.png");

        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }
    attach(body){
        this.sling.bodyA = body;
    }

    //slingShot=new SlingShot(this.polygon,{ x:100,y:200});

    display(){

        

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            //strokeWeight(4);\
            push();
            
            stroke(48,22,8);
            line(pointA.x, pointA.y, pointB.x, pointB.y);

            
            pop();

            
        }
        
        

    }
    
}