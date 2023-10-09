"use strict";
const objeto1 = {
    type: 'run',
    distance: 8,
    format() {
        return `${this.type} - ${this.distance}`;
    },
};
class longTraining {
    constructor(type, distance) {
        this.type = type;
        this.distance = distance;
    }
    format() {
        return `${this.type} - ${this.distance}`;
    }
}
const entrenamiento1 = new longTraining('run', 8);
console.log(entrenamiento1);
class longTraining2 {
    constructor(distance) {
        this.distance = distance;
        this.type = 'Interval';
    }
    format() {
        return `WERE EVERY 1KM YOU RUN 1MIN`;
    }
}
const entrenamiento2 = new longTraining2(8);
console.log(entrenamiento2);
class runngintraiing {
    constructor(distance, date) {
        this.distance = distance;
        this.date = date;
        this.type = 'Runnging ';
    }
    format() {
        return `${this.type} - ${this.distance} - ${this.date}`;
    }
}
const entrenamiento3 = new runngintraiing(8, '2020-10-10');
console.log(entrenamiento3);
const entramientos = [
    entrenamiento1,
    entrenamiento2,
    entrenamiento3
];
entramientos.forEach((entrenamiento) => {
    console.log(entrenamiento.format());
});
