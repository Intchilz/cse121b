/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Louis Chilumba';

let currentYear = '2024';

var profilePicture = document.querySelector("img").src="images/picture.jpg";





/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');






/* Step 4 - Adding Content */
document.getElementById("name").innerHTML = `<strong>${fullName}</strong>`;







/* Step 5 - Array */
let favFoods = ['Chicken', ' Potato salad', ' Fried rice',' Palm Butter',' Pizza',' Grilled Chicken'];
document.getElementById("food").innerHTML += `<br>${favFoods}`;
let foodie = ' Jolof Rice';
favFoods.push(foodie);
document.getElementById("food").innerHTML += `<br>${favFoods}`;

const foods = favFoods.shift();
document.getElementById("food").innerHTML += `<br>${favFoods}`;

const removed = favFoods.pop();
document.getElementById("food").innerHTML += `<br>${favFoods}`;



