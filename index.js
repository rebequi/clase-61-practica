// Objects 
const persona = {
    nombre: "Rebeca",
    edad: 23,
    apellido: "Ballesteros",
    direccion: "San José",
    mascotas: ["Facudini", "Europa", "Raul"]
}

console.log (persona.nombre)
console.log (persona.mascotas[0])

// Crear una variable llamada user, a la que le vamos a asignar un objeto.
// El objeto tiene que tener 4 propiedades: firstName, lastName, email, age, con tus datos
// Mostrar en consola el objeto user
// Mostrar en la consola el nombre y la edad de la persona: 
// "Hola, mi nombre es [ACA EL NOMBRE DE PILA] y tengo [ACA LA EDAD] años"


// Tenemos un listado de personas y necesitamos guardarlo en una base de datos
// Los datos que tenemos son un id, email, nombre y teléfono
// Crear un objeto para cada persona que nos pasaron
// Mostrar por consola todos los objetos creados
// DATOS DE LAS PERSONAS QUE NECESITAMOS GUARDAR EN UNA BASE DE DATOS
// 1, ada@gmail.com, Ada Lovelace, 1234567890
// 2, grace@hotmail.com, Grace Hopper, 0987654321
// 3, hedy@gmail.com, Hedy Lamarr, 6789054321
// 4, radia@yahoo.com, Radia Perlman, 1234509876
// 5, sheryl@facebook.com, Sheryl Sandberg, 5432167890


// Ejemplo del formato de cada objeto: 0,ejemplo@terra.com,Ejemplo,1029384756
const usuario1 = {
  id: 0,
  nombre: "Ada Lovelace",
  email: "ada@gmail.com",
  telefono: "1234567890"
}

const usuario2 = {
    id: 1,
    nombre: "Grace Hopper",
    email: "grace@hotmail.com",
    telefono: "0987654321"
  }

  const usuario3 = {
    id: 2,
    nombre: "Hedy Lamarr",
    email: "hedy@gmail.com",
    telefono: "6789054321"
  }

  const usuario4 = {
    id: 3,
    nombre: "Radia Perlman",
    email: "radia@yahoo.com",
    telefono: "234509876"
  }

  console.log (usuario1.id, usuario1.nombre, usuario1.email, usuario1.telefono)
  console.log (usuario2.id, usuario2.nombre, usuario2.email, usuario2.telefono)
  console.log (usuario3.id, usuario3.nombre, usuario3.email, usuario3.telefono)
  console.log (usuario4.id, usuario4.nombre, usuario4.email, usuario4.telefono)

  // 1. El nombre de Ada:

// 2. El ID de Grace

// 3. El email de Hedy

// 4. El ID y nombre de Radia

// 5. El telefono de Sheryl

console.log (usuario1.nombre)
console.log (usuario2.id)
console.log (usuario3.email)
console.log (usuario4.id, usuario4.nombre)

// Ejercicio 4
// Tenemos un objeto con información de un disco:
const disco = {
  id: 1,
  nombre: 'Wasting Light',
  anioLanzamiento: 2011,
  cantidadDeTemas: 12,
  banda: {
    nombre: 'Foo Fighters',
    anioFormacion: 1994
  }
};
// Mostrar en consola el siguiente mensaje usando las propiedades del objeto:
// El disco Wasting Light de la banda Foo Fighters se lanzó en el año 2011

console.log (`El disco ${disco.nombre} de la banda ${disco.banda.nombre} se lanzo en el año ${disco.anioLanzamiento}`)

// Crear un array llamado tecnologiasConocidas donde se listen las tecnologias 
// que aprendiste durante el curso y las que ya supieras de antes

// Agregar al objeto creado en el ejercicio 1 dos propiedades:

// sabeProgramar: true
// tecnologiasConocidas: [el array que creaste recien]

// const tecnologiasConocidas = ["HTML", "CSS", "Javascript", "Git", "Github", "Bulma"]

// Crear una funcion llamada mostrarTecnologias que reciba como parametros el objeto (incluyendo las propiedades recien creadas)
// Dentro de la funcion, crear la siguiente lógica:
// Si la propiedad "sabeProgramar" es true, mostrar en consola la siguiente frase: 
// "Hola, mi nombre es [ACA EL NOMBRE] y programo en [ACA EL LISTADO DE LENGUAJES/TECNOLOGIAS]"
// Ejecutar la funcion

const user = {
    firstName: "Rebe",
    lastName: "Ballesteros",
    email: "rebk98@gmail.com",
    age: 23,
    
}
    user.sabeprogramar = true,
    user.tecnologiasConocidas =["HTML", "CSS", "Javascript", "Git", "Github", "Bulma"] 
// console.log (user)
// console.log (user.firstName, user.age)
// console.log (`Hola, mi nombre es ${user.firstName} y tengo ${user.age} años`)




const mostrarTecnologias = (test) => {
    if (user.sabeprogramar === true) {
        console.log (`Hola, mi nombre es ${user.firstName} y programo en ${user.tecnologiasConocidas}`)
    }
}
mostrarTecnologias ()