import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { MealService } from './meal.service';

@Controller('meal')
export class MealController {
  constructor(private readonly mealService: MealService) {}
  @Post()
  inputMeal(
    @Body('name') name: string,
    @Body('description') description: string,
    @Body('price') price: string,
  ) {
    const generatedData = this.mealService.createMeal(name, description, price);
    return { id: generatedData };
  }

  @Get()
  getAllMeal(): any {
    return this.mealService.findMeal();
  }

  @Get(':id')
  getSingleMeal(@Param('id') mealId: string): any {
    const mealData = this.mealService.findSingleMeal(mealId);
    return { mealData };
  }
}
