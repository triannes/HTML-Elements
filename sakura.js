let lastKey = "";
document.addEventListener("keydown", (e) => {
    if (lastKey === "c" && e.key === "b") {
        document.querySelector(".sceneone").style.display = "none";
        document.querySelector(".scenetwo").style.display = "flex";
    }
    lastKey = e.key;
});