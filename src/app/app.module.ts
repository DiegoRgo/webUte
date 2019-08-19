import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Rutas
import { APP_ROUTES } from './app.routes';

// Servicios
import { ServicesModule } from './services/services.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';
import { PagesComponent } from './pages/pages.component';


import { PresolicitudComponent } from './pages/estudiante/presolicitud/presolicitud.component';
import { PermisoComponent } from './pages/administrador/permiso/permiso.component';
import { ConfiguracionComponent } from './pages/administrador/configuracion/configuracion.component';
import { DashboardComponent } from './pages/administrador/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbComponent,
    PresolicitudComponent,
    PagesComponent,
    PermisoComponent,
    ConfiguracionComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    ServicesModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
