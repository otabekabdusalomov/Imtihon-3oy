// 2 MASALANING 5 ta metodi
// 1) metod
const dataType = ["Jazz", "Blues"];              //qiymatlari bo'lgan array
// console.log(dataType);

// 2) metod
const dataType1 = ["Jazz", "Blues"];             //oxiriga qo'shish
dataType1.push("Rock-n-roll")
// console.log(dataType1);

// 3) metod
const dataType2 = ["Jazz", "Blues"];             // qiymatlarni almashtirish
dataType2[1] = "Classic"
// console.log(dataType2);

// 4) metod
const dataType3 = ["Jazz", "Blues"];             // birinchi qiymatini olib tashlash
dataType3.shift()
// console.log(dataType3);

// 5) metod
const dataType4 = ["Jazz", "Blues"];             //qiymatlarni boshidan qo'shish
dataType4.unshift("Jazz");
dataType4.unshift("Blues");
// console.log(dataType4);



// 1 MASALA
// 1chi yechilish usuli
// const name = prompt("Isminggizni kiriting");
// const numberOne = Number(prompt("Dastlabki qiymatni kiriting"));
// const numberTwo = Number(prompt("Keyingi qiymatni kiriting"));

// console.log(numberOne + numberTwo);

// 2chi yechilish usuli
//  const calcMoneys = function(money) {
//      return 1 + money
//  }

//  const moneyss = prompt[12, 20, 30, 40]
//  const calcResult = function(qiymatlar) {
//      let thing = []

//      for(let qiymat of qiymatlar) {
//         thing.push(calAge(qiymat))
//      }

//      return thing;
//  }
//  console.log(calcResult(moneyss));

// const calcAge = function(birthYear) {
//     return 2022 - birtYear
// }

// const years = [20, 12, 25]
// const birthYear = function(yillar) {
//     arguments.push(calcAge(yil))
// }

// return ages
const number1 = Number(prompt("Raqamni kiriting?"));
 const number2 = Number(prompt("Raqamni kiriting?"));
 const number3 = Number(prompt("Raqamni kiriting?"));
 const number4 = Number(prompt("Raqamni kiriting?"));

 const totalNumber = [number1,number2,number3,number4];
 console.log([totalNumber]);
 function sumInput(){
     return [number1+number2+number3+number4]
 }
//  console.log([`Umumiy sonlar yig'indisi:${sumInput()} ga teng`])



// 3 MASALA
let salaries = {
    "Akmal": 1200,
    "Salim": 5200,
    "Karima": 1800
}

function sumSalaries(key) {
    let sum
    // var list = []
    for(var[key , value] of Object.entries(key)){
        console.log(value)
        sum =+value
        
    }
    
}
// console.log(sumSalaries(salaries))




// 4 MASALA
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const positiveNumbers = []
const negativeNumbers = []

for(let number of numbers) {
    if(number % 2 === 0  ) {
        positiveNumbers.push(number)
    } else {
        negativeNumbers.push(number)
    }
}
// console.log(positiveNumbers);
// console.log(negativeNumbers);






