let playerNums = +prompt("Enter The Num of players: ");
let map = "*".repeat(300);
let turn = 0;

// let theCar = {
//     Name: "",
//     position : 0,
//     order:0,
//     getName(){
//         this.Name = prompt("Enter The Cars name: ");
//     },

//     generatePosition(){
//         this.position = this.position + Math.floor(Math.random() * Math.floor(10)); 
//     }
// }
function car(name , position){
    this.name = name;
    this.position = position;
    this.order = 0;
}
let cars = [];
for(let index=0 ; index < playerNums ; index++){
    tempCar = new car(prompt("Enter The car Name: "),0);
    cars.push(tempCar);
}
// console.log(cars);