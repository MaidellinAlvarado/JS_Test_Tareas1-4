//  tecnologías Full Stack
const cursos = ['SQL', 'TypeScript', 'Angular', 'CSS', 'Kubernetes'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

// 1. forEach: Recorre e imprime 
cursos.forEach(curso => console.log('¿Has estudiado: ' + curso + '?'));

// 2. filter:  (más de 7 letras)
const cursosLargos = cursos.filter(curso => curso.length > 7);

// 3. reduce: 
const palabraSecreta = cursos.reduce((acc, currVal) => {
  return acc + currVal[0];
}, "Mi "); // Empieza con el texto "Mi "


console.log(palabraSecreta); 

// 4. map: Le resta 5 a cada número y crea un arreglo nuevo
const smallerNums = nums.map(num => num - 5);

// 5. some: Pregunta si ALGÚN número de la lista es menor a 0