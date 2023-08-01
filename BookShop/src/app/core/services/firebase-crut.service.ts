import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/compat/firestore'
import { Observable } from 'rxjs';

interface IBook {
  title: string,
  author: string
}

@Injectable({
  providedIn: 'root'
})
export class FirebaseCRUTService {

  // valueChanges -- will return a observable with the value;
  // snapshotChanges -- will return a observable with meta data ( ID ) ;

  constructor(private afs: AngularFirestore) { }

  //TODO check and change the types for all requests;

  addBook(book: IBook): Promise<DocumentReference<IBook>> {
    return this.afs.collection<IBook>('books').add(book);
  }

  // Read operation - get all documents in a collection
  getAllBooks(): Observable<any[]> {
    return this.afs.collection('books').valueChanges();
  }

  // Read operation - get a single document by its ID
  getById(itemId: string): Observable<any> {
    return this.afs.collection('books').doc(itemId).valueChanges();
  }

  // Update operation - update a document in a collection
  update(itemId: string, data: any): Promise<void> {
    return this.afs.collection('books').doc(itemId).update(data);
  }

  // PUT-like update operation - update the entire document with new data and return a Promise<void>
  putUpdateBook(itemId: string, data: IBook): Promise<void> {
    return this.afs.collection<IBook>('books').doc(itemId).set(data, { merge: true });
  }

  // Delete operation - delete a document from a collection
  delete(itemId: string): Promise<void> {
    return this.afs.collection('books').doc(itemId).delete();
  }
}
