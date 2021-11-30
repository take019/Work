const readline = require('readline-sync');

var top=20;
var bottom=1;
var newF=10;
var goF;
var nameF=["B3","B2","B1","1","2","3","5","6"];
var nameF2=[];



while(true){
    goF=readline.question('現在是'+newF+'樓，請輸入欲到達樓層');
    goF=parseInt(goF);   //轉換成int

    if(isNaN(goF)||goF>top||goF<bottom||goF==newF){
        console.log('樓層錯誤，請再次輸入');
        continue;   //回到while的第一行
    }

    if(goF>newF){
        console.log('電梯下樓中')
        for(;goF>newF;){
            newF++;
            if(goF==newF){
                console.log('已到達目的地樓層')
            }else{
                console.log('電梯目前在'+newF+'樓，移動中')
            }
        }
    }
    if(goF<newF){
        console.log('電梯上樓中')
        for(;goF<newF;){
            newF--;
            if(goF==newF){
                console.log('已到達目的地樓層')
            }else{
                console.log('電梯目前在'+newF+'樓，移動中')
            }
        }
    }
    break;
}