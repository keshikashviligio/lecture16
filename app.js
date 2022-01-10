// // #1
// const currentDay = new Date().getDay();
//
// switch (currentDay){
//   case 0:
//     console.log('Sunday');
//     break;
//   case 1:
//     console.log('Monday');
//     break;
//   case 2:
//     console.log('Thusday');
//     break;
//   case 3:
//     console.log('Wensday');
//     break;
//   case 4:
//     console.log('Sunday');
//     break;
//   case 5:
//     console.log('Sunday');
//     break;
//   case 6:
//     console.log('Sunday');
//     break;
// }
// // #2
// for (let i = 0; i < 100; i++){
//   console.log('for', i);
// }
// // #3
// let whileI = 0;
// while (whileI < 50){
//   console.log('whileI', whileI);
//   whileI++;
// }
// // #4
// let doIndex = 0;
// do {
//   console.log('doIndex', doIndex);
//   doIndex++
// } while (doIndex < 150)
//
// // #5
// const largeNumbers = [];
// console.log(largeNumbers);
// for (let i = 0; i < 10000; i++){
//   largeNumbers.push(i * i);
// }
// console.log(largeNumbers);

// const numbers = [10, 9, 9, 8, 8, 11, 8, 0, 9, 1];
// let max = numbers[0];
// let second = 0;
// for (let i = 0; i < numbers.length; i++){
//   if(numbers[i] > max){
//     second = max;
//     max = numbers[i];
//   }
//   if(numbers[i] > second && numbers[i] < max) {
//     second = numbers[i];
//   }
// }
// console.log(max, second);

function sayHello(name, age) {
  console.log(`Hello ${name}`, age);
}
//
// sayHello('Gio', 32);

const sayHi = function (name, age) {
  console.log(`Hello ${name}`, age);
}

// sayHi('Gio', 32);

// Arrow functions
const sum = (a, b) => a + b;

// console.log(sum(10, 5));

const generateLargeNumbers = () => {
  const largeNumbers = [];
  for (let i = 0; i < 100; i++){
    largeNumbers.push(i * i);
  }
  return largeNumbers;
}

// Pure function
function pureFunc(name) {
  return `My name is: ${name}`;
}

// Non pure function
function mutateFunc(obj){
  obj.name = 'Gela';
  obj.age += 1;
  return obj;
}

const getNumbers = (length, start = 0) => {
  const array = [];
  for (let i = start; i < length; i++){
    array.push(i * i);
  }
  return array;
}
// console.log(getNumbers(10, 5));
// console.log(getNumbers(10));

const myNumbers = getNumbers(50);

// myNumbers.unshift(100); // adds top of array
// myNumbers.push(100); // adds end of array

// myNumbers.shift();
// myNumbers.pop();

// const printNumberCb = (numberOfArray, i) => {
//   console.log(numberOfArray, i);
// }
// console.log(myNumbers);

// callback functions
function callMeBack(callbackFn) {
  if(typeof callbackFn === "function"){
    callbackFn('Hello from callMeBack');
  }
}

const cb = (response) => {
  console.log(response);
}

// callMeBack(cb);

myNumbers.forEach((numberOfArray, i) => {
  // console.log(numberOfArray, i);
});

const users = [
  {name: 'gg', status: 'active'},
  {name: 'aa', status: 'disabled'},
  {name: 'bb', status: 'active'},
  {name: 'cc', status: 'active'},
  {name: 'vv', status: 'active'},
  {name: 'yy', status: 'disabled'},
  {name: 'pp', status: 'active'},
]

const activeUsers = users.filter((user) => {
  return user.status === 'active';
});

const disabledUsers = users.filter((user) => {
  return user.status === 'disabled';
});

const userGG = users.find((user) => {
  return user.name === 'yy';
});

const newUsers = users.map((user, i) => {
  return { ...user, age: sum(10, i) };
});

// const hasDisabledUser = users.some((user) => {
//   return user.status === 'disabled';
// })
const hasDisabledUser = users.every((user) => {
  return user.status === 'active';
})
// if(hasDisabledUser){
//   alert('You have to pay')
// }
const includes = [1, 2, 5].includes(5);

const numbers = getNumbers(5, 1);

const total = numbers.reduce((total, current) => {
  return total + current;
}, 0);
// console.log(numbers);
// console.log(total);

console.log(Object.entries({name: 'gg', status: 'active'}));
console.info('Info');
console.warn('warn');
console.error('error');
// console.log(includes);
// console.log(hasDisabledUser);
// console.log(userGG);
// console.log('users', users);
// console.log('activeUsers', activeUsers);
// console.log('disabledUsers', disabledUsers);

