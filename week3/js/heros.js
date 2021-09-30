const body = document.body;

console.log(body.nodeName)

const flash = document.createElement('li');
flash.textContent = 'Flash';
body.appendChild(flash);