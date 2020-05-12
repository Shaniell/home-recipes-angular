import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss']
})
export class IngredientComponent implements OnInit {

  @Input()
  IsEdit: Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
