import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { MaterialModule } from 'src/app/shared/material.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
  ]
})
export class UserModule { }
