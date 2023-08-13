import cabins from "./data.js";

const names = cabins
  .map(({ name }) => `<option value="${name}">${name}</option>`)
  .join("");

document.getElementById("select-cabin").innerHTML += names;

document.getElementById("reservations-form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("your form has been submitted");
});
