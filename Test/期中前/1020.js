const readline = require("readline-sync");

var row=6, col=6;
// var aryBox=[[0,0,0,0,0,0],
//             [0,0,0,0,0,0],
//             [0,0,0,0,0,0],
//             [0,0,0,0,0,0],
//             [0,0,0,0,0,0],
//             [0,0,0,0,0,0]];
var aryBox=[];
var aryVisited=[]
for (let r = 0; r <row; r++) {
    aryBox.push([]);
    aryVisited.push([]);
    for (let c = 0; c < col; c++) {
        aryBox[r][c]=Math.floor(Math.random()*row)+","+Math.floor(Math.random()*col); //"r,c"
        aryVisited[r][c]=0;
    }
}


do{
   var startR= parseInt(readline.question('Row start?'));
   var startC= parseInt(readline.question('Col start?'));
   if(isNaN(startR) || isNaN(startC) || startR<0 || startR>=row || startC<0 || startC>=col){
       console.log("Input error! ");
       continue;
   }
   var idx= aryBox[startR][startC].split(",");//idx[0]=>row idx[1]=>col
   aryVisited[startR][startC]=1;
   console.log("Visit:"+ startR+", "+startC);
   //loop
   while(true){
       var nextR = parseInt(idx[0]);
       var nextC = parseInt(idx[1]);
       if(aryVisited[nextR][nextC]==1){
           console.log("Game over!");
           break;
       }{
         var idx= aryBox[nextR][nextC].split(",");//idx[0]=>row idx[1]=>col
         aryVisited[nextR][nextC]=1;
         console.log("Visit:"+ nextR+", "+nextC);
       }
   }


}while(true)