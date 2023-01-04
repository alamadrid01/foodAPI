import { Injectable } from '@nestjs/common';
import { Meal } from './meal.model';
@Injectable()
export class MealService {
  // Create a private variable to store the meal data
  private readonly meals: Meal[] = [];

  // Create a function to add a meal to the meal data
  createMeal(name: string, description: string, price: string) {
    // const newMeal = new Meal(Math.random(), name, description, price);
    // this.meals.push(newMeal);
    const id = Math.random();
    const newMeal = this.meals.push(new Meal(id, name, description, price));
    if (!newMeal) {
      return 'Meal not created';
    }
    return id;
  }

  // Create a function to return all the meals in the meal data
  findMeal(): any {
    return [...this.meals];
  }
}
