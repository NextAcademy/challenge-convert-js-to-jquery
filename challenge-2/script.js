const surpriseButton = document.getElementById("surprise-button");

const body = document.getElementById("content");

const navBar = document.getElementById("navbar");

const bigBox = document.getElementById("big-box");

const lastBox = document.getElementById("final-box");

surpriseButton.addEventListener("click", function() {
  bigBox.style.background = "none";
  lastBox.style.backgroundColor = "rgba(0,0,0,0)";
  body.style.background = "none";
  surpriseButton.style.display = "none";
  setInterval(function() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  }, 1000);
});

function currentScrollPercentage() {
  return (
    ((document.documentElement.scrollTop + document.body.scrollTop) /
      (document.documentElement.scrollHeight -
        document.documentElement.clientHeight)) *
    100
  );
}

window.addEventListener("scroll", function() {
  let opacity = currentScrollPercentage() / 100;
  opacity = opacity.toFixed(2);
  opacity = 1 - opacity;

  navBar.style.opacity = opacity;
});
