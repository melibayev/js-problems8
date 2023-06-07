// Problem 1: 
// const me = {
//     firstName: "Abdulaziz",
//     lastName: "Toshpulatov",
//     age: 23,
//     languages: ["js", "python", "c++", "nodejs"],
//     friends: ["Jamshid", "Abbos", "Jalol", "Mar'uf"],
//   };
  
//   me.toString = function () {
//     const values = Object.values(this).map((value) => {
//       if (Array.isArray(value)) {
//         return value.join(",");
//       }
//       return value;
//     });
  
//     const keys = Object.keys(this);
  
//     let result = "";
//     for (let i = 0; i < keys.length; i++) {
//       result += `${keys[i]}: ${values[i]}\n`;
//     }
  
//     return result;
//   };
  
//   console.log(me.toString());


// Problem 2:
// function createSquareObject(n) {
//     const squareObj = {};
//     for (let i = 1; i <= n; i++) {
//       squareObj[i] = i * i;
//     }
//     return squareObj;
//   }
  
//   console.log(createSquareObject(5));


// Problem 3: 
// function calculateSum(obj) {
//     const keysSum = Object.keys(obj).reduce((sum, key) => sum + parseInt(key), 0);
//     const valuesSum = Object.values(obj).reduce((sum, value) => sum + value, 0);
//     return keysSum + valuesSum;
//   }
  
//   const obj = { 1: 20, 2: 30, 3: 20, 4: 40, 5: 30, 6: 50, 7: 40, 8: 20 };
//   console.log(calculateSum(obj));
  

// Problem 4:
// function createLengthObject(arr) {
//     const lengthObj = {};
//     for (let i = 0; i < arr.length; i++) {
//       const element = arr[i];
//       lengthObj[element] = element.length;
//     }
//     return lengthObj;
//   }
  
//   const arr = ["Abdulaziz", "Safarmurod", "O’rol", "Jahongir"];
//   console.log(createLengthObject(arr));
  

// Problem 5:
// function calculateTotalProducts(obj) {
//     const productPrices = Object.values(obj);
//     const total = productPrices.reduce((sum, price) => sum + price, 0);
//     return total;
//   }
  
//   const products = { "Apelsin": 10000, "Olma": 12000, "Mandarin": 8000, "Banan": 20000 };
//   console.log(calculateTotalProducts(products));
  


// Problem 6: 
// function defineObject(obj) {
//     const keys = Object.keys(obj);
//     for (let i = 0; i < keys.length; i++) {
//       if (typeof keys[i] !== "string") {
//         return false;
//       }
//     }
//     return true;
//   }
  
//   const obj = { abc: 1, 123: 2, d: 5 };
//   console.log(defineObject(obj));
  

// Problem 7: 
// function minMaxWord(str) {
//     const words = str.split(" ");
//     let minWord = words[0];
//     let maxWord = words[0];
  
//     for (let i = 1; i < words.length; i++) {
//       const word = words[i];
//       if (word.length < minWord.length) {
//         minWord = word;
//       }
//       if (word.length > maxWord.length) {
//         maxWord = word;
//       }
//     }
  
//     return { minWord, maxWord };
//   }
  
//   const sentence = "Men Abdulaziz Programmerning guruhlarida o’qiyman.";
//   console.log(minMaxWord(sentence));
  

// Problem 8: 
// function removeDuplicates(arr) {
//     return [...new Set(arr)];
//   }
  
//   const arr = [1, 2, 3, 2, 4, 1, 5, 6, 3, 4];
//   console.log(removeDuplicates(arr));
  

// Problem 9: 
// function mergeObjects(obj1, obj2) {
//     return { ...obj1, ...obj2 };
//   }
  
//   const obj1 = { a: 1, b: 2 };
//   const obj2 = { c: 3, d: 4 };
//   console.log(mergeObjects(obj1, obj2));


// Problem 10:
// function reverseObject(obj) {
//     const reversedObj = {};
//     const keys = Object.keys(obj);
  
//     for (let i = keys.length - 1; i >= 0; i--) {
//       const key = keys[i];
//       const value = obj[key];
//       reversedObj[value] = key;
//     }
  
//     return reversedObj;
//   }
  
//   const obj = { a: 1, b: 2, c: 3, d: 4 };
//   console.log(reverseObject(obj));
  

// Problem 11: 
// function countProperties(obj) {
//     return Object.keys(obj).length;
//   }
  
//   const obj = { a: 1, b: 2, c: 3, d: 4 };
//   console.log(countProperties(obj));
  

// Problem 12: 
// function sortObjectByValue(obj) {
//     const sortedKeys = Object.keys(obj).sort((a, b) => obj[a] - obj[b]);
//     const sortedObj = {};
  
//     for (let i = 0; i < sortedKeys.length; i++) {
//       const key = sortedKeys[i];
//       sortedObj[key] = obj[key];
//     }
  
//     return sortedObj;
//   }
  
