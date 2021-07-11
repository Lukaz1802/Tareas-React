 //Convertir a función de flecha:

// function messageUser(name) {
//   return `Hello, my name is ${name}`;
// }

// Función convertida a función flecha:

const messageUser = name =>  `Hello, my name is ${name}`;


console.log(messageUser("Bill Gates"));


//Desestructura el siguiente objeto y completa los mensajes:
const iPad = {
  marca: "Apple",
  producto: "iPad",
  modelo: "8ª Generación",
  version: 2020,
};

//Objeto desestructurado y mensajes completados:

const {marca, producto, modelo, version}=iPad

console.log(`Producto: ${producto} `);
console.log(`Marca: ${marca} `);
console.log(`Modelo: ${modelo} `);
console.log(`Versión: ${version} `);





//Desestructura el siguiente arreglo, obten el segundo nombre y usalo como parámetro de la función que viene en el mismo arreglo
const personas = [
  "Laura",
  "Ernesto",
  "Eliana",
  // (n) => `Bienvenido a React ${n}`,
];

//Arreglo desestructurado y segundo nombre usado en la funcion.

const [n1, n2, n3] = personas;

const segundoNombre = n => `Bienvenido a React ${n}`

console.log(segundoNombre(`${n2}`));

