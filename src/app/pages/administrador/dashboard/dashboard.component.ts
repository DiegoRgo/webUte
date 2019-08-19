import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/service.index';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  configuraciones: any = [];
  estado: boolean;
  tipo = 'on';
  color = 'btn btn-primary' ;

  constructor( public _adminService: AdminService ) { }

  ngOnInit() {
    this.cargarConfig();
  }

  cargarConfig() {
      this._adminService.cargaConfig()
              .subscribe( (resp: any) => {
              this.configuraciones = resp;
              console.log(this.configuraciones);
              });
  }

  cambiarEstado( tipo: string, color: string) {
  }

  cambiarColor( color: string) {
    color = 'btn btn-primary';
  }

}
