import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {}
  equipo: any[]
  dataCargada: boolean = false

  constructor( private _http: HttpClient ) { 
    this.cargarInfo()
    this.cargarEquipo()
  }

  private cargarInfo() {
    this._http.get('assets/data/data-pagina.json').subscribe(
      (res:InfoPagina) => {
        this.dataCargada = true
        this.info = res
    })
  }

  private cargarEquipo() {
    this._http.get('https://angular-portfolio-850c4.firebaseio.com/equipo.json').subscribe(
      (res: any[]) => {
        this.dataCargada = true
        this.equipo = res
    })
  }

}
