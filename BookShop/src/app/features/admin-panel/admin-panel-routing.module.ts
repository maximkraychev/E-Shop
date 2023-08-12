import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './admin-panel.component';

const routes: Routes = [
  {
    path: '', component: AdminPanelComponent, children:
      [
        {
          path: 'create-book',
          // component: CreateBookComponent,
          loadChildren: () => import('./create-book/create-book.module').then(m => m.CreateBookModule)
        },
        {
          path: 'orders',
          // component: OrdersPanelComponent
          loadChildren: () => import('./orders-panel/orders-panel.module').then(m => m.OrdersPanelModule)
        }
      ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPanelRoutingModule { }