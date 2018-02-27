function Lion(name, age){
	this.name = name;
	this.age = age;
	this.type = "Lion";
	this.image = "lion.png";
}

function Tiger(name, age){
	this.name = name;
	this.age = age;
	this.type = "Tiger";
	this.image = "tiger.jpg";
}

function Cheetah(name, age){
	this.name = name;
	this.age = age;
	this.type = "Cheetah";
	this.image = "cheetah.jpg";
}


var animals = [new Lion(), new Tiger(), new Cheetah()]
var names = ["Leo", "Fiber", "Ko Ko", "Pow Lee", "Bo Bo", "Appa"]


function generateRandomIndex(maxIndex){
	return Math.floor(Math.random() * maxIndex)
}

function generateRandomName(){
	var randomIndex = generateRandomIndex(names.length)
	return names[randomIndex]
}

function generateRandomAge(){
	var randomIndex = generateRandomIndex(10)
	return randomIndex
}

function generateRandomAnimal(){
	var randomldx = generateRandomIndex(animals.length)
	var randomAnimal = animals[randomldx]
	if (randomAnimal instanceof Lion) {
		return new Lion(generateRandomName(), generateRandomAge())
	}
	else if (randomAnimal instanceof Tiger) {
		return new Tiger(generateRandomName(), generateRandomAge())
	}
	else if (randomAnimal instanceof Cheetah){
		return new Cheetah(generateRandomName(), generateRandomAge())
	}
}

$(document).ready(function() {
	  var animal = generateRandomAnimal();
	  $("#animal-info").text(animal.name + "  " + animal.age + " years old");
	  $("#animal-img").attr("src", animal.image);
	});







