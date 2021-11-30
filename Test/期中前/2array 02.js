const readline = require("readline-sync");

var a = 6, b = 6;
var aryBox = [];   //總
var aryVisited = []   //經過
var aryNumbVisited = []   //運算最佳路線用
var maxVisited = []

class index {
    constructor(row, col, vis01, numbVis) {
        this.row = row;
        this.col = col;
        this.vis01 = vis01   //是否採點
        this.numbVis = numbVis   //走幾步路
    }
    print() {
        return ("[" + this.row + "，" + this.col + "]");
    }
}

do {
    //初始陣列
    for (let r = 0; r < a; r++) {
        aryBox.push([]);
        for (let c = 0; c < b; c++) {
            aryBox[r][c] = new index(Math.floor(Math.random() * a), Math.floor(Math.random() * b), 0, null);
        }
    }

    //運算最佳路徑
    var maxNumbVisited = 0
    var maxAry=[];
    for (r = 0; r < a; r++) {
        for (c = 0; c < b; c++) {
            startNumb()
            aryBox[r][c].vis01 = 1;
            aryBox[r][c].numbVis++;
            var nextA = aryBox[r][c].row;
            var nextB = aryBox[r][c].col;
            while (true) {
                if (aryBox[nextA][nextB].vis01 == 1) {
                    if(aryBox[r][c].numbVis>maxNumbVisited){
                        maxAry.length=0;
                        maxAry.push("["+r+"，"+c+"]");
                        maxNumbVisited=aryBox[r][c].numbVis;
                    }else if(aryBox[r][c].numbVis==maxNumbVisited){
                        maxAry.push("["+r+"，"+c+"]");
                    }
                    break;
                }
                // else if(aryBox[nextA][nextB].numbVis!=null&&aryBox[nextA][nextB]!=aryBox[r][c]){
                //     aryBox[r][c].numbVis+=aryBox[nextA][nextB].numbVis;
                //     break;
                // }
                aryBox[nextA][nextB].vis01 = 1;
                aryBox[r][c].numbVis++;
                nextA = aryBox[nextA][nextB].row;
                nextB = aryBox[nextA][nextB].col;
            }
        }
    }
    console.log(maxAry);
    startNumb()

    //玩家輸入數字
    var startA = parseInt(readline.question('輸入第一個數字'));
    var startB = parseInt(readline.question('輸入第二個數字'));
    if (isNaN(startA) || isNaN(startB) || startA < 0 || startA >= a || startB < 0 || startB >= b) {
        console.log("輸入數字有誤，請重新輸入");
        continue;
    }

    idx = aryBox[startA][startB].split(",");//idx[0]=>row idx[1]=>col
    aryVisited[startA][startB] = 1;
    console.log("起點:" + startA + ", " + startB);
    numbVisited++

    while (true) {
        var nextA = parseInt(idx[0]);
        var nextB = parseInt(idx[1]);
        if (aryVisited[nextA][nextB] == 1) {
            console.log("Game over!共經過 " + numbVisited + "點，最佳路線為" + maxVisited);
            break;
        }
        idx = aryBox[nextA][nextB].split(",");//idx[0]=>row idx[1]=>col
        aryVisited[nextA][nextB] = 1;
        console.log("經過:" + nextA + ", " + nextB);
        numbVisited++
    }
} while (true)

//初始化計算
function startNumb() {
    for (let r = 0; r < a; r++) {
        for (let c = 0; c < b; c++) {
            aryBox[r][c].vis01 = 0;
        }
    }
}