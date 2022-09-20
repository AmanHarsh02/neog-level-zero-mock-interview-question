const input = document.querySelector("#user-input");
const h1_btn = document.querySelector("#h1_btn");
const h2_btn = document.querySelector("#h2_btn");
const h3_btn = document.querySelector("#h3_btn");
const output = document.querySelector("#output-div");

function onChangeHandler() {
    output.innerText = input.value;
}

function onClickHandler(event) {
    const btn = event.target.innerText;
    const msg = output.innerText;

    if(btn === "h1") {
        output.innerHTML = "<h1>" + msg + "</h1>";
    } else if(btn === "h2") {
        output.innerHTML = "<h2>" + msg + "</h2>";
    } else {
        output.innerHTML = "<h3>" + msg + "</h3>";
    }
}

input.addEventListener("input", onChangeHandler);

h1_btn.addEventListener("click", onClickHandler);
h2_btn.addEventListener("click", onClickHandler);
h3_btn.addEventListener("click", onClickHandler);