
class Box
{
    constructor(x,y,width,height)
    {
        var boxoptions={isStatic:true}
        this.body=Bodies.rectangle(x,y,width,height,boxoptions);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }

    display()
    {
        fill("green")
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }


}