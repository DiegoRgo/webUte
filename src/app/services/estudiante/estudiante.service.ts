import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  constructor(
    public http: HttpClient
    ) { }

    cargarTemas() {
      const url = URL_SERVICIOS + '/model.area';
      return this.http.get( url );
    }

}
