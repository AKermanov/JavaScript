function generateReport() {
  const input = Array.from(document.querySelectorAll('input'));
  const tableRows = Array.from(document.querySelectorAll('tr'));
  let result = [];
  let checked = [];
  for (let i = 0; i < tableRows.length; i++) {
    const row = tableRows[i];
    const obj = {};
    for (let y = 0; y < row.children.length; y++) {
      const element = row.children[y];
      if (i == 0) {
        if (element.children[0].checked) {
          checked.push(y);
        }
      }
      if (checked.includes(y)) {
        let properName = input[y].name;
        obj[properName] = element.textContent;
      }
    }
    if (i !== 0) {
      result.push(obj);
    }
  }
  document.getElementById('output').value = JSON.stringify(result);
}
