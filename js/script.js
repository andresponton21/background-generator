// This function returns a random Number between 0 (inclusive) and the argument passed to the function, minus 1
// If no argument is passed, 256 is set, ie, returns a number between and including 0 to 255
// 		For example: 
//    getRandomColorChannel(5) will return either 0, 1, 2, 3, 4
const getRandomColorChannel = function(options=256) {
  return Math.floor( Math.random() * options )
}

// Here's a test number, check the console to see the result
//console.log( getRandomColorChannel() )



// COMPLETE THE FOLLOWING STEPS

// 1) Write an rgb-color string using `getRandomColorChannel()` that can be set as the value for `background-color` in CSS
const setnNewColour = () => {
  const red = getRandomColorChannel()
  const green = getRandomColorChannel()
  const blue = getRandomColorChannel()
  
  console.log(red, green, blue)
  
  // 2) Update user interface (the `document`), setting the new colour string to the body's background-color property
  const newColor = document.querySelector('.layout')

  
  // 3) Use the three individual RGB numbers to update the HTML element "rgb(###, ####, ###)" (replacing ###s with the values)
  const printColor = newColor.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`

  document.querySelector('.colorL').textContent = `this is the color in rgb ${printColor}`


}

  
  document.querySelector(".btn").addEventListener(`click`, setnNewColour) 

  
  


// 4) Wrap the entire procedure in a function named `setNewColour()`, call it multiple times from the `console` to test
