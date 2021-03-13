function toggle() {
    let button = document.querySelector('.button');
    let divExtra = document.querySelector('#extra');

    const isHidden = button.textContent == 'More';
    divExtra.style.display = isHidden ? 'block' : 'none';
    button.textContent = isHidden ? 'Less' : 'More';
}
