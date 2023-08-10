import { Injectable, OnInit } from '@angular/core';
import { PAGE_SIZE } from 'src/app/config/catalog-page-size';
import { COLLECTIONS } from 'src/app/config/firebase-collections';
import { IBook } from 'src/app/core/interfaces/book.interface';
import { GetBookDataFilteredService } from 'src/app/core/services/get-book-data-filtered.service';

@Injectable()
export class ExploreService {

  constructor(private getBooksDataService: GetBookDataFilteredService) { }

  getRandomBooks() {
    return this.getBooksDataService.getBooksData(COLLECTIONS.BOOKS, PAGE_SIZE.EXPLORE_BOOKS);
  }
}
