import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../models/ingredient';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss']
})
export class IngredientComponent implements OnInit {

  @Input()
  isEdit: Boolean = false;

  @Input()
  isNew: Boolean = false;

  @Input()
  ingredient:Ingredient = new Ingredient();

  @Output()
  addIngredient: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();

  @Output()
  removeIngredient: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  add(){
    this.addIngredient.emit(this.ingredient);
    this.ingredient = new Ingredient();
  }

  remove(){
    this.removeIngredient.emit(this.ingredient);
  }

}
