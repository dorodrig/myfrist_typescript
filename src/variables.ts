//Variables typescript

//import { type } from "os";

//import { log } from "console";

//tipo numero
let edad:number;
//tipo texto
let nombre:string;
//tipo boolean
let casado:boolean;
//tipo any
let identificador:number | string | boolean;
//declaracion de variables
edad= 20;
console.log(edad);
nombre="Juan";
console.log(nombre);
casado=false;
console.log(casado);
identificador= 20;
console.log(identificador);
identificador="Juan";
console.log(identificador);

//Alias
type StringOrNumber = string | number;
let id:StringOrNumber = 10;
id="Juan";
console.log(id);
let array :StringOrNumber[] = ["Juan","Pedro","Maria",1,2,3 ]; 
console.log(array);
let objeto :{
   propieda:StringOrNumber
};
objeto = {propieda:"Casa"};
console.log(objeto);