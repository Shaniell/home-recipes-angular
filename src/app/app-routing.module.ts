import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { IngredientsSearchPageComponent } from './ingredients-search-page/ingredients-search-page.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path:'', component: LoginComponent },
  { path:'MainPage', component: MainPageComponent },
  { path:'MainPage/:id', component: MainPageComponent },
  { path:'IngredientsSearchPage', component: IngredientsSearchPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
