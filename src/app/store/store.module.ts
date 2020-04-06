import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgrxDataModule } from 'ngrx-data';
import { entityConfig  } from './entity-metadata';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule,
    EffectsModule,
    NgrxDataModule.forRoot(entityConfig)
  ]
})
export class AppStoreModule { }
