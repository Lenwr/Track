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
import { ClientDetailsComponent } from './client-details/client-details.component'

@NgModule({
  declarations: [
    AppComponent,
    FormulaireComponent,
    NavBarComponent,
    FooterComponent,
    ClientsComponent,
    ColisComponent,
    ClientDetailsComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
