function solve() {
  let text = document.getElementById('text').value;
  let namingConvention = document.getElementById('naming-convention').value
  console.log(namingConvention)
  if (namingConvention == 'Camel Case') {
    document.getElementById('result').innerHTML = camelCase(text);
  }else if (namingConvention == 'Pascal Case') {
    document.getElementById('result').innerHTML = pascalCase(text);
  }else {
    document.getElementById('result').innerHTML = 'Error!'
  }
console.log(camelCase('secOND eXamPLE'))

  function pascalCase(str) {
    let text = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

    return text.replace(/\W+(.)/g, function(match,chr) {
      return chr.toUpperCase();
    })
  }
  function camelCase(str) {
    let text = str.charAt(0).toLowerCase() + str.slice(1).toLowerCase();
    
    return text.replace(/\W+(.)/g, function(match,chr) {
      return chr.toUpperCase();
    })
  }
}
