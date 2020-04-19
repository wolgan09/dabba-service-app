import { NgModule } from '@angular/core';
import { MenuListComponent } from './menu-list/menu-list.component';
import {MenuRoutingModule  } from './menu-routing.module';


@NgModule({
  declarations: [MenuListComponent],
  imports: [
    MenuRoutingModule
  ]
})
export class MenuModule { }
