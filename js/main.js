var x = document.getElementById("contents");

const links = [
    {
      label: "Week1 notes",
      url: "week1/index.html"
    },
    {
      label: "Week2 notes",
      url: "week2/index.html"
    }
  ]

links.forEach(function(link){
    let newLI = document.createElement("li");
    let a = document.createElement("a");
    a.setAttribute('href', link.url);
    a.textContent = link.label;
    newLI.appendChild(a);
    x.appendChild(newLI);
});