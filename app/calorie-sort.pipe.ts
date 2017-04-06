import { Pipe, PipeTransform } from '@angular/core';
import { Meal } from './models/meal.model';

@Pipe({
  name: "calorieSorter",
  pure: false
})

export class CaloriePipe implements PipeTransform {
  // I know it's not good practice to reference external variables like this, but I don't like exploring new stuff on fridays. I'm going to go home and research how to update local variables asynchronously based on @Input calls, which is why I ended up just making static variables in Meal to hold the filter data.
  transform(input: Meal[]) {
    let output: Meal[] = [];
    for(let meal of input) {
      console.log("The type of the item is " + typeof(meal.calories));
      if (Meal.filterDirection) {
        if (meal.calories > Meal.filterAmount) {
          output.push(meal);
        }
      } else {
        if (meal.calories < Meal.filterAmount) {
          output.push(meal);
        }
      }
    }
    return output;
  }
}
