import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Router } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { EnvironmentComponent } from './environment/environment.component';
import { AutentificareComponent } from './autentificar/autentificare.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { UtilizatoriComponent } from './utilizatori/utilizatori.component';
import { DocumentatieComponent } from './documentatie/documentatie.component';
import { TestComponent } from './test/test.component';
import { UserService } from './utilizatori/utilizatori.services';
import { EnvironmentService } from './environment/environment.service';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { NewenvironmentComponent } from './environment/newenvironment/newenvironment.component';
import { NewutilizatoriComponent } from './utilizatori/newutilizatori/newutilizatori.component';
import { EditeazautilizatorComponent } from './utilizatori/editeazautilizator/editeazautilizator.component';
import { EditeazaenvironmentComponent } from './environment/editeazaenvironment/editeazaenvironment.component';




@NgModule({
  declarations: [
    AppComponent,
    EnvironmentComponent,
    AutentificareComponent,
    PageNotFoundComponent,
    UtilizatoriComponent,
    DocumentatieComponent,
    TestComponent,
    NewenvironmentComponent,
    NewutilizatoriComponent,
    EditeazautilizatorComponent,
    EditeazaenvironmentComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [
    AppComponent,
    PageNotFoundComponent,
    UserService,
    EnvironmentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router){}
 }
