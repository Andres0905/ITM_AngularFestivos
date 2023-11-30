import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

  public opciones = [
    { titulo: "Inicio", url:"inicio", icono: "assets/iconos/inicio.png"},
    { titulo: "Festivos", url:"calendario", icono: "assets/iconos/esfestivo.png"},
    { titulo: "Verificar", url:"esfestivo", icono: "assets/iconos/calendario.png"},
  ];

  constructor(){

  }

  ngOnInit(): void {
  }
}
