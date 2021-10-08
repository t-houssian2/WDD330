var notes = document.getElementById("notes");

let overview = document.createElement("p");
overview.textContent = `
    This week I learned a lot about OOP programming. I am still struggling to wrap my
    head around it all but think I got it a bit. I feel like I need to spend more time coding
    it out and then I will get it, while this week I spent a lot of time reading and rereading.
`;
notes.appendChild(overview)

let points = document.createElement("ul");

noteList = [
    `document.formsthat returns an HTML collection of all the forms
     in the document in the order they appear in the markup similar to a list`,
    `document.forms.name; to get the form element by name`,
    `heform.reset()method will reset all the form controls back
     to their initial values specified in the HTML, possibly to reset a
     form if information was not correct`,
    `placeholder='Search Here' gives a deafult value`,
    `Theautofocusattribute give focus to this element when a page loads.`,
    `type=, can be used for the various types of fields like checkbox, password, radio,
    hidden, file, number, tel, color`,
    `<select name='city' id='city'>
    <option value='' selected>Choose a City</option> for a drop down`,
    `textarea for larger areas of text`,
    `required and disabled are keywords`,
    `Forms havefocus,blur, andchangeevents that fire as a user interacts with the form.`,
    '',
    `Example contructor function:
     const Dice = function(sides=6){
        this.sides = sides;
        this.roll = function() {
            return Math.floor(this.sides * Math.random() + 1)
        }
    }
    
    notice the this keyword and function keyword.
    `,
    `In ES6 this is the new way:
    class Dice {
        constructor(sides=6) {
            this.sides = sides;
        }
    
        roll() {
            return Math.floor(this.sides * Math.random() + 1)
        }
    }`,
    `Static methods are not available to instances of the class.`,
    `The prototype can be used to add any new properties and methods after the class has been declared.`,
    `By default, an object’s methods are public in JavaScript.`,
    `A class can inherit from another class using theextendskeyword in a class declaration.`,
    `class NinjaTurtle extends Turtle`,
    `Example of the toString method:
    class Turtle {
        // other turtle methods here
    
        toString() {
            return \`A turtle called ${this.name}\`;
        }
    }`,
    `trim() removes whitespace`,
    `heget()andset()methods can be used to control how a property is set using assignment and the value that is returned when a property is queried.`,
    `methods can be chained together to form a sequence of method calls that are called one after the other.`,
    `A module is a self-contained piece of code that provides functions and methods that can then be used in other files and by other modules. `,
    "Reusablility is key!",
    "Use export and import",
]

noteList.forEach(function(note){
    let newLI = document.createElement("li")
    newLI.textContent = note
    points.appendChild(newLI)
});

notes.appendChild(points)
