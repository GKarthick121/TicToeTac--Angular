import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule, routingComponents} from './app-routing.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TboardComponent } from './tboard/tboard.component';





@NgModule({
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
  ],
  declarations: [
    AppComponent,
    routingComponents,
    TboardComponent,

  ],


  providers: [],
  bootstrap:  [AppComponent]
})

export class AppModule {


 }
