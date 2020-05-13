import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from '../models/ingredient';
import { IngredientService } from '../services/ingredient.service';

@Component({
  selector: 'app-ingredients-list',
  templateUrl: './ingredients-list.component.html',
  styleUrls: ['./ingredients-list.component.scss']
})
export class IngredientsListComponent implements OnInit {

  @Input()
  ingredients : Ingredient[] = [];

  @Input()
  isEditMode : Boolean = true;

  @Input()
  recipeId:string;

  constructor(private ingredientsService: IngredientService) { }

  ngOnInit(): void {
    this.ingredientsService.GetIngredients(this.recipeId).then(data=>{
      this.ingredients = data;
      console.log(this.ingredients);
    })
  }

  addIngredient(ing : Ingredient): void {
    this.ingredientsService.AddIngredient(this.recipeId, ing).then(data=>{
      this.ingredients = data;
    })
  }

  removeIngedient(ing : Ingredient): void {
    this.ingredientsService.RemoveIngredient(this.recipeId, ing).then(data=>{
      console.log(data);
      this.ingredients = data;
    })
  }

  




}
