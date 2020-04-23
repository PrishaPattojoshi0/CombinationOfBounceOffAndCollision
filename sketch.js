var fixedRect, movingRect; 

function setup() {

  createCanvas(1200,800); 

  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  fixedRect.velocityY = -5;

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true; 
      
      gameObject=createSprite(300,500,50,80);
       gameObject.shapeColor = "yellow"; 
       gameObject.debug ="true";
       
       gameObject1=createSprite(600,200,50,80); 
       gameObject1.shapeColor="yellow";
       gameObject1.debug="true";
       gameObject1.velocityY=+5; 
         }
          
         function draw() 
         { 
           background(0,0,0); 
          
          bounceOff(fixedRect,gameObject1);
          
          movingRect.x = World.mouseX;
           movingRect.y = World.mouseY; 
           
           if(isTouching(movingRect,gameObject)) 
           {
              movingRect.shapeColor = "blue";
               gameObject.shapeColor = "blue"; 
              }
         else{ 
           movingRect.shapeColor="green";
          gameObject.shapeColor="green"; 
        }
          
          drawSprites(); 
        }
        
       