class Ground{
    constuctor(){
        var option={
            isStatic:true
        }
        this.body=Bodies.rectangle(200,390,400,20,option);
        World.add(world,this.body);
        //this.width=width;
       // this.height=height;
       
    }
    display(){
        var pos=this.body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }
};