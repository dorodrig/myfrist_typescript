"use strict";
const areacirculo = (radio) => {
    return Math.PI * Math.pow(radio, 2);
};
let area = areacirculo(5);
const mensaje = (numero, numero2) => {
    console.log(numero);
    console.log(numero2);
};
mensaje(123, "hola");
const mensaje2 = (parametro1 = 10) => {
    console.log(parametro1);
};
mensaje2(2);
mensaje2();
const mensaje3 = (number, number2) => {
    console.log(number);
    console.log(number2);
};
mensaje3(100, 20);
mensaje3(100);
const mensaje4 = (number, number2 = 'abc') => {
    console.log(number);
    console.log(number2);
};
mensaje4(100);
mensaje4(100, 200);
mensaje4(100, 'hola');
const mensaje5 = (number, number2) => {
    console.log(number);
    console.log(number2);
};
