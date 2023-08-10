import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './shop-cart-routing.module';
import { CardComponent } from './shop-cart.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    SharedModule,
    UserRoutingModule
  ]
})
export class ShopCardModule { }
