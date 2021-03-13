function search() {
   let listItem = document.querySelectorAll('#towns>li');
   let input = document.querySelector('input').value;
   let result = document.getElementById('result');

   let sum = 0;

   for (const li of listItem) {
      if((li.textContent).toLowerCase().includes(input.toLowerCase())){

         li.style.fontWeight = 'bold';
         li.style.textDecoration = 'underline';
         sum++;
      }else{
         li.style.fontweight = '';
         li.style.textDecoration = '';
      }
   }

   result.textContent = `${sum} matches found`
}
