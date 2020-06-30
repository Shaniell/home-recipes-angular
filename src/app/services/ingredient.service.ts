import { Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient';
import { Observable } from 'rxjs';
import { rejects } from 'assert';

@Injectable({
  providedIn: 'root'
})

export class IngredientService {

  private localdbIngredients: Ingredient[] = [];

  constructor() { }

  GetIngredients(recipeId : string, directionId: string) : Promise<Ingredient[]>{
    let res:Ingredient[] = [];

    res = [
      new Ingredient("sugar", 2, "table spoons"),
      new Ingredient("salt", 2, "tea spoons"),
      new Ingredient("flour", 500, "gram"),
      new Ingredient("Yeast", 1, "table spoon"),
      new Ingredient("Oil", 1, "cup"),
      new Ingredient("water", 2, "cups")
    ];

    this.localdbIngredients = res;

    return new Promise((resolve,reject)=>{
      resolve(this.localdbIngredients);
    });
  }

  RemoveIngredient(recipeId : string, directionId: string, ingredient: Ingredient)  : Promise<Ingredient[]>{

    let index = this.localdbIngredients.findIndex(x=> x.ingredientName == ingredient.ingredientName);
    this.localdbIngredients.splice(index,1);

    return new Promise((resolve,reject)=>{
      resolve(this.localdbIngredients);
    });

    return Observable.create(observer=>{
      observer.next(this.localdbIngredients);

    });
  }


  AddIngredient(recipeId : string, directionId: string, ingredient: Ingredient)  :  Promise<Ingredient[]>{

    this.localdbIngredients.push(ingredient);

    return new Promise((resolve,reject)=>{
      resolve(this.localdbIngredients);
    });

    return Observable.create(observer=>{
      observer.next(this.localdbIngredients);

    });
  }
}
