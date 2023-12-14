//Dark Mode Switch
let themeBtn = document.querySelector(".theme");

const body = document.querySelector("body");

if(window.localStorage.getItem('lol') == null){
  body.classList.toggle("dark");
}

themeBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
});

//Menu Button Toggle
let menuToggle = document.querySelector(".menuBtn");
let menuToggle2 = document.querySelector(".menuBtn2");

let menu = document.querySelector(".menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

menuToggle2.addEventListener("click", () => {
  menu.classList.toggle("active");
});

//Click to Copy
let copyBtn = document.querySelector(".fa-copy");

let copyText = document.querySelector(".display");

copyText.select();
copyText.setSelectionRange(0, 99999);

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(copyText.value);
});