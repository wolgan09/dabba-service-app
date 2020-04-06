import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent },
  { path: 'customer-user', loadChildren: () => import('./feature/user/customer-user/customer-user.module').then(m => m.CustomerUserModule) },
  { path: 'admin-user', loadChildren: () => import('./feature/user/admin-user/admin-user.module').then(m => m.AdminUserModule) },
  {
   path: '**',
   component: PageNotFoundComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
