/*
    https://www.codewars.com/kata/valid-parentheses

    Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid.
    The function should return true if the string is valid, and false if it's invalid.
*/

function validParentheses(parens){
    var parenDepth = 0;
    var parensLength = parens.length;
    for (var i = 0; i < parensLength; i++) {
        if (parens[i] == '(') {
            parenDepth++;
        } else if (parens[i] == ')') {
            parenDepth--;
        }
        if (parenDepth < 0) {
            return false;
        }
    }
    return parenDepth == 0 ? true : false;
}

console.log(validParentheses('()'), true);
console.log(validParentheses(')(()))'), false);
console.log(validParentheses('('), false);
console.log(validParentheses('(())((()())())'), true);