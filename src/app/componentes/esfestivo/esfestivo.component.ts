import { Component, OnInit } from '@angular/core';
import { FestivoCal } from 'src/app/entidades/festivo';
import { EsfestivoService } from 'src/app/servicios/esfestivo.service';

@Component({
  selector: 'app-esfestivo',
  templateUrl: './esfestivo.component.html',
  styleUrls: ['./esfestivo.component.css']
})
export class EsfestivoComponent implements OnInit{
  title = 'esfestivo';

  public fechaSeleccionada: any;
  public festivoSeleccion: FestivoCal | undefined;
  constructor(private esfestivoservice: EsfestivoService) {
    
  }

  ngOnInit(): void {
    this.validarFecha();
  }

  public validarFecha() {
    let fecha = new Date(this.fechaSeleccionada);
    this.esfestivoservice.verificarFecha(fecha).subscribe(
      respuesta => {
        window.alert(respuesta);
      }
    );

  }

  public onActivate(event: any) {
    if (event.type == 'click') {
      this.festivoSeleccion = event.row;
  }}
}