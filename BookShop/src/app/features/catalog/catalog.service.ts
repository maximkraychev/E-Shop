import { Injectable } from '@angular/core';
import { PAGE_SIZE } from 'src/app/config/page-size';
import { COLLECTIONS } from 'src/app/config/firebase-collections';
import { IFilterData } from 'src/app/core/interfaces/catalog-filter-interface';
import { ISortData } from 'src/app/core/interfaces/catalog-sort.interface';
import { GetBookDataFilteredService } from 'src/app/core/services/get-book-data-filtered.service';

@Injectable()
export class CatalogService {

  constructor(private paginationService: GetBookDataFilteredService) { }

  getCatalogPage(firstShownDocument: string | number | null, lastShownDocument: string | number | null, sort: ISortData, filter: IFilterData) {
    return this.paginationService
      .getPaginatedData(COLLECTIONS.BOOKS, PAGE_SIZE.CATALOG, firstShownDocument, lastShownDocument, sort, filter);
  }

  getBooksCollectionSize() {
    return this.paginationService.getCollectionSize(COLLECTIONS.BOOKS)
  }
}
