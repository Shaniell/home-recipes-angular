import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { faChevronDown, faFileMedical,faChevronUp } from '@fortawesome/free-solid-svg-icons';
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
  faChevronUp = faChevronUp;
  faFileMedical = faFileMedical;
  recipeList: Recipe[] = [];

  newRecipePopup:Boolean = false;
  searchText;

  @Output()
  isEditMode: EventEmitter<Boolean> = new EventEmitter<Boolean>();

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


  SelectRecipe(recipeId: string){
    this.recipeService.selectRecipe(recipeId);
  }

  newRecipe(recipeName){
    this.recipeService.newRecipe(recipeName);
    this.newRecipePopup = false;
    this.isEditMode.emit(true);
  }
}
