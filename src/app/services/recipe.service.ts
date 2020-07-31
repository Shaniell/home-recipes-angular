import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../models/recipe';
import { Direction } from '../models/direction';
import { Ingredient } from '../models/ingredient';
import { TimeDuration } from '../helpers/TimeDuration';
import { Subject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { promise } from 'protractor';
import { Store } from '@ngrx/store';
import * as RecipeActions from '../store/recipe.actions';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private selectedRecipeId = "";
  private selectedRecipe: Recipe;
  private allRecipes: Recipe[];

  constructor(private http: HttpClient,
    private store: Store<{ recipe: { recipes: Recipe[], selectedRecipe: Recipe } }>) { }

  selectRecipe(recipe: Recipe) {
    //this.selectedRecipeId = recipe._id;
    this.getRecipe(recipe);
  }



  getRecipe(recipe: Recipe) {
    this.store.dispatch(new RecipeActions.GetRecipe(recipe));
  }


  getAllRecipes() {
    this.http.get<Recipe[]>(`${environment.apiUrl}/recipes`).subscribe((recipes: Recipe[]) => {
      this.store.dispatch(new RecipeActions.GetAllRecipes(recipes));
    });
  }

  getRecipes(recipes: Recipe[]) {
      this.store.dispatch(new RecipeActions.GetAllRecipes(recipes));
  }

  UpdateStore(recipe: Recipe){
    this.store.dispatch(new RecipeActions.UpdateRecipe(recipe));
  }

  updateRecipe(recipe: Recipe): Observable<Recipe> {
    // return new Promise((res, rej) => {
    //   let index = this.recipes.findIndex(x => x.id == recipe.id)
    //   this.recipes[index] = recipe;

    //   res(this.recipes[index]);
    // });

    //recipe.ingredients = [...this.updateRecipeIngredients(recipe)];
    this.store.dispatch(new RecipeActions.UpdateRecipe(recipe));
    return this.http.patch<Recipe>(`${environment.apiUrl}/recipes/${recipe._id}`, recipe);
  }

  deleteRecipe(recipe: Recipe): Observable<Recipe> {
    // return new Promise((res, rej) => {
    //   let index = this.recipes.findIndex(x => x.id == recipeId)
    //   this.recipes.splice(index, 1);

    //   res(this.recipes);
    // });

    return this.http.delete<Recipe>(`${environment.apiUrl}/recipes/${recipe._id}`);
  }

  newRecipe(name): Observable<Recipe> {
    //let newRecipeId = new Date().toString();
    let newRecipe = new Recipe();
    //newRecipe.recipeName = name;
    //this.recipes.push(newRecipe);

    //this.selectRecipe(newRecipeId);
    return this.http.post<Recipe>(`${environment.apiUrl}/recipes`, newRecipe);
  }

  updateRecipeDirections(recipe: Recipe, direction: Direction) {


    var currRecipe = { ...recipe };
    var newDir = {};

    if (direction._id != null) {
      let i = currRecipe.directions.findIndex(x => x._id == direction._id);
      if (i == -1) {
        delete direction._id;
        currRecipe.directions.push(direction);
      } else {
        let dirs = [...currRecipe.directions];
        dirs[i] = direction;
        currRecipe.directions= dirs;
      }
    }
    else {
      delete direction._id;

      let dirs = currRecipe.directions.map(x => x);
      dirs.push({ ...direction });
      currRecipe.directions = dirs;
    }
    currRecipe.ingredients = [...this.updateRecipeIngredients(currRecipe)];

    //this.updateRecipeIngredients(currRecipe);

    this.updateRecipe(currRecipe).subscribe(res => {
      this.store.dispatch(new RecipeActions.UpdateRecipe(res));
    });
  }

  deleteRecipeDirections(recipe: Recipe, direction: Direction) {

    let directions = [...recipe.directions];


    var i = recipe.directions.findIndex(x => x._id == direction._id)
    directions.splice(i, 1);

    recipe.directions = directions;

    this.updateRecipe(recipe)

  }

  updateRecipeIngredients(recipe: Recipe): Ingredient[] {
    var ingredients = [];
    var directions = Object.create(recipe.directions);
    var ingredientsObject: any = {};
    
    directions.forEach(x => {
      var ing = [];
      x.ingrediantsUsed.forEach(a => {
        ing.push({...a});
      });
      ing.forEach(y => {
        if (ingredientsObject[y.ingredientName] == null) {
          ingredientsObject[y.ingredientName] = y;
        }
        else {
          ingredientsObject[y.ingredientName].amount += Number(y.amount);
        }
      });
    });
    
    Object.keys(ingredientsObject).forEach(x => ingredients.push(ingredientsObject[x]));
    return ingredients;
  }
}
