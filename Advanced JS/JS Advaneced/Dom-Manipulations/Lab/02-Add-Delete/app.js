function addItem() {
  const input = document.getElementById('newText');
  const liElement = createElemenet('li', input.value);

  const deleteBtn = createElemenet('a', '[Delete]');
  deleteBtn.href = '#';
  deleteBtn.addEventListener('click', (ev) => {
      ev.target.parentNode.remove();
  })
  liElement.appendChild(deleteBtn);

  document.getElementById('items').appendChild(liElement);
  input.value = '';

  function createElemenet(type, content){
      const element = document.createElement(type);
      element.textContent = content;
      return element;
  }
}
