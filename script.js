const messageElement = document.getElementById("message");

const fullMessage = `Hello, the world is yours, it is mine too.
You are who you are.
Do not deny it, but accept it.
You are me.
Do not hurt the one you love.
Yin and Yang.
Hell is other people, Karma is real too.`;

const finalMessage = "Mission completed.";

let index = 0;
let visitCount = localStorage.getItem("visitCount") || 0;

function typeWriter(text) {
  if (index < text.length) {
    messageElement.textContent += text.charAt(index);
    index++;
    setTimeout(function() {
      typeWriter(text);
    }, 50);
  }
}

if (visitCount >= 2) {
  index = 0;
  messageElement.textContent = "";
  typeWriter(finalMessage);
} else {
  visitCount++;
  localStorage.setItem("visitCount", visitCount);
  index = 0;
  messageElement.textContent = "";
  typeWriter(fullMessage);
}