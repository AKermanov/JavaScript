function loadCommits() {
  const username = document.getElementById('username').value;
  const repo = document.getElementById('repo').value;
  const element = document.getElementById('commits');

  const url = `https://api.github.com/repos/${username}/${repo}/commits`;

  fetch(url)
    .then(responce => responce.json())
    .then(data => {
      data.forEach(el => {
        const ulElement = document.createElement('ul');
        ulElement.textContent = `${el.commit.author.name}: ${el.commit.message}`;
        element.appendChild(ulElement);
      });
    })
    .catch(err => {
      const errrrrrr = document.createElement('ul');
      errrrrrr.textContent = `Error: ${err.message} (Not Found)`;
      element.appendChild(errrrrrr);
    });
}
