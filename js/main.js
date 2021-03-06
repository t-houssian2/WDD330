var x = document.getElementById("contents");

const links = [
    {
      label: "Week1 notes",
      url: "week1/index.html"
    },
    {
      label: "Week2 notes",
      url: "week2/index.html"
    },
    {
      label: "Week3 notes",
      url: "week3/index.html"
    },
    {
      label: "Week4 notes",
      url: "week4/index.html"
    },
    {
      label: "Week5 notes",
      url: "week5/index.html"
    },
    {
      label: "Teams",
      url: "team/week4/week4.html"
    },
    {
      label: "To Do App",
      url: "todoApp/todo.html"
    },
    {
      label: "Week7 notes",
      url: "week7/index.html"
    },
    {
      label: "Star Wars!",
      url: "team/week8/week8.html"
    },
    {
      label: "Week8 notes",
      url: "week8/index.html"
    },
    {
      label: "JS Drums",
      url: "team/week9/index-START.html"
    },
    {
      label: "Week9 notes",
      url: "week9/index.html"
    },
    {
      label: "Week10 notes",
      url: "week10/index.html"
    },
    {
      label: "Religion And Sports",
      url: "https://religion-sports.github.io/religionandsports/index.html"
    },
  ]

links.forEach(function(link){
    let newLI = document.createElement("li");
    let a = document.createElement("a");
    a.setAttribute('href', link.url);
    a.textContent = link.label;
    newLI.appendChild(a);
    x.appendChild(newLI);
});