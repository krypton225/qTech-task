const Toggler = (function () {
    function isExisted(element) {
        if (element === null || element.length === 0) {
            throw new SyntaxError("There is an error in toggler id or inner span");
        }

        return true;
    }

    function toggleClassNames(arr = []) {
        arr[0].classList.toggle("toggle-rotation-clockwise");
        arr[1].classList.toggle("toggle-fade");
        arr[2].classList.toggle("toggle-rotation-not-clockwise");
    }

    function toggleClassesInLines(elements = []) {
        if (elements.length === 0 || elements === undefined) {
            throw new Error("You must pass elements of array as parameter when calling toggleClassesInLines()");
        }

        toggleClassNames(elements);
    }

    function setClick(togglerID = null, togglerSpans = null) {
        const toggler = document.getElementById(togglerID);

        const allTogglerLines = document.querySelectorAll(togglerSpans);

        if (isExisted(toggler) && isExisted(allTogglerLines)) {
            toggler.addEventListener("click", () => {
                toggleClassesInLines(allTogglerLines);
                document.getElementById("navbar-list").classList.toggle("active");
            });
        }
    }

    function closeTogglerAfterClickLink() {
        const allLinks = document.querySelectorAll(".navbar__content__list-item a");

        allLinks.forEach((link) => {
            link.addEventListener("click", () => {
                document.getElementById("navbar-list").classList.remove("active");

                const allLines = document.querySelectorAll(".toggler__line");

                toggleClassNames(allLines);
            });
        });
    }

    closeTogglerAfterClickLink();

    return {
        click: setClick,
    };
})();

export default Toggler;
