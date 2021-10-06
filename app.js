
//* Bài 1*//
let Fruits = [["grapes", 15], ["apples", 20], ["oranges", 25],];
console.log("i have: ", Fruits[0][1], Fruits[0][0]);

console.log("--------------------------------------------------------------");

//* Bài 2*//
let n = Fruits.length;
for (let i = 0; i < n; i++) {
    console.log("I have: ", Fruits[i][1], Fruits[i][0]);
}

console.log("--------------------------------------------------------------");
n = Fruits.length-1
for (let i = n; i >= 0; i = i - 1) {
    console.log("I have: ", Fruits[i][1], Fruits[i][0]);
}

console.log("--------------------------------------------------------------");

for(let fruit of Fruits)
{
    console.log("I have: ", fruit[1],fruit[0]);
}

console.log("--------------------------------------------------------------");

for(let fruit in Fruits)
{
    console.log("I have: ", Fruits[fruit][1], Fruits[fruit][0],);
}

//* Bài 3*//
let myDog = {
    name: "Ngáo",
    leg: 4,
    friend: ["everything!"]
};

myDog.name = "Husky";
myDog.color = "Brown";
delete myDog.friend;
console.log("I have a dog. His name is",myDog.name,".He has",myDog.color,"fur and",myDog.leg,"legs.","His friend is",myDog.friend);
