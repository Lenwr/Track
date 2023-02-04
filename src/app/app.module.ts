import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { FormulaireComponent } from './formulaire/formulaire.component'
import { NavBarComponent } from './nav-bar/nav-bar.component'
import { FooterComponent } from './footer/footer.component'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { ClientsComponent } from './clients/clients.component'
import { AppRoutingModule } from './app-routing.module'
import { ColisComponent } from './colis/colis.component'
import { ClientDetailsComponent } from './client-details/client-details.component'
import { QRCodeModule } from 'angularx-qrcode'
import { QrCodeComponent } from './qr-code/qr-code.component'
import { ScanComponent } from './scan/scan.component'
import {ZXingScannerModule} from "@zxing/ngx-scanner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatDividerModule} from "@angular/material/divider";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";



@NgModule({
  declarations: [
    AppComponent,
    FormulaireComponent,
    NavBarComponent,
    FooterComponent,
    ClientsComponent,
    ColisComponent,
    ClientDetailsComponent,
    QrCodeComponent,
    ScanComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    QRCodeModule,
    ZXingScannerModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatProgressBarModule,
    MatDividerModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
