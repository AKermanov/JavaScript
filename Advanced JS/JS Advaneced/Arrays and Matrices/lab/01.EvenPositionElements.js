function solve(inputArray) {
    let resultArray = [];
    inputArray.forEach((element, index) => {
        if (index % 2 === 0) {
            resultArray.push(element)
        }
    });
    console.log(...resultArray);
}
