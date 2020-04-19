import { NgModule } from '@angular/core';
import { CartRoutingModule } from './cart-routing.module';
import { CartListComponent } from './cart-list/cart-list.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { CommonModule } from '@angular/common';
import { CartService } from './cart.service';



@NgModule({
  declarations: [CartListComponent],
  imports: [
    CartRoutingModule,
    MaterialModule,
    CommonModule
  ],
  providers: [CartService]
})
export class CartModule { }
