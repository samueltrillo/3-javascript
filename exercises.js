/****************************
  1) Variables y Operadores 
*****************************/

/* a) Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos
números en una 3er variable.*/

var a,b,c;
a = 2;
b = 3;
c= a + b;

/* b) Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.*/

var name,surname,final;
name = "Samuel";
country = "Trillo";
final = name + country;


/* c) Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string)
guardando el resultado la suma una 3er variable (utilizar length).*/

var firstw,secondw,thirdw;
firstw = "Hello";
secondw = "World";
thirdw = firstw.length + secondw.length;

/****************************
  2) Strings 
*****************************/

/* a) Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula 
(utilizar toUpperCase).*/

var text;
text= "One of the best";
text.toUpperCase();

/* b) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros
5 caracteres guardando el resultado en una nueva variable (utilizar substring).*/

var text2;
text2= "Number of the beast";
text2.substring (0,4);

/* c) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos
3 caracteres guardando el resultado en una nueva variable (utilizar substring).*/

var text3,result;
text3= "Back in time";
result = text3.substring (9,12);

/* d) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera
letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring,
toUpperCase, toLowerCase y el operador +).*/

var text4,result2;
text4 = "rUN TO THE HILLS"
result2 = text4.substring(0,1).toUpperCase() 
        + text4.substring(1,16).toLocaleLowerCase(); 

/* e) Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la 
posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).*/

var text5,result3;
text5 = "Brave new world";
result3 = text5.indexOf(" "); 

/* f) Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre 
medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera
letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase,
toLowerCase y el operador +).*/

var text6,result4;
text6 = "iNDUSTRIAL eNGINEERING";
result4 = text6.substring(text6.indexOf("i"),text6.indexOf("i")+1).toUpperCase()
        + text6.substring(text6.indexOf("i")+1,10).toLocaleLowerCase()
        + " "
        + text6.substring(text6.indexOf("e"),text6.indexOf("e")+1).toUpperCase()
        + text6.substring(text6.indexOf("e")+1,22).toLocaleLowerCase();

/****************************
  3) Arrays
*****************************/        

/* a) Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
"Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log)*/

var months = ["Enero","Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
              "Agosto", "Septiembre","Octubre", "Noviembre", "Diciembre"];
console.log (months[4],months[10]); /* I supossed that exercise refeers to May (5) and November (11) */

/* b) Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).*/

console.log(months.sort());

/* c)Agregar un elemento al principio y al final del array (utilizar unshift y push).*/

months.unshift("Hello");
months.push("Bye");

/* d) Quitar un elemento del principio y del final del array (utilizar shift y pop).*/

months.shift("Hello");
months.pop("Bye");

/* e) Invertir el orden del array (utilizar reverse)*/

months.reverse();

/* f) Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).*/

months.join("-");

/* g) Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).*/

var monthsCopy = months.slice(4,11);

/****************************
  4) If Else
*****************************/  

/* a) Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 0,5 mostrar
una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”*/

if (Math.random() >= 0.5) {
      alert ("Greater than 0,5");
}   else {
      alert ("Lower than 0,5");
}

/* b) Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
            i) “Bebe” si la edad es menor a 2 años
            ii) “Nino” si la edad es entre 2 y 12 años
            iii) “Adolecente” si la edad es entre 13 y 19 años
            iv) “Joven” si la edad está entre 20 y 30 años
            v) “Adulto” entre 31 y 60 años
            vi) “Adulto mayor” entre 61 y 75 años
            vii) “Anciano” si es mayor a 75 años*/

var Age;
Age = Math.floor(Math.random()*101);
if (Age < 2) {
    alert ("Bebe");
  } else if (Age >= 2 && Age < 12) {
    alert ("Nino");
  } else if (Age >= 13 && Age <= 19) {
    alert ("Adolescente");
  } else if (Age >= 20 && Age <= 30) {
    alert ("Joven");
  } else if (Age >= 31 && Age <= 60) {
    alert ("Adulto");
  } else if (Age >= 61 && Age < 75) {
    alert ("Adulto mayor");
  } else {
    alert ("Anciano");
};

/****************************
  5) For
*****************************/  

/* a) Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar una
alerta utilizando cada una de las palabras.*/

var words;
words = ["red","blue","orange","green","yellow"];
for (var i = 0; i <=4; i++) {
        alert (words[i]);
}

/* b) Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada.*/

/* c) Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un bucle for 
para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la cadena completa.*/

/* d) Crear una array vacío y con un bucle for de 10 repeticiones llenar el array con el número de la repetición, es decir que 
al final de la ejecución del bucle for deberia haber 10 elementos dentro del array, desde el número 0 hasta al numero 9. 
Mostrar por la consola del navegador el al array final (utilizar console.log).*/




