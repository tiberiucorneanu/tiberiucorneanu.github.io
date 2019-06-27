import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AutentificareComponent } from './autentificar/autentificare.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EnvironmentComponent } from './environment/environment.component';
import { UtilizatoriComponent } from './utilizatori/utilizatori.component';
import { DocumentatieComponent } from './documentatie/documentatie.component';
import { TestComponent } from './test/test.component';
import { NewenvironmentComponent } from './environment/newenvironment/newenvironment.component';
import { NewutilizatoriComponent } from './utilizatori/newutilizatori/newutilizatori.component';
import { EditeazautilizatorComponent } from './utilizatori/editeazautilizator/editeazautilizator.component';
import { EditeazaenvironmentComponent } from './environment/editeazaenvironment/editeazaenvironment.component';
// import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: 'utilizatori', component: UtilizatoriComponent },
  { path: 'utilizatori/new', component: NewutilizatoriComponent },
  { path: 'utilizator/:id', component:  EditeazautilizatorComponent},
  { path: 'documentatie', component: DocumentatieComponent },
  { path: 'environment', component: EnvironmentComponent },
  { path: 'environment/new', component: NewenvironmentComponent },
  { path: 'environment/:id', component: EditeazaenvironmentComponent },
  { path: 'autentificare', component: AutentificareComponent },
  { path: 'test', component: TestComponent },
  { path: '',   redirectTo: '/autentificare', pathMatch: 'full' },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

export const routingCpmponents = [EditeazautilizatorComponent]