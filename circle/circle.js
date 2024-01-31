let circle = document.querySelector(".circle");
circle.addEventListener("click", () => {
circle.classList.toggle("actives");


});

//grab local storage
var useinput=localStorage.getItem("userInput");
console.log("here is the access to local from circle.js :" + useinput);