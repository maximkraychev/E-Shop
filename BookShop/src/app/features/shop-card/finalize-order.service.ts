import { Injectable } from '@angular/core';
import { IOrederBook } from './order-book.interface';
import { UserStateService } from 'src/app/core/services/user-state.service';
import { take } from 'rxjs';
import { FirebaseCRUTService } from 'src/app/core/services/firebase-crut.service';
import { IOreder } from '../../core/interfaces/order.interface';
import { IUser } from 'src/app/core/interfaces/user.interface';
import { ErrorPopupService } from 'src/app/core/services/error-popup.service';
import { Router } from '@angular/router';
import { COLLECTIONS } from 'src/app/config/firebase-collections';

@Injectable()
export class FinalizeOrderService {

  constructor(
    private userStateService: UserStateService,
    private firebaseCRUTService: FirebaseCRUTService<IOreder>,
    private errorService: ErrorPopupService,
    private router: Router
  ) { }



  finalizeOrder(books: IOrederBook[], totalPrice: number): Promise<void> {

    //  Here we return promise so we can handle it in shooping card component;
    //  If is successful clear the shopping cart data, if is rejected show the error but don't delete the data;

    return new Promise<void>((resolve, reject) => {  
      this.userStateService.userData$.pipe(take(1)).subscribe({
        next: (userData) => {
          if (userData) {
            //  If we have user data execute saveOrder, it will retuern a promise
            //  and if that promise is succesful then pass succesful into the promise chain above
            //  if is unsuccessful then call reject with the error so it can be handle in shop-card component;
            this.saveOreder(userData, books, totalPrice)
              .then(() => resolve())
              .catch((err) => reject(err));
          } else {
            this.errorService.pushErrorMsg('We couldn\'t locate your user information. To place an order, please ensure you\'re signed in as a registered user.');
            reject();
            this.router.navigate(['/user/login']);
          }
        },
        error: (err) => {
          console.error(err);
          this.errorService.pushErrorMsg(err.message);
          reject();
        }
      })

    })

  }


  // This method will transform the data to IOrder and make request for saving the it;
  private saveOreder(userData: IUser, currentBooks: IOrederBook[], totalPrice: number) {

    const order: IOreder = {
      books: currentBooks,
      orderPrice: totalPrice,
      userId: userData.authId,
      userPhoneNumber: userData.phoneNumber,
      userCity: userData.city,
      userDeliveryAddres: userData.deliveryAddres,
      userName: userData.name,
      userSurname: userData.surname,
      userEmail: userData.email,
      userPostcode: userData.postcode
    }


    return this.firebaseCRUTService.add(order, COLLECTIONS.ORDERS);
  }

}
