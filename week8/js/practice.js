var canvas = document.getElementById("myCanvas");     
var context = canvas.getContext("2d");
context.strokeStyle = "red";
context.fillStyle = "blue";
context.fillRect(10, 10, 100, 100);   
context.strokeRect(10, 10, 100, 100);

function drawPattern() {
    var canvas = document.getElementById("demo2");
    var context = canvas.getContext("2d");
    context.strokeStyle = "red";

    var img = new Image();
    img.src = "images/000067.png";
    img.onload = function() {
    var pattern = context.createPattern(img, "repeat"); 
    context.fillStyle = pattern;                        
    context.fillRect(10, 10, 100, 100);                  
    context.strokeRect(10, 10, 100, 100);             
    };
}
drawPattern()

function drawGradient() {
    var canvas = document.getElementById("demo3");
    var context = canvas.getContext("2d");
    context.strokeStyle = "red";
    var gradient = context.createLinearGradient(0, 0, 0, 200);
    gradient.addColorStop(0, "blue"); 
    gradient.addColorStop(1, "white"); 
    context.fillStyle = gradient; 
    context.fillRect(10, 10, 100, 100); 
    context.strokeRect(10, 10, 100, 100); 
}
drawGradient()

function drawCircle(canvas) {
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    context.beginPath();
    context.arc(50, 50, 30, 0, Math.PI*2, true);
}

function drawCircle2(canvas) {
    var context = canvas.getContext("2d");
    context.beginPath();
    context.arc(50, 50, 30, 0, Math.PI*2, true);
    context.closePath();
    context.strokeStyle = "red";
    context.fillStyle = "blue";
    context.lineWidth = 3; 
}

function saveDrawing() {
    var canvas5 = document.getElementById("demo5");
    window.open(canvas5.toDataURL("image/png"));
}

var button = document.getElementById("saveButton");
button.addEventListener("click", saveDrawing, false);

function manipulateImage() {
    var canvas = document.getElementById("demo7");
    var context = canvas.getContext("2d");
    var image = document.getElementById("secondImage");
    context.drawImage(image, 60, 60);

    var imageData = context.getImageData(0, 0, 200, 200);
    
    for (var i = 0; i < imageData.data.length; i += 4) {
    var red = imageData.data[i];
    var green = imageData.data[i + 1];
    var blue = imageData.data[i + 2];
        
    var grayscale = red * 0.3 + green * 0.59 + blue * 0.11;
        
    imageData.data[i] = grayscale;
    imageData.data[i + 1] = grayscale;
    imageData.data[i + 2] = grayscale;
    } 
    context.putImageData(imageData, 0, 0);
}

function makeVideoOldTimey() {
    var video = document.getElementById("video");
    var canvas = document.getElementById("canvasOverlay");
    var context = canvas.getContext("2d");

    video.addEventListener("play", function() { 
    draw(video,context,canvas);               
    }, false);  

}

function addEvent(event, elem, fxn) {
    if (elem.addEventListener) {
       elem.addEventListener(event, fxn, false);
    } else if (elem.attachEvent) {
       elem.attachEvent('on' + event, fxn);
    } else {
       elem['on' + event] = fxn;
    }
 }	
 
 function determineLocation() {
     if (navigator.onLine) {
       if (Modernizr.geolocation) {
         navigator.geolocation.getCurrentPosition(displayOnMap);
   
         var container = Raphael(document.getElementById("spinner"), 125, 125);
         var spinner = container.image("images/spinnerBW.svg", 0, 0, 125, 125);
         var attrsToAnimate = { transform: "r720" }; 
             spinner.animate(attrsToAnimate, 60000);        
       }
       else {
         // geolocation is not supported in this browser
         // we can use the geo-location-javascript polyfill
         // https://code.google.com/p/geo-location-javascript/
       }
     } 
     else {	
       alert("You must be online to use this feature.");
     }
 }
 
 function displayOnMap(position) {
     document.getElementById("spinner").style.display = "none";
     var latitude = position.coords.latitude;
     var longitude = position.coords.longitude;
     
     // Let's use Google Maps to display the location 
     var myOptions = {
         zoom: 14,
         mapTypeId: google.maps.MapTypeId.ROADMAP
     };
     
     var map = new google.maps.Map(document.getElementById("geoForm"), myOptions);
     
     var initialLocation = new google.maps.LatLng(latitude, longitude);
     
     var marker = new google.maps.Marker({
         position: initialLocation,
         map: map,
         title: "Hello World!"
     });
     
     map.setCenter(initialLocation);   
 }
 
 var geobutton = document.getElementById('geobutton');
 addEvent('click', geobutton, determineLocation);

 function addEvent(event, elem, fxn) {
    if (elem.addEventListener) {
       elem.addEventListener(event, fxn, false);
    } else if (elem.attachEvent) {
       elem.attachEvent('on' + event, fxn);
    } else {
       elem['on' + event] = fxn;
    }
 }
 
 // bind the dragstart event on the mice  
 var mice = document.querySelectorAll('#mouseContainer img');
 var mouse = null;
 for (var i=0; i < mice.length; i++) {
   mouse = mice[i];
   mouse.addEventListener('dragstart', function (event) {
     event.dataTransfer.setData('text/plain', this.id); 
   });
 }
 
 // bind the dragover event on the cat
 var cat = document.getElementById('cat');
 addEvent('dragover', cat, function(event) {
   event.preventDefault();
 });
 
 // bind the drop event on the cat
 addEvent('drop', cat, function(event) {
   var mouseHash = {
      mouse1: 'NOMNOMNOM',
      mouse2: 'Mreow',
      mouse3: 'Purrrrrr...'
    };
 
     var ch = document.getElementById('catHeading');
 
     // change text of the header based on which mouse was dropped
   var mouseID = event.dataTransfer.getData('text/plain');
     ch.innerHTML = mouseHash[mouseID];	
     
     // get the img element for the mouse, and then remove it
     var mousey = document.getElementById(mouseID);
   mousey.parentNode.removeChild(mousey);
     
     event.preventDefault();  
 });
