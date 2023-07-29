import { Component, OnInit } from '@angular/core';
import { Database, ref } from '@angular/fire/database';
// import { onValue } from '@firebase/database';
// import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private db: Database) {
  }

  // ngOnInit(): void {
  //   const dbRef = ref(this.db, 'test');
  //   console.log(dbRef);
  //   onValue(dbRef, (snapshot) => {
  //     console.log(snapshot.val());
  //   })
  // }

  // ngOnInit(): void {
  //   const dbColection = AngularFirestore
  //   console.log(dbColection);
    
  // }
  ngOnInit(): void {
    
  }
}
