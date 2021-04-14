function validate() {
    const email = document.getElementById('email')
    const pattern = /^[a-z]+@[a-z]+\.[a-z]+$/gm
    email.addEventListener('change', () =>{
        if(!pattern.test(email.value)){
            email.classList.add('error')
        } else {
            email.removeAttribute('class')
        }
    })
}
