// Your code here
class Dog {
	constructor(name){
		this.name = name;
	}

	static makeJet(){
		return new Dog('Jet');
	}

	changeName(newName){
		this.name = newName;
		return this.name;
	}

	speak(word){
		return `${this.name} says ${word}`;
	}
}

//Test
// let dog1 = Dog.makeJet();

// console.log(dog1.name);
// console.log(dog1.speak("hello"));
// console.log(dog1.changeName("Freyja"));
// console.log(dog1.name);
// console.log(dog1.speak("hello"));

// let dog2 = Dog.makeJet();
// console.log(dog2.name);


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = Dog;
} catch {
	module.exports = null;
}
