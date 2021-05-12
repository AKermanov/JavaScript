function calculateCircleArea(radius) {
    let r = Number(radius);
    if (typeof(radius) != "number") {
        console.log(`We can not calculate the circle area, because we receive a ${typeof(radius)}.`);
        return;
    }
    let result = (Math.pow(r, 2) * Math.PI);
    console.log(result.toFixed(2));
    
}
