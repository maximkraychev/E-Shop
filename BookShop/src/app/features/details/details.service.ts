import { Injectable } from '@angular/core';
import { COLLECTIONS } from 'src/app/config/firebase-collections';
import { IBook } from 'src/app/core/interfaces/book.interface';
import { FirebaseCRUTService } from 'src/app/core/services/firebase-crut.service';

@Injectable()
export class DetailsService {

  constructor(private firebaseService: FirebaseCRUTService<IBook>) { }


  getBook(bookId: string) {
    return this.firebaseService.getById(bookId, COLLECTIONS.BOOKS);
  }
}
