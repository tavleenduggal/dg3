var grid = [], dot;
var rs;
var addedSprites=[]
var drawnSprites=[];
var gameState=1;
function setup(){
    createCanvas(450, 450);
   dotLoop();
   
    
}

function checkBox(gs,s)
{ 
    var count1=0;
   if(s.width>s.height)
   {
       var stop=createSprite()
       var sleft1=createSprite()
       var sright1=createSprite()


       for(var i=0;i<addedSprites.length;i++)
      {
          //check for equality of sprites using x,y,width and height values, consider writing another function
          //if equal count++, if count == 4, check which player is playing using gameState passed in arguements and update score
      } 
      //do the same for the other possible box
       var sbottom=createSprite()
       var sleft2=createSprite()
       var sright2=createSprite()
       for(var i=0;i<addedSprites.length;i++)
       {
           //check for equality of sprites using x,y,width and height values, consider writing another function
           //if equal count++, if count == 4, check which player is playing using gameState passed in arguements and update score
       } 
      
       }
}

function draw(){
    background(255);
   
     dotline();
     rs=check();
     addedSprites.push(rs);
     checkBox(gameState,rs);
    drawSprites();
}

function dotLoop(){
    for(var y = 2; y < 22; y++){
        for(var x = 2; x < 22; x++){
            dot = createSprite(x*20, y*20, 3, 3);
            grid.push(dot);
        }
    }
}
function dotline(){
    for(var dotL = 0; dotL < 400; dotL++){
        if (mousePressedOver(grid[dotL])){
            if(dotL >= 20){
                var top = createSprite(grid[dotL].x, grid[dotL].y - 12, 3, 20);
                drawnSprites.push(top)
            }
            if(dotL < 380){
                var bottom = createSprite(grid[dotL].x, grid[dotL].y + 12, 3, 20);
                drawnSprites.push(bottom)
            
            }
            if(dotL % 20 !== 0){
                var left = createSprite(grid[dotL].x - 12, grid[dotL].y, 20, 3);
                drawnSprites.push(left)
            
            }
            if((dotL + 1) % 20 !== 0){
                var right = createSprite(grid[dotL].x + 12, grid[dotL].y, 20, 3);
                drawnSprites.push(right)
            
            }
            
        }
       }

     
    }


    function check()
    {
        var c=0;
        for(var i=0;i<drawnSprites.length;i++)
        {
            if(mousePressedOver(drawnSprites[i]))
            {
                var x=createSprite(drawnSprites[i].x,drawnSprites[i].y,drawnSprites[i].width,drawnSprites[i].height)
                c=1;
                break;
            }
        }
        if(c==1)
        {
            for(var i=0;i<drawnSprites.length;i++)
            {
                drawnSprites[i].destroy();
            }
           
        }

        return x;
    }

    function mousePressedOver(s)
    {
        s.mouseActive=true
        if(mouseIsPressed && s.mouseIsOver )
        {
            s.visible=false;
        }
    }