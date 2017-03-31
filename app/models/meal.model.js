"use strict";
var Meal = (function () {
    function Meal(name, calories, details) {
        this.name = name;
        this.calories = calories;
        this.details = details;
        this.mealId = Meal.idCounter;
        Meal.idCounter++;
    }
    ;
    Meal.prototype.addMeal = function () {
        Meal.history.push(this);
    };
    Meal.idCounter = 1;
    Meal.history = [
        new Meal('Tortillas, jam, cheese', 565, 'So delicious and frugal'),
        new Meal('Tortillas, jam, cheese', 565, 'Still lovin\' it'),
        new Meal('Tortillas, jam, cheese', 565, 'Keeping myself regular'),
        new Meal('Tortillas, jam, cheese', 565, 'On a roll, I mean tortilla'),
        new Meal('Tortillas, cheese', 358, 'Out of Jam :('),
        new Meal('Tortillas, jam, cheese', 565, 'Back in business baby!'),
        new Meal('Tortillas, jam, cheese', 565, 'I wish I had money'),
        new Meal('Tortillas, jam, cheese', 565, 'Oh god make it stop'),
    ];
    return Meal;
}());
exports.Meal = Meal;
//# sourceMappingURL=meal.model.js.map