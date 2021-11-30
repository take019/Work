function bracketMatch(inputString) {
    var opening = []; //stack
    var isMatched = true;
    var i = 0;
    var symbol = inputString.charAt(i);
    while (isMatched && symbol != '\n') {
        if (symbol == '{' || symbol == '(' || symbol == '[')
            opening.push(symbol);
        if (symbol == '}' || symbol == ')' || symbol == ']') {
            if (opening.length == 0) //stack empty?
                isMatched = false;
            else {
                match = opening.pop();
                isMatched = (symbol == '}' && match == '{') || (symbol == ')' && match == '(') ||
                    (symbol == ']' && match == '[');
            }
        }
        i++;
        symbol = inputString.charAt(i);
    }
    if (opening.length > 0 || !isMatched)
        return 'unmatched';
    else
        return 'matched';
}
//test 
var str= "{a = (1 + v(b[3 + c[4]]))"
console.log(bracketMatch(str));