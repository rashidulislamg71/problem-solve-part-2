// Task -1:
// Find the lowest number in the array below.

const heights = [17, 190, 120, 165, 1];

function lowestNumber(numbers) {
  let lowestNum = numbers[0];
  for (let num of numbers) {
    if (lowestNum > num) {
      lowestNum = num;
    }
  }
  return lowestNum;
}

const result = lowestNumber(heights);
console.log(result);

// Task -2:
// Find the friend with the smallest name.

const heights2 = ["rahim", "robin", "rafi", "ron", "rashed"];

function findSmallestWord(wordsList) {
  let smallestWord = wordsList[0];
  for (let word of wordsList) {
    if (smallestWord.length > word.length) {
      smallestWord = word;
    }
  }
  return smallestWord;
}

const finedSmallestWord = findSmallestWord(heights2);
console.log(finedSmallestWord);

// Task-3:
// Your task is to calculate the total budget required to buy electronics:

//     laptop = 35000 tk
//     tablet = 15000 tk
//     mobile = 20000 tk
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.

const laptop = 35000;
const tablet = 15000;
const mobile = 20000;

function calculateElectronicsBudget(laptop = 0, tablet = 0, mobile = 0) {
  if (
    typeof laptop === "number" &&
    typeof tablet === "number" &&
    typeof mobile === "number"
  ) {
    return laptop + tablet + mobile;
  } else {
    return "Please enter valid numbers";
  }
}
const totalBudget = calculateElectronicsBudget(laptop, tablet, mobile);
console.log(totalBudget);

// Task-4:
// You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.

const phones = [
  { model: "PhoneA", brand: "Iphone", price: 95000 },
  { model: "PhoneB", brand: "Samsung", price: 40000 },
  { model: "PhoneC", brand: "Oppo", price: 26000 },
  { model: "PhoneD", brand: "Nokia", price: 35000 },
  { model: "PhoneE", brand: "Iphone", price: 105000 },
  { model: "PhoneF", brand: "HTC", price: 48000 },
];

function findAveragePhonePrice(phones) {
  let totalPhonePrice = 0;
  for (let phoneInfo of phones) {
    totalPhonePrice += phoneInfo.price;
  }
  return totalPhonePrice;
}
const averageOfPhones = findAveragePhonePrice(phones);
console.log(averageOfPhones);

// Task -5: (Hard)
// For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.

const employees = [
  { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
  { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
  { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
  { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

// way - 1
function calculateMonthlySalary() {
  let totalStartingSalary = 0;
  let totalIncrementSalary = 0;

  for (let employee of employees) {
    totalStartingSalary += employee.starting;
    const incrementBasedOnExperience = employee.experience * employee.increment;
    totalIncrementSalary += incrementBasedOnExperience;
  }
  const totalMonthlySalary = totalStartingSalary + totalIncrementSalary;
  return totalMonthlySalary;
}
const totalSalary = calculateMonthlySalary(employees);
console.log(totalSalary);

// way-2
function calculateMonthlySalary(employees) {
  return employees.reduce((total, emp) => {
    return total + emp.starting + emp.experience * emp.increment;
  }, 0);
}
console.log(calculateMonthlySalary(employees));
