function addItem() {

    let inputValue = document.getElementById('newText');
    let liElement = document.createElement('li');
    let parentElement = document.getElementById('items');

    parentElement.addEventListener('click',(e)=>{

        let deleteElement = e.target.parentElement;

        deleteElement.remove();
    })
 
    liElement.innerHTML = `${inputValue.value}  <a href="#">[Delete]</a>`;
    parentElement.appendChild(liElement);

    inputValue.value = '';

}
