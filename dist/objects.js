"use strict";
let movies = {
    title: "Thor",
    genero: "Accion",
    yer: 2011
};
console.log(movies);
let movies2;
movies2 = {
    title: "Iron man",
    genero: "Accion",
    yer: 2008,
};
console.log(movies2);
class Training {
    constructor() {
        this.type = "Traingin run";
        this.distance = 0;
        this.date = "";
    }
}
const t1 = new Training();
console.log(t1);
class Training2 {
    constructor(type, distance, date) {
        this.type = type;
        this.distance = distance;
        this.date = date;
    }
}
const t2 = new Training2("Running", 10, "04/10/2023");
console.log(t2);
const t3 = new Training2("Running", 9, "04/10/2023");
console.log(t3);
class Training3 {
    constructor() {
        this.type = "Traingin run";
        this.distance = 0;
        this.date = "";
        this._comments = "";
    }
    set comments(comments) {
        this._comments = comments;
    }
    get comments() {
        return this._comments;
    }
}
const t4 = new Training3();
t4.distance = 15;
console.log(t4);
t4.comments = "It was a good training";
console.log(t4.comments);
