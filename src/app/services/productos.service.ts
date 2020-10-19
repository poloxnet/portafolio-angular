import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando: boolean = true
  productos: Producto[]

  constructor( private _http:HttpClient) {
    this.cargarProductos()
  }

  private cargarProductos() {
    this._http.get('https://angular-portfolio-850c4.firebaseio.com/productos_idx.json').subscribe(
      (res: Producto[]) => {
        this.productos = res
        this.cargando = false
    })
  }
}
