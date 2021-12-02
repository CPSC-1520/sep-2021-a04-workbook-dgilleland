// IIFE to run without over-polluting the global namespace
// TODO: Global object(s) (if any)
let myGlobal; // leave it undefined.
(function() {
    // Let's just create a JSON object
    let author = {
        "firstName": "Dan",
        "lastName": "Gilleland",
        "firstPublished": 1987,
        "articles": [
            {
                "title": "How to Win Friends with JSON",
                "copyright": 2020
            },
            {
                "title": "JSON is NOT a Horror Show (like XML)",
                "copyright": 2021
            }
        ]
    }

    // We can load JSON data from outside our program, and then
    // use that data insid our program
    fetch('./heros.json') // get the contents of the file
        // then, given the response, extract the JSON data
        .then(response => response.json())
        // then, given the data, copy it to our global variable
        .then(data => myGlobal = data)
    // but, don't expect an immediate response!
    console.log("My global data", myGlobal);

    const showData = function(evt) {
        textHolder.innerText = JSON.stringify(myGlobal, null, 2);
    }
    showJson.addEventListener('click', showData);
})();
