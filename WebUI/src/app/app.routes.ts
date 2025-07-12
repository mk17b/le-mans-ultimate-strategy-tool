import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./core/components/main-layout/main-layout'),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/strategy-tool/components/strategy-tool'),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
