// Exercise 1: Applying Array.prototype.map()
const nums = [13, 87, 2, 89, 12, 4, 90, 63];

const multipliedNum = nums.map((num) => {
  return num * 2;
});

console.log(multipliedNum);
console.log(nums);

// Exercise 2: Array destructuring

const pizzaToppings = ["Pineapple", "Olives", "Anchovies"];
const [firstTopping, secendTopping] = pizzaToppings;

console.log(firstTopping);
console.log(secendTopping);

// Exercise 3: Destructuring objects

const car = {
  make: "Audi",
  model: "q5",
};

const { make, model } = car;
console.log(make);
console.log(model);

// Exercise 4: Applying the spread operator on arrays

const pizzaToppings2 = ["Pineapple", "Olives", "Anchovies"];

const controversialPizzaToppings = [...pizzaToppings2];
console.log(controversialPizzaToppings);

// Exercise 5: Applying the spread operator on objects

const car2 = {
  make: "Audi",
  model: "q5",
};

const myCar = { ...car };

myCar.model = "q7";

console.log(car2);
console.log(myCar);

// Exercise 6: Dynamic keys in objects

const propertyName = "username";
const userProfile = {
  [propertyName]: "Commerce Center Mall",
};

console.log(userProfile);

// Exercise 8: Default parameters

function logCatColorSentence(noun = "cat", adjective = "white") {
  console.log(`The ${noun} is ${adjective}.`);
}
logCatColorSentence();
logCatColorSentence("dog", "black");
logCatColorSentence("dog");

// Exercise 9: Ternary operator

let pizza = "tasty";

if (pizza === "tasty") {
  console.log("yum");
} else {
  console.log("yuck");
}

let pizzaTast = pizza === "tasty" ? "yum" : "yuck";
console.log(pizzaTast);

// Exercise 10: Boolean gates
// 1. SET LANGUAGE

const localLangConfig = "fr";

let LANG = localLangConfig || "en";

console.log("Language setting:", LANG);

// 2. SET WEBSITE THEME

const userSavedTheme = null;

let USER_THEME = userSavedTheme || "ligth";

console.log("User theme setting:", USER_THEME);

// Exercise 11: Optional chaining

const adventurer = {
  name: "Alice",
};

let cat = adventurer.cat?.age;

console.log(cat);
