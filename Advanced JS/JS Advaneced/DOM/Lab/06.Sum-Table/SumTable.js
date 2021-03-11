function sumTable() {
 let rows = document.querySelectorAll("table tr");
 let total = 0;

 for (let i = 1; i < rows.length - 1; i++) {
  const cols = rows[i].children;
  total += Number(cols[cols.length - 1].textContent);
 }

 document.getElementById("sum").textContent = total;
}
