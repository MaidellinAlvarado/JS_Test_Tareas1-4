let story = 'Last weekend, I took literally the most beautifull hike of \
my life. The trail is called "The High Peak Loop" and \
it stretches all the way from Lake Placid to Mount Marcy, \
New York. Itâ€™s really an adventure from beginning to end! \
It is a 15-mile trek, and it literally took me an entire day. \
I stopped at Mirror Lake to take some artsy photos. \
It was a short stop, though,\
because I had a freaking steep climb ahead. \
After a quick break at the scenic Adirondack Lodge,\
I began my ascent up the rocky path. \
The summit is a breathtaking 5,344 feet high! \
I was already exhausted by the time I reached the h\
alfway point. \
Two hours later, I arrived at Indian Falls, \
an extremely beautifull cascade hidden in the forest.\
Something that surprised me was that near the end,\
 you literally loop back to the starting point! \
 At this stage, youâ€™re very close to finishing.';

let storyWords = story.split(' ');
let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';


// console.log(storyWords);

let count = 0;
storyWords.forEach((word) => {
count++; 
});
console.log(count);

// Eliminar la palabra innecesaria
storyWords = storyWords.filter((word) => {

  return word !== unnecessaryWord;
});

//corregir la palabra mal escrita

storyWords = storyWords.map((word) => {
  // Comprobamos si la palabra actual es el error ortográfico
  if (word === misspelledWord) {
    return 'beautiful'; 
  } else {
    return word;
  }
});


//mala palbra
let badWordIndex = storyWords.findIndex((word) => {
  return word === badWord; 
});
console.log(badWordIndex);
storyWords[badWordIndex] = 'really'; 




// PASO 10: Comprobar si todas las palabras tienen 10 letras o menos
let lengthCheck = storyWords.every((word) => {
  return word.length <= 10; 
});
console.log(lengthCheck);


//  Encontrar qué palabra es la culpable de que lengthCheck sea false
let wordCulpable = storyWords.find((word) => {
  return word.length > 10;
});
console.log(wordCulpable); 

// Ahora que sabemos que es, buscamos su índice y la cambiamos
let longWordIndex = story.findIndex((word) => {
  return word === 'breathtaking';
});

// La reemplazamos por una palabra más corta
storyWords[longWordIndex] = 'Epic';

// --------------------------FIN

console.log(storyWords.join(' '));

