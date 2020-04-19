import { NgModule } from '@angular/core';
import { CartRoutingModule } from './cart-routing.module';
import { CartListComponent } from './cart-list/cart-list.component';
import { MaterialModule } from 'src/app/shared/material.module';


@NgModule({
  declarations: [CartListComponent],
  imports: [
    CartRoutingModule,
    MaterialModule,
  ]
})
export class CartModule { }
