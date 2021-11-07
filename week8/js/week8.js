var notes = document.getElementById("notes");

let overview = document.createElement("p");
overview.textContent = `
    This week I really enjoyed the team activity using the starwars api! 
    I loved learning more about CSS Transforms and Transitions too since
    I am very interested in designing the visual aspects of pages. I followed along
    in the practices pretty good and you will see in the link below the
    practices I did. Great week overall!
`;
notes.appendChild(overview)

let points = document.createElement("ul");

noteList = [
    `Transforms require vendor prefixing for IE9, Android up to 4.4.3, iOS8,
    and Blackberry 10. To make the aforementioned code work in IE9 and older
    mobile WebKit browsers, you would include the following:

    -webkit-transform: translate(45px,-45px); /* iOS8, Android 
    ↵4.4.3, BB10 */
    -ms-transform: translate(45px,-45px); /* IE9 only */
    transform: translate(45px,-45px);`,
    `translateX or translateY to just do one ort the other.`,
    `tag:psuedoclass#id to add a stlye on a tag psuedo class for an id`,
    `transform: scale(1.5, 0.25);
    To tranform the size based on factors but you can also use pixels`,
    `rotate(10deg) for rotation`,
    `skew(x,y) for tilting the image or text`,
    `skewX() and skewY()`,
    `transform-origin: 0 0;`,
    `transition-property, transition-duration, transition-timing-function, and transition-delay`,
    `transition-property: transform, color;`,
    `transition-duration: 0.2s;`,
    `transition-timing-function: ease-out;`,
    `ease, linear, ease-in, ease-out, or ease-in-out`,
    `transition-delay: 50ms;`,
    `a negative time delay that’s less than the duration of the entire transition will cause
     it to start immediately, but it will start partway through the animation.`,
    `transition-property: transform, color; 
    transition-duration: 0.2s, 0.1s;  
    transition-timing-function: ease-out, linear;
    transition-delay: 50ms;
    Turns too
    transition: transform 0.2s ease-out 50ms, color 0.1s linear 50ms;`,
    `animation-duration: 300ms;`,
    `With HTML5’s Canvas API, we can draw anything`,
    `By combining WebGL with HTML5 Canvas, you can draw in three dimensions. `,
    `Draw Video and Pictures to`,
    `SVG can work like canvas`,
    `Drag and Drop API but use DOM Touch for iphone`,
    `dragstart and dragover`,
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