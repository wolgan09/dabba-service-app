import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import { SharedComponentsComponent } from './components/shared-components/shared-components.component';




@NgModule({
  declarations: [SharedComponentsComponent],
  imports: [
    MatToolbarModule,
    MatGridListModule,
    MatIconModule
  ],
  exports: [
    MatToolbarModule,
    MatGridListModule,
    MatIconModule,
    SharedComponentsComponent
  ]
})
export class SharedModule { }
