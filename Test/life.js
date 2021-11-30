const LIVE = 1, DEAD = 0;   //常數

class inLife {
    constructor(row, col) {
        this.row = row;
        this.col = col;
        this.grid = [];
        for (let r = 0; r < this.row; r++) {
            this.grid.push([]);
            for (let c = 0; c < this.col; c++) {
                this.grid[r].push(DEAD);
            }
        }
        this.nextGrid = JSON.parse(JSON.stringify(this.grid));   //JSON.stringify物件轉字串 JSON.parse字串轉物件
    }
}

inLife.prototype.Initialize = function () {   //初始狀態
    this.grid[3][1] = LIVE;
    this.grid[3][2] = LIVE;
    this.grid[3][3] = LIVE;
    this.grid[2][2] = LIVE;
}

inLife.prototype.boundaryJudge = function (rr, cc) {   //邊界判斷 getStatusAt
    if (rr < 0 || cc < 0 || rr >= this.row || cc >= this.col)
        return DEAD;
    return this.grid[rr][cc];
}

inLife.prototype.neighborCount = function (rr, cc) {   //鄰居個數
    var count = 0;
    count += this.boundaryJudge(rr - 1, cc - 1);
    count += this.boundaryJudge(rr - 1, cc);
    count += this.boundaryJudge(rr - 1, cc + 1);
    count += this.boundaryJudge(rr, cc - 1);
    count += this.boundaryJudge(rr, cc + 1);
    count += this.boundaryJudge(rr + 1, cc - 1);
    count += this.boundaryJudge(rr + 1, cc);
    count += this.boundaryJudge(rr + 1, cc + 1);
    return count;
}

inLife.prototype.update = function () {   //運算下個世代
    for (let r = 0; r < this.row; r++) {
        for (let c = 0; c < this.col; c++) {
            var nCount = this.neighborCount(r, c);
            if (nCount == 3) {
                this.nextGrid[r][c] = LIVE;
            }
            if (nCount < 2 || nCount > 3) {
                this.nextGrid[r][c] = DEAD;
            }
        }
    }
    this.grid = JSON.parse(JSON.stringify(this.nextGrid));
}

var tt = new inLife(5, 5);
tt.Initialize();
console.log("第一次： ");
console.log(tt.grid);
tt.update();
console.log("第二次： ");
console.log(tt.grid);
