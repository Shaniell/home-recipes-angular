import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipeComponent } from './recipe/recipe.component';
import { IngredientsListComponent } from './ingredients-list/ingredients-list.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { DirectionsListComponent } from './directions-list/directions-list.component';
import { DirectionComponent } from './direction/direction.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    MainPageComponent,
    RecipesListComponent,
    RecipeComponent,
    IngredientsListComponent,
    IngredientComponent,
    DirectionsListComponent,
    DirectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
