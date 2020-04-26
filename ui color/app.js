function random_color(items) {

	return items[Math.floor(Math.random() * items.length)];

}

var h1 = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var h2 = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var h3 = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var h4 = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var h5 = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var h6 = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


var color1 = '#' + random_color(h1) + random_color(h2) + random_color(h3) + random_color(h4) + random_color(h5) + random_color(h6);

var color2 = '#' + random_color(h1) + random_color(h2) + random_color(h3) + random_color(h4) + random_color(h5) + random_color(h6);

var gradient = 'background-image: linear-gradient(to right, ' + color1 + ' , ' + color2 + ')';

var element = document.getElementById("color");
element.style = gradient;

console.log(color1);
console.log(color2);