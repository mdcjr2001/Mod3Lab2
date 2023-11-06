// function ucFirstLetters(string) {
//     return string[0].toUpperCase() + string.slice(1) + string[4].toUpperCase() + string.slice(5)
// }
// console.log(ucFirstLetters("los angeles")) // Los Angeles


// Part 1 Complete (Not from example)

// const str = 'los angeles';
// const arr = str.split(" ");

// for (var i = 0; i < arr.length; i++) {
//     arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
// }
// const str2 = arr.join(" ");
// console.log(str2);

// Part 2 Complete

// function truncateString(str, num) {
// if (str.length > num) {
//     return str.slice(0, num) + "...";
// } else {
//     return str;
// }
// }

// console.log(truncateString('This text will be truncated if it is too long', 25))

// Part 3 Complete

// const animals = ['Tiger', 'Giraffe']
// let array = animals

// animals.push('Horse')
// animals.unshift('Deer')
// animals.push('Bear')
// animals.unshift('Dog')
// animals.sort()
// console.log(animals)


// function replaceMiddleAnimal(newValue) {
//     animals.splice(2, 1, newValue);
//     return animals;
// }
// console.log(replaceMiddleAnimal('Hippo'))

// function findMatchingAnimals(beginsWith, animalArray) {
//     beginsWith = beginsWith.toLowerCase();
//     return animalArray.filter(animal => animal.toLowerCase().startsWith(beginsWith));
// }
// const beginsWith = 'h';

// const matchingAnimals = findMatchingAnimals(beginsWith, animals);
// console.log(matchingAnimals);

// Part 4 Complete

function camelCase(cssProp) {
const words = cssProp.split('-');
console.log(words);
let string = "";
words.forEach((word) => {
  console.log(word);
  if (string.length === 0) {
    string = word;
  } else {
    string += word.charAt(0).toUpperCase() + word.substring(1);
  }
});
return string;
}

    function camelCase(cssProp) {
    const words = cssProp.split("-");
    let result = words[0];
  
    for (let i = 1; i < words.length; i++) {
      result += words[i][0].toUpperCase() + words[i].slice(1);
    }
    return result;
  }
  
  console.log("For loop function: ", camelCase("margin-left"));
  console.log("For loop function: ", camelCase("background-image"));
  console.log("For loop function: ", camelCase("display"));


// // Part 5 Complete

// let twentyCents = 0.20
// let tenCents = 0.10

// console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)
// // 0.2 + 0.1 = 0.300000000000004

// // let fixedTwenty = twentyCents.toFixed(2);
// // let fixedTen = tenCents.toFixed(2);

// // console.log(fixedTwenty + fixedTen) // why is this not working?

// function currencyAddition(float1, float2) {
//     const Bob = float1 + float2;
//     console.log(Bob.toFixed(2))
// }

// currencyAddition(0.2,0.1)

// console.log(0.3 == currencyAddition(0.1, 0.2)) // true

// function currencyOperation(float1, float2, operation){
//     switch(operation) {
//         case "+":
//             return float1 + float2;
//         case "-":
//             return float1 - float2;
//         case "*":
//             return float1 * float2;
//         case "/":
//             return float1 / float2;
//         default:
//             console.log("Invalid operation");
//             return null;
// }
// }
// console.log(0.3 == currencyOperation(0.1, 0.2, '+')) // true

// const result = currencyOperation(1, 2, "+");
// console.log(result);

// function currencyOperation(float1, float2, operation,numDecimals) {

//     if  (numDecimals < 1 || numDecimals > 10) {
//         console.log("Too many decimals");
//         return null;
//     }

//     switch(operation) {
//         case "+":
//             return (float1 + float2).toFixed(numDecimals);
//         case "-":
//             return (float1 - float2).toFixed(numDecimals);
//         case "*":
//             return (float1 * float2).toFixed(numDecimals);
//         case "/":
//             return (float1 / float2).toFixed(numDecimals);
//         default:
//             console.log("Invalid operation");
//             return null;
//     }

// }

// const result2 = currencyOperation(1.003, 2.34, "*",4);
// console.log(result2);

// const result3 = currencyOperation(10, 3, "/", 1);
// console.log(result3);

// const result4 = currencyOperation(5, 3, "+", 11); 

// // Part 6 Complete

// const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
// const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]

