import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { COLLECTIONS } from 'src/app/config/firebase-collections';
import { IUserFormProfile } from 'src/app/core/interfaces/user-data-fromProfile.interface';
import { IUser } from 'src/app/core/interfaces/user.interface';
import { FirebaseCRUTService } from 'src/app/core/services/firebase-crut.service';

@Injectable()
export class FirebaseUsersService {

  constructor(private fireService: FirebaseCRUTService<IUser>) { }

  // All of the methods here are for user data in fireStore;

  addUserWithId(document: IUser, id: string): Promise<void> {
    return this.fireService.addDataWithId(document, COLLECTIONS.USERS, id);
  }

  getUserDataById(documentId: string): Observable<IUser | undefined> {
    return (this.fireService.getById(documentId, COLLECTIONS.USERS)) as Observable<IUser | undefined>; 
  }

  updateUserData(documentId: string, userData: IUserFormProfile): Promise<void> {
    return this.fireService.updateData(documentId, userData, COLLECTIONS.USERS);
  }
}
