import { Component, OnInit } from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {

  isVisible: Boolean = true;
  faChevronDown = faChevronDown;

  constructor() { }

  ngOnInit(): void {
  }

  showList(){
    this.isVisible = true;
  }
  changeListVisibility(){
    this.isVisible = !this.isVisible;
  }

}
