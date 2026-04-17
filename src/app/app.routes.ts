import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'menu',
    loadComponent: () =>
      import('./pages/menu/menu.component').then(m => m.MenuComponent)
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('./pages/cart/cart.component').then(m => m.CartComponent)
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'history',
    loadComponent: () =>
      import('./pages/history/history.component').then(m => m.HistoryComponent)
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent)
  }
];