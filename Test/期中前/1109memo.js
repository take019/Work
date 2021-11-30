變數=Number(變數);   //將字串轉成數字，防止出錯
isNaN(goF)
goF=goF.toUpperCase();   //英文轉大寫
goF=nameF.indexOf(goF);   //從floorName.indexOf()取出索引值，若為-1代表無此樓層
continue;   //回到while的第一行

switch(parseInt(i/13)){   //parseInt轉成int型態
    case 0:
        poker.push("R"+(parseInt(i%13)+1));   //i%13，/13餘數
        break;
}


return Math.random()-0.5;   //Math.random()，回傳0-1的隨機小數，所以-0.5=正負隨機
poker.sort(randomNumb);


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

Math.random() * a

.charAt(i)