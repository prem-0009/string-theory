/******************
 * YOUR CODE HERE *
 ******************/
//1.
const indexedChars = function (char) {
  let result = "";
  for (let i = 0; i < char.length; i++) {
    result += i + char[i];
  }

  return result;
};

//2
const exclaim = function (str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "?" || str[i] === ".") {
      result += "!";
    } else {
      result += str[i];
    }
  }
  result;
  return result;
};

exclaim("oh. hello ?");

//3
const repeatIt = function (str, num) {
  let result = "";
  for (let i = 0; i < num; i++) {
    result += str;
  }

  return result;
};

//4
const truncate = function (str) {
  let result = "";
  if (str.length >= 18) {
    for (let i = 0; i < 15; i++) {
      result += str[i];
    }
    result += "...";
  } else {
    result = str;
  }

  return result;
};

//5
const ciEmailify = function (fullNames) {
  let fullName = fullNames.toLowerCase();
  let result = "";

  for (let i = 0; i < fullName.length; i++) {
    if (fullName[i] === " ") {
      result += ".";
    } else {
      result += fullName[i];
    }
  }

  return `${result}@codeimmersives.com`;
};

//6
const reverse = function (str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
};

//7
const onlyVowels = function (str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u" ||
      str[i] === "A" ||
      str[i] === "E" ||
      str[i] === "I" ||
      str[i] === "O" ||
      str[i] === "U"
    ) {
      result += str[i];
    }
  }
  result;
  return result;
};

//8
const numberedChars = function (str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += `(${i + 1})${str[i]}`;
  }

  return result;
};

//9
const crazyCase = function (str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      result += str[i].toLowerCase();
    } else {
      result += str[i].toUpperCase();
    }
  }
  result;
  return result;
};

//10
const titleCase = function (strs) {
  let str = strs.toLowerCase();
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (i === 0 || str[i - 1] === " ") {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }

  return result;
};

//11
const camelCase = function (str) {
  let result = str[0].toLowerCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i] === " ") {
      result += "";
    } else if (str[i - 1] === " ") {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }

  return result;
};

//12
const crazyCase2ReturnOfCrazyCase = function (str) {
  let result = "";
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      result += str[i];
    } else if (counter % 2 === 0) {
      result += str[i].toLowerCase();
      counter++;
    } else {
      result += str[i].toUpperCase();
      counter++;
    }
  }
  result;
  return result;
};

crazyCase2ReturnOfCrazyCase("prem sherpa");
/********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof indexedChars === "undefined") {
  indexedChars = undefined;
}

if (typeof exclaim === "undefined") {
  exclaim = undefined;
}

if (typeof repeatIt === "undefined") {
  repeatIt = undefined;
}

if (typeof truncate === "undefined") {
  truncate = undefined;
}

if (typeof ciEmailify === "undefined") {
  ciEmailify = undefined;
}

if (typeof reverse === "undefined") {
  reverse = undefined;
}

if (typeof onlyVowels === "undefined") {
  onlyVowels = undefined;
}

if (typeof numberedChars === "undefined") {
  numberedChars = undefined;
}

if (typeof crazyCase === "undefined") {
  crazyCase = undefined;
}

if (typeof titleCase === "undefined") {
  titleCase = undefined;
}

if (typeof camelCase === "undefined") {
  camelCase = undefined;
}

if (typeof crazyCase2ReturnOfCrazyCase === "undefined") {
  crazyCase2ReturnOfCrazyCase = undefined;
}

module.exports = {
  indexedChars,
  exclaim,
  repeatIt,
  truncate,
  ciEmailify,
  reverse,
  onlyVowels,
  numberedChars,
  crazyCase,
  titleCase,
  camelCase,
  crazyCase2ReturnOfCrazyCase,
};
