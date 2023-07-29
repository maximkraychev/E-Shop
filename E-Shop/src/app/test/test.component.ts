import { Component, inject } from '@angular/core';
import { collection, getFirestore, getDocs, Firestore, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

// import { onValue } from '@firebase/database';
// import { AngularFirestore } from '@angular/fire/compat/firestore';
//import { getFirestore } from 'firebase/firestore'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

  item$: Observable<any>; 
  firestore: Firestore = inject(Firestore);

  constructor() {
    const collectionRef = collection(this.firestore, 'test');
    this.item$ = collectionData(collectionRef);
    this.item$.subscribe({
      next: (data) => {console.log(data)}
    })
  }

  // ngOnInit(): void {
  //   const db = getFirestore();
  //   const colRef = collection(db, 'test');
  //   getDocs(colRef)
  //     .then((snapshot) => {
  //       console.log(snapshot.docs);
  //     })
  // }
}

