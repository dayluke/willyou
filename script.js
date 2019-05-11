var pos;
var img;
var container;
var index = 0;
var imgURL = "http://pixelartmaker.com/art/8bf0ec0c7f85694.png"
var heartCount = 10;
var answerElement;
var timeBetweenHearts = 1150;

function btnClicked(btn) {
  pos = btn.getBoundingClientRect();
  container = document.getElementById("heartContainer");
  answerElement = document.getElementById("answer");
  spawnHearts();
  setTimeout(function() {answerElement.scrollIntoView({
    behavior: "smooth",
    block: "center",
  }); }, (heartCount * timeBetweenHearts) - 500);
}

function spawnHearts() {
  setTimeout(function() {
    setupHearts();
    index++;
    if (index < heartCount) {
      spawnHearts();
    }
  }, timeBetweenHearts);
}

function setupHearts() {
  img = document.createElement("img");
  img.src = imgURL;
  img.style.height = "40px";
  img.style.width = "40px";
  img.id = "heart" + index;
  img.name = "heart" + index;
  container.appendChild(img);
  moveHearts();
}

function moveHearts() {
  img.style.position = "fixed";
  img.style.position = "absolute";
  img.style.top = (pos.top + getRandom(71) - 1) + "px";
  img.style.left = (pos.left + getRandom(301) - 1) + "px";
  animate();
}

function getRandom(max) {
  return Math.floor(Math.random() * max);
}

function animate() {
  var y = parseInt(img.style.top);
  var grav = 0.03;
  var vel = -0.5;
  var id = setInterval(frame, 5);
  
  function frame() {
    if (y >= (document.getElementById("clickme").clientHeight - 40)) {
      clearInterval(id);
    } else {
      y += vel;
      vel += grav;
      img.style.top = y + "px";
    }
  }
}

function reset() {
  var child = container.lastElementChild;
  while (child) {
    container.removeChild(child);
    child = container.lastElementChild;
  }
  index = 0;
}

function reply(ans) {
  var response = document.getElementById("response");
  if(ans) {
    response.children[0].innerText = "👰 Woohoo! 🤵";
    setTimeout(function() { 
      response.scrollIntoView({
      behavior: "smooth",
      block: "center",
    }); }, 10);
  } else {
    response.children[0].innerText = "😨";
    setTimeout(function() { 
      response.scrollIntoView({
      behavior: "smooth",
      block: "center",
    }); }, 10);
  }
}
