import { Component, OnInit, Input } from '@angular/core';
import { TimeDuration } from 'src/app/helpers/TimeDuration';

@Component({
  selector: 'app-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.scss']
})
export class TimePickerComponent implements OnInit {

  @Input()
  Time: TimeDuration;

  constructor() { }

  ngOnInit(): void {
  }

}
