var notes = document.getElementById("notes");

let overview = document.createElement("p");
overview.textContent = `
    This week I was refreshed on a lot of syntax of javascript and a bit on my html and css
    as well. I learned about functions, hoisting, callbacks, map, reduce, and filter,
    and how to implement this into my code!
`;
notes.appendChild(overview)

let points = document.createElement("ul");

noteList = [
    "Use well commented code",
    "Useful String functios (.includes('a'), .length, .trim())",
    "Backticks are for multi line comments",
    ".toFixed(2) is to round to two decimal places",
    ".isFinite(NaN) to check for NaNs",
    "Number('23') to convert string to number",
    "String(3) to convert number to string",
    "parseFloat() to convert to float",
    "typeof 42 to check the type",
    "You can use double negation ( !! ) to find out if a value is truthy or falsy",
    "== for soft equality same value, === for hard equality (datatype and same value)",
    "delete avengers[3] removes from an array",
    ".length for length of array",
    ".pop() for last item",
    ".shift() for first item",
    ".push('Thor') to the end",
    ".unshift() to the beginning",
    ".sort() to sort",
    "uniq = [...new Set(array)] to remove duplicates from an array",
    "for(const value of avengers){} to loop thorugh arrays",
    "const goodbye = function(){} is an anonymous function",
    "const add = (x,y) => x + y; is the arrow function syntax",
    "A function that is passed as an argument to another is known as a callback.",
    "arrayName.forEach(function(item){}) for iterrating over an array",
    "[1,2,3].map( square ) to run a function over an array ([1,2,3].map( x => 2 * x);)",
    "[1,2,3,4,5].reduce( (acc,val) => prev + val ); to run a function and get a single value",
    "numbers.filter(x => x%2 === 0 ); to filter array (get even values in this example)",
    "[1,2,3].map( x => x*x ).reduce((acc,x) => acc + x ); Chainining iterration together",

]

noteList.forEach(function(note){
    let newLI = document.createElement("li")
    newLI.textContent = note
    points.appendChild(newLI)
});

notes.appendChild(points)

let practice = document.createElement("a")
practice.textContent = "Practice"
practice.setAttribute('href', "practice.html");
notes.appendChild(practice)
