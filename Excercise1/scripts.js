//Excercise 1:
const textRed = document.createElement("p");
textRed.textContent="Hey I’m red!";
textRed.setAttribute("style", "color: red;" );

const blueText = document.createElement("h3");
blueText.textContent="I’m a blue h3!";
blueText.setAttribute("style", "color:blue;");

const divContainer = document.createElement("div");
//Name the div:
divContainer.className = 'div-container';
divContainer.setAttribute("style","border: 5px solid black; background: pink;");

const headerElement = document.createElement("h1");
headerElement.textContent="I'm in a div";
headerElement.setAttribute("style", "color: grey");

const paraElement = document.createElement("p");
paraElement.textContent="ME TOO!";
paraElement.setAttribute("style", "color: white;");

//Appening to Body:
document.body.appendChild(blueText);
document.body.appendChild(textRed);
/* 
Explanation:
Nest the elements INSIDE the div
Finally, append the parent div to the actual webpage (e.g., body)
*/
divContainer.appendChild(headerElement);
divContainer.appendChild(paraElement);
document.body.appendChild(divContainer);


//Excercise 1 END!