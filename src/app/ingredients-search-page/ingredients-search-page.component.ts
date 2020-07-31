import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Ingredient } from '../models/ingredient';
import { Recipe } from '../models/recipe';
import { RecipeService } from '../services/recipe.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-ingredients-search-page',
  templateUrl: './ingredients-search-page.component.html',
  styleUrls: ['./ingredients-search-page.component.scss']
})
export class IngredientsSearchPageComponent implements OnInit {

  ingredients: Ingredient[] = [];
  recipes: Recipe[] = [];
  recipeListStore: Observable<{recipes: Recipe[]}>;
  recipesDisplay: Recipe[] = [];

  constructor(private recipeSrv: RecipeService,
              private store: Store<{recipe: {recipes: Recipe[], selectedRecipe: Recipe}}>) { }

  ngOnInit(): void {
    this.recipeSrv.getAllRecipes();
    
    this.recipeListStore = this.store.select('recipe');
    this.recipeListStore.subscribe(recipes=>{
      this.recipesDisplay = Object.create(recipes.recipes);

      if (this.recipes.length == 0){
        this.recipes = Object.create(recipes.recipes);
      }
    })
  }

  dataChanged(ing: Ingredient[]) {
    let recipes = [];

    let ings = [];
    this.recipes.forEach(rec => {
      ings = Object.create(ing.map(i => i.ingredientName.toLowerCase()));

      rec.directions.forEach(d => {
        d.ingrediantsUsed.forEach(i => {


          let index = ings.indexOf(i.ingredientName.toLowerCase());
          if (index != -1) {

            ings.splice(index, 1);

            
          }
        });
      });

      if (ings.length == 0) {
        recipes.push(rec._id);
      }

    });
    
    this.recipesDisplay = Object.create(this.recipes.filter(rec => recipes.indexOf(rec._id) != -1));
    this.recipeSrv.getRecipes(this.recipesDisplay);
  }

}
