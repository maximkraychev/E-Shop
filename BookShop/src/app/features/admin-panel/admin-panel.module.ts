import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelComponent } from './admin-panel.component';
import { AdminPanelRoutingModule } from './admin-panel-routing.module';
import { CreateBookComponent } from './create-book/create-book.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { OrdersPanelComponent } from './orders-panel/orders-panel.component';



@NgModule({
  declarations: [
    AdminPanelComponent,
    CreateBookComponent,
    AdminSidebarComponent,
    OrdersPanelComponent
  ],
  imports: [
    AdminPanelRoutingModule,
    CommonModule
  ]
})
export class AdminPanelModule { }
