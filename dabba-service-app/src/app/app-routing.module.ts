import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './recipies/order/order.component';
import { RecipeDetailsComponent } from './recipies/recipe-details/recipe-details.component';
import { RecipiesComponent } from './recipies/recipies.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'recipies',
    children: [
      {path: '', component: RecipiesComponent},
      {path: ':id', component: RecipeDetailsComponent},
    ]
  },
  {path: 'order', component: OrderComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
