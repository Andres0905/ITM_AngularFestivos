import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule, provideClientHydration } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CalendarioComponent } from "./componentes/calendario/calendario.component";
import { EsfestivoComponent } from "./componentes/esfestivo/esfestivo.component";
import { InicioComponent } from "./componentes/inicio/inicio.component";
import { MenuComponent } from "./componentes/menu/menu.component";
import { ReferenciasMaterialModule } from "./referencias-material.module";

@NgModule({
  declarations: [
    AppComponent,
    CalendarioComponent,
    InicioComponent,
    EsfestivoComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReferenciasMaterialModule,
    FormsModule,
    NgxDatatableModule,
    HttpClientModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
