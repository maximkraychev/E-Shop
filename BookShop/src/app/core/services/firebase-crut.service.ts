import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/compat/firestore'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseCRUTService<T> {

  // valueChanges -- will return a observable with the value;
  // snapshotChanges -- will return a observable with meta data ( ID ) ;

  constructor(private afs: AngularFirestore) { }

  //TODO check and change the types for all requests;

  addDataWithId(document: T, collectionName: string, id: string): Promise<void> {
    return this.afs.collection(collectionName).doc(id).set(document);
  }

  add<T>(document: T, collectionName: string): Promise<DocumentReference<T>> {
    return this.afs.collection<T>(collectionName).add(document);
  }

  // Read operation - get a single document by its ID
  getById(documentId: string, collectionName: string): Observable<T | undefined> {
    return this.afs.collection(collectionName).doc<T>(documentId).valueChanges();
  }

  // PUT-like update operation - update the entire document with new data and return a Promise<void>
  putUpdate(documentId: string, document: T, colectionName: string): Promise<void> {
    return this.afs.collection(colectionName).doc(documentId).set(document, { merge: true });
  }


  // Update operation - update a document in a collection
  updateData(documentId: string, documentFields: Partial<T>, colectionName: string): Promise<void> {
    return this.afs.collection(colectionName).doc(documentId).update(documentFields);
  }


   // Read operation - get all documents in a collection
   getAll(collectionName: string): Observable<T[]> {
    return this.afs.collection<T>(collectionName).valueChanges();
  }

    // Delete operation - delete a document from a collection
    delete(itemId: string, collectionName: string): Promise<void> {
      return this.afs.collection(collectionName).doc(itemId).delete();
    }

}
