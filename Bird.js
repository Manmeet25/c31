class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    this.trajectory=[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.velocity.x > 10 && this.body.position.x>200)
    {
      var position =[this.body.position.x , this.body.position.y];
      this.trajectory.push(position);
      // [[200,50], [210,60], [220,70]]
    }
    
    for(var i=0;i < this.trajectory.length; i++)
    {
      image (this.smokeImage,this.trajectory[i][0] , this.trajectory[i][1]);

    }
    /*
    image (this.smokeImage,this.trajectory[0][0] , this.trajectory[0][1])
    image (this.smokeImage,this.trajectory[1][0] , this.trajectory[1][1])
    image (this.smokeImage,this.trajectory[02][0] , this.trajectory[2][1])
*/
console.log(this.body.velocity)

  }
}
