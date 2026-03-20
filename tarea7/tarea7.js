function capitalizeASingleWord(word) {
  
  // se eliminó el símbolo '!'
  // Si la palabra SÍ contiene un espacio, retorna null"
  if (word.match(' ')) {
    return null;
  }
  // Se obtiene la primera letra de la palabra y el resto de la palabra
  let firstLetter = word.charAt(0);
  // Se obtiene el resto de la palabra a partir del segundo carácter
  const restOfWord = word.slice(1);
  
  firstLetter = firstLetter.toUpperCase();
  
  return firstLetter + restOfWord;
}


//  retorna "Hey" correctamente
console.log("capitalizeASingleWord('hey') returns: " + capitalizeASingleWord('hey')); 

// retorna null correctamente
console.log("capitalizeASingleWord('hey ho') returns: " + capitalizeASingleWord('hey ho'));

