import { Injectable } from '@angular/core';
import { COLLECTIONS } from 'src/app/config/firebase-collections';
import { IBook } from 'src/app/core/interfaces/book.interface';
import { GetDataPaginationService } from 'src/app/core/services/get-data-pagination.service';

@Injectable()
export class CatalogService {

  private PAGE_SIZE: number = 4;

  constructor(private paginationService: GetDataPaginationService<IBook>) { }

  getCatalogPage(firstShownDocument: string | null, lastShownDocument: string | null, query: any) {
    return this.paginationService.getPaginatedData(COLLECTIONS.BOOKS, this.PAGE_SIZE, firstShownDocument, lastShownDocument, query);
  }
}
