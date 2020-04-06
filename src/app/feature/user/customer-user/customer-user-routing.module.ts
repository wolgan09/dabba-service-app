import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerUserComponent } from './customer-user.component';

const routes: Routes = [{ path: '', component: CustomerUserComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerUserRoutingModule { }
