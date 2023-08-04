import { Injectable } from '@angular/core';
import { COLLECTIONS } from 'src/app/config/firebase-collections';
import { IUser } from 'src/app/core/interfaces/user.interface';
import { FirebaseCRUTService } from 'src/app/core/services/firebase-crut.service';

@Injectable()
export class FirebaseUsersService {

  constructor(private fireService: FirebaseCRUTService) { }

  addUserWithId(document: IUser, id: string): Promise<void> {
    return this.fireService.addDataWithId(document, COLLECTIONS.USERS, id);
  }
}
