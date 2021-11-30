const readline = require("readline-sync");

var a=6, b=6;
var aryBox=[];   //總
var aryVisited=[]   //經過
var aryNumbVisited=[]   //運算最佳路線用
var maxVisited=[]

class index{
    constructor(row,col){
        this.row=row;
        this.col=col;
    }
    print(){
        return ("["+this.row+"，"+this.col+"]");
    }
}
// var p=new index(2,8)
// console.log(p.print())




do{
    //初始陣列
    for (let r = 0; r <a; r++) {   
        aryBox.push([]);
        aryVisited.push([]);
        for (let c = 0; c < b; c++) {
            aryBox[r][c]=Math.floor(Math.random()*a)+","+Math.floor(Math.random()*b); //"r,c"  Math.random()*數字==>隨機回傳0~數字的整數
            aryVisited[r][c]=0;
        }
    }

    //玩家輸入數字
    var startA= parseInt(readline.question('輸入第一個數字'));
    var startB= parseInt(readline.question('輸入第二個數字'));
    if(isNaN(startA) || isNaN(startB) || startA<0 || startA>=a || startB<0 || startB>=b){
       console.log("輸入數字有誤，請重新輸入");
       continue;
   }
   
   //運算最佳路徑
   var numbVisited=0   //路過點數量
   var maxNumbVisited=0
   for(r=0;r<a;r++){
    aryNumbVisited.push([]);
    for(c=0;c<b;c++){
        startNumb()

        var idx= aryBox[r][c].split(",");
        aryVisited[r][c]=1;
        numbVisited++
        while(true){
            var nextA = parseInt(idx[0]);
            var nextB = parseInt(idx[1]);
            if(aryVisited[nextA][nextB]==1){
                aryNumbVisited[r][c]=numbVisited;   //回傳r,c路徑數
                if(numbVisited>=maxNumbVisited){   //最佳路徑
                    if(numbVisited>maxNumbVisited){
                        maxVisited.length=0;   //陣列歸零
                    }
                    maxVisited.push(r+'-'+c);
                    maxNumbVisited=numbVisited;
                }
                break;
            }
             idx= aryBox[nextA][nextB].split(",");//idx[0]=>row idx[1]=>col
             aryVisited[nextA][nextB]=1;
             numbVisited++
        }
    }
   }
   startNumb()
   
   idx= aryBox[startA][startB].split(",");//idx[0]=>row idx[1]=>col
   aryVisited[startA][startB]=1;
   console.log("起點:"+ startA+", "+startB);
   numbVisited++
   
   while(true){
       var nextA = parseInt(idx[0]);
       var nextB = parseInt(idx[1]);
       if(aryVisited[nextA][nextB]==1){
           console.log("Game over!共經過 "+numbVisited+"點，最佳路線為"+maxVisited);
           break;
       }
        idx= aryBox[nextA][nextB].split(",");//idx[0]=>row idx[1]=>col
        aryVisited[nextA][nextB]=1;
        console.log("經過:"+ nextA+", "+nextB);
        numbVisited++
   }
}while(true)

//初始化計算
function startNumb(){
   numbVisited=0
   for (let r = 0; r <a; r++) {
    for (let c = 0; c < b; c++) {
        aryVisited[r][c]=0;
    }
   }
}