import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './shop-cart-routing.module';
import { CardComponent } from './shop-cart.component';



@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class ShopCardModule { }
