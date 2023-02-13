const Toggler = (function () {
    function isExisted(element) {
        if (element === null || element.length === 0) {
            throw new SyntaxError("There is an error in toggler id or inner span");
        }

        return true;
    }

    function toggleClassesInLines(elements = []) {
        if (elements.length === 0) {
            throw new Error("You must pass elements of array as parameter when calling toggleClassesInLines()");
        }

        elements[0].classList.toggle("toggle-rotation-clockwise");
        elements[1].classList.toggle("toggle-fade");
        elements[2].classList.toggle("toggle-rotation-not-clockwise");
    }

    function setClick(togglerID = null, togglerSpans = null) {
        const toggler = document.getElementById(togglerID);

        const allTogglerLines = document.querySelectorAll(togglerSpans);

        if (isExisted(toggler) && isExisted(allTogglerLines)) {
            toggler.addEventListener("click", () => {
                toggleClassesInLines(allTogglerLines);
            });
        }
    }

    return {
        click: setClick,
    };
})();

export default Toggler;
