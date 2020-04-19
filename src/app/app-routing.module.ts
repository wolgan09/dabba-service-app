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
  { path: 'user', loadChildren: () => import('./feature/user/user.module').then(m => m.UserModule) },
  { path: 'menu', loadChildren: () => import('./feature/menu/menu.module').then(m => m.MenuModule) },
  { path: 'cart', loadChildren: () => import('./feature/cart/cart.module').then(m => m.CartModule) },
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
