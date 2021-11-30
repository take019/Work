var poker=[];
var player1=[], player2=[], player3=[],player4=[];

for(i=0;i<52;i++){   //初始陣列
    switch(parseInt(i/13)){   //parseInt轉成int型態
        case 0:
            poker.push("R"+(parseInt(i%13)+1));   //i%13，/13餘數
            break;
        case 1:
            poker.push("B"+(parseInt(i%13)+1));
            break;
        case 2:
            poker.push("C"+(parseInt(i%13)+1));
            break;
        case 3:
            poker.push("Y"+(parseInt(i%13)+1));
    }
}
console.log('初始：'+poker.toString());

function randomNumb(){   //打亂
        return Math.random()-0.5;   //Math.random()，回傳0-1的隨機小數，所以-0.5=正負隨機
}
poker.sort(randomNumb);
console.log('亂數：'+poker.toString()); 

for(i=0;i<poker.length;i++){   //發牌
    switch(parseInt(i/13)){
        case 0:
            player1.push(poker[i])
            break;
        case 1:
            player2.push(poker[i])
            break;
        case 2:
            player3.push(poker[i])
            break;
        case 3:
            player4.push(poker[i])
    }
}
console.log('P1：'+player1)
console.log('P2：'+player2)
console.log('P3：'+player3)
console.log('P4：'+player4)

function compare(b,a){   //排序
    if(a.charCodeAt(0) == b.charCodeAt(0)){   //花色一樣  a1a11 a2a11 a11a12
        if(isNaN(a.charCodeAt(2))&&isNaN(b.charCodeAt(2))){   //a1a2
            return a.charCodeAt(1) - b.charCodeAt(1)
        }else if(isNaN(a.charCodeAt(2))||isNaN(b.charCodeAt(2))){   //a2a11 a1a11
            if(isNaN(a.charCodeAt(2))){
                return -1
            }else{
                return 1
            }
        }else{   //a11a12
            return a.charCodeAt(2) - b.charCodeAt(2)
        }
    }else{
        return a.charCodeAt(0) - b.charCodeAt(0)
    }
}
poker.sort(compare);
console.log('排序(大到小)：'+poker.toString());





//split every 13 card to player 1, 2, 3, 4
// numbers.sort(function(a, b) {
//     return 0.5 - Math.random();
// });