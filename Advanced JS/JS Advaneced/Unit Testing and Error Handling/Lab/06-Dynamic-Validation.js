function validate() {
    const mailRegex = /[a-z]+@[a-z]+\.[a-z]+/gm;
    const field = document.getElementById('email');
    field.addEventListener('change', () =>{
        if(!mailRegex.test(field.value)){
            // field.style.border = '2px solid red';
            field.className = 'error';
        } else {
            field.className = '';
        }
    });
}
