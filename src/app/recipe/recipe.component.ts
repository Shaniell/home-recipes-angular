import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../models/recipe';
import { Ingredient } from '../models/ingredient';


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  @Input()
  RecipeId: string = "1";

  recipe: Recipe;

  ingredients: Ingredient[] = [];

  isEdit: Boolean = true;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.getRecipe(this.RecipeId).then(data=>{
      this.recipe = data;

      
      this.recipeService.getRecipeIngredients(this.RecipeId).then(ing=>{
        this.ingredients = ing;
      });
    })
  }

}
