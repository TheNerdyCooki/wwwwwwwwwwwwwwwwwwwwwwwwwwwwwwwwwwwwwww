var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

let score = 0;
let turn = 0;
let PLAY = 1;
let END = 0;
let gameState = PLAY;
let particle;
let count = 0;



var divisionHeight=300;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);



   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  Engine.update(engine);
 
text("500", 100, 550);
text("500", 30, 550);
text("500", 180, 550)
text("200", 260, 550)
text("100", 340, 550)
text("100", 430, 550)
text("200", 500, 550)
text("500", 580, 550)
text("500", 650, 550)
text("500", 730, 550)
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  /* if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
   }*/
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if(particle!=null)
    {
     particle.display();
      console.log("hello")

      if(particle.body.position.y>760){

        if(particle.body.position.x < 200)
        {
          score=score+500;
          particle=null;
          if(count>= 5) gameState = END;
        }else if (particle.body.position.x < 300 )
        {
          score=score+200
          particle=null;
          if(count>= 5) gameState = END;
        } else if (particle.body.position.x < 500 && particle.body.position.x > 300)
        {
          score=score+100
          particle=null;
          if(count>= 5) gameState = END;
        } else if (particle.body.position.x < 600 && particle.body.position.x > 500)
        {
          score=score+200
          particle=null;
          if(count>= 5) gameState = END;
        }

      }else if (particle.body.position.x < 700 && particle.body.position.x > 600)
      {
        score=score+500
        particle=null;
        if(count>=5) gameState = END;
      }
   }



   text("Score : "+score,20,30);
   console.log(score);
}


function mousePressed()
{
  if(gameState!==END){
    particle=new Particle(mouseX, 10, 10, 10)
  }
}