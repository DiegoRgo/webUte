import { Component, OnInit } from '@angular/core';
import { EstudianteService } from '../../../services/service.index';

@Component({
  selector: 'app-presolicitud',
  templateUrl: './presolicitud.component.html',
  styles: []
})
export class PresolicitudComponent implements OnInit {

  public areas: any = [];


  constructor(
    public _estudianteService: EstudianteService
  ) { }

  ngOnInit() {
    this.cargarTemas();
  }

  cargarTemas() {
    this._estudianteService.cargarTemas()
              .subscribe( (resp: any) => {
                this.areas = resp;
                console.log(this.areas);
              });
  }

}
