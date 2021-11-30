//使用第三方套件 readline-sync (待使用者輸入資料後程式再繼續執行) 
//NodeJS 套件管理程式為 npm，需打開終端機輸入指令
//安裝 readline-sync 套件指令: npm install readline-sync
//另可透過package.json指定所有相關套件後 npm install 即可安裝所有套件

const readline = require('readline-sync');

weight = readline.question('請輸入您的體重(kg)?');
while(weight<10||weight>150){
    weight = readline.question('是不是在亂打啊，請輸入您的體重(kg)?');
}

height = readline.question('請輸入您的身高(cm)?');  
while(height<50||height>250){
    height = readline.question('是不是在亂打啊，請輸入您的身高(cm)?');
}

weight=Number(weight);   //將字串轉成數字，防止出錯
height=Number(height);
var bmi = weight/((height/100)**2);
console.log("Hello! Your BMI value is "+ bmi);