import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../models/recipe';
import { Ingredient } from '../models/ingredient';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  @Input()
  RecipeId: string = "";

  @Input()
  isEdit: Boolean = false;

  recipe: Recipe = new Recipe();

  ingredients: Ingredient[] = [];

  isNew: Boolean = false;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {

    if (this.RecipeId != "") {

      this.recipeService.getRecipe(this.RecipeId).then(data => {
        this.recipe = data;


        this.recipeService.getRecipeIngredients(this.RecipeId).then(ing => {
          this.ingredients = ing;
        });
      })
    }


    this.recipeService.recipeIdObservable().subscribe(recipeId => {
      if (recipeId != "") {
        this.RecipeId = recipeId;

        this.recipeService.getRecipe(this.RecipeId).then(data => {
          this.recipe = data;


          this.recipeService.getRecipeIngredients(this.RecipeId).then(ing => {
            this.ingredients = ing;
          });
        })
      }
    })
  }

  updateIngredientsList(){
    this.recipeService.getRecipeIngredients(this.RecipeId).then(ing => {
      this.ingredients = ing;
    });
  }

  deleteRecipe(){
    this.recipeService.deleteRecipe(this.RecipeId).then(recipes => {
      this.RecipeId = "";
    });
  }

}
