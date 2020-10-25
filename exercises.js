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
final= name + country;


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
        + text6.substring(text6.indexOf("e"),text6.indexOf("e")+1).toUpperCase() + text6.substring(text6.indexOf("e")+1,22).toLocaleLowerCase();

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
