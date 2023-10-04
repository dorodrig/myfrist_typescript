//funciones para typescript
/**
 * @param {number} radio // documentacion para el parametro 
 * @returns {number}// documentacion para el retorno 
 * 
 */
//funcion para calcular el area de un circulo
const areacirculo = (radio:number) => {
    //En la libreria Math de JS se encuentra PI como constante y pow para elevar un numero a una potencia
        return Math.PI * Math.pow(radio, 2);
};
//al indicar que estipo number no se puede asignar un string
//let area = areacirculo("string error");
let area = areacirculo(5);

const mensaje = (numero:number, numero2:string|number)=> {
    console.log(numero);
    console.log(numero2);
}
//parametros con union para que acepte mas de un tipo de dato
mensaje(123, "hola");
// parametros con valor por defecto
const mensaje2 =(parametro1:number = 10)=>{
    console.log(parametro1);
}
//con valor explicito
mensaje2(2);
//con valor por defecto
mensaje2();
// tiene un parametro asignado y con ? le indicamos que es opcional
const mensaje3 = (number:number, number2?:number)=>{
    console.log(number);
    console.log(number2);
}
// le asigno los dos parametros
mensaje3(100,20);
// le asigno solo el primer parametro ya que el segundo es opcional
mensaje3(100);
// le asigno solo el primer parametro  
const mensaje4 = (number : number, number2:number|string='abc')=>{
    console.log(number);
    console.log(number2);
}
mensaje4(100);
mensaje4(100,200);
mensaje4(100,'hola');

const mensaje5 = (number : number, number2?:number|string)=>{
    console.log(number);
    console.log(number2);
}
