import { Component, OnInit, Input } from '@angular/core';
import { Direction } from '../models/direction';
import { Ingredient } from '../models/ingredient';
import { TimeDuration } from '../helpers/TimeDuration';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-directions-list',
  templateUrl: './directions-list.component.html',
  styleUrls: ['./directions-list.component.scss']
})
export class DirectionsListComponent implements OnInit {

  @Input()
  directions: Direction[] = [
    new Direction("1","1", "juleans", "cut", [new Ingredient("tomato", 1, "unit"), new Ingredient("cucumber", 1, "unit")], null),
    new Direction("2","1", "", "cook", [], new TimeDuration(20, 50, 3))
  ];

  @Input()
  recipeId: string;

  @Input()
  isEdit: Boolean = true;
 
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {

  }

  
  add(direction: Direction){
    this.recipeService.updateRecipeDirections(this.recipeId, direction).then((data: Direction[]) =>{
      this.directions = data;
    });
  }
  delete(direction: Direction){
    this.recipeService.deleteRecipeDirections(this.recipeId, direction).then((data: Direction[]) =>{
      this.directions = data;
    });
  }
  save(direction: Direction){
    this.recipeService.updateRecipeDirections(this.recipeId, direction).then((data: Direction[]) =>{
      this.directions = data;
    });
  }

}
