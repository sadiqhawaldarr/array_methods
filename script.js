//unshift

let myself = ["sadiq", "24", "adress", 7892652144, true];
myself.unshift("nop ");
console.log(myself)


//push
let cars = ["BMW","swift","mustang","audi"];
cars.push("Bagani");
console.log(cars)


//shift
let fruits = ["apple", "mango", "bannnana","watermilon"];
fruits.shift();
console.log(fruits)


//pop
let univers = ["earth","sun","moon","jupiter"];
univers.pop();
console.log(univers)


//length

let mobile = ["samsung", "iphone", "poco"];
console.log(mobile);
console.log("The leangth of the array is " + mobile.length)

//Delete

let bike = ["ktm", "shine", "honda", "bullet"];
delete bike[0];
bike.pop();
console.log(bike)
console.log(bike.length)



// object

const details =[{
    myname:"sadiq",
    age : "25",
    no : 78924728,
    Place: "pune",
    intest : ["painting","drawing","skeaching"]
}
,
{
    myname:"sparsh",
    age : "23",
    no : 7897658728,
    Place: "banglore",
    intest : ["riding","sleeping","gym"]
}];

details.forEach((person) => {
    console.log(person.myname);
  });

  alert(details.age)