//   const obj = { a: 3, b: 1, c: 4, d: 2 };
//   console.log(sortObjectByValue(obj));
  

// Problem 13:
// function isEmptyObject(obj) {
//     return Object.keys(obj).length === 0;
//   }
  
//   const obj = {};
//   console.log(isEmptyObject(obj));
  

// Problem 14:
// function flattenObject(obj, prefix = "") {
//     let flattenedObj = {};
  
//     for (const key in obj) {
//       if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
//         const nestedObj = flattenObject(obj[key], prefix + key + ".");
//         flattenedObj = { ...flattenedObj, ...nestedObj };
//       } else {
//         flattenedObj[prefix + key] = obj[key];
//       }
//     }
  
//     return flattenedObj;
//   }
  
//   const obj = { a: 1, b: { c: 2, d: { e: 3 } } };
//   console.log(flattenObject(obj));
  

// Problem 15:
// function calculateTotalPrice(products) {
//     let totalPrice = 0;
  
//     for (let i = 0; i < products.length; i++) {
//       const product = products[i];
//       const discountedPrice = product.price - (product.price * product.discount) / 100;
//       totalPrice += discountedPrice * product.quantity;
//     }
  
//     return totalPrice;
//   }
  
//   const products = [
//     { name: "Product 1", price: 20000, discount: 10, quantity: 5 },
//     { name: "Product 2", price: 10000, discount: 20, quantity: 4 },
//     { name: "Product 3", price: 15000, discount: 8, quantity: 10 },
//     { name: "Product 4", price: 18000, discount: 5, quantity: 6 },
//     { name: "Product 5", price: 5000, discount: 10, quantity: 16 },
//   ];
  
//   console.log(calculateTotalPrice(products));
  

// Problem 16: 
// function findMinMaxValues(products) {
//     let maxPrice = -Infinity;
//     let minPrice = Infinity;
  
//     for (let i = 0; i < products.length; i++) {
//       const product = products[i];
//       const discountedPrice = product.price - (product.price * product.discount) / 100;
  
//       if (discountedPrice > maxPrice) {
//         maxPrice = discountedPrice;
//       }
  
//       if (discountedPrice < minPrice) {
//         minPrice = discountedPrice;
//       }
//     }
  
//     return { maxPrice, minPrice };
//   }
  
//   console.log(findMinMaxValues(products));
  

// Problem 17:
// function convertObjectToArray(obj) {
//     const arr = [];
  
//     for (const key in obj) {
//       arr.push(key, obj[key]);
//     }
  
//     return arr;
//   }
  
//   const obj = {
//     "it": 20,
//     "mushuk": 10,
//     "sigir": 200,
//     "tovuq": 2
//   };
  
//   console.log(convertObjectToArray(obj));
  

// Problem 18:
// function calculateGPA(grades) {
//     let totalGradePoints = 0;
//     let totalCredits = 0;
  
//     for (let i = 0; i < grades.length; i++) {
//       const course = grades[i];
//       totalGradePoints += course.grade * course.kredit;
//       totalCredits += course.kredit;
//     }
  
//     const gpa = totalGradePoints / totalCredits;
//     return gpa.toFixed(2); // Round to 2 decimal places
//   }
  
//   const grades = [
//     { name: "Fizika", grade: 4, kredit: 6 },
//     { name: "Matematika", grade: 5, kredit: 6 },
//     { name: "Tarix", grade: 4, kredit: 4 },
//     { name: "Dasturlash", grade: 5, kredit: 8 },
//     { name: "Kibrxavfsizlik", grade: 4, kredit: 8 },
//   ];
  
//   console.log(calculateGPA(grades));
  

// Problem 19: 
// function checkAnswers(rightAnswers, myAnswers) {
//     let totalQuestions = rightAnswers.length;
//     let correctAnswers = 0;
  
//     for (let i = 0; i < totalQuestions; i++) {
//       if (rightAnswers[i] === myAnswers[i]) {
//         correctAnswers++;
//       }
//     }
  
//     let percentage = (correctAnswers / totalQuestions) * 100;
  
//     return `You scored ${percentage}% (${correctAnswers} out of ${totalQuestions})`;
//   }
  
//   const rightAnswers = [true, false, true, true];
//   const myAnswers = [true, false, true, false];
  
//   console.log(checkAnswers(rightAnswers, myAnswers));
  

// Problem 20
// function findAverageOfPositiveNumbers(numbers) {
//     let sum = 0;
//     let count = 0;
  
//     for (let i = 0; i < numbers.length; i++) {
//       if (numbers[i] > 0) {
//         sum += numbers[i];
//         count++;
//       }
//     }
  
//     if (count === 0) {
//       return 0;
//     }
  
//     let average = sum / count;
//     return average.toFixed(2); 
//   }
  
//   const numbers = [1, -2, 3, 4, -5, 6, -7, 8, 9];
  
//   console.log(findAverageOfPositiveNumbers(numbers));
  