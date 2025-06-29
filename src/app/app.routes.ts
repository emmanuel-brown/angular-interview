import { Routes } from '@angular/router';
import { MainLayout } from './layouts/main-layout/main-layout';
import { Profile } from './userProfilePage/profile/profile';
import { Login } from './pages/login/login';
import { authGuard } from './auth-guard';
import { Notes } from './pages/notes/notes';

export const routes: Routes = [
    
    {
        path: '',
        component: MainLayout,
        children: [
            {
                path:'profile', 
                loadComponent: () => import('./userProfilePage/profile/profile').then(m => m.Profile),
                // canActivate: [authGuard]
            },
            {
                path: 'notes',
                component: Notes,
            },
            {path: 'login', component: Login},
        ]
    }
];
