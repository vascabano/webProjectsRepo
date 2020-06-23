// Triple Equals 
When using triple equals === in JavaScript, we are testing for
strict equality. This means both the type and the value we are comparing have
to be the same.



// Double equals
When using double equals in JavaScript we are testing for
loose equality. Double equals also performs type coercion. Type coercion means
that two values are compared only after attempting to convert them into a
common type.


//Camel Notation : oneTwoThreeFour
 - used in creating Factory Function


//Pascal Notation : OneTwoThreeFour
- used in creating Contstructor Function




// Creating an Object using Literal Notation

var sample = {
	name: 'Jollibee',
	chicken: 32,
	available:50;
	status: [spicy,regular]

    checkAvailability: function() {    
        return this.available - this.chicken;    
     } 
 };



// Creating an empty object using literal notation

var sample = {}


// Creating an Object using Constructor Notation
// The new keyword and object constructor create a black object. You can then add properties 
// and methods to the object.


var sample = new Object();

sample.name = 'Jollibee';
sample.chicken = 32;
sample.available = 50;

sample.checkAvailability = function() {
	return this.available - this.chicken;    
}






//Creating Many Objects using Constructor Notation
//Object Constructors can use a function as a template for creating objects.

function Sample(name,chicken,available) {
	this.name = name;
	this.chicken = chicken;
	this.booked = booked;

	this.checkAvailability = function() {
		return this.available - this.chicken; 
	}
}


// Creating instances of the object using the constructor function

var jollibeeSample = new Sample('Jollibee', 32, 50);
var mcdoSample = new Sample('Mcdo', 20, 30);








+= is used to add content to an existing variable



































