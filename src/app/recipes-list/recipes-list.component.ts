import { Component, OnInit } from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../models/recipe';


@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {

  isVisible: Boolean = true;
  faChevronDown = faChevronDown;
  recipeList: Recipe[] = [];

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.getAllRecipes().then(data=>{
      this.recipeList = data;
    })
  }

  showList(){
    this.isVisible = true;
  }
  changeListVisibility(){
    this.isVisible = !this.isVisible;
  }

}
