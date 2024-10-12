
function carDescription(){
    console.log("")
    console.log("Сar 1");
    console.log("Brand:", car[0][0]);
    console.log("Model:", car[0][1]);
    console.log("Age:", car[0][2]);
}

function carDescription1(){
    console.log("")
    console.log("Сar 2");
    console.log("Brand:", car[1][0]);
    console.log("Model:", car[1][1]);
    console.log("Age:", car[1][2]);
}

function carDescription2(){
    console.log("")
    console.log("Сar 3");
    console.log("Brand:", car[2][0]);
    console.log("Model:", car[2][1]);
    console.log("Age:", car[2][2]);
}

const  car = [
	["bmw", "320i", 2020],
	["audi", "a6", 2022],
	["bmw", "320d", 2021]
]

carDescription()
carDescription1()
carDescription2()

let sum1 = (a, b) => {
    let result = a + b;
    return result; 
  };

  let sum2 = (a, b) => {
    let result = a - b;
    return result; 
  };

  let sum3 = (a, b) => {
    let result = a * b;
    return result; 
  };

  let sum4 = (a, b) => {
    let result = a / b;
    return result; 
  };

function sumDescription() {
    console.log("")
    console.log("Результат:")
    console.log("Subtraction:", sum1(2,3));
    console.log("Addition:", sum2(3,2));
    console.log("Multiplication:", sum3(2,3));
    console.log("Division:",sum4(15,5) );
}

sumDescription()