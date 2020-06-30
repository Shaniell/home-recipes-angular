import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../models/ingredient';
import { IngredientService } from '../services/ingredient.service';

@Component({
  selector: 'app-ingredients-list',
  templateUrl: './ingredients-list.component.html',
  styleUrls: ['./ingredients-list.component.scss']
})
export class IngredientsListComponent implements OnInit{

  @Input()
  ingredients : Ingredient[] = [];

  @Input()
  isEditMode : Boolean = true;

  @Input()
  isNameOnly:Boolean = false;

  @Output()
  DataChanged:EventEmitter<Ingredient[]> = new EventEmitter<Ingredient[]>();

  constructor(private ingredientsService: IngredientService) { }
  
  

  ngOnInit(): void {
    // this.ingredientsService.GetIngredients(this.recipeId, this.directionId).then(data=>{
    //   this.ingredients = data;
    // })
  }

  addIngredient(ing : Ingredient): void {
    // this.ingredientsService.AddIngredient(this.recipeId, this.directionId, ing).then(data=>{
      this.ingredients.push(ing);
      this.DataChanged.emit(this.ingredients);
    // })
  }

  removeIngedient(ing : Ingredient): void {
    // this.ingredientsService.RemoveIngredient(this.recipeId, this.directionId, ing).then(data=>{
      let index = this.ingredients.findIndex(x=> x.ingredientName == ing.ingredientName);
      this.ingredients.splice(index, 1);
      this.DataChanged.emit(this.ingredients);
    // })
  }

  




}
