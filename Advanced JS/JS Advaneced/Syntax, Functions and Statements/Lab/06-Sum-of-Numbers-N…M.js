function main(...tokens) {
	let [leftNum, rightNum] = tokens;
	
    leftNum = Number(leftNum);
    rightNum = Number(rightNum);

    let result = compute(leftNum, rightNum);

    console.log(result);

    
    function compute(leftNum, rightNum) {
        let sum = 0;
        while (leftNum <= rightNum) {
            sum += leftNum++; 
        }

        return sum;
    }
}
