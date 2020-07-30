import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../models/recipe';
import { Ingredient } from '../models/ingredient';
import { faThumbsDown, faTimes, faPen, faTrash} from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { Subject, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as RecipeActions from '../store/recipe.actions';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  
  //RecipeId: string = "";

  isEdit: Boolean = false;
  
  @Input()
  recipe: Recipe = new Recipe();

  recipeState: Observable<{selectedRecipe: Recipe}>;
  
  ingredients: Ingredient[] = [];
  
  @Input()
  isNew: Boolean = false;

  recId: string = "";
  faTimes=faTimes;
  faPen=faPen;
  faTrash=faTrash;
  
  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private store: Store<{recipe: {recipes: Recipe[], selectedRecipe: Recipe}}>) { }
  
  ngOnInit(): void {
    
      //this.recipeService.getRecipe(this.recipe);

      this.store.select('recipe').subscribe((rec:{recipes: Recipe[], selectedRecipe: Recipe})=>{
        
        this.recipe = {...rec.selectedRecipe};
      });
  }
  
  ngOnChanges():void{
    this.isEdit = this.isNew || this.isEdit;
  }

  deleteRecipe(){
    this.recipeService.deleteRecipe(this.recipe).subscribe((recipe:Recipe) => {
      this.store.dispatch(new RecipeActions.DeleteRecipe(recipe));
    });
  }

  saveRecipe(){
    this.recipeService.updateRecipe(this.recipe).subscribe((currentRecipe: Recipe)=>{
      console.log(currentRecipe);
    });
  }
}
