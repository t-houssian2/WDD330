function getStarWarsPlanets(progress, url = 'https://swapi.dev/api/planets', planets = []) {
  return new Promise((resolve, reject) => fetch(url)
    .then(response => {
        if (response.status !== 200)  {
          throw `${response.status}: ${response.statusText}`;
        }
        response.json().then(data => { 
          planets = planets.concat(data.results);

          if(data.next) {
            progress && progress(planets);
            getStarWarsPlanets(progress, data.next, planets).then(resolve).catch(reject)
          } else {
            resolve(planets);
          }
        }).catch(reject);
    }).catch(reject));
}

function progressCallback(planets) {
  console.log(`${planets.length} loaded`);
}

getStarWarsPlanets(progressCallback)
  .then(planets => {
    planetsName = planets.map(p => p.name)
    div = document.getElementById("planets")
      ul = document.createElement('ul')
      for (let [index, p] of planetsName.entries()) {
        li = document.createElement('li')
        li.textContent = p
        li.setAttribute('id', p)
        li.addEventListener("click", function() {
            item = document.getElementById(p)
            if (item.childNodes.length == 1){
                info = document.createElement('ul')
                for (var key in planets[index]) {
                    next = document.createElement('li')
                    next.textContent = `${key}: ${planets[index][key]}`
                    info.appendChild(next)
                }
                item.appendChild(info)
            }
            else {
                temp = item.id
                while (item.hasChildNodes()) {
                    item.removeChild(item.lastChild);
                }
                item.textContent = temp
            }
         })
        ul.appendChild(li)
      }
      div.appendChild(ul)
  })
  .catch(console.error);

  function getStarWarsPeople(progress, url = 'https://swapi.dev/api/people', people = []) {
    return new Promise((resolve, reject) => fetch(url)
      .then(response => {
          if (response.status !== 200)  {
            throw `${response.status}: ${response.statusText}`;
          }
          response.json().then(data => { 
            people = people.concat(data.results);
  
            if(data.next) {
              progress && progress(people);
              getStarWarsPeople(progress, data.next, people).then(resolve).catch(reject)
            } else {
              resolve(people);
            }
          }).catch(reject);
      }).catch(reject));
  }
  
  function progressCallback(people) {
    console.log(`${people.length} loaded`);
  }
  
  getStarWarsPeople(progressCallback)
    .then(people => {
        peopleName = people.map(p => p.name)
        div = document.getElementById("people")
          ul = document.createElement('ul')
          for (let [index, p] of peopleName.entries()) {
            li = document.createElement('li')
            li.textContent = p
            li.setAttribute('id', p)
            li.addEventListener("click", function() {
                item = document.getElementById(p)
                if (item.childNodes.length == 1){
                    info = document.createElement('ul')
                    for (var key in people[index]) {
                        next = document.createElement('li')
                        next.textContent = `${key}: ${people[index][key]}`
                        info.appendChild(next)
                    }
                    item.appendChild(info)
                }
                else {
                    temp = item.id
                    while (item.hasChildNodes()) {
                        item.removeChild(item.lastChild);
                    }
                    item.textContent = temp
                }
             })
            ul.appendChild(li)
          }
          div.appendChild(ul)
    })
    .catch(console.error);