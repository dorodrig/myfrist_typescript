"use strict";
var TrainingType;
(function (TrainingType) {
    TrainingType[TrainingType["TRAINING_RUN"] = 0] = "TRAINING_RUN";
    TrainingType[TrainingType["INTERVALS"] = 1] = "INTERVALS";
    TrainingType[TrainingType["LONG_RUN"] = 2] = "LONG_RUN";
})(TrainingType || (TrainingType = {}));
let trainingType = TrainingType.INTERVALS;
trainingType = TrainingType.LONG_RUN;
trainingType = 1;
console.log(trainingType);
