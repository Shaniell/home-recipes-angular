import { Recipe } from '../models/recipe';
import { Action } from '@ngrx/store';
import * as RecipeActions  from './recipe.actions';
import { stat } from 'fs';
import { Ingredient } from '../models/ingredient';
import { Direction } from '../models/direction';
import { TimeDuration } from '../helpers/TimeDuration';
import { ɵangular_packages_platform_browser_dynamic_platform_browser_dynamic_a } from '@angular/platform-browser-dynamic';

const initialState= {
    recipes: [],
    selectedRecipe: new Recipe()
};

export function RecipeReducer(state = initialState, action: RecipeActions.RecipeActions){
    switch(action.type){
        case RecipeActions.ADD_RECIPE:
            return {
                ...state,
                recipes: [...state.recipes, action.payload],
                selectedRecipe: action.payload
            }
        case RecipeActions.GET_ALL_RECIPES:
            return {
                ...state,
                recipes: [...action.payload]
            }
        case RecipeActions.GET_RECIPE:{
            var res = {
                ...state,
                selectedRecipe: action.payload
            };
            return res;
        }
        case RecipeActions.UPDATE_RECIPE:

            let updatedRecipe = state.recipes.findIndex(x=> x._id == action.payload._id)
            let newRecipes = [...state.recipes];
            
            newRecipes[updatedRecipe] = action.payload;

            return {
                ...state,
                recipes: newRecipes,
                selectedRecipe: action.payload
            }
        case RecipeActions.DELETE_RECIPE:

            let rec = [...state.recipes];

            rec.splice(rec.findIndex(x=> x._id == action.payload._id), 1);

            return {
                ...state,
                recipes: rec,
                selectedRecipe: new Recipe() 
            }
        default:
            return state;
        
    }
}

