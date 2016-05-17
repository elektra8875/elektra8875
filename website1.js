document.write("Your order has been submitted");

var numberOfKittens = 2;
console.log(numberOfKittens);

var numberOfPuppies = 4;
var numberOfAnimals = numberOfKittens * numberOfPuppies; /* brand new variable */
console.log(numberOfPuppies);
console.log(numberOfAnimals);

var studentName = 'Elissa'; /* can you single or double quotes */
var mySentence = 'Welcome to the Javascript class ' + studentName;
console.log(mySentence); 

var FirstName = 'cindy';
var lastname = 'lucila';
var name = 'cindy ' + lastname;
var Name = FirstName + lastname
console.log(name);
console.log(Name);

numberOfPuppies += 2;
console.log("numberOfPuppies " + numberOfPuppies);

function IbisEatDonuts() {
	console.log("Ibis enjoyed a powered vanilla creme donut. ");
	console.log("Ibis enjoyed a powered vanilla frosted with sprinkles. ");
	console.log("Ibis enjoyed a jelly donut. ");
	console.log("Ibis enjoyed a chocolate covered donut. ");
	console.log("Ibis enjoyed a french cruller. ");
}
IbisEatDonuts();
var numberOfKittens = 2;
console.log(numberOfKittens);

var numberOfPuppies = 4;
var numberOfAnimals = numberOfKittens * numberOfPuppies;
console.log(numberOfPuppies);
console.log(numberOfAnimals);
IbisEatDonuts();
IbisEatDonuts();

function printName(firstName, lastName){
	return firstName + ' ' + lastName;
}

var fullName = printName('cindy', 'lou');
alert(fullName);

/*boolean values is just true or false; 0 is always falseevery other number is true */

var temperature = 0;
if (temperature < 50) {
	console.log("put on a coat!");
}
	
var temperatures = 82;
if (temperatures < 0) {
	console.log("wear a coat");
} else if (temperatures < 30) { 
	console.log("wear a coat and a hat!");
} else if (temperatures < 50) {
	console.log('stay inside');
} else {
	console.log('wear whatever you want');
}

var isEndofClass = true;
if (isEndofClass) {
	console.log("Have a nice night!");

}

;
var grade = 9;

if (grade <= 5 && grade >1) {
	console.log("You are going to elementary school");
} else {
	console.log('sorry you didnt pass');
		
}
/* section below I will it as HW 2 */
var grade = 1;
if (grade >= 5 && grade <=7) {
	console.log('you are going to middle school');
} else {
	console.log('sorry you didnt pass');
	
}

var grade = 10;
if (grade >9 && grade < 12) {
	console.log('you are going to high school');
} else {
	console.log('sorry you didnt pass');
	
} 


for (var j = 1; j <= 12; j++){

  for (var i = 1; i <= 12 ;i++) {
    console.log(j + " x " + i + " = " + j*i)
    //9 x 1 = 9
	
  }
}

var foods = ['pizza', 'salad', 'coffee'];

for (var i = 0;  i < foods.length; i++) {
console.log(foods[i]);
}

var dessert = {
	recipetitle: 'CakeRecipe',
	numberofservings: 8,
	ingredients: ['flour', 'sugar', 'yeast'],
	
}
function describerecipe(dessert) {
	console.log('my recipe for'  +" "  + dessert.recipetitle + " " + 'is great');
}

describerecipe(dessert);
alert(dessert.recipetitle);


var recipe=
{
	Title: "lasagna",
	Servings: 4,
	Ingredients: ["Pasta", "Meat", "Tomato Sauce"],
bake: function() {
	console.log("Set your oven to 400 degrees");
	},
setTimer: function(seconds) {
		console.log("Timer set for" + seconds + "seconds"
		);
		
	}
	
}
;

recipe.bake();
recipe.setTimer(60);




