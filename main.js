const sidebar = document.querySelector("aside .sidebar");
const openbtn = document.getElementById("openbtn");
const closebtn = document.getElementById("closebtn");
const lightmode = document.getElementById("lightmode");
const darkmode = document.getElementById("darkmode");

openbtn.addEventListener("click", function showsidebar() {
  sidebar.style.display = "block";
  openbtn.style.display = "none";
  closebtn.style.display = "block";
  openbtn.classList.add("activeopenmenu");
});

closebtn.addEventListener("click", function hidesidebar() {
  sidebar.style.display = "none";
  openbtn.style.display = "block";
  closebtn.style.display = "none";
  openbtn.classList.remove("activeopenmenu");
});

darkmode.addEventListener("click", function myfunction() {
  document.body.classList.add("dark-theme-variables");
  darkmode.classList.add("current-theme");
  lightmode.classList.remove("current-theme");
});

lightmode.addEventListener("click", function myfunction() {
  document.body.classList.remove("dark-theme-variables");
  lightmode.classList.add("current-theme");
  darkmode.classList.remove("current-theme");
});
