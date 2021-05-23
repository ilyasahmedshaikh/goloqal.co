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
  },
  {
    path: 'blogs',
    loadChildren: () => import('./components/blog/blog.module').then(m => m.BlogModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('./components/categories/categories.module').then(m => m.CategoriesModule)
  },
  {
    path: 'favorites',
    loadChildren: () => import('./components/favorites/favorites.module').then(m => m.FavoritesModule)
  },
  {
    path: 'page',
    loadChildren: () => import('./components/page/page.module').then(m => m.PageModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./components/about-us/about-us.module').then(m => m.AboutUsModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./components/contact-us/contact-us.module').then(m => m.ContactUsModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./components/faq/faq.module').then(m => m.FaqModule)
  },
  {
    path: 'partner-with-us',
    loadChildren: () => import('./components/partner-with-us/partner-with-us.module').then(m => m.PartnerWithUsModule)
  },
  {
    path: 'subscribe-news',
    loadChildren: () => import('./components/subscribe-for-news/subscribe-for-news.module').then(m => m.SubscribeForNewsModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./components/admin/admin.module').then(m => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
