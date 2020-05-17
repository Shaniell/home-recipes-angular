import { Ingredient } from './ingredient';
import { TimeDuration } from '../helpers/TimeDuration';

export class Direction {
    constructor(public id: string = "",
                public recipeId: string="",
                public step: string = "",
                public type: string = "",
                public ingrediantsUsed: Ingredient[] = [],
                public preperationTime: TimeDuration=new TimeDuration(0,0,0)){}
}