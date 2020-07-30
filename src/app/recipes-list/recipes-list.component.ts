import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { faChevronDown, faFileMedical, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../models/recipe';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as RecipeActions from '../store/recipe.actions';



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
  searchText;

  recipeListStore: Observable<{recipes: Recipe[]}>;

  @Input()
  isShowHeader: Boolean = true;

  @Output()
  isNewMode: EventEmitter<Boolean> = new EventEmitter<Boolean>();

  @Output()
  recipeSelected: EventEmitter<Boolean> = new EventEmitter<Boolean>();

  constructor(private recipeService: RecipeService, 
              private route: Router,
              private store: Store<{recipe: {recipes: Recipe[], selectedRecipe: Recipe}}>) { }

  ngOnInit(): void {
    this.recipeService.getAllRecipes();
    this.recipeListStore = this.store.select('recipe');
  }

  ngOnChanges(){
    this.recipeService.getRecipes(this.recipeList);
    this.recipeListStore = this.store.select('recipe');
  }

  showList() {
    this.isVisible = true;
  }
  changeListVisibility() {
    this.isVisible = !this.isVisible;
  }


  SelectRecipe(recipe: Recipe) {
    this.recipeSelected.emit();
    this.recipeService.selectRecipe(recipe);
    this.route.navigate(['/MainPage']);
  }

  newRecipe(recipeName = '') {
    this.recipeService.newRecipe(recipeName).subscribe((recipe:Recipe)=>{
      this.store.dispatch(new RecipeActions.AddRecipe(recipe))
      this.recipeService.selectRecipe(recipe);
      this.isNewMode.emit();
    });
    

  }
}
