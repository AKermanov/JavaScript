function solve(arrays) {
    // let flatArray = [].concat(...arrays);
    let flatArray = arrays.flat()
    console.log(Math.max(...flatArray));
}