//   function unique(givenArray) {
//     a = [];
//     for (i of givenArray) {
//       if (!a.includes(i)) {
//         a.push(i);
//       }
//     }
//     return a;
//   }

// console.log(unique(colors)) 
// console.log(unique(testScores))

// // Part 7 Complete

// const books = [
//     {id: 1, title: 'The Great Gasby', author: 'F. Scott Fitzgerald', year: 1925 },
//     {id: 2, title: 'To Kill a Mokingbird', author: 'Harper Lee', year: 1960 },
//     {id: 3, title: '1984', author: 'George Orwell', year: 1949 },
//     {id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
//     {id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
// ];

// function getBookTitle(bookId) {
//     const book = books.find((book) => book.id === bookId);
//     return book ? book.title : null;
//   }
  
// console.log(getBookTitle(2));

// function getOldBooks() {
//     return books.filter(book => book.year < 1950);
// }
// console.log(getOldBooks());

// function addGenre() {
//     return books.map(book => {
//         return { ...book, genre: 'classic'};
//     })
// }
// console.log(addGenre());

// function getTitles(authorInitial) {
//     return books
//     .filter(book => book.author.startsWith(authorInitial))
//     .map(book => book.title);
// }
// console.log(getTitles('A'));

// function latestBook(books) {
//     let latestYear = 0;
//     let latestPublishedBook;

//     books.forEach(book => {
//         if (book.year > latestYear) {
//             latestYear = book.year;
//             latestPublishedBook = book;
//         }
//     });
//      return latestPublishedBook;
// }
//     console.log(latestBook(books));

// Part 8 Complete

// const phoneBookABC = new Map() // and empty map to begin with
// phoneBookABC.set('Annabelle', '0412312343')
// phoneBookABC.set('Barry', '0433221117')
// phoneBookABC.set('Caroline', '0455221182')
// console.log(phoneBookABC)

// const phoneBookDEF = new Map();
// phoneBookDEF.set("Dominique", "5047859984");
// phoneBookDEF.set("Edgar", "9482749");
// phoneBookDEF.set("Fred", "9473585");
// console.log(phoneBookDEF)

// phoneBookABC.set("Caroline", "0455221128");

// function printPhoneBook(contacts) {
//   contacts.forEach((value, key) => console.log(`${key}: ${value}`));
// }
// phoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);

// printPhoneBook(phoneBookABC);
// printPhoneBook(phoneBookDEF)

// Part 9 Complete

// let salaries = {
//     'Timothy' : 35000,
//     'David' : 25000,
//     'Mary' : 55000,
//     'Christina' : 75000,
//     'James' : 43000
// };

// function sumSalaries(salaries){
//     let sum = 0;
//     for (let salary of Object.values(salaries)) {
//         sum += salary;
//     }
//     return sum;
// }

// console.log(sumSalaries(salaries))

// function topEarner(salaries){
//     let maxSalary = 0;
//     let maxName = null;

//     for(const [name, salary] of Object.entries(salaries)) {
//         if (maxSalary < salary) {
//             maxSalary = salary;
//             maxName = name
//         }
//     }
//     return maxName;
// }
//     console.log(topEarner(salaries))



// // Part 10 Complete

// const today = new Date();
// console.log('Current time is ' + today.toLocaleDateString())
// console.log(today.getHours() + ' hours have passed so far today')

// const totalMinutesToday = today.getHours() * 60 + today.getMinutes();
// console.log(totalMinutesToday + " minutes have passes so far today");

// const totalSecondsToday = totalMinutesToday * 60 + today.getSeconds();
// console.log(totalSecondsToday + " seconds have passed so far today");

// const birthDate = new Date(2001, 7, 2);
// const ageDiff = new Date(today - birthDate);

// const years = ageDiff.getUTCFullYear() - 1970;
// const months = ageDiff.getUTCMonth();
// const days = ageDiff.getUTCDate() - 1;

// console.log(`I am ${years} years, ${months} months, and ${days} days old.`);

// function daysInBetween(date1, date2) {
//   const oneDay = 1000 * 60 * 60 * 24;
//   const timeDiff = Math.abs(date2 - date1);
//   const dayDiff = Math.round(timeDiff / oneDay);
//   return dayDiff;
// }

// const date1 = new Date(2023, 0, 1);
// const date2 = new Date(2023, 11, 31);

// console.log(daysInBetween(date1, date2));
