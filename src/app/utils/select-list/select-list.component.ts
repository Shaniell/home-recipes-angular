import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { StringifyOptions } from 'querystring';

@Component({
  selector: 'app-select-list',
  templateUrl: './select-list.component.html',
  styleUrls: ['./select-list.component.scss']
})
export class SelectListComponent implements OnInit {

  @Input()
  data: string[] = [];

  @Input()
  selectedItem: string;

  @Output()
  selected: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(){
    
  }


  valueSelected(item){
    this.selected.emit(this.selectedItem);
  }

}
