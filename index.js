document
  .getElementById("menu-btn")
  .addEventListener(
    "click",
    () => (document.getElementById("nav").style.display = "block")
  );

document
  .getElementById("exit-btn")
  .addEventListener(
    "click",
    () => (document.getElementById("nav").style.display = "none")
  );
