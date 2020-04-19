import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    MaterialModule,
    RouterModule,
    FormsModule,
    CommonModule
  ],
  exports: [HeaderComponent]
})
export class CoreModule { }
