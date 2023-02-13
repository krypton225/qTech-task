const Scroll = (function () {
    function changeBackgroundLinesWhenScrolling(elements = []) {
        if (elements.length === 0 || elements === undefined) {
            throw new Error("You must pass elements of array as parameter when calling toggleClassesInLines()");
        }

        window.addEventListener("scroll", function () {
            elements.forEach((el) => el.classList.toggle("active", this.window.scrollY > 50));
        });
    }

    function setNavbarSticky(navbarID = "") {
        if (navbarID === undefined || navbarID === "") {
            throw new TypeError("setNavbarSticky() must have one parameter navbar Id");
        }

        const navbar = document.getElementById(navbarID);

        window.addEventListener("scroll", function () {
            navbar.classList.toggle("sticky-scroll", window.scrollY > 50);
        });
    }

    changeBackgroundLinesWhenScrolling(document.querySelectorAll("#navbar-toggler span"));

    return {
        init: setNavbarSticky
    };
})();

export default Scroll;