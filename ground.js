class Ground
{
    constructor(x,y,w,h)
    {
        var options={
             isStatic:true 
            }
        this.body=Bodies.rectangle(x,y,w,h,options)
        this.width=w
        this.height=h
        World.add(myworld,this.body)
    }

    display()
    {
        rectMode(CENTER)
        stroke(43,43,43)
        strokeWeight(5)
        fill("white")
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
    }
}