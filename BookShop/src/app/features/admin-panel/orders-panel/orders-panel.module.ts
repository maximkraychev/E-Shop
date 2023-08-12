import { NgModule } from '@angular/core';
import { OrdersPanelRoutingModule } from './order-panel.routing-module';
import { OrdersPanelComponent } from './orders-panel.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    OrdersPanelComponent
  ],
  imports: [
    SharedModule,
    OrdersPanelRoutingModule
  ]
})
export class OrdersPanelModule { }