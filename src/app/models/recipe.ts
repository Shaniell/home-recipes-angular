import { Ingredient } from './ingredient';
import { Direction } from './direction';

export class Recipe {
    constructor(public id : string = "",
                public recipeName : string = "",
                public recipeImageUrl : string = "",
                public ingredients : Ingredient[] = [],
                public directions : Direction[] = []
                ){}
}