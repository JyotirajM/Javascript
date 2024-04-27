const name="Hitesh"
const repoCount=50

// console.log(name + repoCount + "value")(Outdated)


console.log(`hello my name is ${name} and my repo Count is ${repoCount}`);

const Gamename = new String("Hitesh mahanta")

console.log(Gamename[0]);
console.log(Gamename.__proto__);

console.log(Gamename.length);
console.log(Gamename.toUpperCase());
console.log(Gamename.toLowerCase());
console.log(Gamename.indexOf("i"));
console.log(Gamename.charAt(3));

const newString = Gamename.substring(0,4);
console.log(newString);

const anotherString = Gamename.slice(-8, 4);
console.log(anotherString);

const newString1 ="    Hitesh   ";
console.log(newString1);
console.log(newString1.trim());

const url = "https://hitesh.com//hitesh%20mahanta";
console.log(url.replace("%20","-"));

console.log(url.includes("hitesh"));

console.log(Gamename.split(" "));
