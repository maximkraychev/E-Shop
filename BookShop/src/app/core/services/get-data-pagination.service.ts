import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, map } from 'rxjs';
import { IBook } from '../interfaces/book.interface';

@Injectable({
  providedIn: 'root'
})
export class GetDataPaginationService<T> {

  constructor(private afs: AngularFirestore) { }

  getPaginatedData(
    collectionName: string,
    pageSize: number,
    startAfter: string | null,
    startBefore: string | null,
    order: string)
    : Observable<{ id: string, book: T }[]> {

    let ref = this.afs.collection(collectionName, ref => {
      let query = ref.orderBy(order);

      if (startAfter) {
        query = query.startAfter(startAfter);
      }

      if (startBefore) {
        query = query.endBefore(startBefore);
      }

      // First page, start from the beginning and forward
      if ((!startAfter && !startBefore) || startAfter) {
        query = query.limit(pageSize);
      } else {
        // Backward pagination
        query = query.limitToLast(pageSize);
      }

      return query
    });

    return ref.snapshotChanges().pipe(
      map(actions => {
        return actions.map((action): any => {
          const data = action.payload.doc.data();
          const id: string = action.payload.doc.id;
          return { id: id, book: data };
        });
      })
    );
  }
}
