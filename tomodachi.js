document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        const sceneOne = document.querySelector(".sceneone");
        sceneOne.style.display = "none";
        const sceneTwo = document.querySelector(".scenetwo");
        sceneTwo.style.display = "flex";
    }
});