function collatz(n, sequence=[n]) {
    if (n === 1){
        alert(`Sequence took ${sequence.length} steps. It was ${sequence}`)
        return;
    }

    if (n%2 === 0) {
        n = n/2;
    } else { 
        n = 3*n + 1;
    }

    return collatz(n,[...sequence,n]);
}

// collatz(18);
var section = document.getElementById("section");
let form = document.createElement("form")
form.setAttribute("onsubmit", "collatz(document.getElementById('number').value)")
let input = document.createElement("input")
input.type = "number"
input.setAttribute("id", "number")
form.appendChild(input)
var x = document.createElement("input");
x.setAttribute("type", "submit");
form.appendChild(x)
section.appendChild(form)