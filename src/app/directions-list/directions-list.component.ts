import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-directions-list',
  templateUrl: './directions-list.component.html',
  styleUrls: ['./directions-list.component.scss']
})
export class DirectionsListComponent implements OnInit {

  @Input()
  directions : string[] = ["cut", "cook"];

  constructor() { }

  ngOnInit(): void {
  }

}
