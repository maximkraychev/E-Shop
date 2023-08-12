import { Injectable } from '@angular/core';
import { COLLECTIONS } from 'src/app/config/firebase-collections';
import { IBook } from 'src/app/core/interfaces/book.interface';
import { FirebaseCRUTService } from 'src/app/core/services/firebase-crut.service';

@Injectable()
export class UploadBookService {

  constructor(private firebaseCRUTService: FirebaseCRUTService<IBook>) { }

  async uploadBook(bookData: IBook) {
    return this.firebaseCRUTService.add(bookData, COLLECTIONS.BOOKS);
  }
}
