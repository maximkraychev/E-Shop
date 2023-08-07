import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, map } from 'rxjs';
import { IBook } from '../interfaces/book.interface';

@Injectable({
  providedIn: 'root'
})
export class GetDataPaginationService {

  constructor(private afs: AngularFirestore) { }

  getPaginatedData(collectionName: string, pageSize: number, order: string, currentPage: number): Observable<{ id: string, book: IBook }[]> {

    let query = this.afs.collection(collectionName, ref => {
      let query = ref.orderBy(order);


      if (currentPage > 1) {
        query = query.startAt(currentPage * pageSize);
      }

      return query.limit(pageSize);
    });

    return query.snapshotChanges().pipe(
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
