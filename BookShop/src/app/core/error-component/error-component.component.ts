import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { ErrorPopupService } from '../services/error-popup.service';
import { Subscription } from 'rxjs';


// Currently is working only with one erorr msg;
// TODO make it works with an array of errors msg;

@Component({
  selector: 'app-error-component',
  templateUrl: './error-component.component.html',
  styleUrls: ['./error-component.component.css']
})
export class ErrorComponentComponent implements OnDestroy{
 
  @ViewChild('activateButton') activateModal!: ElementRef<HTMLDivElement>;
  errorText: string = '';
  private errorSubscription!: Subscription;

  constructor(private errorService: ErrorPopupService) {}

  // After the view is initialized and we have access to @ViewChild elements;
  // Subscribe to the error service so other component can emmit errors to this component;
  ngAfterViewInit() {
    this.errorSubscription = this.errorService.errorMsg$.subscribe({
      next: (errorMsg) => {
        this.errorText = errorMsg;
        this.activate();
      }, 
      error: (err) => {
        this.errorText = err.message;
        this.activate();
      }
    })
  }

  // It click on the button and showing up the popup modal;
  // TODO find a better way to implement it; 
  activate() {
    this.activateModal.nativeElement.click();
  }

  ngOnDestroy(): void {
    this.errorSubscription.unsubscribe();
  }
}
