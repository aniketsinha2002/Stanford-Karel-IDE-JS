// HEART SHAPE IN 15*15 World of Standford Karel IDE
// WEBSITE LINK - http://stanford.edu/~cpiech/karel/ide.html
// OPEN KAREL IDE FROM THE ABOVE LINK, COPY AND PASTE THIS CODE, AND HIT RUN BUTTON.

function main(){
   gomiddle();
   
   LeftHalf();
   side();
   
   UpperPart();
   
   side();
   RightHalf();

   
}

function LeftHalf()
{  turnLeft();
   LeftHalfGO();
   turnRight();
   LeftHalfGO();
   turnRight();
   LeftHalfGO();
   turnRight();
   LeftHalfGO();
   turnRight();
   LeftHalfGO();
   turnRight();
   LeftHalfGO();
   turnRight();
   LeftHalfGO();
   turnRight();
}

function RightHalf(){
   RightHalfGO();
   RightHalfGO();
   RightHalfGO();
   RightHalfGO();
   RightHalfGO();
   RightHalfGO();
   RightHalfGO();
   
   }

function side(){
   move();
   putBeeper();
   move();
   putBeeper();
   move();
   putBeeper();
   
   }
function gomiddle() {
   move();
   move();
   move();
   move();
   move();
   move();
   move();
   putBeeper();
}
 function LeftHalfGO() {
   
   move();
   turnRight();
   turnRight();
   turnRight();
   move();
   putBeeper();


  }
  
  function RightHalfGO() {
   
   turnRight();
   move();
   turnLeft();
   move();
   putBeeper();


  }
 
function UpperPart()
   {
   move();
       
   turnRight();
   move();
   putBeeper();
   move();
   turnLeft();
   move();
   putBeeper();
   turnRight();
   move();
   putBeeper();
   move();
   putBeeper();
   
   turnRight();
   move();
   turnLeft();
   move();
   putBeeper();
   
   turnRight();
   move();
   turnLeft();
   move();
   putBeeper();
   
   turnRight();
   move();
   turnLeft();
   move();
   putBeeper();
   
   move();
   
   turnLeft();
   move();
   putBeeper();
   
   turnRight();
   move();
   
   turnLeft();
   move();
   putBeeper();
   
   turnRight();
   move();
   
   turnLeft();
   move();
   putBeeper();
   
   turnRight();
   move();
   putBeeper();
   move();
   putBeeper();
   
   turnRight();
   move();
   turnLeft();
   move();
   putBeeper();
   
   turnRight();
   move();
   turnLeft();
   move();
   putBeeper();
   
   
   turnRight();
   }
