import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarioComponent } from './componentes/calendario/calendario.component';
import { EsfestivoComponent } from './componentes/esfestivo/esfestivo.component';
import { InicioComponent } from './componentes/inicio/inicio.component';

const routes: Routes = [
  { path: "inicio", component: InicioComponent },
  { path: "calendario", component: CalendarioComponent },
  { path: "esfestivo", component: EsfestivoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
