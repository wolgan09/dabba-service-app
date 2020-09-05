import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerUserRoutingModule } from './customer-user-routing.module';
import { CustomerUserComponent } from './customer-user.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material.module';


@NgModule({
  declarations: [CustomerUserComponent],
  imports: [
    CommonModule,
    CustomerUserRoutingModule,
    MaterialModule,
    SharedModule
    
  ]
})
export class CustomerUserModule { }
