import { Component, OnDestroy } from '@angular/core';
import { BestDiscountsService } from './best-discounts.service';
import { ErrorPopupService } from 'src/app/core/services/error-popup.service';
import { Subscription } from 'rxjs';
import { IBookAndId } from 'src/app/core/interfaces/book-with-id.interface';

@Component({
  selector: 'app-best-discounts-section',
  templateUrl: './best-discounts.component.html',
  styleUrls: ['./best-discounts.component.css'],
  providers: [BestDiscountsService]
})
export class BestDiscountsComponent implements OnDestroy {

  booksData: IBookAndId[] = [];

  private dataSub!: Subscription;

 constructor(private bestDiscountService: BestDiscountsService, private errorService: ErrorPopupService) {
  this.dataSub = this.bestDiscountService.getBestDiscounts().subscribe({
    next: (data) => {
      this.booksData = data;
    },
    error: (err) => {
      console.error(err);
      this.errorService.pushErrorMsg(err.message);
    }
  })
 }

 ngOnDestroy(): void {
   this.dataSub.unsubscribe();
 }
}
