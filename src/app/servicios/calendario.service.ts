import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FestivoCal } from '../entidades/festivo';

@Injectable({
  providedIn: 'root'
})
export class CalendarioService {
  url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.urlAPI}festivos`;
  
  }

  public obtenerFestivos(año: number): Observable<FestivoCal[]> {
    let urlT = `${this.url}/obtener/${año}`;

    return this.http.get<FestivoCal[]>(urlT);
  }
  
}
