import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoreModule } from './core/core.module';
import { RecipiesComponent } from './recipies/recipies.component';
import { RecipeDetailsComponent } from './recipies/recipe-details/recipe-details.component';
import { OrderComponent } from './recipies/order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    RecipiesComponent,
    RecipeDetailsComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    MaterialModule,
    HttpClientModule,
    AppRoutingModule,
    NoopAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
