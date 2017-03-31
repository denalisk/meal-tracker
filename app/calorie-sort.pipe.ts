import { Pipe, PipeTransform } from '@angular/core';
import { Meal } from './models/meal.model';

@Pipe({
  name: "calorieSorter";
  pure: false;
})

export class CaloriePipe implements PipeTransform {
  transform(input: Meal[], calorieCutoff: number) {
    let output: Meal[] = [];
    for(let meal of input) {
      if (meal.calories < calorieCutoff) {
        output.push(meal);
      }
    }
    return output;
  }
}
