import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
import { COLLECTIONS } from 'src/app/config/firebase-collections';
import { IOreder } from 'src/app/core/interfaces/order.interface';
import { FirebaseCRUTService } from 'src/app/core/services/firebase-crut.service';


@Injectable()
export class OrdersService {

  constructor(private afs: AngularFirestore, private firebaseCRUTService: FirebaseCRUTService<null>,) { }

  getOrders() {
    // TODO don't use AngularFirestore direcly here use an abstraction in firebaseCRUTService;

    const collectionRef: AngularFirestoreCollection = this.afs.collection(COLLECTIONS.ORDERS);

    return collectionRef.snapshotChanges().pipe(
      map(actions =>
        actions.map(action => {
          const data = action.payload.doc.data() as IOreder;
          const orderId = action.payload.doc.id;
          return { orderId, ...data };
        })
      )
    );
  }


  async deleteOrder(orderId: string) {
    return this.firebaseCRUTService.delete(orderId, COLLECTIONS.ORDERS);
  }
}
