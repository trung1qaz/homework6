let human ={
    name: "Huy",
    age:1,
    weight:0.5,
    isAlive: true,
    skin:"yellow",
    foods: ["rice","meat","vegetable"],

};
let foodsOfHuman ="";
let array = human.foods;
for (let i=0;i<array.length;i++){
    foodsOfHuman =  foodsOfHuman + array[i] +"-";
}
console.log("những món ăn của thầy Huy:", foodsOfHuman);
