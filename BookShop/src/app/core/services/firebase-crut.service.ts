import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/compat/firestore'
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/user.interface';

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
  
  addDataWithId(document: IUser, collectionName:string, id: string): Promise<void> {
    return this.afs.collection(collectionName).doc(id).set(document);
  }

   // Read operation - get a single document by its ID
   getById(documentId: string, collectionName: string): Observable<IUser | IBook | undefined> {
    return this.afs.collection(collectionName).doc<IUser | IBook>(documentId).valueChanges();
  }


  //TODO make all methods below abstract

  add<T>(document: T, collectionName: string): Promise<DocumentReference<T>> {
    return this.afs.collection<T>(collectionName).add(document);
  }

  // Read operation - get all documents in a collection
  getAll(): Observable<any[]> {
    return this.afs.collection('books').valueChanges();
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
