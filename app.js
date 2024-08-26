(function () {
    const controls = document.querySelectorAll(".control");
    const themeButton = document.querySelector(".theme-btn");

    controls.forEach(control => {
        control.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");

            document.querySelector(".active").classList.remove("active");
            document.getElementById(this.dataset.id).classList.add("active");
        });
    });

    themeButton.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    });
})();
