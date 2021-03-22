function solve(array) {
    let fixedArray = [];
    array.forEach(num => {
        if (num < 0) {
            fixedArray.unshift(num);
        } else {
            fixedArray.push(num);
        }
    });
    console.log(fixedArray.join('\n'));
}
