var notes = document.getElementById("notes");

let overview = document.createElement("p");
overview.textContent = `
    Again this week I really enjoyed the team activity! I think our team
    works great together. I got to apply some of the css things I have
    learned and use the javascript counterparts with it. I also learned a bunch
    about the window object. This seems really powerful and I have
    a whole bunch of ideas to use it. I also learned a bunch about web apis.
    I like learning about geolocation and notifications here.
`;
notes.appendChild(overview)

let points = document.createElement("ul");

noteList = [
    `The window object is global and reps the entire browser window`,
    `parseInt() and isNaN(), are actually methods of the global object`,
    `window.confirm('Do you wish to continue?');`,
    `window.prompt('Please enter your name:');`,
    `window.navigator.userAgent
    To determine the browser being used`,
    `window.location.toString();
    For the full url    `,
    `window.history.go(1); // goes forward 1 page
    window.history.go(0); // reloads the current page
    window.history.go(-1); // goes back 1 page`,
    `const popup = window.open('https://sitepoint.com','
    SitePoint','width=400,height=400,resizable=yes');`,
    `window.resizeTo(600,400);`,
    `window.screen.height
    << 1024
    
    window.screen.width
    << 1280
    Super userful!!!`,
    `window.screen.availWidth
    << 1280
    
    window.screen.availHeight
    << 995
    Might be better`,
    `document.write('Hello, world!');
    This will completely relace the document
    `,
    `document.cookie = 'city=Metropolis';`,
    `const expiryDate = new Date(); 
    const tomorrow = expiryDate.getTime() + 1000 * 60 * 60 * 24;
    expiryDate.setTime(tomorrow);`,
    `window.setTimeout( () => alert("Time's Up!"), 3000);`,
    `The data- attribute is a way of embedding data in a web page using custom attributes that are ignored by the browser. `,
    `localStorage.setItem('name', 'Walter White');`,
    `localStorage.getItem('name');`,
    `The Geolocation API is used to obtain the geographical position of the device. `,
    `navigator.geolocation.getCurrentPosition(youAreHere);`,
    `const id = navigator.geolocation.watchPosition(youAreHere);`,
    `Websockets to send data back and forth`,
    `if(window.Notification) {
        Notification.requestPermission();
    }`,
    `if(window.Notification) {
        Notification.requestPermission()
        .then((permission) => {
            if(Notification.permission === 'granted') {
            new Notification('Hello JavaScript!');
            }
        });
    }`,
    `<video src='http://movie.mp4' controls>
    Your browser does not support the video element.
    </video>`,
    `<audio src='/song.mp3' controls>
    Your browser does not support the audio element.
    </audio>`,
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