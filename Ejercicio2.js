
//palabaras
const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// PASO 1:
console.log(words.some((word) => {
  return word.length < 6;
}));



// PASO 2: 
const interestingWords = words.filter((word) => {
  return word.length > 5;
});

// PASO 3:
console.log(interestingWords.every((word) => { 
  return word.length > 5; 
}));