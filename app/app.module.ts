import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }  from '@angular/forms';
import { NgModule } from '@angular/core';
import { MealListComponent } from './meal-list.component';
import { NewMealComponent } from './new-meal.component';
import { EditMealComponent } from './edit-meal.component';
import { CaloriePipe } from './calorie-sort.pipe';


@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, MealListComponent, NewMealComponent, EditMealComponent, CaloriePipe ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
