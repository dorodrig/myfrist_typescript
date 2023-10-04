//Programacion orientada a objetos en typescript OPP

// con valores declarados

let movies={
    title: "Thor",
    genero: "Accion",
    yer: 2011
}
console.log(movies);

//asignacion de variables
let movies2:{
    title: string,
    genero: string,
    yer: number
}
movies2={
    title: "Iron man",
    genero: "Accion",
    yer: 2008,
    //debe cumplir con los valores declarados en el objeto
    //director: "Jon Favreau"
}
console.log(movies2);

//clases en typescript Y EMACSCRIPT 6
//este es un ejemplo de una clase en typescript con valores default  (sin constructor)

class Training{
    type: string="Traingin run";
    distance: number=0;
    date: string="";
}
//creacion de una instancia de la clase
const t1 = new Training();
console.log(t1);
//clase con constructor
class Training2{
    type: string;
    distance: number;
    date: string;
    //constructor
    constructor(type:string,distance:number,date:string){
        this.type=type;
        this.distance=distance;
        this.date=date;
    }
}
//creacion de una instancia de la clase
//como tiene un constructor debe cumplir con los valores declarados en el constructor sino genera error
//const t2 = new Training2();
const t2 = new Training2("Running",10,"04/10/2023");
console.log(t2);
const t3 = new Training2("Running",9,"04/10/2023");
console.log(t3);

//todas las propiedades son publicas
class Training3{
    readonly type: string="Traingin run";
    public distance: number=0;
    public date: string="";
    private _comments: string=""; //solo se puede acceder desde la clase
    //setters
    public set comments(comments:string){
        this ._comments=comments;
    }
    //getters
    public get comments(){
        return this._comments;
    }
}
const t4 = new Training3();
//genera errror porque es una propiedad solo de lectura
//t4.type="LONG RUN";
t4.distance=15;
console.log(t4);
t4.comments="It was a good training";
console.log(t4.comments);
