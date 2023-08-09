import { Injectable } from '@angular/core';
import { COLLECTIONS } from 'src/app/config/firebase-collections';
import { IBook } from 'src/app/core/interfaces/book.interface';
import { IFilterData } from 'src/app/core/interfaces/catalog-filter-interface';
import { ISortData } from 'src/app/core/interfaces/catalog-sort.interface';
import { GetDataPaginationService } from 'src/app/core/services/get-data-pagination.service';

@Injectable()
export class CatalogService {

  private PAGE_SIZE: number = 4;

  constructor(private paginationService: GetDataPaginationService<IBook>) { }

  getCatalogPage(firstShownDocument: string | number | null, lastShownDocument: string | number | null, sort: ISortData, filter: IFilterData) {
    return this.paginationService
      .getPaginatedData(COLLECTIONS.BOOKS, this.PAGE_SIZE, firstShownDocument, lastShownDocument, sort, filter);
  }

  getBooksCollectionSize() {
    return this.paginationService.getCollectionSize(COLLECTIONS.BOOKS)
  }
}
