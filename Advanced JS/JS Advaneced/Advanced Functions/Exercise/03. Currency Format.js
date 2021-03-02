function result(input) {
    let separator = ',';
    let symbol = '$';
    let symbolFirst = true;

    return (value) => input(separator, symbol, symbolFirst, value);
}
