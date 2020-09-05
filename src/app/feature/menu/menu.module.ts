import { NgModule } from '@angular/core';
import { MenuListComponent } from './menu-list/menu-list.component';
import {MenuRoutingModule  } from './menu-routing.module';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/material.module';
import { MenuService } from './menu.service';
import { MenuDetailComponent } from './menu-detail/menu-detail.component';


@NgModule({
  declarations: [MenuListComponent, MenuDetailComponent],
  imports: [
    MenuRoutingModule,
    MaterialModule,
    CommonModule
  ],
  providers: [MenuService]
})
export class MenuModule { }
