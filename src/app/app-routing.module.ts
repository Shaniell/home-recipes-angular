import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { IngredientsSearchPageComponent } from './ingredients-search-page/ingredients-search-page.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './guards/login.guard';


const routes: Routes = [
  { path:'',redirectTo:'/Login' , pathMatch: 'full'},
  { path:'Login', component: LoginComponent },
  { path:'MainPage', component: MainPageComponent, canActivate: [LoginGuard] 
  },
  { path:'MainPage/:id', component: MainPageComponent, canActivate: [LoginGuard] 
  },
  { path:'IngredientsSearchPage', component: IngredientsSearchPageComponent, canActivate: [LoginGuard] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
