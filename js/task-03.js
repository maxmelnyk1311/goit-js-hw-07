const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
    if (event.currentTarget.value === "" || event.currentTarget.value.trim() === "") {
        textOutput.textContent = "Anonymous";
    } else {
        textOutput.textContent = event.target.value.trim();
    }
})
