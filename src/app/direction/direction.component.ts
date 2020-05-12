import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-direction',
  templateUrl: './direction.component.html',
  styleUrls: ['./direction.component.scss']
})
export class DirectionComponent implements OnInit {

  @Input()
  direction: string;
  @Input()
  index: string;

  constructor() { }

  ngOnInit(): void {
  }

}
