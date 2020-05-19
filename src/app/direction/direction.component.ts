import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Ingredient } from '../models/ingredient';
import { TimeDuration } from '../helpers/TimeDuration';
import { Direction } from '../models/direction';
import { faSave } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-direction',
  templateUrl: './direction.component.html',
  styleUrls: ['./direction.component.scss']
})
export class DirectionComponent implements OnInit {

  @Input()
  direction: Direction = new Direction();

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

  constructor() { }

  ngOnInit(): void {
  }

  addDirection(){
    console.log(this.direction);
    this.add.emit(this.direction);
  }

  deleteDirection(){
    console.log(this.direction);
    this.delete.emit(this.direction);
  }

  saveDirection(){
    console.log(this.direction);
    this.save.emit(this.direction);
  }

}
