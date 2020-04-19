import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuListComponent } from './menu-list/menu-list.component';


const routes: Routes = [
  { path: '', component: MenuListComponent}
  // { path: '/:id', component: }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
