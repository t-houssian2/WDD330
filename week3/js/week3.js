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
    "Objects are usually created to represent entities of the real world, like users, orders and so on",
    "The value of this is defined at run-time.",
    "An object is like a map",
    `for(const key in superman) {
        console.log(key + ": " + superman[key]);
        } To Loop though values`,
    "delete superman.fly to delte properties of an object",    
    "JSON manages to hit the sweet spot between being both human- and machine-readable.",
    "The parse() method takes a string of data in JSON format and returns a JavaScript object",
    "stringify() method does the opposite, taking a JavaScript object and returning a string of JSON data",
    "JSON.stringify(jason, null, ' ') Allows you to add a line return to read json better",
    "Math is a built in object, .PI, .abs(), .ceil, .floor, .round(), .max(1,2,3), .random()",
    "const today = new Date()",
    "today.toString(); to turn date to string",
    "new Date(year,month,day,hour,minutes,seconds,milliseconds) all the date parameters",
    "const solstice = new Date(2017, 5, 21);",
    "getDay() for day of week (4=Thursday), .getDate(),  .getMonth(), .getFullYear(), .getTime()",
    ".setDate(7), .setMonth(10), .setFullYear(2018);",
    "const pattern = /[a-zA-Z]+ing$/; to initialize a regex, or const pattern = new RegExp('[a-zA-Z]+ing');",
    "pattern.test('str') for bool, pattern.exec('str') for value",
    "All uppercase = /[A-Z]/, Numbers = /[0-9]/, ",
    "/[^A-Z]/ ^ is a negater",
    "/java/i for ignore case, /g for all matches / m for muliline",
    `. matches any character, except line breaks
    \w matches any word character, and is equivalent to [A-Za-z0-9_]
    \W matches any non-word character, and is equivalent to [\^A-Za-z0-9_]
    \d matches any digit character, and is equivalent to [0-9]
    \D matches any non-digit character, and is equivalent to [^0-9]
    \s matches any whitespace character, and is equivalent to [ \t\r\n\f]
    \S matches any non-whitespace character, and is equivalent to [^ \t\r\n\f]`,
    `? makes the preceding token in the regular expression optional
    * matches one or more occurrences of the preceding token
    + matches one or more occurrences of the preceding token
    {n} matches n occurrences of the preceding token
    {n,} matches at least n occurrences of the pattern
    {,m} matches at most m occurrences of the preceding token
    {n,m} matches at least n and at most m occurrences of the preceding token
    ^ marks the position immediately before the first character in the string
    $ marks the position immediately after the last character in the string`,
    "const pdf = /.*\.pdf$/; to find matches of .pdf at the end of string",
    ".split(/\s+/) on every whitespace",
    ".replace(/[aeiou]/ig,'*') replaces all vowels with a *",
    `.replace(/<a href='(.*?)'.*?>(.*?)<\/a>/g, "[$2]($1)"); Replaces any a tag with markdown`,
    " ",
    "The Document Object Model (DOM)",
    `Document.body returns the body element of a web page.
    Document.images returns a node list of all the images in the document.
    Document.links returns a node list of all the <a> elements and <area>
    elements that have an href attribute.
    Document.anchors returns a node list of all the <a> elements that have a name
    attribute.
    Document.forms returns a node list of all the forms in the document. This will
    be used when we cover forms in Chapter 8.`,
    ".getElementById('title')",
    ".getElementsByTagName('li')",
    ".getElementsByClassName('hero')",
    ".querySelector('#bats')",
    ".querySelector('li:last-child')",
    `const ul = document.querySelector('ul#roster'); Then use const batman = ul.querySelector('li#bats')`,
    ".firstChild, .lastChild",
    ".setAttribute('class', 'villain'); to change class or wonderWoman.className = 'hero' or .classList.add('warrior')",
    ".createElement('li')",
    ".createTextNode('Flash')",
    ".appendChild(flashText) better use flash.textContent = 'Flash';",
    ".removeChild(aquaman);",
    ".replaceChild(newText,oldText);",
    ".innerHTML",
    `To update css .style.border = "red 2px solid";`,
    "superman.style.backgroundColor = 'blue';",
    "superman.style.display = 'none'; to hide an element",
    
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

let newBreak = document.createElement("br")
notes.appendChild(newBreak)

let hero = document.createElement("a")
hero.textContent = "Heros Practice"
hero.setAttribute('href', "heroes.html");
notes.appendChild(hero)
