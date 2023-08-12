import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { BTN_TITLES } from 'src/app/config/btn-title';
import { UploadImageService } from './services/upload-image.service';
import { InputsHandleService } from './services/inputs-handle.service';
import { ErrorPopupService } from 'src/app/core/services/error-popup.service';
import { UploadBookService } from './services/upload-book.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css'],
  providers: [
    UploadImageService,
    InputsHandleService,
    UploadBookService
  ]
})
export class CreateBookComponent {

  @ViewChild('createBookForm') createForm!: NgForm;

  btnTitile: string = BTN_TITLES.CREATE_BOOK;
  btnLoad: boolean = false;

  selectedImage: File | null = null;
  imageUrl: string | undefined;


  constructor(
    private uploadImageService: UploadImageService,
    private inputHandlerService: InputsHandleService,
    private uploadBookService: UploadBookService,
    private errorHandler: ErrorPopupService,
    private router: Router
  ) { }

  async createBookHandler() {
    try {
      this.btnLoad = true;
      // Create shallow copy;
      const inputData = { ...this.createForm.value };

      if (!this.selectedImage) {
        this.errorHandler.pushErrorMsg('Please select an image.');
        return;
      }

      //  This will chek if there is additional properties or if some is missing; 
      if (this.inputHandlerService.checkInputData(inputData) == false) {
        return;
      }

      // Upload the image to firebase store and then replace image with img url;
      this.imageUrl = await this.uploadImageService.upload(this.selectedImage);
      inputData.image = this.imageUrl;

      // Upload book to firestore;
      await this.uploadBookService.uploadBook(inputData);

      //  TODO make alert better and redirect to the book details page;
      alert('Successful');
      this.router.navigate(['/home']);

    } catch (err) {
      const error: Error = err as Error;
      console.error(err);
      this.errorHandler.pushErrorMsg(error.message);
      this.btnLoad = false;
    }
  }

  // This function will be trigger when user upload image;
  // It will select the image and store it in selectedImage;
  handleFileInput(event: any): void {
    this.selectedImage = event.target.files[0];
  }
}
