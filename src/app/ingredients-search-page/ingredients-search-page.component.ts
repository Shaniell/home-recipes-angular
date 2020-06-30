import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Ingredient } from '../models/ingredient';
import { Recipe } from '../models/recipe';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-ingredients-search-page',
  templateUrl: './ingredients-search-page.component.html',
  styleUrls: ['./ingredients-search-page.component.scss']
})
export class IngredientsSearchPageComponent implements OnInit {

  ingredients: Ingredient[] = [];
  recipes: Recipe[] = [];
  recipesDisplay: Recipe[] = [];

  constructor(private recipeSrv: RecipeService) { }

  ngOnInit(): void {
    this.recipeSrv.getAllRecipes().then(data => {
      this.recipes = data;
      this.recipesDisplay = Object.create(data);
    });
  }

  dataChanged(ing: Ingredient[]) {

    let recipes = [];

    let ings = [];
    this.recipes.forEach(rec => {
      ings = Object.create(ing.map(i => i.ingredientName));

      rec.directions.forEach(d => {
        d.ingrediantsUsed.forEach(i => {


          let index = ings.indexOf(i.ingredientName);
          if (index != -1) {

            ings.splice(index, 1);

            
          }
        });
      });

      if (ings.length == 0) {
        recipes.push(rec.id);
      }

    });
    
    this.recipesDisplay = Object.create(this.recipes.filter(rec => recipes.indexOf(rec.id) != -1));
  }

}
