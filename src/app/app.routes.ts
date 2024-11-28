import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        pathMatch: 'full',
        loadComponent: () => import('./character/pages/character-home/character-home.component').then(m => m.CharacterHomeComponent)
    }
    ,
    {
        path:'**',
        pathMatch: 'full',
        redirectTo: 'home'
    }
];
