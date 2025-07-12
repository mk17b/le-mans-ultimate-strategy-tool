import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./core/components/main-layout/main-layout'),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/landing-page/components/landing-page'),
      },
      {
        path: 'strategy-tool',
        loadComponent: () =>
          import('./features/strategy-tool/components/strategy-tool'),
      },
      {
        path: 'coming-soon',
        loadComponent: () =>
          import('./features/coming-soon/components/coming-soon'),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
