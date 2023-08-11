import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelComponent } from './admin-panel.component';
import { AdminPanelRoutingModule } from './admin-panel-routing.module';
import { CreateBookComponent } from './create-book/create-book.component';



@NgModule({
  declarations: [
    AdminPanelComponent,
    CreateBookComponent
  ],
  imports: [
    CommonModule,
    AdminPanelRoutingModule
  ]
})
export class AdminPanelModule { }
