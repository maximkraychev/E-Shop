import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './admin-panel.component';


const routes: Routes = [
  {
    path: '', component: AdminPanelComponent, children:
      [
        {
          path: 'create-book',
          loadChildren: () => import('./create-book/create-book.module').then(m => m.CreateBookModule)
        }
      ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPanelRoutingModule { }