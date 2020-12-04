class Paper{
    constructor(x,y,r){
        var options = {
            isStatic: false,
            restitution: 0.2,
            density:1.2,
            friction:0.5
        }
        this.body = Bodies.circle(x,y,r,options);
        this.radius = r;
        World.add(world,this.body);
    }
    display(){
        
        var pos = this.body.position;
        var angle = this.body.angle;
       /* push();
        translate(pos.x,pos.y);
        rotate(angle);*/
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius);
        pop();
    }
}