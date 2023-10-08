let boxRed = document.querySelector(".boxRed .p2");
let boxYellow = document.querySelector(".boxYellow .p1");
localStorage.setItem("PlayerID", " ");
boxRed.addEventListener("click", (event) => {
    boxRed.style.display = "none";
    boxYellow.style.display = "none";
    localStorage.setItem("PlayerID", "2");
}, false);

boxYellow.addEventListener("click", (event) => {
    boxRed.style.display = "none";
    boxYellow.style.display = "none";
    localStorage.setItem("PlayerID", "1");
}, false);