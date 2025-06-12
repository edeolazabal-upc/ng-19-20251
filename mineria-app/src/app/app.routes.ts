import { Routes } from '@angular/router';
import { ListarComponent } from './components/listar/listar.component';
import { RegistrarComponent } from './components/registrar/registrar.component';

export const routes: Routes = [
    { path: '', redirectTo: 'listar', pathMatch: 'full' },
    { path: 'listar', component: ListarComponent },
    { path: 'registrar', component: RegistrarComponent }
];
