function solve(input) {
    let filtered = input
        .filter((x, i) => i % 2 != 0)
        .map(x => x * 2)
        .reverse()
        .join(' ');

    console.log(filtered);
}
