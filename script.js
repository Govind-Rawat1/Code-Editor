let htmlinput = document.querySelector(".html-editor textarea");
let cssinput = document.querySelector(".css-editor textarea");
let jsinput = document.querySelector(".js-editor textarea");
let btn = document.querySelector("#btnOutput");
let outputContainer = document.querySelector(".output-container");
let outputt = document.querySelector("#output");
let buttonFullscreen = document.querySelector("#btnFullscreen");

btn.addEventListener("click",()=>{
outputt.contentDocument.body.innerHTML = htmlinput.value;
outputt.contentDocument.head.innerHTML = `<style>${cssinput.value}</style>`;
outputt.contentWindow.eval(jsinput.value);
})

buttonFullscreen.addEventListener("click",()=>{
    outputContainer.classList.toggle("output-full-active");
})