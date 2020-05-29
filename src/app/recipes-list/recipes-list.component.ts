import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { faChevronDown, faFileMedical, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../models/recipe';
import { Router } from '@angular/router';



@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {

  isVisible: Boolean = true;
  faChevronDown = faChevronDown;
  faChevronUp = faChevronUp;
  faFileMedical = faFileMedical;

  @Input()
  recipeList: Recipe[] = [];

  newRecipePopup: Boolean = false;
  searchText;

  @Input()
  isShowHeader: Boolean = true;

  @Output()
  isEditMode: EventEmitter<Boolean> = new EventEmitter<Boolean>();

  constructor(private recipeService: RecipeService, private route: Router) { }

  ngOnInit(): void {
    //if (this.recipeList == []) {
      this.recipeService.getAllRecipes().then(data => {
        this.recipeList = data;
      });
    //}
  }

  showList() {
    this.isVisible = true;
  }
  changeListVisibility() {
    this.isVisible = !this.isVisible;
  }


  SelectRecipe(recipeId: string) {
    this.recipeService.selectRecipe(recipeId);
    this.route.navigate(['/MainPage', recipeId])
  }

  newRecipe(recipeName) {
    this.recipeService.newRecipe(recipeName);
    this.newRecipePopup = false;
    this.isEditMode.emit(true);
  }
}
