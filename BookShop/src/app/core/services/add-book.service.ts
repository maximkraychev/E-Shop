import { Injectable } from '@angular/core';
import { FirebaseCRUTService } from './firebase-crut.service';
import { IBook } from '../interfaces/book.interface';
import { COLLECTIONS } from 'src/app/config/firebase-collections';

@Injectable({
  providedIn: 'root'
})
export class AddBookService {

  constructor(private fireService: FirebaseCRUTService<IBook>) { }

  // custom method for adding books so catalog page can be tested;
  addBook(document: IBook) {
    return this.fireService.add(document, COLLECTIONS.BOOKS);
  }

}
