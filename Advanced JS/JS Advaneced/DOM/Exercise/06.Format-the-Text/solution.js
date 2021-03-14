function solve() {
  const input = document
    .getElementById('input')
    .value.split('.')
    .filter(el => el.length != 0);
  let result = document.getElementById('output');

  for (let i = 0; i < input.length; i += 3) {
    let text = [];

    for (let y = 0; y < 3; y++) {
      if (input[i + y]) {
        text.push(input[i + y]);
      }
    }

    result.innerHTML += `<p>${text.join('. ') + '.'}</p>`;
  }
}
