function solve() {
  function deleteWhenClicked(article) {
    article.remove();
  }

  function insertElement(t, c, cln) {
    const result = document.createElement(t);
    result.textContent = c;
    if (cln) {
      result.className = cln;
    }
    return result;
  }

  function insertElement(t, c, cln) {
    const result = document.createElement(t);
    result.textContent = c;
    if (cln) {
      result.className = cln;
    }
    return result;
  }

  function archiveWhenClicked(article) {
    let archiveElement = article.children[0].textContent;

    let listItem = insertElement('li', '', '');
    let appendElement = document.getElementsByTagName('OL')[0];
    appendElement.appendChild(listItem);
    listItem.textContent = archiveElement;
    article.remove();
  }

  let creteButton = document.getElementsByClassName('btn create')[0];
  let category = document.getElementById('category');
  let title = document.getElementById('title');
  let content = document.getElementById('content');
  let author = document.getElementById('creator');

  creteButton.addEventListener('click', clicked);

  function clicked(elm) {
    elm.preventDefault();
    let article = insertElement('article', '', '');
    let headerOne = insertElement('h1', title.value, '');
    article.appendChild(headerOne);

    let paragraphCategory = insertElement('p', 'Category:', '');
    let firstStrong = insertElement('strong', category.value, '');
    paragraphCategory.appendChild(firstStrong);

    let paragraphCreator = insertElement('p', 'Creator:', '');

    article.appendChild(paragraphCategory);
    article.appendChild(paragraphCreator);

    let secondStrong = insertElement('strong', author.value, '');
    paragraphCreator.appendChild(secondStrong);

    let paragraphContent = insertElement('p', content.value, '');
    article.appendChild(paragraphContent);

    let division = insertElement('div', '', 'buttons');
    article.appendChild(division);

    let deleteButton = insertElement('button', 'Delete', 'btn delete');
    division.appendChild(deleteButton);

    let archiveButton = insertElement('button', 'Archive', 'btn archive');
    division.appendChild(archiveButton);

    let addArt = document.getElementsByTagName('section')[1];
    addArt.appendChild(article);

    deleteButton.addEventListener('click', () => deleteWhenClicked(article));
    archiveButton.addEventListener('click', () => archiveWhenClicked(article));
  }
}
