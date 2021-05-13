import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/homepage/homepage.module').then(m => m.HomepageModule)
  },
  {
    path: 'homepage',
    loadChildren: () => import('./components/homepage/homepage.module').then(m => m.HomepageModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule)
  }
  ,
  {
    path: 'events',
    loadChildren: () => import('./components/events/events.module').then(m => m.EventsModule)
  },
  {
    path: 'shops',
    loadChildren: () => import('./components/shops/shops.module').then(m => m.ShopsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
