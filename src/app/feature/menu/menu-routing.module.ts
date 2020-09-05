import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuListComponent } from './menu-list/menu-list.component';
import { MenuDetailComponent } from './menu-detail/menu-detail.component';


const menuRoutes: Routes = [
  { path: '', component: MenuListComponent },
  // { path: ':id', component: MenuDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(menuRoutes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
