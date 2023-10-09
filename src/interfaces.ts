//import { type } from "os";

//No se crean objetos con interfaces, solo se definen las propiedades y tipos de datos que tendrá un objeto
interface ITraining {
    type: string
    distance: number
    format(): string
}
//objeto1 es de tipo JSON
const objeto1: ITraining = {
    type: 'run',
    distance :8,
    format():string {
        return `${this.type} - ${this.distance}`
    },
    
}
// este objeto trae los mismos atributos que el objeto1 
class longTraining implements ITraining{
    constructor(public  type:string,public  distance:number){

    }
    format(): string {
        return `${this.type} - ${this.distance}`
    }
}
const entrenamiento1 = new longTraining('run',8);
console.log(entrenamiento1);
// otro manera de llamar las clases que herende de un interface
class longTraining2 implements ITraining{
   readonly type : string;
    constructor(public  distance:number){
       this.type ='Interval'
    }
    format(): string {
        return `WERE EVERY 1KM YOU RUN 1MIN`
    }
}
const entrenamiento2 = new longTraining2(8);
console.log(entrenamiento2);

class runngintraiing implements ITraining{
    readonly type : string;
    constructor(public distance:number,public date : string){
         this.type ='Runnging '
    }
    format(): string {
        return `${this.type} - ${this.distance} - ${this.date}`
    }
}
const entrenamiento3 = new runngintraiing(8,'2020-10-10');
 console.log(entrenamiento3);
// un array que tomas las clases que heredan de un interface
 const entramientos: ITraining[] = [
        entrenamiento1,
        entrenamiento2,
        entrenamiento3
 ];
 // recorre el array y muestra los datos
 entramientos.forEach((entrenamiento) => {
     console.log(entrenamiento.format());     
 })
