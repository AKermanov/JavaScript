function deleteByEmail() {
  const email = document.querySelector('input[name="email"]').value;
  const rows = Array.from(document.querySelectorAll('tbody tr'));
  const resultElement = document.getElementById('result');

  const matches = rows.filter((r) => r.children[1].textContent == email);

  if (matches.length > 0) {
    matches.forEach(r => r.remove());
    resultElement.textContent = 'Deleted.';
  } else {
    resultElement.textContent = 'Not found.';
  }

}

function deleteByEmail2() {
  const email = document.querySelector('input[name="email"]').value;
  const rows = Array.from(document.querySelectorAll('tbody tr'));

  let deleted = false;
  for (const row of rows) {
    //row.querySelectorAll('td')[1];
    if (row.children[1].textContent == email) {
      row.parentNode.removeChild(row);

      document.getElementById('result').textContent = 'Deleted';
      deleted = true;
    }
  }

  if (deleted != true) {
    document.getElementById('result').textContent = 'Not found.';
  }
}
