let newRequest = new XMLHttpRequest();
let display = document.getElementById('xml-display')

$(() => {
  let btn1 = $("#xml-btn1"),
  // display = $('#xml-display');

  counter = 1;

  btn1.on('click', () => {
    newRequest.open('GET', `https://learnwebcode.github.io/json-example/animals-${counter}.json`)

    newRequest.onload = () => {
      let parsedAnimals = JSON.parse(newRequest.responseText);
      let animalContainer = '';

      for(let i = 0; i < parsedAnimals.length; i++){
        animalContainer += [
          `<div id="animal-container"><p class="anim"><span>Animal Name:</span>${parsedAnimals[i].name}</p>
          <p class="anim"><span>Animal Species: </span>${parsedAnimals[i].species}</p></div>`
        ]
      } //End of for loop

      display.insertAdjacentHTML('beforeend', animalContainer)

    } //End of onload
    counter++

    if(counter > 3){
      counter = 1;
    }
    newRequest.send()

  }) //End of btn1 click event





})//End of jQuery
