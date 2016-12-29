/**
 * Used to indicated where to click during the prototype
 * Attach
 */

var isClickableSelector = 'data-is-clickable';
var animated = 'animated';
var tada = 'tada';

var flash = function (e) {
    var animationEndListener = function () {
        this.removeEventListener('animationend', animationEndListener);
        this.classList.remove('tada', 'animated');
    };

    e.classList.add('tada', 'animated');
    e.addEventListener('animationend', animationEndListener);
};

document.addEventListener('click', function (e) {
    if (!e.target.hasAttribute(isClickableSelector)) {
        e.preventDefault();
        var clickables = document.querySelectorAll('[' + isClickableSelector + ']');
        console.log(clickables);
        for (var i = 0; i < clickables.length; i++) {
            flash(clickables[i]);
        }
    }
});
