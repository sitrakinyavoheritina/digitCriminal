import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { ResearchComponent } from './pages/research/research.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserPoliceComponent } from './pages/user-police/user-police.component';
import { UserCommissaireComponent } from './pages/user-commissaire/user-commissaire.component';
// import { NgxSpinnerModule } from "ngx-spinner";
// import { DataTableModule } from 'ng-angular8-datatable';
import { UserPresidentComponent } from './pages/user-president/user-president.component';
import { QRCodeModule } from 'angularx-qrcode';
import { QrcodeGeneratorComponent } from './pages/qrcode-generator/qrcode-generator.component';
import { environment } from './environment/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ResearchComponent,
    UserPoliceComponent,
    UserCommissaireComponent,
    UserPresidentComponent,
    QrcodeGeneratorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
    QRCodeModule
    // NgxSpinnerModule,
    // DataTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
