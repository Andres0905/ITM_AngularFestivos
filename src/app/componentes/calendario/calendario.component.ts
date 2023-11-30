import { Component, OnInit } from '@angular/core';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';
import { FestivoCal } from 'src/app/entidades/festivo';
import { CalendarioService } from 'src/app/servicios/calendario.service';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {
  title = 'Calendario';
  public textoBusqueda: string = "";
  public fechaSeleccionada: any;
  public ano: number = new Date().getFullYear();

  public calendario: FestivoCal[] = [];

  public columnas = [
    { name: "Festivo", prop: "festivo" },
    { name: "Fecha", prop: "fecha" },
  ];
  public modoColumna = ColumnMode;
  public tipoSeleccion = SelectionType;
  public festivoSeleccion: FestivoCal | undefined;
  constructor(private calendarioService: CalendarioService) {

  }

  ngOnInit(): void {
    this.obtenerFestivos();
  }

  public obtenerFestivos() {
    this.calendarioService.obtenerFestivos(this.ano)
      .subscribe(data => {
        this.calendario = data;
      },
        err => {
          window.alert(err.message)
        });
  }


  public onActivate(event: any) {
    if (event.type == 'click') {
      this.festivoSeleccion = event.row;
}

}}
