const LIVE = 1, DEAD = 0;   //常數
var onPlay = false;

class inLife {
    constructor(row, col) {
        this.row = row; this.col = col;
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
    this.nextGrid = JSON.parse(JSON.stringify(this.grid));
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
            if (nCount == 3)   //鄰居3 存活與復活
                this.nextGrid[r][c] = LIVE;
            if (nCount < 2 || nCount > 3)
                this.nextGrid[r][c] = DEAD;
        }
    }
    this.grid = JSON.parse(JSON.stringify(this.nextGrid));
}

class LifeCanvas {
    constructor(inl) {
        this.inL = inl;
        this.canvas = document.getElementById("gameBorad");   //取得網頁畫布
        this.ctx2d = this.canvas.getContext("2d");
        this.ctx2d.fillStyle = "#00ced1";
        this.ctx2d.lineWidth = 0.5;
        this.cellSize = Math.floor(this.canvas.clientWidth / this.inL.row);   //細胞尺寸
    }

    DrawPoint(r, c) {   //為Board物件新增一個DrawPoint(r,c)功能，取得canvas得尺寸來計算Board 的 size
        var row = Math.floor(this.canvas.clientWidth / r);
        var col = Math.floor(this.canvas.clientHeight / c);
        return {
            row, col
        }
    }

    draw() {   //繪製下個世代
        this.ctx2d.clearRect(0, 0, 600, 600);
        for (let r = 0; r < this.inL.row; r++) {
            for (let c = 0; c < this.inL.col; c++) {
                if (this.inL.grid[r][c] == LIVE) {
                    this.ctx2d.fillRect(c * this.cellSize, r * this.cellSize, this.cellSize, this.cellSize);   //畫細胞
                }
                this.ctx2d.strokeRect(c * this.cellSize, r * this.cellSize, this.cellSize, this.cellSize);   //畫框線
            }
        }
    }
}

function NextButton() {
    tt.update();
    ttCanvas.draw();
}
function GetClick(event) {   //點擊改變細胞狀態
    var c = Math.floor(event.offsetX / ttCanvas.cellSize);
    var r = Math.floor(event.offsetY / ttCanvas.cellSize);
    if (tt.grid[r][c] == LIVE) {
        ttCanvas.ctx2d.clearRect(c * ttCanvas.cellSize, r * ttCanvas.cellSize, ttCanvas.cellSize, ttCanvas.cellSize);   //清除細胞
        tt.grid[r][c] = DEAD;
    } else {
        ttCanvas.ctx2d.fillRect(c * ttCanvas.cellSize, r * ttCanvas.cellSize, ttCanvas.cellSize, ttCanvas.cellSize);   //畫細胞
        tt.grid[r][c] = LIVE;
    }
    ttCanvas.ctx2d.strokeRect(c * ttCanvas.cellSize, r * ttCanvas.cellSize, ttCanvas.cellSize, ttCanvas.cellSize);   //畫框線
    tt.nextGrid = JSON.parse(JSON.stringify(tt.grid));
}
function PlayButton() {   //不斷跑
    onPlay ? onPlay = false : onPlay = true;
    onPlay ? document.getElementById("playB").innerHTML = "Stop" : document.getElementById("playB").innerHTML = "Play";   //改按鈕的字

    var playupdate = setInterval(function () {
        !onPlay ? clearInterval(playupdate) : NextButton();   //clearInterval為結束setInterval
    }, 100);
}

var tt = new inLife(30, 30);
//tt.Initialize();
var ttCanvas = new LifeCanvas(tt);
ttCanvas.draw();