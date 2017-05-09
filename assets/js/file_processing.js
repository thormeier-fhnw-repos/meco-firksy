if (document.querySelector('form') != null) {
    document.querySelector('form').addEventListener('submit', function (e) {
        e.preventDefault()

        var files = []

        console.log()

        var filesUploaded = document.querySelector('#music').files
        for (var i = 0; i < filesUploaded.length; i++) {
            files.push(URL.createObjectURL(filesUploaded[i]))
        }

        console.log(files)

        // Add processing here
    });
}
