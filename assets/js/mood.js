var classes = [
    'green', 'blue', 'yellow', 'grey', 'red'
]

var textClasses = [
    'text-green', 'text-blue', 'text-yellow', 'text-grey', 'text-red'
]

function getColorClassesByMood(mood) {
    switch (mood) {
        case 'happy':
            return 'green'
        case 'relaxed/well':
            return 'blue'
        case 'neutral':
            return 'yellow'
        case 'sad':
            return 'grey'
        case 'angry':
            return 'red'
    }
}

function setColor(mood) {
    var color = getColorClassesByMood(mood)

    document.querySelector('html').classList.remove(classes[0], classes[1], classes[2], classes[3], classes[4])
    document.querySelector('html').classList.add(color)

    document.querySelectorAll('.text-transition').forEach(function (e) {
        e.classList.remove(textClasses[0], textClasses[1], textClasses[2], textClasses[3], textClasses[4])
        e.classList.add('text-' + color)
    })
}

if (document.querySelector('#moodselect') !== null) {
    document.querySelector('#moodselect').addEventListener('change', function (e) {
        setColor(e.target.value)
        localStorage.setItem('mood', e.target.value)
    })
}

window.addEventListener('load', function () {
    var mood = localStorage.getItem('mood');
    if (mood) {
        setColor(mood)
    }
})


