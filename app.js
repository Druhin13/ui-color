function random_color(items) {

	return items[Math.floor(Math.random() * items.length)];

}

var h1 = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


var color = random_color(h1) + 'b';
console.log(color);