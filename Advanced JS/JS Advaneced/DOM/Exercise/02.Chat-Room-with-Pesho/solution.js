function solve() {
  let buttons = Array.from(document.getElementsByTagName('button'));
  let inputFields = Array.from(document.getElementsByTagName('input'));

  buttons.forEach((btn) => {
    btn.addEventListener('click', (btn) => {
      let divElement = document.createElement('div');
      let spanElement = document.createElement('span');
      let pElement = document.createElement('p');

      let senderBtn = event.target.name;
      if (senderBtn === 'myBtn') {
        spanElement.textContent = 'Me';

        //когато имаме input поле, взимаме стойността с .value
        pElement.textContent = document.getElementById('myChatBox').value;
        //във всеки останал случай достъпваме елемента с textContent или innerHTML
        
      } else if (senderBtn === 'peshoBtn') {
        spanElement.textContent = 'Pesho';
        pElement.textContent = document.getElementById('peshoChatBox').value;
      }
      //на новосъздадения div искаме да му добавим дете, последователността има значение
      divElement.appendChild(spanElement);
      divElement.appendChild(pElement);
senderBtn === 'myBtn' ? divElement.style.textAlign = 'left' :divElement.style.textAlign = 'right';
//.style достъпваме стиловете на даден елемент, може да ги взимаме и да ги променяме.
      document.getElementById('chatChronology').appendChild(divElement);

      inputFields[0].value = '';
      inputFields[1].value = '';
    });
  });
}
