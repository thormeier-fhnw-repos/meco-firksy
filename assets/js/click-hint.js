/**
 * Used to indicated where to click during the prototype
 * Attach `data-is-clickable` to all elements that are used
 * to continue the user journey.
 */

var isClickableSelector = 'data-is-clickable';
var animationClass = 'tada';

var flash = function (e) {
    var animationEndListener = function () {
        this.removeEventListener('animationend', animationEndListener);
        this.classList.remove(animationClass, 'animated');
    };

    e.classList.add(animationClass, 'animated');
    e.addEventListener('animationend', animationEndListener);
};

document.addEventListener('click', function (e) {
    if (!e.target.hasAttribute(isClickableSelector)) {
        e.preventDefault();
        var clickables = document.querySelectorAll('[' + isClickableSelector + ']');

        for (var i = 0; i < clickables.length; i++) {
            flash(clickables[i]);
        }
    }
});
