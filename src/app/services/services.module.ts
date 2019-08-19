import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { EstudianteService } from './service.index';
import { AdminService } from './admin/admin.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    AdminService,
    EstudianteService
  ]
})
export class ServicesModule { }
