import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../models/recipe';
import { Ingredient } from '../models/ingredient';
import { faThumbsDown, faTimes, faPen, faTrash} from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  @Input()
  RecipeId: string = "";

  isEdit: Boolean = false;
  
  recipe: Recipe = new Recipe();
  
  ingredients: Ingredient[] = [];
  
  @Input()
  isNew: Boolean = false;

  recId: string = "";
  faTimes=faTimes;
  faPen=faPen;
  faTrash=faTrash;
  
  constructor(private recipeService: RecipeService,private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    if (this.RecipeId != "") {
      
      this.recipeService.getRecipe(this.RecipeId).then(data => {
        this.recipe = data;
        
        this.updateIngredientsList();
        
      })
    }
    
    this.recipeService.recipeIdObservable().subscribe(recipeId => {
      if (recipeId != "") {
        this.RecipeId = recipeId;
        
        this.recipeService.getRecipe(this.RecipeId).then(data => {
          this.recipe = data;
          this.updateIngredientsList();
        })
      }
    })
    
    this.route.params.subscribe(params => {
      if (Object.keys(params).length != 0){
        this.recipeService.selectRecipe(params['id']);
      }
    });
  }
  
  ngOnChanges():void{
    this.isEdit = this.isNew || this.isEdit; 
  }

  updateIngredientsList(){
    this.recipeService.updateRecipeIngredients(this.RecipeId).then(datas=>{
      this.recipeService.getRecipeIngredients(this.RecipeId).then(ing => {
      this.ingredients = ing;
      });
    });
  }

  deleteRecipe(){
    this.recipeService.deleteRecipe(this.RecipeId).then(recipes => {
      this.RecipeId = "";
    });
  }
}
