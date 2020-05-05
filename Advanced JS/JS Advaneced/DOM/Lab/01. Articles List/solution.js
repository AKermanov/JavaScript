function createArticle() {
  let article = document.createElement('article');
  let hh = document.createElement('h3');
  let p = document.createElement('p');

  let input = document.getElementById('createTitle');
  let textarea = document.getElementById('createContent');
  let articles = document.getElementById('articles');

  if (input === null && textarea === null && articles === null) {
    throw new Error('Something is wrong...');
  }

  h3.innerHTML = input.value;
  p.innerHTML = textarea.value;

  article.appendChild(h3);
  article.appendChild(p);

  article.appendChild(articles);
}

// DOM може да се променя докато върви програмата