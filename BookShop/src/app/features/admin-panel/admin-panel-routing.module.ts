import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './admin-panel.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { OrdersPanelComponent } from './orders-panel/orders-panel.component';


const routes: Routes = [
  {
    path: '', component: AdminPanelComponent, children:
      [
        {
          path: 'create-book',
          component: CreateBookComponent,
        },
        {
          path: 'orders',
          component: OrdersPanelComponent
        }
      ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPanelRoutingModule { }