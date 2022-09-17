const input = document.querySelector("#user-input");
const button = document.querySelector("#submit-btn");
const output = document.querySelector("#output-div");

const url = "https://randomapi.kaushalkumar23.repl.co/home";

function constructUrl(inputText) {
    return url + "?text=" + inputText;
}

function fetchApiResponse(inputText) {
    fetch(constructUrl(inputText)).then(response => response.json()).then(json => {
        const response = json.msg;
        output.innerText = response;
        console.log(json);
    });
}

function buttonClickHandler() {
    const inputText = input.value;
    fetchApiResponse(inputText);
}

button.addEventListener("click", buttonClickHandler);