import { NgModule } from '@angular/core';
import { MaterialModule } from '../shared/material.module';
import { CartModule } from './cart/cart.module';
import { MenuModule } from './menu/menu.module';




@NgModule({
  declarations: [],
  imports: [
    MaterialModule,
    CartModule,
    MenuModule,
  ],
})
export class FeatureModule { }
