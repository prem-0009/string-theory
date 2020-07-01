/******************
 * YOUR CODE HERE *
 ******************/
//1
const indexedChars = function(str){
  let result = '';
  for ( let i = 0; i < str.length; i++){
    result += i + str[i];
  }
  return result;
}
//2
const  exclaim = function(str){
  // console.log(n)
  let result = ''
 for ( let i = 0; i < str.length; i++){
   if ( str[i] === '.' || str[i] === '?'){
    // console.log(str[i]) 
    result += '!';
    // console.log(str[i])
   } else {
     result += str[i];
   }
 }
 return result;

}
// console.log(exclaim('hi. hello?'))




//3
const repeatIt = function(str, num){
  let result = '';
  while (num > 0){
    result += str;
    num--;
  }
  return result;
}

//4
const truncate = function(str){
  let result = '';
  
    if (str.length <= 18){
      result = str
    } else if ( str.length > 18){
      for ( let i = 0; i < 15; i++){
        result += str[i];
      }
      result += '...'
    }
    return result;
}

console.log(truncate('The fault, dear Brutus, is not in our stars, but in ourselves.'))

//5
const ciEmailify = function(str){
//converting to lowercase and splitting to make an array.
  let newStr = str.toLowerCase();
  // console.log(newStr);
  let result = '';
  for ( let i =0; i < newStr.length;i++){
    if ( newStr[i] === ' '){
      result += '.';
      // console.log(newStr[i])
    } else {
      result += newStr[i];
    }
  }


  // console.log(newStr)
  return result + `@codeimmersives.com`;
}  



//6
const reverse = function(str){
  let newName = ''
  
  for ( let i = str.length-1, k = 0; i >= 0 ; i-- , k++){
    newName += str[i]
  }
  // console.log(newName)
  return newName;
}

// console.log(reverse('hello'))

//7 only vowels
const onlyVowels=function(str){
  
  let result = '';
  for (let i = 0; i< str.length; i++){
    if(str[i] === 'a' || 
       str[i] === 'e' || 
       str[i] === 'i' || 
       str[i] === 'o' || 
       str[i] === 'u' ||
       str[i] === 'A' || 
       str[i] === 'E' || 
       str[i] === 'I' || 
       str[i] === 'O' || 
       str[i] === 'U'){
      result +=str[i]
//       console.log(result)
    }
  }
  return result;
}


// console.log(onlyVowels('hello'))


//8 numberChars

const numberedChars = function(str){
  let result = '';
  for( let i = 1; i<= str.length;i++){
    result +='('+i+')'+str[i-1];
  }
  return result;
}

// console.log(numberedChars('hello'))

//9 crazyCase

const crazyCase = function(str){
  let toLowerStr = str.toLowerCase();
  let result = '';
  for (let i = 0; i < toLowerStr.length; i++){
    if ( i % 2 != 0){
    result += toLowerStr[i].toUpperCase() 
    } else {
      result += toLowerStr[i];
    }
  } 
  
  return result;
}

const titleCase = function(str){
  let toLower = str.toLowerCase();
  let result = '';
  
  for ( let i = 0; i< toLower.length; i++){
    if (i === 0){
      result +=toLower[i].toUpperCase()
    }else if (toLower[i] === ' '){
      result += toLower[i]+ toLower[i+1].toUpperCase();
      i++;
      // console.log(result)
    } else {
      result += toLower[i];
      // console.log(result)
    }
  }
  return result;
}
//  console.log(titleCase('hello there'))

const camelCase = function(nstr){
  let str = nstr.toLowerCase();

  let result = '';
  for ( let i = 0; i< str.length; i++){
    if( str[i]===' '){
      result +=''+str[i+1].toUpperCase();
      // console.log(result);
      //this tips
      i++;
    } else {
      result += str[i];
      // console.log(result);
    }
  }
  return result;
}

// console.log(camelCase('hello there'))

//last
//took long hours...

const crazyCase2ReturnOfCrazyCase = function(nstr){
  let str = nstr.toLowerCase() ;
  let result = '';
let j = 0;
  let n = 0;
  for ( let i = 0 ; i < str.length; i++){
    if ( j % 2 !== 0){
      result += str[i].toUpperCase();
          if ( str[i] === ' '){
            j=j;
            i = i +n;
          } else {
            j++;
          }

    } else

    if ( j % 2 === 0){
      result += str[i]
          if ( str[i] === ' '){
          j=j;
          i = i +n;
        }else {
          j++;
        }
    } else

    if ( str[i] === ' '){
      result += str[i]
      i = i + n;
    }
        
  }
  return result;
  
}


// console.log(crazyCase2ReturnOfCrazyCase('mult wos he'));












 /********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof indexedChars === 'undefined') {
  indexedChars = undefined;
}

if (typeof exclaim === 'undefined') {
  exclaim = undefined;
}

if (typeof repeatIt === 'undefined') {
  repeatIt = undefined;
}

if (typeof truncate === 'undefined') {
  truncate = undefined;
}

if (typeof ciEmailify === 'undefined') {
  ciEmailify = undefined;
}

if (typeof reverse === 'undefined') {
  reverse = undefined;
}

if (typeof onlyVowels === 'undefined') {
  onlyVowels = undefined;
}

if (typeof numberedChars === 'undefined') {
  numberedChars = undefined;
}

if (typeof crazyCase === 'undefined') {
  crazyCase = undefined;
}

if (typeof titleCase === 'undefined') {
  titleCase = undefined;
}

if (typeof camelCase === 'undefined') {
  camelCase = undefined;
}

if (typeof crazyCase2ReturnOfCrazyCase === 'undefined') {
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
}
