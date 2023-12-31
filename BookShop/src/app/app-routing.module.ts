import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { ThankYouForPurchaesComponent } from './shared/components/thank-you-for-purchaes/thank-you-for-purchaes.component';
import { isAdminGuard } from './core/guards/is-admin.guard';
// import { UserResolverService } from './core/services/user-resolver.service';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
  { path: 'user', loadChildren: () => import('./features/user/user.module').then(m => m.UserModule) },
  { path: 'catalog', loadChildren: () => import('./features/catalog/catalog.module').then(m => m.CatalogModule) },
  { path: ':id/details', loadChildren: () => import('./features/details/details.module').then(m => m.DetailsModule) },
  { path: 'shopping-cart', loadChildren: () => import('./features/shop-card/shop-cart.module').then(m => m.ShopCardModule) },
  { path: 'admin-panel', canMatch:[isAdminGuard], loadChildren: () => import('./features/admin-panel/admin-panel.module').then(m => m.AdminPanelModule) },
  { path: 'thank-you', component: ThankYouForPurchaesComponent},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
