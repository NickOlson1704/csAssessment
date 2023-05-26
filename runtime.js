const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let resultsInsert = perf.stop();


console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);


function addToZero(numbers) {
    const complements = new Set();
  
    for (let num of numbers) {
      if (complements.has(-num)) {
        return true;
      }
      complements.add(num);
    }
  
    return false;
  }

console.log(addToZero([]));                
console.log(addToZero([1]));               
console.log(addToZero([1, 2, 3]));        
console.log(addToZero([1, 2, 3, -2])); 

//runtime O(n)
//space O(n)


function hasUniqueChars(word) {
    const charSet = new Set();
  
    for (let char of word) {
      if (charSet.has(char)) {
        return false;
      }
      charSet.add(char);
    }
  
    return true;
  }

  console.log(hasUniqueChars("Monday"));   
  console.log(hasUniqueChars("Moonday")); 
  
  //runtime O(n)
  //space O(n)

  function isPangram(sentence) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const lowercaseSentence = sentence.toLowerCase();
  
    for (let char of alphabet) {
      if (!lowercaseSentence.includes(char)) {
        return false;
      }
    }
  
    return true;
  }
  
  console.log(isPangram("The quick brown fox jumps over the lazy dog!"));  
  console.log(isPangram("I like cats, but not mice"));  
  
  //runtime O(1)
  //space O(1)

  function findLongestWord(words) {
    let longestLength = 0;
  
    for (let word of words) {
      if (word.length > longestLength) {
        longestLength = word.length;
      }
    }
  
    return longestLength;
  }
  
  console.log(findLongestWord(["hi", "hello"]));
  
  //runtime  O(n)
  //space O(1)