function pieceOfPie(input, startPie, endPie) {

    let result = input.slice(input.indexOf(startPie), input.indexOf(endPie) + 1);
    return result
}
