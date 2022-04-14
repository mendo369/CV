const header = document.getElementById("header");

const angular = document.getElementById("angular");
const css = document.getElementById("css");
const html = document.getElementById("html");
const javascript = document.getElementById("javascript");
const nodejs = document.getElementById("nodejs");
const yo = document.getElementById("yo");
const python = document.getElementById("python");
const sass = document.getElementById("sass");
const typescript = document.getElementById("typescript");

window.addEventListener("scroll", function () {
  let value = window.scrollY;

  // header.style.marginLeft = value * 0.7 + "px";
  angular.style.left = value * -5 + "px";
  css.style.left = value * -5 + "px";
  html.style.marginTop = value * 0.7 + "px";
  javascript.style.marginBottom = value * -1 + "px";
  nodejs.style.left = value * -5 + "px";
  python.style.marginTop = value * 0.4 + "px";
  react.style.marginLeft = value * 4 + "px";
});
