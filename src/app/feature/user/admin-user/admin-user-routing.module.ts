import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminUserComponent } from './admin-user.component';
import { SharedComponentsComponent } from '../../../shared/components/shared-components/shared-components.component';

const routes: Routes = [
  { path: '', component: AdminUserComponent },
  { path: 'info',  component: SharedComponentsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminUserRoutingModule { }
