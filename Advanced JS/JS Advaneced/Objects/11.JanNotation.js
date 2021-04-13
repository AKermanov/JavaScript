function jansNotation(arr) {
    let operands = [];
    let operators = [];
    arr.filter(e => !isNaN(e) ? operands.push(e) : operators.push(e));
    let result = [];

    let sum = (numOne, numTwo, operator) => {
        let result = 0;
        switch (operator) {
            case '+': {
                result = numTwo + numOne;
            } break;
            case '-': {
                result = numTwo - numOne;
            } break;
            case '*': {
                result = numTwo * numOne;
            } break;
            default: {
                result = numTwo / numOne;
            } break;
        }
        return result;
    }

    if (operands.length - operators.length > 1) {
        return console.log("Error: too many operands!");
    } else if (operands.length <= operators.length) {
        return console.log("Error: not enough operands!");
    }

    for (let i of arr) {
        if (isNaN(i) && result.length >= 2) {
            result.push(sum(result.pop(), result.pop(), operators.shift()));
        } else if (!isNaN(i)) {
            result.push(i);
        }
    }
    console.log(result[0]);
}
