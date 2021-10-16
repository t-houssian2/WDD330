var notes = document.getElementById("notes");

let overview = document.createElement("p");
overview.textContent = `
    This week I learned a good amount about how to test and debug a program!
    I had never heard of the TDD version of development but I think for bigger
    projects may implment this. I also didn't really know the javascript syntax
    for the try catch finally so it was good to learn so I can implment it. I think
    I get how to do tests but will need some more practice.
`;
notes.appendChild(overview)

let points = document.createElement("ul");

noteList = [
    `System error, Programmer error, User error`,
    `stack trace- A sequence of funcitons or calls that lead to the error`,
    `A warning may cause the program to continue running incorrectly. So don't
    ignore warnings!!!`,
    `'use strict'; at the top of your file for strict mode allowing less warnings and
    cathcing more errors possibly`,
    `Lint will help you with stlying and other code that code be fixed
    but may not be throwing an error`,
    `Use alert()`,
    `OR classic console.log()`,
    `debuggerkeyword. This will create a breakpoint in your code that will pause the execution of the code and allow you to see where the program is currently up to.`,
    `For custom error- throw new Error('Something has gone badly wrong!');`,
    `Use- 
     try {
        answer = String(squareRoot(number));
    } catch(error) {
        answer = squareRoot(-number)+"i";
    } finally {
        return "+ or - ";
    }`,
    `Test Driven Dev:
    Write tests (that initially fail)

    Write code to pass the tests

    Refactor the code

    Test refactored code

    Write more tests for new features`,
    `Jest for testing`,
    `TDD can be used to keep adding functionality in small increments using the fail, pass and refactor cycle.`,
    `Sometimes the TDD method might not be the best beause of the time it takes, especially
    for code that isn't very complex`,
]

noteList.forEach(function(note){
    let newLI = document.createElement("li")
    newLI.textContent = note
    points.appendChild(newLI)
});

notes.appendChild(points)
