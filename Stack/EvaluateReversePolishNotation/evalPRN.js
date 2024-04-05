/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    if (tokens.length < 1) return 0;

    let operations = [];
    let operand_stack = [];

    for (let i = 0; i < tokens.length; i++) {
        if (!isNaN(parseInt(tokens[i]))) {
            operations.push(parseInt(tokens[i]))
        } else
            operations.push(tokens[i])
    }

    for (let i = 0; i < operations.length; i++) {
        if (isNaN(operations[i])) {
            let v = 0;
            let secondNum = operand_stack.pop();
            switch (operations[i]) {
                case "+":
                    v = operand_stack[operand_stack.length - 1] + secondNum
                    break;
                case "*":
                    v = operand_stack[operand_stack.length - 1] * secondNum
                    break;
                case "/":
                    v = operand_stack[operand_stack.length - 1] / secondNum
                    break;
                case "-":
                    v = operand_stack[operand_stack.length - 1] - secondNum
                    break;
            }
            operand_stack.pop();
            operand_stack.push(parseInt(v));
        } else {
            operand_stack.push(operations[i]);
        }
    }

    return operand_stack[0];
};

let tokens = ["2", "1", "+", "3", "*"]; // 9
let tokens2 = ["4", "13", "5", "/", "+"]; // 6
let tokens3 = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"] // 22

console.log(evalRPN(tokens3));