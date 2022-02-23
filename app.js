const form = document.querySelector("#memeform");
const text1 = document.querySelector("input[name='toptext']");
const text2 = document.querySelector("input[name='bottomtext']");
const url = document.querySelector("input[name='url']");
const results = document.querySelector("#results");


form.addEventListener("submit", function(e) {
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
    meme.classList.add("meme");
    meme.appendChild(topText);
    meme.appendChild(bottomText);
    meme.appendChild(img);
    return meme;

}