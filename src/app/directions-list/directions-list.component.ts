import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Direction } from '../models/direction';
import { Ingredient } from '../models/ingredient';
import { TimeDuration } from '../helpers/TimeDuration';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../models/recipe';

@Component({
  selector: 'app-directions-list',
  templateUrl: './directions-list.component.html',
  styleUrls: ['./directions-list.component.scss']
})
export class DirectionsListComponent implements OnInit {

  @Input()
  directions: Direction[] = [];
  //   new Direction("1","1", "juleans", "cut", [new Ingredient("tomato", 1, "unit"), new Ingredient("cucumber", 1, "unit")], null),
  //   new Direction("2","1", "", "cook", [], new TimeDuration(20, 50, 3))
  // ];

  @Input()
  recipe: Recipe;

  @Input()
  isEdit: Boolean = true;

  @Output()
  AddedDirection: EventEmitter<Boolean> = new EventEmitter<Boolean>();
 
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {

  }

  
  add(direction: Direction){
    this.recipeService.updateRecipeDirections(this.recipe, direction);
  }
  delete(direction: Direction){
    this.recipeService.deleteRecipeDirections(this.recipe, direction);
  }

  save(direction: Direction){
    this.recipeService.updateRecipeDirections(this.recipe, direction);
  }

}