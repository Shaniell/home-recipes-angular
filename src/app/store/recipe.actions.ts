import { Action } from '@ngrx/store';
import { Recipe } from '../models/recipe';

export const ADD_RECIPE='ADD_RECIPE';
export const GET_ALL_RECIPES='GET_ALL_RECIPES';
export const GET_RECIPE='GET_RECIPE';
export const DELETE_RECIPE='DELETE_RECIPE';
export const UPDATE_RECIPE='UPDATE_RECIPE';

export class AddRecipe implements Action{
    readonly type = ADD_RECIPE;

    constructor(public payload: Recipe){}
}

export class GetAllRecipes implements Action{
    readonly type = GET_ALL_RECIPES;

    constructor(public payload: Recipe[]){}
}

export class GetRecipe implements Action{
    readonly type = GET_RECIPE;

    constructor(public payload: Recipe){}
}

export class DeleteRecipe implements Action{
    readonly type = DELETE_RECIPE;

    constructor(public payload: Recipe){}
}

export class UpdateRecipe implements Action{
    readonly type = UPDATE_RECIPE;

    constructor(public payload: Recipe){}
}

export type RecipeActions = AddRecipe | GetAllRecipes | GetRecipe | DeleteRecipe | UpdateRecipe;