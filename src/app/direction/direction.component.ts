import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from '../models/ingredient';
import { TimeDuration } from '../helpers/TimeDuration';
import { Direction } from '../models/direction';

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

  constructor() { }

  ngOnInit(): void {
  }

}
