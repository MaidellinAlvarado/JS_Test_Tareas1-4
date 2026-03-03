//1
const newNumbers = [1, 3, 9, 7];

//2
const newSum = newNumbers.reduce((accumulator, currentValue) => {

  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  
//3
  return accumulator + currentValue; 
  
},10);
//4

console.log('El resultado final de newSum es: ', newSum);

// en el paso 2, el método reduce() toma una función de callback que se ejecuta en cada elemento del array. La función de callback recibe dos argumentos: el acumulador (accumulator) y el valor actual (currentValue). El acumulador es el valor que se va acumulando a medida que se itera sobre el array, mientras que el valor actual es el elemento actual del array que se está procesando.

