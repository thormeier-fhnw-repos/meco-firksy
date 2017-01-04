/**
 * Used to add notes to the frontend. Add a data-note attribute with the note you want to show to the
 * attribute that should indicate it.
 */
document.querySelectorAll('[data-note]').forEach(function (n) {
    n.addEventListener('click', function (e) {
        e.stopPropagation();
        n.classList.toggle('show-note');
    });
});
