import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../models/ingredient';
import { UtilsService } from '../services/utils.service';

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

  @Input()
  isNameOnly:boolean = false;

  @Output()
  addIngredient: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();

  @Output()
  removeIngredient: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();

  displayStr: string;

  measurementTypes: string[] = [];
  
  constructor(private utils: UtilsService) { }

  ngOnInit(): void {
    this.displayStr = `${this.ingredient.amount || ''} ${this.ingredient.measurementType === 'unit' ? '' : this.ingredient.measurementType} ${this.ingredient.ingredientName}`;

    this.measurementTypes = this.utils.getMeasurementTypes();

    // this.utils.getMeasurementTypes().subscribe(data=>{
    //   data.forEach((item:string) => {
    //     this.measurementTypes.push(item);
    //   });
    // })
  }

  add(){
    this.addIngredient.emit(this.ingredient);
    this.ingredient = new Ingredient();
  }

  reset(){
    this.ingredient = new Ingredient();
  }

  remove(){
    this.removeIngredient.emit(this.ingredient);
  }

}
