import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../models/recipe';
import { Ingredient } from '../models/ingredient';
import { faThumbsDown, faTimes, faPen, faTrash} from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { Subject, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as RecipeActions from '../store/recipe.actions';
import { Direction } from '../models/direction';

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
  recipeToSave: Recipe = new Recipe();

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
        
        this.recipeToSave = rec.selectedRecipe;

        //if(this.recipe._id != rec.selectedRecipe._id){
          ///this.copy(rec.selectedRecipe);
        //}

       this.recipe = {...rec.selectedRecipe};
      });
  }
  
  ngOnChanges():void{
    this.isEdit = this.isNew || this.isEdit;
  }

  deleteRecipe(){
    this.recipeService.deleteRecipe(this.recipeToSave).subscribe((recipe:Recipe) => {
      this.store.dispatch(new RecipeActions.DeleteRecipe(recipe));
    });
  }

  saveRecipe(){
    
    this.recipeService.updateRecipe(this.recipeToSave).subscribe((currentRecipe: Recipe)=>{
      this.recipe = currentRecipe;
    });
  }

  

  copy(recipe: Recipe){
    this.recipe = new Recipe();
    this.recipe._id = recipe._id;

    recipe.directions.forEach(x=>{
        let ings = [];
        x.ingrediantsUsed.forEach(i=>{
            ings.push({...i});
        })
        this.recipe.directions.push(new Direction(x._id, x.recipeId, x.step, x.type, ings));
    })

    let ings2 = [];
    this.recipe.ingredients.forEach(i=>{
        ings2.push({...i});
    });

    this.recipe.isPrivate = recipe.isPrivate;
    this.recipe.owner = recipe.owner;
    this.recipe.recipeImageUrl = recipe.recipeImageUrl;
    this.recipe.recipeName = recipe.recipeName;
}
}
