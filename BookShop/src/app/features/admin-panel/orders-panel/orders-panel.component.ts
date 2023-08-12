import { Component, OnDestroy, OnInit } from '@angular/core';
import { OrdersService } from './orders.service';
import { IOrderWithId } from 'src/app/core/interfaces/order.interface';
import { ErrorPopupService } from 'src/app/core/services/error-popup.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-orders-panel',
  templateUrl: './orders-panel.component.html',
  styleUrls: ['./orders-panel.component.css'],
  providers: [
    OrdersService
  ]
})
export class OrdersPanelComponent implements OnInit, OnDestroy {

  orders: IOrderWithId[] = [];
  btnsLoadStatus: boolean = false;

  private ordersSub!: Subscription;

  constructor(
    private ordersService: OrdersService, 
    private errorService: ErrorPopupService
    ){}


  //  On init load all orders;
  ngOnInit(): void {
    this.ordersSub = this.ordersService.getOrders().subscribe({
      next: (ordersData) => {
        this.orders = ordersData;
      },
      error: (err) => {
        console.error(err);
        this.errorService.pushErrorMsg(err.message);
      }
    })
  }

  //  On click delete that order;
  onClickDone(orderId: string) {
    this.btnsLoadStatus = true;
    this.ordersService.deleteOrder(orderId)
      .then(() => {this.btnsLoadStatus = false})
      .catch((err) => {
        console.error(err);
        this.errorService.pushErrorMsg(err.message);
        this.btnsLoadStatus = true;
      })
  }

  ngOnDestroy(): void {
    this.ordersSub.unsubscribe();
  }

}
