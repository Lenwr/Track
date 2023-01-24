import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ClientsComponent } from './clients/clients.component'
import { ColisComponent } from './colis/colis.component'
import { FormulaireComponent } from './formulaire/formulaire.component'

const routes: Routes = [
  { path: 'formulaire', component: FormulaireComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'colis', component: ColisComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
