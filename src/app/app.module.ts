import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

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
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { IngredientsSearchPageComponent } from './ingredients-search-page/ingredients-search-page.component';
import { NewRecipeIconComponent } from './icons/new-recipe-icon/new-recipe-icon.component';
import { EditIconComponent } from './icons/edit-icon/edit-icon.component';
import { DeleteIconComponent } from './icons/delete-icon/delete-icon.component';
import { SaveIconComponent } from './icons/save-icon/save-icon.component';
import { LogoIconComponent } from './icons/logo-icon/logo-icon.component';
import { ArrowIconComponent } from './icons/arrow-icon/arrow-icon.component';
import { StopEditIconComponent } from './icons/stop-edit-icon/stop-edit-icon.component';
import { RemoveIconComponent } from './icons/remove-icon/remove-icon.component';
import { AddIconComponent } from './icons/add-icon/add-icon.component';
import { LoginComponent } from './login/login.component';
import { AuthInterceptor } from './services/interceptors/auth.interceptor';
import { RecipeReducer } from './store/recipe.reducer';

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
    TimePickerComponent,
    IngredientsSearchPageComponent,
    NewRecipeIconComponent,
    EditIconComponent,
    DeleteIconComponent,
    SaveIconComponent,
    LogoIconComponent,
    ArrowIconComponent,
    StopEditIconComponent,
    RemoveIconComponent,
    AddIconComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    Ng2SearchPipeModule,
    StoreModule.forRoot({recipe: RecipeReducer})
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
