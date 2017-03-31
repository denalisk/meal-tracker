import { Pipe, PipeTransform } from '@angular/core';
import { Meal } from './models/meal.model';

@Pipe({
  name: "calorieSorter",
  pure: false
})

export class CaloriePipe implements PipeTransform {
  transform(input: Meal[], filterData: any[]) {
    let output: Meal[] = [];
    for(let meal of input) {
      if (filterData[0]) {
        if (meal.calories > filterData[1]) {
          output.push(meal);
        }
      } else {
        if (meal.calories < filterData[1]) {
          output.push(meal);
        }
      }
    }
    return output;
  }
}
