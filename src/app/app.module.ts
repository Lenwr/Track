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
import { ColisComponent } from './colis/colis.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { CameraComponent } from './camera/camera.component'
import { QRCodeModule } from 'angularx-qrcode';
import { QrCodeComponent } from './qr-code/qr-code.component'
import { WebcamModule } from 'ngx-webcam';
import { CamComponent } from './cam/cam.component'

@NgModule({
  declarations: [
    AppComponent,
    FormulaireComponent,
    NavBarComponent,
    FooterComponent,
    ClientsComponent,
    ColisComponent,
    ClientDetailsComponent,
    CameraComponent,
    QrCodeComponent,
    CamComponent,
    
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule, QRCodeModule,WebcamModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
