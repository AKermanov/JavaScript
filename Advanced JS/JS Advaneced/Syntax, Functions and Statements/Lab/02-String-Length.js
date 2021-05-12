function solve(a, b, c) {
    let sum = 0;
    let elements = [a, b, c];
    elements.forEach(e =>
        sum += e.length
    );
    let avgL = sum / 3;
    console.log(sum);
    console.log(Math.floor(avgL));
}
