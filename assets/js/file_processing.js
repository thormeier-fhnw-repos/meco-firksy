function setSongs(songs) {
    localStorage.setItem('songs', JSON.stringify(songs))
}

function getSongs() {
    return JSON.parse(localStorage.getItem('songs'))
}

function getSongsByMood(mood) {
    return getSongs().filter(function (s) { return s.mood === mood })
}

if (document.querySelector('form') !== null) {
    document.querySelector('form').addEventListener('submit', function (e) {
        e.preventDefault()

        var files = []
        var filesUploaded = document.querySelector('#music').files

        localStorage.setItem('songs', JSON.stringify([]))

        for (var i = 0; i < filesUploaded.length; i++) {
            var url = URL.createObjectURL(filesUploaded[i])

            id3(filesUploaded[i], function(err, tags) {
                files.push({
                    url: url,
                    mood: 'happy',
                    tags: tags
                })

                setSongs(files)
            })
        }

        // Add processing here
    })
}
