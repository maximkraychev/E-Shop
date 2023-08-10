import { Injectable } from '@angular/core';
import { PAGE_SIZE } from 'src/app/config/catalog-page-size';
import { COLLECTIONS } from 'src/app/config/firebase-collections';
import { IBook } from 'src/app/core/interfaces/book.interface';
import { IFilterData } from 'src/app/core/interfaces/catalog-filter-interface';
import { ISortData } from 'src/app/core/interfaces/catalog-sort.interface';
import { GetDataPaginationService } from 'src/app/core/services/get-data-pagination.service';

@Injectable()
export class CatalogService {

  constructor(private paginationService: GetDataPaginationService<IBook>) { }

  getCatalogPage(firstShownDocument: string | number | null, lastShownDocument: string | number | null, sort: ISortData, filter: IFilterData) {
    return this.paginationService
      .getPaginatedData(COLLECTIONS.BOOKS, PAGE_SIZE.CATALOG, firstShownDocument, lastShownDocument, sort, filter);
  }

  getBooksCollectionSize() {
    return this.paginationService.getCollectionSize(COLLECTIONS.BOOKS)
  }
}
