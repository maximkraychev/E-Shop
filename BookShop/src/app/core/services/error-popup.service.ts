import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorPopupService {

  private errorMsgSubject: Subject<string> = new Subject;
  errorMsg$: Observable<string> = this.errorMsgSubject.asObservable();

  // With this method we can push err msg from other components to error component;
  pushErrorMsg(error: string) {
    if(typeof error == 'string') {
      this.errorMsgSubject.next(error);
    } else {
      this.errorMsgSubject.next('The recived error is not of type string');
    }
  }
}
