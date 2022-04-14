let welcomeButton = document.getElementById("welcomeButton");
const welcomeWindow = document.getElementById("welcomeWindow");
const allWindow = document.getElementById("allWindow");

welcomeButton.addEventListener("click", () => {
  welcomeWindow.style.visibility = "hidden";
  allWindow.style.visibility = "visible";
});
