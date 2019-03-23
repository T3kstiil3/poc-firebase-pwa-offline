import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChantierComponent } from './chantier/chantier.component';
import { CommandeComponent } from './commande/commande.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'chantier/:idchantier', component: ChantierComponent},
  { path: 'chantier/:idchantier/commande/:idcommande', component: CommandeComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
