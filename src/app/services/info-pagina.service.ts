import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {}
  dataCargada: boolean = false

  constructor( private _http: HttpClient ) { 
    this._http.get('assets/data/data-pagina.json').subscribe(
      (res:InfoPagina) => {
        this.dataCargada = true
        this.info = res
      }
    )
  }
}
