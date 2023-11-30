import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EsfestivoService {
  
  url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.urlAPI}festivos`;
  
  }
  public verificarFecha(fecha: Date) {
    let año = fecha.getFullYear();
    let mes = fecha.getMonth() + 1;
    let dia = fecha.getUTCDate();
    let urlT = `${this.url}/verificar/${año}/${mes}/${dia}`;

    return this.http.get(urlT, { responseType: 'text' });
}
}
