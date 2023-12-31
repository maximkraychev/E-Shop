import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, CollectionReference } from '@angular/fire/compat/firestore';
import { Observable, map } from 'rxjs';
import { ISortData } from '../interfaces/catalog-sort.interface';
import { IFilterData } from '../interfaces/catalog-filter-interface';
import { IBookAndId } from '../interfaces/book-with-id.interface';

@Injectable({
  providedIn: 'root'
})
export class GetBookDataFilteredService {

  constructor(private afs: AngularFirestore) { }

  getPaginatedData(
    collectionName: string,
    pageSize: number,
    startAfter: string | number | null,
    startBefore: string | number | null,
    sort: ISortData,
    filter?: IFilterData)
    : Observable<IBookAndId[]> {

    let ref = this.afs.collection<CollectionReference>(collectionName, ref => {
      
      // if(filter.minPrice != undefined || filter.maxPrice != undefined) {

      //   query = ref.orderBy('price')

      //   if(filter.minPrice != undefined) {
      //     query.where('price', '>=', filter.minPrice);
      //   }
  
      //   if(filter.maxPrice != undefined) {
      //     query.where('price', '<=', filter.maxPrice);
      //   }

      // } else {
      // }
      
      let query = ref.orderBy(sort.sortByParam, (sort.sortOrder) as 'asc' | 'desc');
    
      
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
    
     return this.transformData(ref);
  }


  getBooksData(collectionName: string, limitNumber: number) {
   const collectionRef = this.afs.collection<CollectionReference>(collectionName, ref => ref.limit(limitNumber));
   return this.transformData(collectionRef);
  }



  private transformData(ref: AngularFirestoreCollection): Observable<IBookAndId[]> {
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


  getCollectionSize(collectionName:string) {
    return this.afs.collection(collectionName).get().pipe(map(snapshot => snapshot.size));
  }
}
