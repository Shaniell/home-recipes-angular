import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-logo-icon',
  templateUrl: './logo-icon.component.html',
  styleUrls: ['./logo-icon.component.scss']
})
export class LogoIconComponent implements OnInit {

  @Input()
  width: number=40;

  constructor() { }

  ngOnInit(): void {
  }

}
