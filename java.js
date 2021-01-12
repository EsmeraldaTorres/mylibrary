//ForEach
//Por cada elemento, se ejecuta una función

// function myForEach (array, callback) {
//     for(let i = 0; i < array.length; i ++) {
//      callback(array[i]);
//     }
// }

// const array1 = [1, 2, 3, 4]

// function result(a) {
//     console.log(a *2)
// }

// myForEach(array1,result)




//Filter
//El método filter recorre un array y retorna los datos que cumplan la función
//const resultado = hola.filter(elemento => elemento>2);
//   console.log(resultado);

// function myFilter(array,callback) {
//    let newArray = []
//    for(let i = 0; i < array.length; i ++) {
//        const ciclefor = callback(array[i]) 
//        if (ciclefor){
//            newArray.push(array[i])
//        }
//    }
//    return newArray
// }

// const array1 = [ 1, 2, 3, 4]

// function mayorQue2 (dato) {
//    return dato > 2
// }

// console.log(myFilter(array1, mayorQue2))




//Find
//Encuentra el primer elemento que cumple la condición, (no un array)
//const resultadoFind = hola.find(elemento => elemento == 3)
//    console.log(resultadoFind)

// function myFind(array, callback) {
//    for (let i = 0; i < array.length; i ++) {
//        if(callback(array[i]) === true)
//        return array[i]
//    }
// }

// const array1 =  [1, 2, 3, 4]

// const result = myFind(array1,element => element === 3) 
//    console.log(result)




//FindIndex
//busca un elemento que cumpla con la condicion pero devulve la posicion de ese elemento

// function myFindIndex(array, callback) {
//    for(let i = 0; i < array.length; i ++) {
//        if(callback(array[i]) === true) {
//            return i   
//        }
//    }
// }

// const array1 =  ['green', 'red', 'blue', 'black']

// const result = myFindIndex(array1, element => element === 'blue')
// console.log(result)




//Map 
// Es un forEach pero sí retorna un nuevo arreglo ejecutando la funcion para cada elemento
//solo existen para una variable de tipo array
//const resultado = hola.map((elemento) => elemento*2)
//    console.log(resultado)

// function myMap(array,callback) {
//     const newArray = []
//     for (let i = 0; i < array.length; i++) {
//         newArray.push(callback(array[i]))
//     }
//     return newArray
// }

// const array1 =  [1, 2, 3, 4]

// const result = myMap(array1, element => element*2)
//     console.log(result)




//Contains
//Tengo un arreglo y busca un elemento en ese arreglo, si existe retorna true, si no false

// function myContains (array, element) {
//   for (let i = 0; i < array.length; i++) { 
//     }
//     if (array[i] === element) {
//         return true}
//     else {
//         return false
//     }
// }
// const array1 =  [1, 2, 3, 4]
// const result = myContains(array1, 8)
// console.log(result)




//Pluck
// Extre una lista de valores de una propiedad   
// var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
// _.pluck(stooges, 'name');
// => ["moe", "larry", "curly"]

// function myPluck(array,property) {
//     const newArray = []
//     for (let i = 0; i < array.length; i++){
//         newArray.push(array[i][property])
//     }
//     return newArray

// }

// const people = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];

// const result = myPluck(people, 'name')
//     console.log(result)




//Without
//Devuelve una copia del arreglo con todas las instancias de los valores eliminados
// without([1, 2, 1, 0, 3, 1, 4], 0, 1);
// => [2, 3, 4]

// function myWithout (array, element) {
//     let newArray = []
//     for (let i = 0; i < array.length; i++){
//       if (array[i] === element) {
//       array.splice( i, 1 )}
//     }
//     return newArray = array
// }

// const array1 =  [1, 2, 1, 0, 3, 2, 1, 4]

// const result = myWithout(array1, 2)
// console.log(result)