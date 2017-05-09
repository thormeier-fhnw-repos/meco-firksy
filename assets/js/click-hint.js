/**
 * Used to indicated where to click during the prototype
 * Attach `data-is-clickable` to all elements that are used
 * to continue the user journey.
 */

var isClickableSelector = 'data-is-clickable'
var animationClass = 'tada'

var flash = function (e) {
    var animationEndListener = function () {
        this.removeEventListener('animationend', animationEndListener)
        this.classList.remove(animationClass, 'animated')
    }

    e.classList.add(animationClass, 'animated')
    e.addEventListener('animationend', animationEndListener)
}

document.addEventListener('click', function (e) {
    if (!e.target.hasAttribute(isClickableSelector)
        && e.target.tagName.toLowerCase() !== 'input'
        && e.target.tagName.toLowerCase() !== 'label'
        && !e.target.hasAttribute('[data-note')) {
        document.querySelectorAll('[' + isClickableSelector + ']').forEach(flash)
    }
})




