import { Component } from '@angular/core';
//import { collection, Firestore, collectionData, doc, docData, addDoc, updateDoc, deleteDoc, setDoc } from '@angular/fire/firestore';
//import { AngularFirestore } from '@angular/fire/compat/firestore';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

  // item$: Observable<any>;

  

  // constructor(private firestore: AngularFirestore) {
  //   this.firestore.collection('test').add({name: 'Sara'})
  //     .then((docRef) => {
  //       console.log('Document created with ID:', docRef.id);
  //     })
  //     .catch((error) => {
  //       console.error('Error creating document:', error);
  //     });
  // }

   
  }













// import { Component, inject } from '@angular/core';
//import { collection, getFirestore, getDocs, Firestore, collectionData, doc, docData, addDoc, updateDoc, deleteDoc, setDoc } from '@angular/fire/firestore';
// import { collection, Firestore, collectionData, doc, docData, addDoc, updateDoc, deleteDoc, setDoc } from '@angular/fire/firestore';
// import { Observable } from 'rxjs';

// @Component({
//   selector: 'app-test',
//   templateUrl: './test.component.html',
//   styleUrls: ['./test.component.css']
// })
// export class TestComponent {

//   item$: Observable<any>;
  // firestore: Firestore = inject(Firestore);

  // constructor(private firestore: Firestore) {

    // -------------------------------GET the entire colection----------------------
    // const collectionRef = collection(this.firestore, 'test');
    // this.item$ = collectionData(collectionRef);
    // this.item$.subscribe({
    //   next: (data) => {console.log(data)}
    // })
    
    // ------------------------------GET a single document-----------------------------------------------
    // const documentRef = doc(this.firestore, 'test', '3qZ61lBEnOMsk0l65EZe');
    // this.item$ = docData(documentRef);
    // this.item$.subscribe({
    //   next: (data) => { console.log(data) }
    // })

    // ---------------------------- POST request using observables(the other CRUT operation should work the same)--------------------------------------------
    // const dataToBeAdded = { name: 'Ivan' };
    // const colectionRef = collection(this.firestore, 'test');
    // const newItem$: Observable<any> = new Observable((observer) => {
    //   addDoc(colectionRef, dataToBeAdded)
    //     .then((newDocRef) => {
    //       observer.next(newDocRef.id);
    //       observer.complete();
    //     })
    //     .catch((error) => {
    //       observer.error(error);
    //     })
    // })

    // newItem$.subscribe({
    //   next: (newDocumentId) => {
    //     console.log('Document added with ID:', newDocumentId);
    //   },
    //   error: (error) => {
    //     console.error('Error adding document:', error);
    //   },
    // });



    //---------------------------- UPDATE the document with the new data--------------------
    // const dataToUpdate = { name: 'Pehso' };
    // const docRef = doc(this.firestore, 'test', '3qZ61lBEnOMsk0l65EZe');
    // const updateItem$: Observable<void> = new Observable((observer) => {
    //   updateDoc(docRef, dataToUpdate)
    //     .then(() => {
    //       observer.next();
    //       observer.complete();
    //     })
    //     .catch((error) => {
    //       observer.error(error);
    //     });
    // });

    // updateItem$.subscribe({
    //   next: () => {
    //     console.log('Document updated successfully');
    //   },
    //   error: (error) => {
    //     console.error('Error updating document:', error);
    //   },
    // });



    // ------------------------------ PUT request so it will completely replace the entire document --------------------------
    // const dataToUpdate = { name: 'Pehso' };
    // const docRef = doc(this.firestore, 'test', '3qZ61lBEnOMsk0l65EZe');
    // const updateItem$: Observable<void> = new Observable((observer) => {
    //   setDoc(docRef, dataToUpdate)
    //     .then(() => {
    //       observer.next();
    //       observer.complete();
    //     })
    //     .catch((error) => {
    //       observer.error(error);
    //     });
    // });

    // updateItem$.subscribe({
    //   next: () => {
    //     console.log('Document updated successfully');
    //   },
    //   error: (error) => {
    //     console.error('Error updating document:', error);
    //   },
    // });



    // -----------------------------Delete the document with the specified ID-----------------------
    // const docRef = doc(this.firestore, 'test', 'kxtK5hDVakTGoP9vchSo');
    // const deleteItem$: Observable<void> = new Observable((observer) => {
    //   deleteDoc(docRef)
    //     .then(() => {
    //       observer.next();
    //       observer.complete();
    //     })
    //     .catch((error) => {
    //       observer.error(error);
    //     });
    // });

    // deleteItem$.subscribe({
    //   next: () => {
    //     console.log('Document deleted successfully');
    //   },
    //   error: (error) => {
    //     console.error('Error deleting document:', error);
    //   },
    // });
//   }
// }

