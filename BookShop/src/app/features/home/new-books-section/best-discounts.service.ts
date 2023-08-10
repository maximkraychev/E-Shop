import { Injectable } from '@angular/core';
import { PAGE_SIZE } from 'src/app/config/catalog-page-size';
import { COLLECTIONS } from 'src/app/config/firebase-collections';
import { IBook } from 'src/app/core/interfaces/book.interface';
import { ISortData } from 'src/app/core/interfaces/catalog-sort.interface';
import { GetDataPaginationService } from 'src/app/core/services/get-data-pagination.service';

@Injectable()
export class BestDiscountsService {

  private sortData: ISortData = { sortByParam: 'discount', sortOrder: 'desc'}

  constructor(private filterService: GetDataPaginationService<IBook>) { }

  getBestDiscounts() {
    return this.filterService.getPaginatedData(COLLECTIONS.BOOKS, PAGE_SIZE.HOME_BEST_DISCOUNTS, null, null, this.sortData);
  }
}
