const Scroll = (function () {
    function setNavbarSticky(navbarID = "") {
        if (navbarID === undefined || navbarID === "") {
            throw new TypeError("setNavbarSticky() must have one parameter navbar Id");
        }

        const navbar = document.getElementById(navbarID);

        window.addEventListener("scroll", function () {
            navbar.classList.toggle("sticky-scroll", window.scrollY > 250);
        });
    }

    return {
        init: setNavbarSticky
    };
})();

export default Scroll;