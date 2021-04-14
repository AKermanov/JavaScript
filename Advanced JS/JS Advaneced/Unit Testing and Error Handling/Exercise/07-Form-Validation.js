function validate() {
    const username = document.getElementById('username');
    const usernameRegex = /^[a-zA-Z0-9]{3,20}$/g;

    const email = document.getElementById('email');
    const emailRegex = /^\S+@\S*\.\S*$/g;

    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    const passwordRegex = /^\w{5,15}$/g;

    const isCompany = document.getElementById('company');
    const companyInfo = document.getElementById('companyInfo');
    const companyNumber = document.getElementById('companyNumber');
    const companyNumberRegex = /^\d{4}$/g;

    let isChecked = false;

    const submit = document.getElementById('submit');
    const valid = document.getElementById('valid');

    isCompany.addEventListener('change', (ev) => {
        if (ev.target.checked) {
            companyInfo.style.display = 'block';
            isChecked = true;
        } else {
            companyInfo.style.display = 'none';
        }
    });


    submit.addEventListener('click', (ev) => {
        ev.preventDefault();
        let isValid = true;

        if (isChecked) {
            if (!companyNumber.value.match(companyNumberRegex)) {
                companyNumber.setAttribute('style', 'border-color: red');
                isValid = false;
            } else {
                companyNumber.setAttribute('style', 'border: none');
            }
        }

        if (!username.value.match(usernameRegex)) {
            username.setAttribute('style', 'border-color: red');
            isValid = false;
        } else {
            username.setAttribute('style', 'border: none');
        }
        if (!email.value.match(emailRegex)) {
            email.setAttribute('style', 'border-color: red');
            isValid = false;
        } else {
            email.setAttribute('style', 'border: none');
        }
        if (!password.value.match(passwordRegex) || password.value !== confirmPassword.value) {
            password.setAttribute('style', 'border-color: red');
            isValid = false;
        } else {
            password.setAttribute('style', 'border: none');
        }
        if (!confirmPassword.value.match(passwordRegex) || confirmPassword.value !== password.value) {
            confirmPassword.setAttribute('style', 'border-color: red');
            isValid = false;
        } else {
            confirmPassword.setAttribute('style', 'border: none');
        }
        if (isValid) {
            valid.style.display = 'block';
        } else {
            valid.style.display = 'none';
        }
    })
}
