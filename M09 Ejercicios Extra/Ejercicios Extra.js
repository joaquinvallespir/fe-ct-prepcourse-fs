/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var array = [];
   for(var prop in objeto){
      array.push([prop, objeto[prop]]);
  }

   return array;
}


function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var contador = {};
  var stringOrdenado = string.split("").sort().join("");

  for (elemento of stringOrdenado)
  {
    if(contador.hasOwnProperty(elemento))
     contador[elemento]++;
    else
      contador[elemento] = 1;
  }
  return contador;
}

function capToFront(string) {
//    Recibes un string con algunas letras en mayúscula y otras en minúscula.
//    Debes enviar todas las letras en mayúscula al comienzo del string.
//    Retornar el string.
//    [EJEMPLO]: soyHENRY ---> HENRYsoy
//    Tu código:
      var mayusculas = ""
      var minusculas = ""
      for(var i = 0; i<string.length; i++)
      {
         if(string[i] === string[i].toUpperCase())
         {
            mayusculas+=string[i]
            string[i].replace("");
         }
         else
            minusculas+=string[i];
      }
      string = mayusculas + minusculas;
      return string;
 }

 function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var contador = 0
   var palabras = [];
   var palabra = "";
   for (let i = 0; i<frase.length; i++)
   {
      if(frase[i] === " ")
         {
            palabras[contador] = palabra
            contador++;
            palabra = "";
         }
      else
         palabra = frase[i] + palabra
         if(i === frase.length-1)
         {
           palabras[contador] = palabra
            palabra = "";
         }
   }
 console.log(palabras);
  for(let i = 0; i< palabras.length; i++)
  {
   if(i === palabras.length-1)
   palabra = palabra + palabras[i]
   else
   palabra = palabra + palabras[i] + " "
  }
   return palabra
 }

 function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   numeroString = numero.toString();
   condicion = true;
   string = "Es capicua"
  
      for(i=0; i<(numeroString.length/2); i++)
       if(numeroString[i] !== numeroString[(numeroString.length-1-i)])
         condicion = false;
  if(condicion)
   return string
   else
   {
      string = "No es capicua";
      return string
   }
   
 }
function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var nuevoString = "";
   for(let i = 0; i<string.length ; i++)
   {
      if(string[i] !== "a" && string[i] !== "b" &&string[i] !== "c" )
      nuevoString += string[i];
   }
   return nuevoString;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   var nuevoArray = [];
   nuevoArray = arrayOfStrings.sort((a,b) => a.length - b.length)
   return nuevoArray
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var nuevoArray = [] ;
   nuevoArray = array1.filter(elemento => array2.includes(elemento));
   return nuevoArray;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
