let newRequest = new XMLHttpRequest();

$(() => {
  let btn1 = $("#xml-btn1"),
  display = $('#xml-display');

  btn1.on('click', () => {
    newRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json')

    newRequest.onload = () => {
      let parsedAnimals = JSON.parse(newRequest.responseText)
      for(let i = 0; i < parsedAnimals.length; i++){
          display.html(() => {
            return(
              [
                `<p><span>Animal Name: </span>${parsedAnimals[i].name}</p>`
            ]
            )

          })
      }
    } //End of onload

    newRequest.send()

  }) //End of btn1 click event





})//End of jQuery
