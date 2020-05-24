import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { IngredientsSearchPageComponent } from './ingredients-search-page/ingredients-search-page.component';


const routes: Routes = [
  { path:'', component: MainPageComponent },
  { path:'MainPage', component: MainPageComponent },
  { path:'IngredientsSearchPage', component: IngredientsSearchPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
