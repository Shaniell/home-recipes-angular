import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Ingredient } from '../models/ingredient';
import { TimeDuration } from '../helpers/TimeDuration';
import { Direction } from '../models/direction';
import { faSave, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-direction',
  templateUrl: './direction.component.html',
  styleUrls: ['./direction.component.scss']
})
export class DirectionComponent implements OnInit {

  @Input()
  direction: Direction = new Direction();

  directionLocal: Direction = new Direction();

  @Input()
  recipeId:string;

  @Input()
  isEdit: Boolean = true;

  @Input()
  isNew: Boolean = true;

  @Input()
  index: string;

  @Output()
  add: EventEmitter<Direction> = new EventEmitter<Direction>();

  @Output()
  delete: EventEmitter<Direction> = new EventEmitter<Direction>();

  @Output()
  save: EventEmitter<Direction> = new EventEmitter<Direction>();

  faSave = faSave;

  isDeleted: Boolean;

  constructor() { }

  ngOnInit(): void {
    this.directionLocal = {...this.direction};
  }

  ngDoCheck(){
    this.direction = {...this.directionLocal};
  }

  addDirection(){
    let dir = new Direction(null, this.direction.recipeId, this.direction.step, this.direction.type, this.direction.ingrediantsUsed);//, this.direction.preperationTime);
    this.add.emit(dir);
    this.direction = new Direction();
    this.directionLocal = new Direction();

  }

  deleteDirection(){
    this.direction = this.directionLocal;
    this.delete.emit(Object.create(this.direction));
    this.isDeleted = true;
  }

  saveDirection(){
    this.direction = this.directionLocal;
    this.save.emit(this.direction);
  }

  UpdateIngredients(ings){
    this.directionLocal.ingrediantsUsed = ings;
    this.direction.ingrediantsUsed = ings;
    this.save.emit(this.direction);
  }

}
