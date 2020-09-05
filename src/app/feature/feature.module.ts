import { NgModule } from '@angular/core';
import { MaterialModule } from '../shared/material.module';
import { CartModule } from './cart/cart.module';
import { MenuModule } from './menu/menu.module';
import { CacheService } from '../shared/services/cache.service';





@NgModule({
  declarations: [],
  imports: [
    MaterialModule,
    CartModule,
    MenuModule,
  ],
  providers:[CacheService]
  
})
export class FeatureModule { }
