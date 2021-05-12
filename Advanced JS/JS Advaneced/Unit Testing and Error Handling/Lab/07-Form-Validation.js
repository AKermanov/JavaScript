function validate() {
    let companyElement = document.getElementById("company");
    let isValid = true;
    document.getElementById("submit")
        .addEventListener("click", (e) => {
            e.preventDefault()

            let usernameElement = document.querySelector("#userInfo #username");
            let usernamePattern = /^[\d,A-Z,a-z]{3,20}$/g;
            if (!usernameElement.value.match(usernamePattern)) {
                isValid = false;
                usernameElement.style.borderColor = "red";
            } else {
                isValid = true;
                usernameElement.style.border = "none";
            }

            let emailElement = document.querySelector("#userInfo #email");
            if (!emailElement.value.includes("@") || !(emailElement.value.indexOf(".") > emailElement.value.indexOf("@"))) {
                isValid = false;
                emailElement.style.borderColor = "red";
            } else {
                isValid = true;
                emailElement.style.border = "none";
            }

            let confirmPassworElement = document.querySelector("#userInfo #confirm-password");

            let passwordElement = document.querySelector("#userInfo #password");
            let passwordPattern = /^\w{5,15}$/g;
            if (!passwordElement.value.match(passwordPattern) || passwordElement.value !== confirmPassworElement.value) {
                passwordElement.style.borderColor = "red";
                confirmPassworElement.style.borderColor = "red";
                isValid = false;
            } else {
                passwordElement.style.border = "none";
                confirmPassworElement.style.border = "none";
                isValid = true;
            }

            if (companyElement.checked) {
                let companyNumber = document.getElementById("companyNumber")
                if (Number(companyNumber.value < 1000) || Number(companyNumber.value > 9999)) {
                    companyNumber.style.borderColor = "red";
                    isValid = false;
                } else {
                    companyNumber.style.border = "none";
                    isValid = true;
                }
            }

            if (isValid) {
                document.getElementById("valid").style.display = "block";
            } else {
                document.getElementById("valid").style.display = "none";
            }

        })

    companyElement
        .addEventListener("click", () => {
            let wrapper = document.getElementById("companyInfo")
            if (wrapper.style.display == "none") {
                wrapper.style.display = "block"
            } else if (wrapper.style.display == "block") {
                wrapper.style.display = "none"
            }
        })
}
