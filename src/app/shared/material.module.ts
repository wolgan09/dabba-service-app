import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatBadgeModule} from '@angular/material/badge';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [],
  imports: [
    MatToolbarModule,
    MatGridListModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    MatBadgeModule,
    MatTableModule
  ],
  exports:[
    MatToolbarModule,
    MatGridListModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatBadgeModule,
    MatTableModule
  ]
})
export class MaterialModule { }
