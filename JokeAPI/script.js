// good luck!
(() => {
    let randomJokes = [];


    // Fetch ten general jokes
    let p1 = fetch('https://official-joke-api.appspot.com/jokes/general/ten');
            p1.then((object) => object.json())
            .then(data => handleGeneralJokes(data))
            .catch(error => handleError(error));

    function handleGeneralJokes(data) {
    let fiveGeneralJokes = data.slice(0,5);
        randomJokes.push(fiveGeneralJokes);

    }

    // Fetch ten programming jokes
    let p2 = fetch('https://official-joke-api.appspot.com/jokes/programming/ten');
            p2.then((object) => object.json())
                .then(data => handleProgrammingJokes(data))
                .catch(error => handleError(error));

    function handleProgrammingJokes(data) {
        let fiveProgrammingJokes = data.slice(0,5);
        randomJokes.push(fiveProgrammingJokes);
    }
    console.log(randomJokes)




    function handleError(error) {
        alert("Error!!!");
    }


    // Put five of each in an array
    // put them in table
    // Sort them alphabetically
    // Put them in a table
    randomJokes
    // Add styling
    // Add fetch to button
    document.getElementById('run').addEventListener('click', function () {
        fetch('https://official-joke-api.appspot.com/jokes/programming/random')
            p3.then((object) => object.json())
            .then(data => handleSingleJoke(data))
            .catch(error => handleError(error));    })

    // Add styling


})();