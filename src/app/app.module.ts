
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HomeComponent } from './core/home/home.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { CoreModule } from './core/core.module';
import {LayoutModule} from '@angular/cdk/layout';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FeatureModule } from './feature/feature.module';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from './core/interceptors';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MaterialModule } from './shared/material.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    FormsModule,
    LayoutModule,
    CoreModule,
    MaterialModule,
    FeatureModule,
    NoopAnimationsModule,
    RouterModule,
    HttpClientModule,
    NgxSpinnerModule
    /*Ngrx Store*/ ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {

}
