class Rope{
  constructor(){
      var elastic = {
          bodyA :bird.body,
          bodyB :lg.body,
          lenght:10,
          stiffness:1

      }
      this.rope=Constraint.create(elastic);
      World.add(world,this.rope);

  }   
  show(){
      push();
      strokeWeight(5);
      line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.rope.bodyB.position.x,this.rope.bodyB.position.y);
      pop();
  }

}