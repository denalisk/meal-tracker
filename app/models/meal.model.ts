export class Meal {
  public mealId: number;


  constructor(public name: string, public calories: number, public details: string) {
    this.mealId = Meal.idCounter;
    Meal.idCounter++;
  };

  public static idCounter: number = 1;
  public static filterAmount: number = 0;
  public static filterDirection: boolean = true;

  public static history: Meal[] = [
    new Meal('Tortillas, jam, cheese', 565, 'So delicious and frugal'),
    new Meal('Tortillas, jam, cheese', 565, 'Still lovin\' it'),
    new Meal('Tortillas, jam, cheese', 565, 'Keeping myself regular'),
    new Meal('Tortillas, jam, cheese', 565, 'On a roll, I mean tortilla'),
    new Meal('Tortillas, cheese', 358, 'Out of Jam :('),
    new Meal('Tortillas, jam, cheese', 565, 'Back in business baby!'),
    new Meal('Tortillas, jam, cheese', 565, 'I wish I had money'),
    new Meal('Tortillas, jam, cheese', 565, 'Oh god make it stop'),
  ];

  addMeal() {
    Meal.history.push(this);
  }
}
