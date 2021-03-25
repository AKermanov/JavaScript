function foo(input) {
    let output = []
    let r = 0;
    input.forEach( (x,i)=> { r+= x[i] });
    output.push(r)
    r = 0;
    input.reverse().forEach( (x,i) => { r += x[i] });
    output.push(r)
    console.log(output.join(' '));
}
