const Scroll = (function () {
    function goTop(elementID = "") {
        if (elementID === undefined || elementID === "") {
            throw new SyntaxError("goTop function must call with elementID parameter");
        }

        if (elementID === null) {
            throw new Error("There is no such id in the DOM");
        }

        const goTopElement = document.getElementById(elementID);

        window.addEventListener("scroll", function () {
            goTopElement.classList.toggle("shown", window.scrollY > 120);
        });

        goTopElement.addEventListener("click", () => window.scrollTo(0, 0));
    }

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

    function changeLogoHeightWhenScrolling(logoID = "") {
        if (logoID === undefined || logoID === "") {
            throw new SyntaxError("changeLogoHeightWhenScrolling function must call with logoID parameter");
        }

        if (logoID === null) {
            throw new Error("There is no such id in the DOM");
        }

        const logoELement = document.getElementById(logoID);

        window.addEventListener("scroll", function () {
            logoELement.classList.toggle("minimize", window.scrollY > 50);
        });
    }

    changeBackgroundLinesWhenScrolling(document.querySelectorAll("#navbar-toggler span"));

    changeLogoHeightWhenScrolling("navbar-logo");

    return {
        init: setNavbarSticky,
        goTop,
    };
})();

export default Scroll;