var notes = document.getElementById("notes");

let overview = document.createElement("p");
overview.textContent = `
    This week I learned a lot more about functions and a good bit on Ajax. I really dug
    into recursive functions and watch the video on event loops that was in the reading
    which really helped me understand a lot better https://www.youtube.com/watch?v=8aGhZQkoFbQ&ab_channel=JSConf,
    I also was able to understand callbacks more though more studying and applying
    is definently needed! I learned a lot as well about ajax and it's history
    and application. I got a bit confused when learning about all the details
    but think will understand more as I try to apply it more. Also ended up
    looking into jQuery a bit and learning about it. Really Neat!
`;
notes.appendChild(overview)

let points = document.createElement("ul");

noteList = [
    `All functions have a length property to return the number of parameters
    that the funciton has.`,
    `call() can set the value of this inside a function`,
    `apply works like call() but the arguments are always provided in the
    form of an array`,
    `You can add your own properties to functions in the same way that you can add properties to any object in JavaScript`,
    `() at the end of a function creates an Immediately Invoked Function Expression – or IIFE – (pronounced 'iffy')`,
    `IFFE is useful in the creation of initaillizaiton code`,
    `'use strict'; can be invoked within a function if you are building off of anothers
    code and do not know if invoking strict mode will work or not`,
    `(function() {
        // block A
        const name = 'Block A';
        }());
    
        (function() {
        // block B
        const name = 'Block B';
    }());
    In This example each block of code is self contianed. Name can be set in both
    without interfering with the other.`,
    `function party(){
        console.log('Wow this is amazing!');
        party = function(){
            console.log('Been there, got the T-Shirt');
        }
    }
    Is an example of rewriting a function. 
    Every time the function is called after the first time, it will log the message 'Been there, got the T-Shirt'
    This make javascript very dynamic.`,
    `Init-Time Branching is how you use objects that may not have full support in
    all browsers. You can use the keyword window to test if the object exists and then
    rewrite the function according to the outcome. Like so:`,
    `function ride(){
        if (window.unicorn) { 
            ride = function(){
            // some code that uses the brand new and sparkly unicorn methods
            return 'Riding on a unicorn is the best!';
            }
        } else {
            ride = function(){
            // some code that uses the older pony methods
            return 'Riding on a pony is still pretty good';
            }
        }
        return ride();
    }`,
    `Recursion is where a function calls itself.`,
    `Promises help our callbacks and async operation`,
    `Use then() to chain promises`,
    `async keyword for async function and await to call it as if syncronous`,
    `Functions can return functions`,
    `function outer() {
        const outside = 'Outside!';
        function inner() {
            const inside = 'Inside!';
            console.log(outside);
            console.log(inside);
        }
        console.log(outside);
        inner();
    }
    This is an example of closures and gives the inner function access to
    the variable outside and the variables in inner. But outer cannot access inner.`,
    `Add return inner so form a closure`,
    `function* fibonacci(a,b) {
        let [ prev,current ] = [ a,b ];
        while(true) {
            [prev, current] = [current, prev + current];
            yield current;
        }
    }
    const sequence = fibonacci(1,1);
    sequence.next();
    << 2

    sequence.next();
    << 3

    sequence.next();
    << 5
    This is an example of a generator function (*) which makes the function have an iterrator`,
    `Pure Functions must have:
    1) The return value of a pure function should only depend on the values provided as arguments. It doesn't rely on values from somewhere else in the program.

    2) There are no side-effects. A pure function doesn't change any values or data elsewhere in the program. It only makes non-destructive data transformations and returns new values, rather than altering any of the underlying data.

    3) Referential transparency. Given the same arguments, a pure function will always return the same result.
    -At least one argument
    -A return value`,
    `This helps predictability and conciseness`,
    `currying :
    function curry(func,...oldArgs) {
        return function(...newArgs) {
            const allArgs = [...oldArgs,...newArgs];
            return func(...allArgs);
        }
    }`,
    ``,
    `AJAX allows web pages to communicate asynchronously`,
    `Asychronous
    JAvascript
    Xml`,
    `fetch('https://example.com/data')
    .then( // code that handles the response )
    .catch( // code that runs if the server returns an error )`,
    `Fetch has different status codes that are returned`,
    `fetch(url)
    .then( response => response.redirect(newURL)); // redirects to another URL
    .then( // do something else )
    .catch( error => console.log('There was an error: ', error))`,
    `fetch(url)
    .then( response => response.text() ); // transforms the text stream into a JavaScript string
    .then( text => console.log(text) )
    .catch( error => console.log('There was an error: ', error))
    This can return you a string to use in Javascript`,
    `blob() is for raw data (image or spreadsheet)`,
    `response.blob, response.json`,
    `Fetch API is a living standard and changes as feedback is provided`,
    `You can also use jQuery like so to simplify the process and ensure that
    nothing gets changed in the fetch api.:
    $.ajax('http://numbersapi.com/random')
    .done(text => outputDiv.innerHTML = text );`
]

noteList.forEach(function(note){
    let newLI = document.createElement("li")
    newLI.textContent = note
    points.appendChild(newLI)
});

notes.appendChild(points)

let practice = document.createElement("a")
practice.textContent = "Practice"
practice.setAttribute('href', "practice.html")
notes.appendChild(practice)