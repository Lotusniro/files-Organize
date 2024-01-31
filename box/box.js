let box = document.querySelector(".box");
box.addEventListener("click", () => {
box.classList.toggle("active");


});

//grab local storage
var useinput=localStorage.getItem("userInput");
console.log("here is the access from box.js to localstore :" + useinput);