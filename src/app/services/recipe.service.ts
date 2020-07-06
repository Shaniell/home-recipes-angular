import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../models/recipe';
import { Direction } from '../models/direction';
import { Ingredient } from '../models/ingredient';
import { TimeDuration } from '../helpers/TimeDuration';
import { Subject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  public recipeSelectedEvent: Subject<string> = new Subject<string>();
  private selectedRecipeId = "";
  private selectedRecipe: Recipe;
  private allRecipes: Recipe[];

  // private recipes: Recipe[] = [
  //   new Recipe("1",
  //   "1",
  //   true,
  //     "Cookies",
  //     "https://nitrocdn.com/pYazsaHOTWIueLckVEtXQdYLdaoHaWlC/assets/static/optimized/wp-content/uploads/2016/01/1a437be9d7e1246fc31c5da740a497a2.best-chocolate-chip-cookies-recipe-ever-no-chilling-1-e1549147195343.jpg",
  //     [new Ingredient("tomato", 1, "unit"), new Ingredient("cucumber", 1, "unit")],
  //     [new Direction("1", "1", "juleans", "cut", [new Ingredient("tomato", 1, "unit"), new Ingredient("cucumber", 1, "unit")], null),
  //     new Direction("2", "1", "", "cook", [new Ingredient("tomato", 1, "unit")], new TimeDuration(20, 50, 3))]
  //   ),

  //   new Recipe("2",
  //   "1",
  //   true,
  //     "Salad",
  //     "https://www.cookingclassy.com/wp-content/uploads/2019/11/best-salad-7-600x900.jpg",
  //     [],
  //     [new Direction("1", "1", "juleans", "cut", [new Ingredient("tomato", 1, "unit"), new Ingredient("cucumber", 1, "unit")], null),
  //     new Direction("2", "1", "", "cook", [], new TimeDuration(20, 50, 3))]
  //   ),
  //   new Recipe("3",
  //   "1",
  //   true,
  //     "Pasta",
  //     "https://images.immediate.co.uk/production/volatile/sites/2/2018/11/OnePotPasta-47b5b0a.jpg?webp=true&quality=90&resize=728%2C309",
  //     [],
  //     [new Direction("1", "1", "juleans", "cut", [new Ingredient("tomato", 1, "unit"), new Ingredient("cucumber", 1, "unit")], null),
  //     new Direction("2", "1", "", "cook", [], new TimeDuration(20, 50, 3))]
  //   ),
  //   new Recipe("4",
  //   "1",
  //   true,
  //     "Sushi",
  //     "https://media-cdn.tripadvisor.com/media/photo-o/17/5b/e1/a2/dom-sushi-gdansk.jpg",
  //     [],
  //     [new Direction("1", "1", "juleans", "cut", [new Ingredient("tomato", 1, "unit"), new Ingredient("cucumber", 1, "unit")], null),
  //     new Direction("2", "1", "", "cook", [], new TimeDuration(20, 50, 3))]
  //   ),
  //   new Recipe("5",
  //   "1",
  //   true,
  //     "Kurze",
  //     "https://media-cdn.tripadvisor.com/media/photo-o/1a/19/c9/03/this-is-kurze-with-broth.jpg",
  //     [],
  //     [new Direction("1", "1", "juleans", "cut", [new Ingredient("tomato", 1, "unit"), new Ingredient("cucumber", 1, "unit")], null),
  //     new Direction("2", "1", "", "cook", [], new TimeDuration(20, 50, 3))]
  //   ),
  //   new Recipe("6",
  //   "1",
  //   true,
  //     "Burger",
  //     "https://www.bora.com/fileadmin/_processed_/7/c/csm_55_TeamEdition_Canada_Halloumi-Burger_142d3295df.jpg",
  //     [],
  //     [new Direction("1", "1", "juleans", "cut", [new Ingredient("tomato", 1, "unit"), new Ingredient("cucumber", 1, "unit")], null),
  //     new Direction("2", "1", "", "cook", [], new TimeDuration(20, 50, 3))]
  //   )
  // ]

  constructor(private http: HttpClient) { }

  selectRecipe(recipeId: string) {
    console.log("select Recipe");
    this.selectedRecipeId = recipeId;
    this.getRecipe(this.selectedRecipeId).subscribe((data: Recipe) => {
      this.selectedRecipe = data;
    });
    this.recipeSelectedEvent.next(recipeId);
  }

  recipeIdObservable() {
    return this.recipeSelectedEvent.asObservable();
  }

  getRecipe(recipeId: string): Observable<Recipe> {
    // return new Promise((res, rej) => {
    //   res(this.recipes.filter(x => x.id == recipeId)[0]);
    // });
    console.log("Get Recipe");
    return this.http.get<Recipe>(`${environment.apiUrl}/recipes/${recipeId}`);
  }

  getAllRecipes(): Observable<Recipe[]> {
    // return new Promise((res, rej) => {
    //   res(this.recipes);
    // });
    console.log("getAll Recipes");
    return this.http.get<Recipe[]>(`${environment.apiUrl}/recipes`);
  }

  updateRecipe(recipe: Recipe): Observable<Recipe> {
    // return new Promise((res, rej) => {
    //   let index = this.recipes.findIndex(x => x.id == recipe.id)
    //   this.recipes[index] = recipe;

    //   res(this.recipes[index]);
    // });

    console.log("update Recipe");
    return this.http.patch<Recipe>(`${environment.apiUrl}/recipes/${recipe._id}`, recipe);
  }

  deleteRecipe(recipeId): Observable<Recipe> {
    // return new Promise((res, rej) => {
    //   let index = this.recipes.findIndex(x => x.id == recipeId)
    //   this.recipes.splice(index, 1);

    //   res(this.recipes);
    // });
    console.log("delete Recipe");
    return this.http.delete<Recipe>(`${environment.apiUrl}/recipes/${recipeId}`);
  }

  newRecipe(name): Observable<Recipe> {
    //let newRecipeId = new Date().toString();
    let newRecipe = new Recipe();
    //newRecipe.recipeName = name;
    //this.recipes.push(newRecipe);

    //this.selectRecipe(newRecipeId);
    console.log("new Recipe");
    console.log(newRecipe);
    return this.http.post<Recipe>(`${environment.apiUrl}/recipes`, newRecipe);
  }

  async updateRecipeDirections(recipeId: string, direction: Direction): Promise<Recipe> {
    //var currentDir = Object.create(direction);
    //console.log(direction);
    // return new Promise((res, rej) => {
    //   var index = this.recipes.findIndex(x => x._id == recipeId)
    //   if (direction.id != "") {
    //     let i = this.recipes[index].directions.findIndex(x => x.id == direction.id);
    //     this.recipes[index].directions[i] = direction;
    //   }
    //   else {
    //     direction.id = new Date().toString();

    //     this.recipes[index].directions.push(direction);
    //   }



    //   res(this.recipes[index].directions);
    // });

    console.log("updateRecipeDirections");
    console.log(direction);

    return new Promise<Recipe>((res, rej) => {


      var recipeObservable: Observable<Recipe>;
      var recipe;

      this.http.get(`${environment.apiUrl}/recipes/${recipeId}`).subscribe((data: Recipe) => {
        recipe = data

        if (direction._id != "") {
          let i = recipe.directions.findIndex(x => x._id == direction._id);

          if (i == -1){
            delete direction._id;
            recipe.directions.push(direction);
          }else{
            recipe.directions[i] = direction;
          }
        }
        else {
          recipe.directions.push(direction);
        }

        console.log(recipe);
        this.http.patch<Recipe>(`${environment.apiUrl}/recipes/${recipeId}`, recipe).subscribe((data: Recipe) => {
          res(data);
        });
      });
    });

  }

  async deleteRecipeDirections(recipeId: string, direction: Direction): Promise<Recipe> {
    // //var currentDir = Object.create(direction);
    // return new Promise((res, rej) => {
    //   var index = this.recipes.findIndex(x => x._id == recipeId)

    //   var i = this.recipes[index].directions.findIndex(x => x.id == direction.id);
    //   this.recipes[index].directions.splice(i, 1);

    //   res(this.recipes[index].directions);
    // });

    return new Promise((res, rej) => {


      console.log("deleteRecipeDirections");
      let recipeObservable: Observable<Recipe>;

      this.getRecipe(recipeId).subscribe((recipe: Recipe) => {

        var i = recipe.directions.findIndex(x => x._id == direction._id)
        recipe.directions.splice(i, 1);

        this.http.patch<Recipe>(`${environment.apiUrl}/recipes/${recipeId}`, recipe).subscribe((rec: Recipe) => {
          res(rec);
        });
      });
    });
  }

  updateRecipeIngredients(recipeId: string): Promise<Ingredient[]> {
    console.log("updateRecipeIngredients");
    return new Promise((res, rej) => {
      this.getRecipe(recipeId).subscribe((recipe: Recipe) => {
        var directions = Object.create(recipe.directions);
        var ingredients: any = {};
        directions.forEach(x => {
          var ing = x.ingrediantsUsed.map(a => Object.create(a));
          ing.forEach(y => {
            if (ingredients[y.ingredientName] == null) {
              ingredients[y.ingredientName] = y;
            }
            else {
              ingredients[y.ingredientName].amount += Number(y.amount);
            }
          });

          recipe.ingredients = [];
          Object.keys(ingredients).forEach(x => recipe.ingredients.push(ingredients[x]));
          this.http.patch<Recipe>(`${environment.apiUrl}/recipes/${recipeId}`, recipe).subscribe((data: Recipe) => {
            res(data.ingredients);
          });
        });
      })
    });
  }

  getRecipeIngredients(recipeId: string): Promise<Ingredient[]> {
    console.log("getRecipeIngredients");

    return new Promise((res, rej) => {
      this.getRecipe(recipeId).subscribe((recipe: Recipe) => {
        res(recipe.ingredients);
      });
    });
  }
}
