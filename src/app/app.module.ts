import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TimePickerComponent } from './utils/time-picker/time-picker.component';

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
    DirectionComponent,
    TimePickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
