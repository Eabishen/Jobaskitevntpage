var sildebtn = document.getElementById("sidebtn");

window.addEventListener("scroll", () => {
    console.log(window.scrollY);
    if (window.scrollY >= 710 && window.scrollY <= 1490) {
        sildebtn.style.removeProperty;
        sildebtn.classList.add("vanish");
        sildebtn.classList.remove("fixedbtn");
        sildebtn.classList.remove("fixedbtn2");
        console.log("vanish");
    } else if (window.scrollY >= 2800) {
        sildebtn.classList.add("vanish");
        sildebtn.classList.remove("fixedbtn");
    } else {
        sildebtn.classList.remove("vanish");
        if (
            (window.scrollY >= 1500 && window.scrollY <= 2201) ||
            (window.scrollY >= 400 && window.scrollY <= 700)
        ) {
            sildebtn.classList.add("fixedbtn2");
        } else {
            sildebtn.classList.remove("fixedbtn2");
            sildebtn.classList.add("fixedbtn");
        }
    }
});
