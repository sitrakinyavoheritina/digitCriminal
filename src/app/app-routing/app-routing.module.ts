
import { LoginComponent } from './../pages/login/login.component';
import { ResearchComponent } from './../pages/research/research.component';
import { UserPoliceComponent } from './../pages/user-police/user-police.component';
import { UserCommissaireComponent } from './../pages/user-commissaire/user-commissaire.component';
import { UserPresidentComponent } from './../pages/user-president/user-president.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule ,Routes  } from '@angular/router';
 
@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'research', component: ResearchComponent },
      { path: 'police', component: UserPoliceComponent },
      { path: 'commissaire', component: UserCommissaireComponent },
      { path: 'president', component: UserPresidentComponent },
    ])
  ],
  declarations: [],
  exports: [ RouterModule]
})
export class AppRoutingModule { }

