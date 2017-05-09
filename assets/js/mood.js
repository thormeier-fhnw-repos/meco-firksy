var classes = [
    'green', 'blue', 'yellow', 'grey', 'red'
]

var textClasses = [
    'text-green', 'text-blue', 'text-yellow', 'text-grey', 'text-red'
]

if (document.querySelector('#moodselect') != null) {
    document.querySelector('#moodselect').addEventListener('change', function (e) {
        var color = e.target.value

        document.querySelector('html').classList.remove(classes[0], classes[1], classes[2], classes[3], classes[4])
        document.querySelector('html').classList.add(color)

        document.querySelectorAll('.text-transition').forEach(function (e) {
            e.classList.remove(textClasses[0], textClasses[1], textClasses[2], textClasses[3], textClasses[4])
            e.classList.add('text-' + color)
        })
    })
}
