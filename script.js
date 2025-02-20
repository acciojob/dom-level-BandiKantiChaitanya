let level = document.getElementById('level');
let parentElement = level.parentNode;
let children = Array.from(parentElement.children); // Convert HTMLCollection to an array
let index = children.indexOf(level); // Get the index of the level element
alert(`The level of the element is: ${index} `);
