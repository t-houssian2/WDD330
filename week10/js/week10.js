var notes = document.getElementById("notes");

let overview = document.createElement("p");
overview.textContent = `
    Again this week I really enjoyed the team activity! 
`;
notes.appendChild(overview)

let points = document.createElement("ul");

noteList = [
    `The fetch specification differs from jQuery.ajax()
    - The Promise returned from fetch() won’t reject on HTTP error status,
    - fetch() won’t send cross-origin cookies unless you set the credentials`,
    `Fetch can be used to post json and files even multiple files`,
    `Instead of passing a path to the resource you want to request into 
    the fetch() call, you can create a request object using the Request() constructor`,
    `const myHeaders = new Headers();

    const myRequest = new Request('flowers.jpg', {
      method: 'GET',
      headers: myHeaders,
      mode: 'cors',
      cache: 'default',
    });
    
    fetch(myRequest)
      .then(response => response.blob())
      .then(myBlob => {
        myImage.src = URL.createObjectURL(myBlob);
      });`,
    `You can even pass an existing reuest into fetch and request has the
    same params using the request constuctor or not`,
    `A good use case for headers is checking whether the content type is correct 
    before you process it further. For example:
    Like so:
    fetch(myRequest)
  .then(response => {
     const contentType = response.headers.get('content-type');
     if (!contentType || !contentType.includes('application/json')) {
       throw new TypeError("Oops, we haven't got JSON!");
     }
     return response.json();
  })
  .then(data => {
      /* process your data further */
  })
  .catch(error => console.error(error));`,
    `Use client side validation to protect the data comming thorugh`,
    `required, max, min, step, pattern`,
    `input:invalid for css invalid changes`,
    

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