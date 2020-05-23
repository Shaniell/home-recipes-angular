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
    this.add.emit(Object.create(this.direction));
    this.direction = new Direction();
  }

  deleteDirection(){
    this.delete.emit(Object.create(this.direction));
  }

  saveDirection(){
    this.save.emit(Object.create(this.direction));
  }

}
