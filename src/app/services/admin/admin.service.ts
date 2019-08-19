import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor( public http: HttpClient) { }

  cargaConfig() {
    const url = URL_SERVICIOS + '/model.sysconfiguracion';
    return this.http.get(url);
  }

  cambiarEstado(id) {
    const url = URL_SERVICIOS + '/model.sysconfiguracion';
    return this.http.put(url, id);
  }

}
