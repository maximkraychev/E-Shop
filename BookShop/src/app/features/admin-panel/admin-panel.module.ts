import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelComponent } from './admin-panel.component';
import { AdminPanelRoutingModule } from './admin-panel-routing.module';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';




@NgModule({
  declarations: [
    AdminPanelComponent,
    AdminSidebarComponent,
  ],
  imports: [
    AdminPanelRoutingModule,
    CommonModule
  ]
})
export class AdminPanelModule { }
