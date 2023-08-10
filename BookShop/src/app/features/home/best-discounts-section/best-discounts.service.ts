import { Injectable } from '@angular/core';
import { PAGE_SIZE } from 'src/app/config/catalog-page-size';
import { COLLECTIONS } from 'src/app/config/firebase-collections';
import { ISortData } from 'src/app/core/interfaces/catalog-sort.interface';
import { GetBookDataFilteredService } from 'src/app/core/services/get-book-data-filtered.service';

@Injectable()
export class BestDiscountsService {

  private sortData: ISortData = { sortByParam: 'discount', sortOrder: 'desc'}

  constructor(private filterService: GetBookDataFilteredService) { }

  getBestDiscounts() {
    return this.filterService.getPaginatedData(COLLECTIONS.BOOKS, PAGE_SIZE.HOME_BEST_DISCOUNTS, null, null, this.sortData);
  }
}
