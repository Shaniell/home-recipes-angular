import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../models/ingredient';

@Component({
  selector: 'app-ingredients-list',
  templateUrl: './ingredients-list.component.html',
  styleUrls: ['./ingredients-list.component.scss']
})
export class IngredientsListComponent implements OnInit{

  @Input()
  ingredients : Ingredient[] = [];

  @Input()
  isEditMode : Boolean = true;

  @Input()
  isNameOnly:Boolean = false;

  @Output()
  DataChanged:EventEmitter<Ingredient[]> = new EventEmitter<Ingredient[]>();

  constructor() { }
  
  

  ngOnInit(): void {
  }

  addIngredient(ing : Ingredient): void {
    let ingreds = [...this.ingredients];
    ingreds.push({...ing});
    this.ingredients = ingreds;
    this.DataChanged.emit(this.ingredients);
  }

  removeIngedient(ing : Ingredient): void {
      let index = this.ingredients.findIndex(x=> x.ingredientName == ing.ingredientName);
      let currIngs = [...this.ingredients];
      currIngs.splice(index, 1);
      this.ingredients = currIngs;
      //this.ingredients.splice(index, 1);
      this.DataChanged.emit(this.ingredients);
  }

  




}
