const readline = require('readline-sync');

var top=54;
var bottom=0;
var newF=10;
var goF;
var nameF=[];

function numF(BF,MaxF){
    for(BF*=-1;BF<=MaxF;BF++){
        if(BF<0){
            nameF.push('B'+BF*-1);
        }else if(BF>0){
            nameF.push(''+BF);
        }
    }
}
numF(5,5);
console.log('樓層：'+nameF);

while(true){
    goF=readline.question('現在是'+nameF[goF]+'樓，請輸入欲到達樓層');
    goF=goF.toUpperCase();   //英文轉大寫
    goF=nameF.indexOf(goF);   //從floorName.indexOf()取出索引值，若為-1代表無此樓層

    if(goF<0){
        console.log('樓層錯誤，請再次輸入。請輸入介於'+nameF.toString()+'之間的樓層名稱!');
        continue;   //回到while的第一行
    }

    function a(){

    }

    if(goF>newF){
        console.log('電梯上樓中')
        for(;goF>newF;){
            newF++;
            if(goF==newF){
                console.log('已到達目的地樓層'+nameF[newF])
            }else{
                console.log('電梯目前在'+nameF[newF]+'樓，移動中')
            }
            setTimeout(a,3000);
        }
    }
    if(goF<newF){
        console.log('電梯下樓中')
        for(;goF<newF;){
            newF--;
            if(goF==newF){
                console.log('已到達目的地樓層'+nameF[newF])
            }else{
                console.log('電梯目前在'+nameF[newF]+'樓，移動中')
            }
        }
    }
    break;
}