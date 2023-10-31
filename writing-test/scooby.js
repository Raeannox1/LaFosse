const Shabby = {
  characterName: "Shaggy",
  age: 30,
  gender: "Male",
  occupation: "Ghost hunter",
  friends: function () {
    console.log("I am best friends with Scooby Doo");
  },
};

const ScoobyDoo = {
  characterName: "ScoobyDoo",
  age: 5,
  gender: "Male",
  occupation: "Ghost hunter",
  friends: function () {
    console.log("I am best friends with", Shabby.characterName);
  },
};

const Daphne = {
  characterName: "Daphne",
  age: 25,
  gender: "Female",
  occupation: "Ghost hunter",
  friends: function () {
    console.log("I am work with", Daphne.characterName);
  },
};

const Velma = {
  characterName: "Velma",
  age: 30,
  gender: "Female",
  occupation: "Ghost hunter",
  friends: function () {
    console.log("I am best friends with", Daphne.characterName);
  },
};

const Fred = {
  characterName: "Fred",
  age: 35,
  gender: "Male",
  occupation: "Ghost hunter",
  friends: function () {
    console.log("I am work with", Shabby.characterName);
  },
};

// console.log(Shabby.characterName);
// Shabby.friends();
// console.log(ScoobyDoo.characterName);
// ScoobyDoo.friends();
// console.log(Daphne.characterName);
Daphne.friends();
// console.log(Velma.characterName);
// Velma.friends();
// console.log(Fred.characterName);
// Fred.friends();

class CrewMember {
  static abortMission() {
    console.log("mission is aborted");
  }
  constructor(characterName, occupation) {
    this.characterName = characterName;
    this.occupation = occupation;
    this.friends = function () {
      console.log(`I am ${this.characterName}`);
    };
  }
  friends() {
    console.log(`I am ${this.characterName}`);
  }
}

class Humans extends CrewMember {
  constructor(characterName, age) {
    super(characterName, age);
  }
  speak() {
    console.log("Hello! I am Human...");
  }
}

const shabby = new Humans("Shabby", 30);
const velma = new Humans("Velma", 30);
const daphne = new Humans("Daphne", 25);
const fred = new Humans("Fred", 35);


// console.log(shabby.characterName);
// console.log(velma.characterName);
// console.log(daphne.characterName);
// console.log(fred.characterName);

// shabby.speak();
// velma.speak();
// daphne.speak();
// fred.speak();

CrewMember.abortMission();
