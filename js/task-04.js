const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    if (email === "" || password === "") {
        return alert('All form fields must be filled in');
    } else {
        const user = { email: email.trim(), password: password.trim()};
        console.log(user);
    }

    event.target.reset();
}
