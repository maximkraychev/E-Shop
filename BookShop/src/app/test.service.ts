import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'

@Injectable({
  providedIn: 'root'
})
export class TestService {

  data: {name: string, id?: any} = {name: 'Emil'}

  constructor(private afs: AngularFirestore) { }

  add() {
    this.data.id = this.afs.createId();
    return this.afs.collection('test').add(this.data);
  }

  getAll() {
    return this.afs.collection('test').snapshotChanges();
  }
}
