import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersPanelRoutingModule } from './order-panel.routing-module';
import { OrdersPanelComponent } from './orders-panel.component';

@NgModule({
  declarations: [
    OrdersPanelComponent
  ],
  imports: [
    CommonModule,
    OrdersPanelRoutingModule
  ]
})
export class OrdersPanelModule { }