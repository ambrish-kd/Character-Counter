let inputBox = document.querySelector(".input-box");

let textarea = inputBox.querySelector("textarea");

let signalNum = inputBox.querySelector(".signal_num");

textarea.addEventListener("keyup", () => {
    let valLength = textarea.value.length;
    signalNum.innerText = valLength;
    // adding active class to the input box when input text length > 0 and removing otherwise
    (valLength > 0) ? inputBox.classList.add("active") : inputBox.classList.remove("active");
    // adding error class to the input box when input text length > 100 and removing otherwise
    (valLength > 500) ? inputBox.classList.add("error") : inputBox.classList.remove("error");
});