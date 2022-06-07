// 2 MASALANING 5 ta metodi  Javobi
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



// 1 MASALA   Javobi
       // 1chi yechilish usuli
// const name = prompt("Isminggizni kiriting");
// const numberOne = Number(prompt("Dastlabki qiymatni kiriting"));
// const numberTwo = Number(prompt("Keyingi qiymatni kiriting"));

// console.log(numberOne + numberTwo);

      // 2chi yechilish usuli
//  const calcMoneys = function(money) {
//      return 0 + money
//  }

//  const moneyss = prompt(calcMoneys)
//  const calcResult = function(qiymatlar) {
//      let thing = []

//      for(let qiymat of qiymatlar) {
//         thing.push(calAge(qiymat))
//      }

//      return thing;
//  }
//  console.log(calcResult(moneyss));


// 3 MASALA  Javobi
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
    console.log(sum);

}

console.log(sumSalaries(salaries))




// 4 MASALA   Javobi
const numbers = [1, 2, 3, 4, 5, 6]

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







