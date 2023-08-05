import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorPopupService {

  private errorMsgSubject: Subject<string> = new Subject;
  errorMsg$: Observable<string> = this.errorMsgSubject.asObservable();

  pushErrorMsg(error: string) {
    this.errorMsgSubject.next(error);
  }
}
