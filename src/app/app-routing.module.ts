import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { SobremiComponent } from './pages/sobremi/sobremi.component';
import { CertificatesComponent } from './pages/certificates/certificates.component';


const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'projects',
        component: ProyectosComponent
    },
    {
        path: 'sobre-mi',
        component: SobremiComponent
    },
    {
        path: 'certificates',
        component: CertificatesComponent
    },
    {
        path: '**',
        redirectTo: 'home'
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}