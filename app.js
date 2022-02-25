const form = document.querySelector("#memeform");
const text1 = document.querySelector("input[name='toptext']");
const text2 = document.querySelector("input[name='bottomtext']");
const url = document.querySelector("input[name='url']");
const results = document.querySelector("#results");
let count = 0;

form.addEventListener("submit", function(e) {
    if (url.value == "") {
        return false;
    }
    e.preventDefault();
    const newMeme = makeMeme(text1,text2,url);
    results.appendChild(newMeme);
    text1.value = "";
    text2.value = "";
    url.value = "";
});

function makeMeme(text1,text2,url) {
    const meme = document.createElement("div");
    const topText = document.createElement("div");
    const bottomText = document.createElement("div");
    const img = document.createElement("img");
    img.src = url.value;
    topText.classList.add("textTop");
    bottomText.classList.add("textBottom");
    topText.innerText = text1.value;
    bottomText.innerText = text2.value;  
    meme.appendChild(img);
    meme.appendChild(topText);
    meme.appendChild(bottomText);
    meme.appendChild(img);
    const deleteSign = document.createElement("BUTTON");
    deleteSign.classList.add("delete");
    deleteSign.innerHTML = "&#x2716;";
    meme.appendChild(deleteSign);
    meme.classList.add("meme");
    count++;

    meme.addEventListener("click", function(e) {  
        meme.remove();
    });

    meme.addEventListener("mouseover", function(e) {
        deleteSign.style.opacity = ".5";
    });

    meme.addEventListener("mouseout", function(e) {
        deleteSign.style.opacity = "0";
    });

    return meme;
}
