const button = document.querySelector("#fetch-btn");
const image = document.querySelector("#output-img");

const url = "https://dog.ceo/api/breeds/image/random";

function onClickHandler() {
    fetch(url).then(response => response.json()).then(json => {
        const imageUrl = json.message;
        console.log(imageUrl);
        image.src = imageUrl;
    })
}

button.addEventListener("click", onClickHandler);