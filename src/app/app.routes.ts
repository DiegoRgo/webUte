import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';

import { PresolicitudComponent } from './pages/estudiante/presolicitud/presolicitud.component';
import { DashboardComponent } from './pages/administrador/dashboard/dashboard.component';
import { PermisoComponent } from './pages/administrador/permiso/permiso.component';
import { ConfiguracionComponent } from './pages/administrador/configuracion/configuracion.component';


const appRoutes: Routes = [
    {
         path: '',
         component: PagesComponent,
         children: [
            { path: 'presolicitud', component: PresolicitudComponent },
            { path: '', redirectTo: '/pages', pathMatch: 'full' },
         ]
    },
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'inicio', component: DashboardComponent },
            { path: 'permiso', component: PermisoComponent },
            { path: 'configuracion', component: ConfiguracionComponent }
        ]
    },
    { path: 'pages', component: PagesComponent },
    { path: '**', redirectTo: '/pages', pathMatch: 'full' }

];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true});
