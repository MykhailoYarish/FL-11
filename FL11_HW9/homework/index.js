const data = [
  {
    _id: '5b5e3168c6bf40f2c1235cd6',
    index: 0,
    birthday: '2016-03-18T00:00:00',
    eyeColor: 'green',
    name: 'Stein',
    favoriteFruit: 'apple'
  },
  {
    _id: '5b5e3168e328c0d72e4f27d8',
    index: 1,
    birthday: '1991-02-11T00:00:00',
    eyeColor: 'blue',
    name: 'Cortez',
    favoriteFruit: 'strawberry'
  },
  {
    _id: '5b5e3168cc79132b631c666a',
    index: 2,
    birthday: '1984-04-17T00:00:00',
    eyeColor: 'blue',
    name: 'Suzette',
    favoriteFruit: 'apple'
  },
  {
    _id: '5b5e31682093adcc6cd0dde5',
    index: 3,
    birthday: '1994-04-17T00:00:00',
    eyeColor: 'green',
    name: 'George',
    favoriteFruit: 'banana'
  }
];

function getNumbers(string) {
  const numbers = [];
  let number;
  for (let i = 0; i < string.length; i++) {
    number = parseInt(string[i]);
    if (!isNaN(number)) {
      numbers.push(number);
    }
  }
  return numbers;
}

function findTypes() {
  const argumentsTypes = {};
  for (let i = 0; i < arguments.length; i++) {
    if (argumentsTypes[arguments[i]]) {
      argumentsTypes[arguments[i]] = argumentsTypes[arguments[i]] + 1;
    } else {
      argumentsTypes[arguments[i]] = 1;
    }
  }
  return argumentsTypes;
}

function executeforEach(array, func) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(func(array[i]));
  }
  return newArray;
}

function mapArray(array, func) {
  const mapedArray = executeforEach(array, func);
  return mapedArray;
}

function filterArray(array, func) {
  const filteredArray = [];
  const checks = executeforEach(array, func);
  for (let i = 0; i < checks.length; i++) {
    if (checks[i]) {
      filteredArray.push(array[i]);
    }
  }
  return filteredArray;
}

function showFormattedDate(date) {
  const firstLetterMonthIndex = 4;
  const secondLetterMonthIndex = 5;
  const thirdLetterMonthIndex = 6;
  const year = date.getFullYear();
  const day = date.getDate();
  date = date.toString();
  const month =
    date[firstLetterMonthIndex] +
    date[secondLetterMonthIndex] +
    date[thirdLetterMonthIndex];
  const formatedDate = `Date: ${month} ${day} ${year}`;
  return formatedDate;
}

function canConvertToDate(dateString) {
  const date = new Date(dateString);
  if (date.toString() === 'Invalid Date') {
    return false;
  }
  return true;
}

function daysBetween(date, dateToCompare) {
  const milisecondsInDay = 86400000;
  return Math.round((dateToCompare - date) / milisecondsInDay);
}

function getAmountOfAdultPeople(data) {
  let birthdays = [];
  const daysIn18Years = 6556;
  const todayDate = Date.now();
  for (let x of data) {
    birthdays.push(daysBetween(new Date(x['birthday']).getTime(), todayDate));
  }
  birthdays = filterArray(birthdays, birthday => birthday >= daysIn18Years);
  return birthdays.length;
}

function keys(object) {
  const keys = [];
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      keys.push(key);
    }
  }
  return keys;
}

function values(object) {
  const values = [];
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      values.push(object[key]);
    }
  }
  return values;
}
