import { Injectable } from '@angular/core';
import { IBookUpload } from 'src/app/core/interfaces/book.interface';
import { ErrorPopupService } from 'src/app/core/services/error-popup.service';

@Injectable()
export class InputsHandleService {

  constructor(private errorService: ErrorPopupService) { }

  checkInputData(inputData: IBookUpload): boolean {

    const validKeys = ['title', 'author', 'year', 'language', 'length', 'price', 'discount', 'description', 'image'];

    const inputKeys = Object.keys(inputData);

    // Check for missing properties
    const missingProperties = validKeys.filter(key => !inputKeys.includes(key));

    // Check for additional properties
    const additionalProperties = inputKeys.filter(key => !validKeys.includes(key));

    if (missingProperties.length > 0) {
      this.errorService.pushErrorMsg(`Missing properties: ${missingProperties.join(' ')}`);
      return false;
    }

    if (additionalProperties.length > 0) {
      this.errorService.pushErrorMsg(`Additional properties:: ${additionalProperties.join(' ')}`);
      return false;
    }

    return true;
  }
}
